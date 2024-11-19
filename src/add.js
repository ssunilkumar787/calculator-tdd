function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let negatives = [];

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  const numberArray = numbers.split(delimiter);

  const sum = numberArray.reduce((acc, num) => {
    const parsedNum = parseInt(num, 10);

    if (isNaN(parsedNum)) return acc;
    if (parsedNum < 0) negatives.push(parsedNum);

    return acc + parsedNum;
  }, 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return sum;
}

module.exports = add;
