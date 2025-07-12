print("Podaj liczb odzielone spacją")
lista = input().split()
# https://www.geeksforgeeks.org/taking-multiple-inputs-from-user-in-python/

for i in lista:
    int(i)                      # https://www.freecodecamp.org/news/python-convert-string-to-int-how-to-cast-a-string-in-python/

wyniki = []
for i in lista:
    if lista.count(i) == 1:    # https://www.programiz.com/python-programming/methods/list/count
        wyniki.append(i)


print("Szukane liczby:")

for i in wyniki:
    print(f"{i}", end=" ")