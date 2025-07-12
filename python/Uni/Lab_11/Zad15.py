import re 

def validate_email(mail):
    wzor = re.compile('^[^@]+@[^@]+[.]+[^@]+$')

    if wzor.match(mail):
        return "Mail poprawny"
    else:
        return "Zły mail"


print(validate_email("Przykład@@cos.cos")) 
print(validate_email("przyklad@gmail.com"))  
print(validate_email("Przyklad@cos"))  
print(validate_email("Przykad.jakis@cos.pl"))  
print(validate_email("@cos.pl")) 
print(validate_email("przyklad.com")) 
 

