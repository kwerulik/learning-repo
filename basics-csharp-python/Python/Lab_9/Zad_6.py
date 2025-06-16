def Sum(n): 
    sum = 0
    for i in str(n):
        sum = sum + int(i)

    return sum

        
         
print("Podaj liczbe")
n = input()

print(Sum(n))