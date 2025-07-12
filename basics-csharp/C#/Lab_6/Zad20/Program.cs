using System;

public class Program
{
    static void Main()
    {
        string duze = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        string male = "abcdefghijklmnopqrstuvwxyz";
        string cyfry = "0123456789";
        string specjal = "!@#$%^&*()_-+=<>?/{}[]|";

        string lista = "";


        Console.WriteLine("Podaj dŁugość hasła");
        int n = int.Parse(Console.ReadLine());

        Console.WriteLine("Czy używać małych liter?(1- tak / 2 - nie)");
        int x = int.Parse(Console.ReadLine());

        if ( x == 1)
        {
            lista += male;
        }


        Console.WriteLine("Czy używać dużych liter?(1- tak / 2 - nie)");
        x = int.Parse(Console.ReadLine());

        if ( x == 1) 
        {
            lista += duze;
        }

        Console.WriteLine("Czy używać cyfr?(1- tak / 2 - nie)");
        x = int.Parse(Console.ReadLine());

        if ( x == 1)
        {
            lista += cyfry;
        }

        Console.WriteLine("Czy używać znaków specjalnych?(1- tak / 2 - nie)");
        x = int.Parse(Console.ReadLine());

        if (x == 1)
        { 
            lista += specjal;
        }
    
        if (lista == "")
        {
            Console.WriteLine("Brak wybranych opcji");
        }


        Random rnd = new Random();
        char[] haslo = new char[n];

        for (int i = 0; i < n; i++)
        {
            haslo[i] = lista[rnd.Next(lista.Length)];
        }

        Console.Write("Wygenerowane hasło: ");
        for (int i = 0;i < n; i++) 
        {
            Console.Write(haslo[i]);
        }
       // string noweHaslo = new string(haslo);

        //Console.WriteLine($"Wygenerowane hasło:{noweHaslo}");
    }
}