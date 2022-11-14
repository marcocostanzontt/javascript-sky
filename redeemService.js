// Constants
const {
  channels,
  CUSTOMER_ELIGIBLE,
  CUSTOMER_INELIGIBLE,
  CUSTOMER_INVALID,
} = require("./constants");

// Service
const rewardsService = (
  customerAccountNumber,
  portfolio,
  eligibilityService
) => {
  // Check if the customer is eligible for a reward
  const status = eligibilityService(customerAccountNumber);

  const getRewards = () => {
    return portfolio.reduce((acc, subscription) => {
      const reward = channels.find((c) => c.channel === subscription)?.reward;

      if (reward) {
        acc.push(reward);
      }

      return acc;
    }, []);
  };

  switch (status) {
    case CUSTOMER_ELIGIBLE:
      return {
        message: "Congratulations, you are eligible!",
        data: getRewards(),
      };
    case CUSTOMER_INELIGIBLE:
      return {
        message: "Sorry, you are not eligible",
        data: [],
      };
    case CUSTOMER_INVALID:
      return {
        message: "Invalid account number exception",
        data: [],
      };
    default:
      return {
        message: "Technical failure exception",
        data: [],
      };
  }
};

module.exports = rewardsService;
