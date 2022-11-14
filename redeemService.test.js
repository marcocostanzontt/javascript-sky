// Service
const rewardsService = require("./redeemService");

// Constants
const {
  customers,
  channels,
  CUSTOMER_ELIGIBLE,
  CUSTOMER_INELIGIBLE,
  CUSTOMER_INVALID,
} = require("./constants");

// Mocks
const eligibilityService = (id) => {
  // Type not valid
  if (typeof id !== "number") return null;

  const customer = customers.find((customer) => customer.id === id);

  // Customer is not found
  if (!customer) {
    return CUSTOMER_INVALID;
  }

  const reward = customer.subscriptions.find((subscription) => {
    return channels.find((c) => c.channel === subscription)?.reward;
  });

  // Ineligible: There are not rewards
  if (!reward) {
    return CUSTOMER_INELIGIBLE;
  }

  // Eligible: Rewards found!
  return CUSTOMER_ELIGIBLE;
};

test("The customer is ELIGIBLE because it owns a reward", () => {
  const id = 0;
  expect(
    rewardsService(id, customers[id].subscriptions, eligibilityService)
  ).toStrictEqual({
    message: "Congratulations, you are eligible!",
    data: ["CHAMPIONS_LEAGUE_FINAL_TICKET"],
  });
});

test("The customer is INELIGIBLE because it doesn't own rewards", () => {
  const id = 1;
  expect(
    rewardsService(id, customers[id].subscriptions, eligibilityService)
  ).toStrictEqual({
    message: "Sorry, you are not eligible",
    data: [],
  });
});

test("The customer is ELIGIBLE because there is a reward for each subscription", () => {
  const id = 2;
  expect(
    rewardsService(id, customers[id].subscriptions, eligibilityService)
  ).toStrictEqual({
    message: "Congratulations, you are eligible!",
    data: ["KARAOKE_PRO_MICROPHONE", "PIRATES_OF_THE_CARIBBEAN_COLLECTION"],
  });
});

test("Invalid account number exception", () => {
  const id = 4;
  expect(
    rewardsService(id, customers[id]?.subscriptions, eligibilityService)
  ).toStrictEqual({
    message: "Invalid account number exception",
    data: [],
  });
});

test("Technical failure exception", () => {
  const id = "4";
  expect(
    rewardsService(id, customers[id]?.subscriptions, eligibilityService)
  ).toStrictEqual({
    message: "Technical failure exception",
    data: [],
  });
});
