using System;

public class Program
{
    public static void Main()
    {
        Console.WriteLine("Wybier odpiweidnia opcje");
        Console.WriteLine("1. - AB --> BA");
        Console.WriteLine("2. - ABC -->CAB");
        Console.WriteLine("3. - ABCD --> BADC");
        Console.WriteLine("4. - ABCD --> DABC");

        int x = int.Parse(Console.ReadLine());
        
        int[] ciag = new int[4];
        int[] n = new int[4];

        switch (x)
        {
            case 1:
                Console.WriteLine("Podaj dwie liczby");
                ciag = Console.ReadLine();
                n[0] = ciag[0];
                ciag[0] = ciag[1];
                ciag[1] = n[0];
                break;
        }

        Console.WriteLine($"Szukane liczby to: {ciag[]}");
    }
}