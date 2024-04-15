$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SampleAPI.feature");
formatter.feature({
  "name": "Sample Test API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate sample test API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SampleAPI"
    }
  ]
});
formatter.step({
  "name": "User make a call to api \"https://open.er-api.com/v6/latest/USD\"",
  "keyword": "Given "
});
formatter.step({
  "name": "verify the api status as \"success\"",
  "keyword": "When "
});
formatter.step({
  "name": "verify USD price against the AED between 3.6 and 3.7",
  "keyword": "Then "
});
formatter.step({
  "name": "verify the api response time is not less then 3 seconds",
  "keyword": "Then "
});
formatter.step({
  "name": "verify total currency paires returned as 162",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Test",
        "status"
      ]
    },
    {
      "cells": [
        "https://open.er-api.com/v6/latest/USD",
        "PASS"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate sample test API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SampleAPI"
    }
  ]
});
formatter.step({
  "name": "User make a call to api \"https://open.er-api.com/v6/latest/USD\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SampleSteps.user_make_a_call_to_api(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the api status as \"success\"",
  "keyword": "When "
});
formatter.match({
  "location": "SampleSteps.verify_the_api_status(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify USD price against the AED between 3.6 and 3.7",
  "keyword": "Then "
});
formatter.match({
  "location": "SampleSteps.verify_the_api_response_time(double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the api response time is not less then 3 seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "SampleSteps.verify_the_api_response(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify total currency paires returned as 162",
  "keyword": "Then "
});
formatter.match({
  "location": "SampleSteps.verify_currency_paires_are_returned(Integer)"
});
formatter.result({
  "status": "passed"
});
});