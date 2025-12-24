// src/lib/calculator.js

/**
 * Calculates the transaction cost in ETH.
 * @param {number} gasLimit - The gas limit for the transaction.
 * @param {number} gasPrice - The gas price in Gwei.
 * @returns {number} The cost in ETH.
 */
export function calculateEthCost(gasLimit, gasPrice) {
  return (gasLimit * gasPrice) / 1e9;
}

/**
 * Calculates the approximate cost in USD.
 * @param {number} ethCost - The cost in ETH.
 * @param {number} ethToUsdRate - The ETH to USD conversion rate.
 * @returns {number} The cost in USD.
 */
export function calculateUsdCost(ethCost, ethToUsdRate = 2000) {
  return ethCost * ethToUsdRate;
}