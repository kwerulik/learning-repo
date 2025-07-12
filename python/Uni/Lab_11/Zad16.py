def are_anagrams(s1,s2):

    s1 = s1.lower()
    s2 = s2.lower()

    if len(s1) != len(s2):
        return "Słowa nie są anagramami"

#https://www.geeksforgeeks.org/python-ways-to-sort-letters-of-string-alphabetically/
    if sorted(s1) == sorted(s2):
        return "Slowa są anagramami"
    else:
        return "Słowa nie są anagramami"

print(are_anagrams("arbuz","burza"))
print(are_anagrams("Towar", "warto"))
print(are_anagrams("ulica", "komputer"))
print(are_anagrams("ula","ola"))