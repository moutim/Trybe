file  = open("personagens.txt", mode="w")
personagens = [
    "Neo\n", "Mirabel Madrigal\n", "Flash Roberto Pera\n", "Peter Parker\n", "Steve Rogers\n"
    ]
file.writelines(personagens)
file.close()

file  = open("personagens.txt", mode="r")
content = file.read()
print(content)
file.close()