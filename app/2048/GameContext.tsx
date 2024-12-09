import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { isNil, throttle } from "../utils";
import { gameWinTileValue, mergeAnimationDuration } from "./constants";
import { TileType } from "./Tile";
import { gameReducer, initialState } from "./GameReducer";

export type MoveDirection =
  | "move_up"
  | "move_down"
  | "move_left"
  | "move_right";

export const GameContext = createContext({
  score: 0,
  status: "ongoing",
  moveTiles: (_: MoveDirection) => {},
  getTiles: () => [] as TileType[],
  startGame: () => {},
});

export function GameProvider({ children }: PropsWithChildren) {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  const getEmptyCells = useCallback(() => {
    const results: [number, number][] = [];
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        if (isNil(gameState.board[y][x])) {
          results.push([x, y]);
        }
      }
    }
    return results;
  }, [gameState.board]);

  const randomCellValue = useCallback(() => {
    return Math.random() < 0.9 ? 2 : 4;
  }, []);

  const addRandomTile = useCallback(() => {
    const emptyCells = getEmptyCells();
    if (emptyCells.length > 0) {
      const cellIndex = Math.floor(Math.random() * emptyCells.length);
      const newTile = {
        position: emptyCells[cellIndex],
        value: randomCellValue(),
      };
      dispatch({ type: "create_tile", tile: newTile });
    }
  }, [randomCellValue, getEmptyCells, dispatch]);

  function getTiles() {
    return gameState.tilesByIds.map((tileId) => gameState.tiles[tileId]);
  }

  const throttled = useRef(
    throttle(
      (type: MoveDirection) => dispatch({ type }),
      mergeAnimationDuration * 1.05
    )
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const moveTiles = useCallback(throttled.current, []);

  function startGame() {
    dispatch({ type: "reset_game" });
    dispatch({
      type: "create_tile",
      tile: { position: [0, 1], value: randomCellValue() },
    });
    dispatch({
      type: "create_tile",
      tile: { position: [0, 2], value: randomCellValue() },
    });
  }

  const checkGameState = useCallback(() => {
    const isWon = Object.values(gameState.tiles).some(
      (t) => t.value === gameWinTileValue
    );

    if (isWon) {
      dispatch({ type: "update_status", status: "won" });
      return;
    }

    // linter does not like dereferencing gameState
    const tiles = gameState.tiles;
    const board = gameState.board;

    for (let x = 0; x < 4; x += 1) {
      for (let y = 0; y < 4; y += 1) {
        if (isNil(gameState.board[x][y])) {
          return;
        }

        // do not check below the last row
        if (x < 3) {
          if (isNil(gameState.board[x + 1][y])) {
            return;
          }
          if (tiles[board[x][y]].value === tiles[board[x + 1][y]].value) {
            return;
          }
        }

        // do not check right of the last column
        if (y < 3) {
          if (isNil(gameState.board[x][y + 1])) {
            return;
          }
          if (tiles[board[x][y]].value === tiles[board[x][y + 1]].value) {
            return;
          }
        }
      }
    }

    dispatch({ type: "update_status", status: "lost" });
  }, [gameState.tiles, gameState.board, dispatch]);

  useEffect(() => {
    if (gameState.hasChanged) {
      setTimeout(() => {
        dispatch({ type: "clean_up" });
        addRandomTile();
      }, mergeAnimationDuration);
    } else {
      checkGameState();
    }
  }, [gameState.hasChanged, dispatch, checkGameState, addRandomTile]);

  return (
    (<GameContext
      value={{
        score: gameState.score,
        status: gameState.status,
        getTiles,
        moveTiles,
        startGame,
      }}
    >
      {children}
    </GameContext>)
  );
}
