using System;
using System.Collections.Generic;

class Account
{
    public string AccountNumber { get; private set; }
    public double Balance { get; private set; }

    public Account(string accountNumber, double balance)
    {
        AccountNumber = accountNumber;
        Balance = balance;
    }

    public double CheckBalance()
    {
        return Balance;
    }

    public double Deposit(double amount)
    {
        Balance += amount;
        return Balance;
    }

    public string Withdraw(double amount)
    {
        if (Balance >= amount)
        {
            Balance -= amount;
            return $"Withdrawal of {amount} successful.";
        }
        else
        {
            return "Insufficient funds";
        }
    }
}

class User
{
    public string Username { get; private set; }
    public string PIN { get; private set; }
    public Account Account { get; private set; }

    public User(string username, string pin, Account account)
    {
        Username = username;
        PIN = pin;
        Account = account;
    }
}

class Program
{
    static User Login(List<User> users)
    {
        Console.Write("Enter username: ");
        string username = Console.ReadLine();
        Console.Write("Enter PIN: ");
        string pin = Console.ReadLine();

        foreach (var user in users)
        {
            if (user.Username == username && user.PIN == pin)
            {
                return user;
            }
        }
        return null;
    }

    static void Main(string[] args)
    {
        // Tworzenie kont użytkowników
        Account user1Account = new Account("123456", 1000);
        Account user2Account = new Account("654321", 500);

        // Tworzenie użytkowników
        User user1 = new User("user1", "1234", user1Account);
        User user2 = new User("user2", "4321", user2Account);

        List<User> users = new List<User> { user1, user2 };

        // Logowanie
        User loggedUser = null;
        while (loggedUser == null)
        {
            loggedUser = Login(users);
            if (loggedUser == null)
            {
                Console.WriteLine("Incorrect username or PIN. Please try again.");
            }
        }
        Console.WriteLine($"Logged in as {loggedUser.Username}");

        // Obsługa interakcji z użytkownikiem
        while (true)
        {
            Console.WriteLine("\n1. Check Balance");
            Console.WriteLine("2. Deposit");
            Console.WriteLine("3. Withdraw");
            Console.WriteLine("4. Logout");

            Console.Write("Enter your choice: ");
            string choice = Console.ReadLine();

            switch (choice)
            {
                case "1":
                    double balance = loggedUser.Account.CheckBalance();
                    Console.WriteLine($"Your balance is: {balance}");
                    break;

                case "2":
                    Console.Write("Enter deposit amount: ");
                    double depositAmount = Convert.ToDouble(Console.ReadLine());
                    double newBalance = loggedUser.Account.Deposit(depositAmount);
                    Console.WriteLine($"Deposit successful. Your new balance is: {newBalance}");
                    break;

                case "3":
                    Console.Write("Enter withdrawal amount: ");
                    double withdrawalAmount = Convert.ToDouble(Console.ReadLine());
                    string withdrawalResult = loggedUser.Account.Withdraw(withdrawalAmount);
                    Console.WriteLine(withdrawalResult);
                    break;

                case "4":
                    Console.WriteLine("Logged out.");
                    return;

                default:
                    Console.WriteLine("Invalid choice. Please try again.");
                    break;
            }
        }
    }
}
