Feature: Sample Test API

  @SampleAPI
  Scenario Outline: Validate sample test API
    Given User make a call to api "https://open.er-api.com/v6/latest/USD"
    When verify the api status as "success"
    Then verify USD price against the AED between 3.6 and 3.7
    Then verify the api response time is not less then 3 seconds
    Then verify total currency paires returned as 162

    Examples:
      | Test |status|
      | https://open.er-api.com/v6/latest/USD |PASS  |