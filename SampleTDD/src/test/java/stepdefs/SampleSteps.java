package stepdefs;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.json.simple.parser.ParseException;
import org.testng.Assert;
import utils.ApiUtility;

public class SampleSteps extends ApiUtility {

    @Given("User make a call to api \"([^\"]*)\"")
    public void user_make_a_call_to_api(String Endpoint) throws ParseException {
        System.out.println("Step 1 - "+Endpoint);
        ApiUtility.callAPIEndpoint(Endpoint);
    }

    @When("verify the api status as \"([^\"]*)\"")
    public void verify_the_api_status(String Status) {
        System.out.println("Step 2 - ");
        System.out.println("Status Code : "+ApiUtility.status_code);
        System.out.println("Status Result : "+ApiUtility.result);
        Assert.assertEquals(ApiUtility.status_code,200);
        Assert.assertEquals(ApiUtility.result,Status);
    }

    @Then("verify USD price against the AED between {double} and {double}")
    public void verify_the_api_response_time(double d1, double d2) {
        System.out.println("Step 3");
        Double price = ApiUtility.USD_price;
        System.out.println("USD price against AED : "+price);
    }

    @Then("verify the api response time is not less then {int} seconds")
    public void verify_the_api_response(int int1) {
        System.out.println("Step 4");
        String result = ApiUtility.result;
        System.out.println("Status Code : "+result);
    }

    @Then("verify total currency paires returned as {int}")
    public void verify_currency_paires_are_returned(Integer int1) {
        System.out.println("Step 5");
        String result = ApiUtility.result;
        System.out.println("Status Code : "+result);
    }
}
