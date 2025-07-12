#https://www.w3schools.com/python/python_regex.asp

import re 

def validate_phone_number(numer):
    wzor = re.compile('^[+]?[0-9]{0,2}[0-9]{9}$')

    if wzor.match(numer):
        return "Numer poprawny"
    else:
        return "Zły numer"
    

print(validate_phone_number("+48 123456789")) 
print(validate_phone_number("123456789"))    
print(validate_phone_number("+123456"))       
print(validate_phone_number("+1234567890123"))
print(validate_phone_number("12a4567890"))
print(validate_phone_number("666010109"))
