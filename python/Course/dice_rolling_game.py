import random

while True:
    choice = input("Roll the dice? (y/n)")

    if choice.lower() == 'y':
        roll = (random.randint(1, 6), random.randint(1, 6))
        print(roll)
    elif choice.lower() == 'n':
        break

print('Thanks for playing')
