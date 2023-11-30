let url = "https://nemoo.bajo.id/v1/saveFish";

let fish = {
    "fish": {
        "id": _.UNIQUE_ID,
        "fisher": "-",
        "weight": 100,
        "height": 90
    }
}

let result = restClient.execute(url, fish, String.class);

System.out.println("RESULT: " + result);
