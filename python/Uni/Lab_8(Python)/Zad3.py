print("Podaj temperature")
x = int(input())

print("Wybierz podana miare")
print("1 - stopnie Celsiusza")
print("2 - stopnie Fahrenheita")
z = int(input())

wynik = 0
if z == 1:
    wynik = (x * 9 / 5) + 32
elif z == 2:
    wynik = (x - 32) * 5 / 9

print(f"Szukana temperatura to {wynik}")