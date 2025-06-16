print("Podaj zdanie")

napis = input().split()

lista = [i.lower() for i in napis]  #https://www.geeksforgeeks.org/python-convert-case-of-elements-in-a-list-of-strings/

wynik = []

for i in lista:
    if i not in wynik:
        wynik.append(i)

for i in wynik:
    print(f"Słowo {i} jest podane {lista.count(i)} razy")



