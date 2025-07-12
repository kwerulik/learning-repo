def wieksze_liczby(ciag, x):
    odp = []

    for i in ciag:
        if i > x:
            odp.append(i)

    return odp


ciag = [3, 7, 1, 9, 2, 5]

print("Podaj próg:")
x = int(input())

print("Większe liczby od podanej ", wieksze_liczby(ciag,x))