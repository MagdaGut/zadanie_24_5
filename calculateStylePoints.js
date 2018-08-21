const calculateStylePoints = (styleNotes) => {
  return styleNotes.reduce((sum, x) => sum + x) - Math.max(...styleNotes) - Math.min(...styleNotes);
};

module.exports = calculateStylePoints;