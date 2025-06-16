def silnia(a):
    x = 1
    if a == 0 or a == 1:
        return x
    else:    
        while a >= 1:
            x = a * x 
            a = a - 1

    return x 


print("Podaj liczbe do obliczenia silni")

a = int(input())

if a < 0:
    print("Zła liczba")
else:
    print(f"Silnia z liczby {a}, jest równa {silnia(a)}")
      