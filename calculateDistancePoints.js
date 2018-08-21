//hillSize:
// SMALL - mała
// BIG - duża
// HUGE - mamucia

const getBasePoints = (hillSize) => hillSize === 'HUGE' ? 120 : 60;
const getDistancePoints = (hillSize) => {
  if (hillSize === 'SMALL') return 2;
  if (hillSize === 'BIG') return 1.8;
  return 1.2;
};

const calculateDistancePoints = (distance, hillSize, kPoint) => {
  const diff = distance - kPoint;
  return getBasePoints(hillSize) + (diff * getDistancePoints(hillSize))

};

module.exports = calculateDistancePoints;