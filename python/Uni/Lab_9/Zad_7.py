def Rosnaca(list):
    for i in range(len(list)):
        for j in range(0,len(list) - i - 1):
            if list[j] > list[j + 1]:
                x = list[j] 
                list[j] = list[j +1]
                list[j + 1] = x
    
    return list

def Malejaca(list):
    for i in range(len(list)):
        for j in range(0,len(list) - i - 1):
            if list[j] < list[j + 1]:
                x = list[j] 
                list[j] = list[j +1]
                list[j + 1] = x

    return list



list = [1, 32 , 4, 50, 100, 0]
print(f"Rosonąco{Rosnaca(list)}")
print(f"malejąco{Malejaca(list)}")