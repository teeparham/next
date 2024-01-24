export function solve(count: number): number[] {
  // returns: array of the indexes of the queen in each row
  const remainder = count % 6;
  const addToOdd = count % 2 ? 1 : 0;

  const evens = Array.from(
    { length: Math.floor(count / 2) },
    (_, i) => 2 * i + 2
  );

  const odds = Array.from(
    { length: Math.floor(count / 2) + addToOdd },
    (_, i) => 2 * i + 1
  );

  if (remainder == 2) {
    // swap 1 & 3
    [odds[0], odds[1]] = [odds[1], odds[0]];
    // move 5 to end of odds
    odds.splice(2, 1); // value 5 is at index 2
    odds.push(5);
  } else if (remainder == 3) {
    // move 2 to end of evens
    evens.splice(0, 1); // value 2 is at index 0
    evens.push(2);
    // move 1,3 to end of odds
    odds.splice(0, 2); // remove 1st 2 items
    odds.push(1);
    odds.push(3);
  }

  // convert to 0-index
  const indexes = evens.concat(odds).map((v) => v - 1);

  return indexes;
}
