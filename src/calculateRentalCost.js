/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  if (days <= 0) {
    return 0;
  }

  const total = days * 40;

  if (days >= 3 && days < 7) {
    return total - 20;
  }

  if (days >= 7) {
    return total - 50;
  }

  return total;
}

module.exports = calculateRentalCost;
