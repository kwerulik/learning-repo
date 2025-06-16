using System;
using System.Timers;

public class Program
{
    public static void Main()
    {
        int wyjatek = 0;
        Console.WriteLine("Podaj rok:");
        int rok = int.Parse(Console.ReadLine());

        Console.WriteLine("Podaj miesiac:");
        int miesiac = int.Parse(Console.ReadLine());

        Console.WriteLine("Podaj dzien:");
        int dzien = int.Parse(Console.ReadLine());

        Console.WriteLine();
        if (rok <= 0)
        {
            Console.WriteLine("Błąd w podanym roku");
            Environment.Exit(0);
        }

        if (rok % 4 == 0) 
        {
            if (rok % 400 == 0) 
            {
                wyjatek += 1;
            }
            else 
            {
                wyjatek += 0;
            }
        }

        if (miesiac <= 0 || miesiac >= 13)
        {
            Console.WriteLine("Błąd w miesiacu");
            Environment.Exit(1);
        }

        if (miesiac % 2 == 0) 
        {
            if (dzien <= 0 || dzien >= 31)
            {
                Console.WriteLine("Błąd w dniu");
                Environment.Exit(2);
            }
        }
        else
        {
            if (dzien <= 0 || dzien >= 32)
            {
                Console.WriteLine("Błąd w dniu");
                Environment.Exit(2);
            }
        }

        if (wyjatek == 1) 
        {
            Console.WriteLine("Rok jest przestępny");
            if (dzien <= 0 || dzien >= 30)
            {
                Console.WriteLine("Błąd, luty w roku przestepnym ma 29 dni");
                Environment.Exit(3);
            }
        }
        else
        {
            Console.WriteLine("Rok nie jest przestępny");
            if(dzien <= 0 || dzien >= 29) 
            {
                Console.WriteLine("Błąd, luty ma 28 dni");
                Environment.Exit(4);
            }
        }

        if (miesiac >= 3 && miesiac <= 10) 
        {
            if (miesiac == 3 && dzien <=19)
            {
                Console.WriteLine("Nie jest to okres letni");
            }
            else if (miesiac == 9 && dzien >= 23)
            {
                Console.WriteLine("Nie jest to okres leni");
            }
            else
            {
                Console.WriteLine("Jest to okres letni");
            }
        }
        else
        {
            Console.WriteLine("Nie jest to okers letni");
        }
    }
}