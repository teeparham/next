export const check = (guess: Array<number>, answer: Array<number>) => {
  const rightColors: Array<number> = [];

  function exactMatch(i: number): number {
    return guess[i] === answer[i] ? 1 : 0;
  }

  function exactlyRight() {
    return [0, 1, 2, 3].map((i) => exactMatch(i)).reduce((a, b) => a + b);
  }

  function sameColor(guessIndex: number, answerIndex: number): number {
    if (exactMatch(answerIndex)) return 0;
    if (rightColors.includes(answerIndex)) return 0;
    if (guess[guessIndex] === answer[answerIndex]) {
      rightColors.push(answerIndex);
      return 1;
    } else return 0;
  }

  function colorMatch(index: number) {
    if (exactMatch(index)) {
      return 0;
    }
    const others = [0, 1, 2, 3].filter((i) => i !== index);
    return (
      sameColor(index, others[0]) ||
      sameColor(index, others[1]) ||
      sameColor(index, others[2]) ||
      0
    );
  }

  function rightColor() {
    return [0, 1, 2, 3].map((i) => colorMatch(i)).reduce((a, b) => a + b);
  }

  return [exactlyRight(), rightColor()];
};