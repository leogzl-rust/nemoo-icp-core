url = "https://nemoo.bajo.id/v1/saveFisher";

fisher = {
    "fish": {
        "id": _.UNIQUE_ID,
        "city": "-",
        "age": 100,
    },
};

result = restClient.execute(url, fisher);
