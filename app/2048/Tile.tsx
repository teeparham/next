import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  containerWidthMobile,
  containerWidthDesktop,
  mergeAnimationDuration,
  tileCountPerDimension,
} from "./constants";
import styles from "./styles/tile.module.css";
import { cx } from "../utils";

function usePreviousProps<K = any>(value: K) {
  const ref = useRef<K>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export type TileType = {
  id?: string;
  position: [number, number];
  value: number;
};

export type TileMap = { [id: string]: TileType };

export function Tile({ position, value }: TileType) {
  const isWideScreen = useMediaQuery({ minWidth: 512 });
  const containerWidth = isWideScreen
    ? containerWidthDesktop
    : containerWidthMobile;

  const [scale, setScale] = useState(1);
  const previousValue = usePreviousProps<number>(value);
  const hasChanged = previousValue !== value;

  const positionToPixels = (position: number) =>
    (position / tileCountPerDimension) * containerWidth;

  useEffect(() => {
    if (hasChanged) {
      setScale(1.1);
      setTimeout(() => setScale(1), mergeAnimationDuration);
    }
  }, [hasChanged]);

  const style = {
    left: positionToPixels(position[0]),
    top: positionToPixels(position[1]),
    transform: `scale(${scale})`,
  };

  return (
    <div
      className={cx(
        "bg-brown-200 text-brown-700",
        "font-bold text-center",
        "absolute rounded-md",
        value > 4 && "text-brown-100",
        styles.tile,
        styles[`tile${value}`]
      )}
      style={style}
    >
      {value}
    </div>
  );
}
