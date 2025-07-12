print("Wybierz Opcje")
print("1 => x^4")
print("2 => x^6")
print("3 => x^7")
print("4 => x^8")
print("5 => x^3 + x^10")
print("6 => x^5 + x^13")
print("7 => x^2 + x^5 + x^17")
y = int(input())


print("Podaj liczbe do obliczenia")
x = int(input())

if y == 1:
    x = x * x
    x = x * x
    print(x)

elif y == 2:
    z = x * x
    x = z * x
    x = x * x
    print(x)

elif y == 3:
    z = x * x
    x = z * x
    x = x * z * z
    print(x)

elif y == 4:
    z = x * x
    x = z * z
    x = x * x
    print(x)

elif y == 5:
    z = x * x
    y = z * x
    z = z * y
    z = z * z
    x = y + z
    print(x)

elif y == 6:
    z = x * x
    y = z * x
    z = y * z
    y = y * z * z
    x =  y + z
    print(x)

elif y == 7:
    z = x * x
    y = z * x
    y = z * y
    n = y * y * y * z
    x = z + y + n
    print(x)
