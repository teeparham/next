import { isNil } from "../utils";
import { TileType, TileMap } from "./Tile";

type GameStatus = "ongoing" | "won" | "lost";

type State = {
  board: string[][];
  tiles: TileMap;
  tilesByIds: string[];
  hasChanged: boolean;
  score: number;
  status: GameStatus;
};

type Action =
  | { type: "create_tile"; tile: TileType }
  | { type: "clean_up" }
  | { type: "move_up" }
  | { type: "move_down" }
  | { type: "move_left" }
  | { type: "move_right" }
  | { type: "reset_game" }
  | { type: "update_status"; status: GameStatus };

function createBoard() {
  const board: string[][] = [];

  for (let i = 0; i < 4; i += 1) {
    board[i] = new Array(4).fill(undefined);
  }

  return board;
}

export const initialState: State = {
  board: createBoard(),
  tiles: {},
  tilesByIds: [],
  hasChanged: false,
  score: 0,
  status: "ongoing",
};

export function gameReducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case "clean_up": {
      const flatBoard = state.board.flat(1);
      const newTiles: TileMap = flatBoard.reduce((result, tileId: string) => {
        if (isNil(tileId)) {
          return result;
        }

        return {
          ...result,
          [tileId]: state.tiles[tileId],
        };
      }, {});

      return {
        ...state,
        tiles: newTiles,
        tilesByIds: Object.keys(newTiles),
        hasChanged: false,
      };
    }
    case "create_tile": {
      const tileId = crypto.randomUUID();
      const [x, y] = action.tile.position;
      const newBoard = JSON.parse(JSON.stringify(state.board));
      newBoard[y][x] = tileId;

      return {
        ...state,
        board: newBoard,
        tiles: {
          ...state.tiles,
          [tileId]: {
            id: tileId,
            ...action.tile,
          },
        },
        tilesByIds: [...state.tilesByIds, tileId],
      };
    }
    case "move_up": {
      const newBoard = createBoard();
      const newTiles: TileMap = {};
      let hasChanged = false;
      let { score } = state;

      for (let x = 0; x < 4; x++) {
        let newY = 0;
        let previousTile: TileType | undefined;

        for (let y = 0; y < 4; y++) {
          const tileId = state.board[y][x];
          const tile = state.tiles[tileId];

          if (!isNil(tileId)) {
            if (previousTile?.value === tile.value) {
              score += previousTile.value * 2;
              newTiles[previousTile.id as string] = {
                ...previousTile,
                value: previousTile.value * 2,
              };
              newTiles[tileId] = {
                ...tile,
                position: [x, newY - 1],
              };
              previousTile = undefined;
              hasChanged = true;
              continue;
            }

            newBoard[newY][x] = tileId;
            newTiles[tileId] = {
              ...tile,
              position: [x, newY],
            };
            previousTile = newTiles[tileId];
            if (tile.position[0] !== x || tile.position[1] !== newY) {
              hasChanged = true;
            }
            newY++;
          }
        }
      }
      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
        hasChanged,
        score,
      };
    }
    case "move_down": {
      const newBoard = createBoard();
      const newTiles: TileMap = {};
      let hasChanged = false;
      let { score } = state;

      for (let x = 0; x < 4; x++) {
        let newY = 3;
        let previousTile: TileType | undefined;

        for (let y = 3; y >= 0; y--) {
          const tileId = state.board[y][x];
          const tile = state.tiles[tileId];

          if (!isNil(tileId)) {
            if (previousTile?.value === tile.value) {
              score += previousTile.value * 2;
              newTiles[previousTile.id as string] = {
                ...previousTile,
                value: previousTile.value * 2,
              };
              newTiles[tileId] = {
                ...tile,
                position: [x, newY + 1],
              };
              previousTile = undefined;
              hasChanged = true;
              continue;
            }

            newBoard[newY][x] = tileId;
            newTiles[tileId] = {
              ...tile,
              position: [x, newY],
            };
            previousTile = newTiles[tileId];
            if (tile.position[0] !== x || tile.position[1] !== newY) {
              hasChanged = true;
            }
            newY--;
          }
        }
      }
      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
        hasChanged,
        score,
      };
    }
    case "move_left": {
      const newBoard = createBoard();
      const newTiles: TileMap = {};
      let hasChanged = false;
      let { score } = state;

      for (let y = 0; y < 4; y++) {
        let newX = 0;
        let previousTile: TileType | undefined;

        for (let x = 0; x < 4; x++) {
          const tileId = state.board[y][x];
          const tile = state.tiles[tileId];

          if (!isNil(tileId)) {
            if (previousTile?.value === tile.value) {
              score += previousTile.value * 2;
              newTiles[previousTile.id as string] = {
                ...previousTile,
                value: previousTile.value * 2,
              };
              newTiles[tileId] = {
                ...tile,
                position: [newX - 1, y],
              };
              previousTile = undefined;
              hasChanged = true;
              continue;
            }

            newBoard[y][newX] = tileId;
            newTiles[tileId] = {
              ...tile,
              position: [newX, y],
            };
            previousTile = newTiles[tileId];
            if (tile.position[0] !== newX || tile.position[1] !== y) {
              hasChanged = true;
            }
            newX++;
          }
        }
      }
      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
        hasChanged,
        score,
      };
    }
    case "move_right": {
      const newBoard = createBoard();
      const newTiles: TileMap = {};
      let hasChanged = false;
      let { score } = state;

      for (let y = 0; y < 4; y++) {
        let newX = 3;
        let previousTile: TileType | undefined;

        for (let x = 3; x >= 0; x--) {
          const tileId = state.board[y][x];
          const tile = state.tiles[tileId];

          if (!isNil(tileId)) {
            if (previousTile?.value === tile.value) {
              score += previousTile.value * 2;
              newTiles[previousTile.id as string] = {
                ...previousTile,
                value: previousTile.value * 2,
              };
              newTiles[tileId] = {
                ...tile,
                position: [newX + 1, y],
              };
              previousTile = undefined;
              hasChanged = true;
              continue;
            }

            newBoard[y][newX] = tileId;
            newTiles[tileId] = {
              ...state.tiles[tileId],
              position: [newX, y],
            };
            previousTile = newTiles[tileId];
            if (tile.position[0] !== newX || tile.position[1] !== y) {
              hasChanged = true;
            }
            newX--;
          }
        }
      }
      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
        hasChanged,
        score,
      };
    }
    case "reset_game":
      return initialState;
    case "update_status":
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
}
