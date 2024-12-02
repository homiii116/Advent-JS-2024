function prepareGifts(gifts) {
  const uniqueArray = Array.from(new Set(gifts));
  const allgifts = uniqueArray.sort((a, b) => a - b);
  return allgifts;
}

// output example
const gifts1 = [10, 1, 23, 13, 24, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1);