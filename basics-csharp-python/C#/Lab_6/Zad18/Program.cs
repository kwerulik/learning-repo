using System;
using System.Globalization;

class klient
{
    public string Imie { get; }
    public int Pin { get; }
    public int Saldo { get; }
    public klient(string imie, int pin, int saldo)
    {
        Imie = imie;
        Pin = pin;
        Saldo = saldo;
    }
}


class Program
{
    static void Main()
    {
        klient klient1 = new klient("Andrzej", 1234, 10000);
        klient klient2 = new klient("Wojtek", 0000, 44000);
        klient klient3 = new klient("Julia", 4444, 20);
        klient klient4 = new klient("Michal", 1111, 500000);

        List<klient> baza = new List<klient> { klient1, klient2, klient3, klient4};

        klient uzytkownik = null;
        while (uzytkownik == null) 
        {
            Console.WriteLine("Podaj Imie(Pierwsza litera duża):");
            string imie = Console.ReadLine();

            Console.WriteLine("Podaj Pin");
            int pin = int.Parse(Console.ReadLine());

            foreach (var klient in baza)
            {
                if (klient.Imie == imie && klient.Pin == pin)
                {
                    uzytkownik = klient;
                    break;
                }
            }
            if (uzytkownik == null)
            {
                Console.WriteLine("Złe dane logowania");
            }
        }

        Console.WriteLine($"Witaj {uzytkownik.Imie}");
        
        bool x = true;
        while (x)
        {
            Console.WriteLine();
            Console.WriteLine("Wybierz opdpoweidnia opcje");
            Console.WriteLine("1 - Wyświetlenie salda");
            Console.WriteLine("2 - Wpłata");
            Console.WriteLine("3 - Wypłata");
            Console.WriteLine("4 - Wylogowanie");
            int y = int.Parse(Console.ReadLine());

            if (y == 0)
            {
                Console.WriteLine("Źle wybrana opcja");
            }
            else if (y == 1)
            {
                Console.WriteLine(uzytkownik.Saldo);
            }
            else if (y == 2)
            {
                int z;
                Console.WriteLine("Podaj kwote wpłaty");
                int n = int.Parse(Console.ReadLine());

                z = uzytkownik.Saldo;
                z += n;

                foreach (var klient in baza)
                {
                    if (klient.Imie == uzytkownik.Imie && uzytkownik.Pin == klient.Pin)
                    { 
                        
                    }
                }
            }
        }

    }
}