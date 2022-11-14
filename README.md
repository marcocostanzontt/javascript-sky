# eligibilityService

This service has been mocked within the test in order to test "rewardsService".
Its goal is to validate the user by id checking if the type of the value is a number otherwise it will fail.
It returns several status:

- INVALID: if the customer is not found
- INELIGIBLE: if the customer doesn't own rewards
- ELIGIBLE: if the customer owns 1 or more rewards

# rewardsService

This service check the eligibility of the customer through the eligibility service based on the status.

- ELIGIBLE: the service will check the map of channels and it will return the list of rewards
- INELIGIBLE: the service will return an empty array with a message
- INVALID: the service will return an empty array with a message
- Other case: the service will return an empty array with a technical error message

# Test Script

- npm run test
