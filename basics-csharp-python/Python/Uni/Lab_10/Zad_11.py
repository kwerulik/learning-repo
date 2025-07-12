def najdluzsza(ciag):
    x = 0
    sprw = ciag[0]

    max = 0
    odp = " "

    ciag = ciag + " "

    for i in range (1,len(ciag),1):

        if ciag[i] == sprw[0]:
            x = x + 1
            sprw = sprw + ciag[i]
            print(sprw)
        else:
            if  x > max:
                max = x 
                odp = sprw
                x = 0 
                sprw = ciag[i]
            else:
                x = 0 
                sprw = ciag[i]

    return odp


print("Podaj ciag znaków")
ciag = input()

print(f"Szukany ciag {najdluzsza(ciag)}")