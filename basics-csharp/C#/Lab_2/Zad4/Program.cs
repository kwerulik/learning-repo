using System;

public class Program
{
    public static void Main()
    {
        double max;
        double suma;
        Console.WriteLine("Podaj wymiary trórjkąta:");
        double a = double.Parse(Console.ReadLine());
        double b = double.Parse(Console.ReadLine());
        double c = double.Parse(Console.ReadLine());

        double p = (a + b + c) / 2;

        if (a + b <= c || a + c <= b || b + c <= a)
        {
            Console.WriteLine("Taki trójkąt nie istnije");
        }
        else
        {
            double P = Math.Sqrt(p * (p - a) * (p - b) * (p - c));
            P = Math.Round(P, 2);
            Console.WriteLine($"Szukane pole to {P}");
        }
    }
}