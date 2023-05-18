// BEGIN (write your solution here)
const calculateDistance = (point1, point2) => {
  const [x1, y1] = point1;
  const [x2, y2] = point2;

  const xLength = x2 - x1;
  const yLength = y2 - y1;

  const result = Math.sqrt(xLength ** 2 + yLength ** 2);
  return result;
};

export default calculateDistance;
// END
