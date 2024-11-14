import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { isNil, throttle } from "../utils";
import {
  gameWinTileValue,
  mergeAnimationDuration,
  tileCountPerDimension,
} from "./constants";
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

  function getEmptyCells() {
    const results: [number, number][] = [];

    for (let x = 0; x < tileCountPerDimension; x++) {
      for (let y = 0; y < tileCountPerDimension; y++) {
        if (isNil(gameState.board[y][x])) {
          results.push([x, y]);
        }
      }
    }
    return results;
  }

  function addRandomTile() {
    const emptyCells = getEmptyCells();
    if (emptyCells.length > 0) {
      const cellIndex = Math.floor(Math.random() * emptyCells.length);
      const value = Math.random() < 0.9 ? 2 : 4;
      const newTile = {
        position: emptyCells[cellIndex],
        value,
      };
      dispatch({ type: "create_tile", tile: newTile });
    }
  }

  function getTiles() {
    return gameState.tilesByIds.map((tileId) => gameState.tiles[tileId]);
  }

  const moveTiles = useCallback(
    throttle(
      (type: MoveDirection) => dispatch({ type }),
      mergeAnimationDuration * 1.05
    ),
    [dispatch]
  );

  function startGame() {
    dispatch({ type: "reset_game" });
    dispatch({ type: "create_tile", tile: { position: [0, 1], value: 2 } });
    dispatch({ type: "create_tile", tile: { position: [0, 2], value: 2 } });
  }

  function checkGameState() {
    const isWon =
      Object.values(gameState.tiles).filter((t) => t.value === gameWinTileValue)
        .length > 0;

    if (isWon) {
      dispatch({ type: "update_status", status: "won" });
      return;
    }

    const { tiles, board } = gameState;

    const maxIndex = tileCountPerDimension - 1;
    for (let x = 0; x <= maxIndex; x += 1) {
      for (let y = 0; y <= maxIndex; y += 1) {
        if (isNil(gameState.board[x][y])) {
          return;
        }

        // do not check below the last row
        if (x < maxIndex) {
          if (isNil(gameState.board[x + 1][y])) {
            return;
          }
          if (tiles[board[x][y]].value === tiles[board[x + 1][y]].value) {
            return;
          }
        }

        // do not check right of the last column
        if (y < maxIndex) {
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
  }

  useEffect(() => {
    if (gameState.hasChanged) {
      setTimeout(() => {
        dispatch({ type: "clean_up" });
        addRandomTile();
      }, mergeAnimationDuration);
    } else {
      checkGameState();
    }
  }, [gameState.hasChanged]);

  return (
    <GameContext.Provider
      value={{
        score: gameState.score,
        status: gameState.status,
        getTiles,
        moveTiles,
        startGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
