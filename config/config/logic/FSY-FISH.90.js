url = "https://nemoo.bajo.id/v1/saveFish";

fish = {
    "fish": {
        "id": _.UNIQUE_ID,
        "fisher": "-",
        "weight": 100,
        "height": 90,
    },
};

result = restClient.execute(url, fish);
