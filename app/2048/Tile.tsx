import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  containerWidthMobile,
  containerWidthDesktop,
  mergeAnimationDuration,
  tileCountPerDimension,
} from "./constants";
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

const bgColorMap = {
  4: "bg-[#ede0c8]",
  8: "bg-[#f2b179]",
  16: "bg-[#f59563]",
  32: "bg-[#f67c5f]",
  64: "bg-[#f65e3b]",
  128: "bg-[#edcf72]",
  256: "bg-[#edcc61]",
  512: "bg-[#edc850]",
  1024: "bg-[#edc53f]",
  2048: "bg-[#edc22e]",
  4096: "bg-[#edc22e]",
  8192: "bg-[#edc22e]",
};

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

  const fontSize =
    value > 512
      ? "text-[22px] sm:text-[2rem]"
      : value > 64
        ? "text-[26px] sm:text-[44px]"
        : null;
  // @ts-ignore any type
  const bgColor = bgColorMap[value];
  const textColor = value > 4 ? "text-brown-100" : null;

  return (
    <div
      className={cx(
        "bg-brown-200 text-brown-700 m-1 sm:m-2",
        "font-bold text-center text-[2rem] sm:text-[3rem] leading-[4rem] sm:leading-[6.25rem]",
        "absolute rounded-md",
        "w-16 sm:w-[6.25rem] h-16 sm:h-[6.25rem]",
        "tile-transition",
        bgColor,
        textColor,
        fontSize
      )}
      style={style}
    >
      {value}
    </div>
  );
}
