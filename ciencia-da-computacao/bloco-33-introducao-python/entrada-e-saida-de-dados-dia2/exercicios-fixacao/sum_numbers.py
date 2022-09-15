numbers = input("Digite os numero separados por espaco: ")

numbers_array = numbers.split(" ")

def sum_numbers():
    sum = 0
    for number in numbers_array:
        if not number.isdigit():
            print(f"Erro ao somar valores, {number} nao é um dígito")
        else:
            sum += int(number)
    print(f"A soma dos numero validos é: {sum}")


sum_numbers()