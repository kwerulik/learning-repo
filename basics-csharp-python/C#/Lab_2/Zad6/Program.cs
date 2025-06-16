using System;
using System.ComponentModel.DataAnnotations;
public class Program
{
    public static void Main()
    {
        Console.WriteLine("Podaj cene Samochodu");
        double cena = double.Parse(Console.ReadLine());

        Console.WriteLine("Podaj spalanie Samochodu");
        double spalanie = double.Parse(Console.ReadLine());

        string oplacalnosc;
        string oszczednosc;

        if (cena <= 0)
        {
            oplacalnosc = "blad";
        }
        else if (cena <= 100000)
        {
            oplacalnosc = "niedrogi";
        }
        else 
        {
            oplacalnosc = "drogi";
        }

        if (spalanie <= 0) 
        {
            oszczednosc = "blad";
        }
        else if (spalanie <= 7)
        {
            oszczednosc = "oszczedny";
        }
        else 
        {
            oszczednosc = "nieoszczedny";
        }

        Console.WriteLine($"Samochód jest {oplacalnosc} i {oszczednosc}");
    }
}