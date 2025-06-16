def bez_duplikatow(lista):
    odp = []


    for i in lista:
        if i not in odp:
            odp.append(i)

    return odp


lista = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9]

print("Lista bez duplikatow", bez_duplikatow(lista))