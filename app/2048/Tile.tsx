import { useEffect, useRef, useState } from "react";
import { mergeAnimationDuration } from "./constants";
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
  const [scale, setScale] = useState(1);
  const previousValue = usePreviousProps<number>(value);
  const hasChanged = previousValue !== value;

  useEffect(() => {
    if (hasChanged) {
      setScale(1.1);
      setTimeout(() => setScale(1), mergeAnimationDuration);
    }
  }, [hasChanged]);

  const style = {
    transform: `scale(${scale})`,
  };

  const tilePosition = `tile-x-${position[0]} tile-y-${position[1]}`;

  const fontSize =
    value > 512
      ? "text-[22px] sm:text-[2rem]"
      : value > 64
        ? "text-[26px] sm:text-[44px]"
        : "text-[2rem] sm:text-[3rem]";

  // @ts-ignore any type
  const bgColor = bgColorMap[value] || "bg-brown-200";
  const textColor = value > 4 ? "text-brown-100" : "text-brown-700";

  return (
    <div
      className={cx(
        "m-1 sm:m-2",
        "font-bold text-center leading-[4rem] sm:leading-[6.25rem]",
        "absolute rounded-md",
        "w-16 sm:w-[6.25rem] h-16 sm:h-[6.25rem]",
        "tile-transition",
        bgColor,
        textColor,
        fontSize,
        tilePosition
      )}
      style={style}
    >
      {value}
    </div>
  );
}
