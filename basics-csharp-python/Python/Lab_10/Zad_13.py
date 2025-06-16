list_1 = [1, 2, 3]
list_2 = ['a', 'b', 'c'] 
wynik = []


for i in range (len(list_1)):
    krotka = (list_1[i], list_2[i])
    wynik.append(krotka)

print(wynik)