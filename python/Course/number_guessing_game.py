import random

computer_number = random.randint(1, 100)

while True:
    try:
        player_number = int(input("Guess number between 1 to 100: "))

        if player_number == computer_number:
            print('You won')
            break
        elif player_number < computer_number:
            print("Too low")
        elif player_number > computer_number:
            print("Too high")
        else:
            print("Invalid Input")

    except ValueError:
        print("Plase enter a valid number")
