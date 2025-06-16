print("Podaj dwie liczby:")
x = int(input()) 
y = int(input())


print("Wybierz odpowiednia opcje")
print("1 dla +")
print("2 dla -")
print("3 dla *")
print("4 dla /")
z = int(input())

wynik = 0

if z == 1:
    wynik = x + y 

elif z == 2:
    wynik = x - y

elif z == 3:
    wynik = x * y 

elif z == 4:
    if y != 0:
        wynik = x / y
    else:
        print("Podano złe liczby")
        wynik = "błąd"
else:
    print("Błąd w wybieraniu opercaji")


print(f"Szukany wynik to {wynik}")