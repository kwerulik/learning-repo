def pakowanie(ciag):
    x = 1
    sprw = ciag[0]

    max = 0
    odp = " "

    for i in range (1,len(ciag),1):

        if ciag[i] == sprw[0]:
            x = x + 1
            sprw = sprw + ciag[i]
        else:
            odp = odp + f"{x}" + sprw[0]
            x = 1 
            sprw = ciag[i]


    odp = odp + f"{x}" + sprw[0]
    return odp


def rozpakowanie(ciag):
    odp = ""
    
    i = 0
    while i < len(ciag):
        if ciag[i].isdigit():  #https://www.programiz.com/python-programming/methods/string/isdigit
            odp = odp + ciag[i + 1]
            i += 1
        else:
            odp = odp + ciag[i]
            i += 1

    return odp

# print("Podaj ciag znaków")
# ciag = input()
ciag = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbcccdddd" #3a2b3c4d

print(f'Szukany "spakowny" ciąg {pakowanie(ciag)}') 
print(f'Szukany "rozpakowny" ciąg {rozpakowanie(ciag)}')