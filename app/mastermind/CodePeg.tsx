interface CodePegProps {
  color: number;
  index: number;
  onClick: (index: number) => void;
}

export const COLOR = [
  "red-500",
  "blue-500",
  "green-500",
  "white",
  "yellow-400",
  "purple-500",
];

export const CodePeg = ({ color, index, onClick }: CodePegProps) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <button
      className={`cursor-pointer border-4 border-black rounded-full p-6 mr-2 bg-${COLOR[color]}`}
      onClick={handleClick}
    ></button>
  );
};
