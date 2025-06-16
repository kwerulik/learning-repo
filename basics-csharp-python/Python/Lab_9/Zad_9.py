def NWD(a, b):
    while b != 0:
        c = a % b 
        a = b
        b = c

    return a

a = 70
b = 28
print(f"NWD dla liczb {a},{b} jest równy {NWD(a,b)}")