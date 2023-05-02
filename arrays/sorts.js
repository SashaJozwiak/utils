// ====== BUBBLE SORT ======

// ===two for===
export default (arr) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[i]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

// ===with do-while and swapped===

const bubbleSort = (arr) => {
  let stepsCount = arr.length - 1;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < stepsCount; i += 1) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    stepsCount -= 1;
  } while (swapped);

  return arr;
};
