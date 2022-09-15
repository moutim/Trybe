import json

with open("pokemons.json") as file:
    pokemons_list = json.load(file)["results"]
    for pokemon in pokemons_list:
        print(pokemon["name"])