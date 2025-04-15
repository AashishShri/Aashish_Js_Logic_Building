function minCostTickets(days, costs) {
  const daySet = new Set(days); // For quick lookup of travel days
  const maxDay = days[days.length - 1]; // Last day we need to consider

  const dp = new Array(maxDay + 1).fill(0); // Create dp array up to the last travel day

  for (let i = 1; i <= maxDay; i++) {
    if (!daySet.has(i)) {
      // If it's not a travel day, cost remains same as previous day
      dp[i] = dp[i - 1];
    } else {
      // If it's a travel day, consider the cost of 1-day, 7-day, and 30-day passes
      const cost1 = dp[i - 1] + costs[0]; // 1-day pass
      const cost7 = dp[Math.max(0, i - 7)] + costs[1]; // 7-day pass
      const cost30 = dp[Math.max(0, i - 30)] + costs[2]; // 30-day pass

      dp[i] = Math.min(cost1, cost7, cost30); // Choose the cheapest option
    }
  }

  return dp[maxDay]; // The minimum cost to cover all travel days
}

const days = [1, 4, 6, 7, 8, 20];
const costs = [2, 7, 15];
console.log(mincostTickets(days, costs)); // Output: 11

// note : Input: days = [1,4,6,7,8,20], costs = [2,7,15] Output: 11(2 + 7 + 2)
