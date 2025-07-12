import random

while True:
    random_number = random.randint(0, 2)
    if random_number == 0:
        computer_move = 'r'
    elif random_number == 1:
        computer_move = 'p'
    elif random_number == 2:
        computer_move = 's'

    player_move = input('Rock, paper or scissors? (r, p, s)').lower()

    if player_move == 's':
        print("You chose scissors")
        if computer_move == 's':
            print('Computer chose scissors')
            print('Draw')
        elif computer_move == 'r':
            print('Computer chose rock')
            print('You lose')
        elif computer_move == 'p':
            print('Computer chose paper')
            print('You win')

    elif player_move == 'p':
        print("You chose paper")
        if computer_move == 'p':
            print('Computer chose paper')
            print('Draw')
        elif computer_move == 's':
            print('Computer chose scissors')
            print('You lose')
        elif computer_move == 'r':
            print('Computer chose rock')
            print('You win')

    elif player_move == 'r':
        print("You chose rock")
        if computer_move == 'r':
            print('Computer chose rock')
            print('Draw')
        elif computer_move == 'p':
            print('Computer chose paper')
            print('You lose')
        elif computer_move == 's':
            print('Computer chose scissors')
            print('You win')
    else:
        print("Invalid input")

    keep_playing = input("Continue? n to stop").lower()
    if keep_playing == 'n':
        break
