// Constants
const CUSTOMER_ELIGIBLE = "CUSTOMER_ELIGIBLE";
const CUSTOMER_INELIGIBLE = "CUSTOMER_INELIGIBLE";
const CUSTOMER_INVALID = "CUSTOMER_INVALID";

// Channels Map
const channels = [
  {
    channel: "SPORTS",
    reward: "CHAMPIONS_LEAGUE_FINAL_TICKET",
  },
  {
    channel: "KIDS",
    reward: "",
  },
  {
    channel: "MUSIC",
    reward: "KARAOKE_PRO_MICROPHONE",
  },
  {
    channel: "NEWS",
    reward: "",
  },
  {
    channel: "MOVIES",
    reward: "PIRATES_OF_THE_CARIBBEAN_COLLECTION",
  },
];

// Customers
const customers = [
  { id: 0, subscriptions: ["SPORTS", "KIDS"] },
  { id: 1, subscriptions: ["KIDS", "NEWS"] },
  { id: 2, subscriptions: ["MUSIC", "MOVIES"] },
];

module.exports = {
  CUSTOMER_ELIGIBLE,
  CUSTOMER_INELIGIBLE,
  CUSTOMER_INVALID,
  channels,
  customers,
};
