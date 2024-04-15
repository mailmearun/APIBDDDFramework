package utils;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.testng.Assert;

import java.util.Map;

public class ApiUtility {
    public static int status_code;
    public static String result;
    public static String base_code;
    public static String time_last_update_utc;
    public static Double USD_price;

    public static void callAPIEndpoint(String endpoint) throws ParseException {
        Response response = RestAssured.get(endpoint);
        status_code = response.getStatusCode();
        Object obj = new JSONParser().parse(response.asPrettyString());
        JSONObject jo = (JSONObject) obj;
        result = (String) jo.get("result");
        time_last_update_utc = (String) jo.get("time_last_update_utc");
        base_code = (String) jo.get("base_code");

        Map rate = ((Map)jo.get("rates"));
        USD_price = (Double)rate.get("AED");

    }


}
