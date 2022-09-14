def retornaMaior(num1, num2):
    if num1 > num2:
        return num1
    return num2


def retornaMedia(numeros):
    total = 0
    for numero in numeros:
        total += numero
    return total / len(numeros)


def imprimeAsteriscos(numero):
    for linha in range(numero):
        print(numero * "*")


def retornaMaiorNome(nomes):
    maiorNome = ""
    for nome in nomes:
        if len(nome) > len(maiorNome):
            maiorNome = nome
    return maiorNome


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return (required_cans, required_cans * can_price)


def identificaTriangulo(lado1, lado2, lado3):
    isTriangle = (
        lado1 + lado2 > lado3 and
        lado2 + lado3 > lado1 and
        lado1 + lado3 > lado2
    )

    if not isTriangle:
        return "nao é triangulo"
    elif lado1 == lado2 == lado3:
        return "equilátero"
    elif lado1 == lado2 or lado2 == lado3 or lado1 == lado3:
        return "isósceles"
    else:
        return "escaleno"


print(retornaMaior(10, 20))
print(retornaMedia([2, 4, 5, 6]))
print(imprimeAsteriscos(5))
print(retornaMaiorNome(["Vitor", "Vitor Hugo", "Silvania"]))
print(paint_costs(50))
print(identificaTriangulo(2, 4, 5))
