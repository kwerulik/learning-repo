using System;

public class Program
{
    static void Main()
    {
        Console.WriteLine("Podaj słowo");

        string slowo = Console.ReadLine();
        slowo = slowo.ToLower();
        slowo = slowo.Replace(" ", "");

        int dlugosc = slowo.Length;

        int x = 0;

        for (int i = 0; i < dlugosc / 2; i++)
        {
            if (slowo[i] == slowo[dlugosc - 1 - i])
            {
                x++;
            }
        }

        if (x == dlugosc / 2)
        {
            Console.WriteLine("Podane słowo jest palindromem");
        }
        else
        { 
            Console.WriteLine("Podane słowo nie jest palindromem");
        }
    }
}
