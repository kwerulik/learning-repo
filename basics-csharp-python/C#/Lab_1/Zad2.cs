using System;

public class Program
{
    public static void Main()
    {
        int x;
        int y;
        Console.WriteLine ("Dwie pierwsze liczby");
        x = int.Parse(Console.ReadLine());
        y = int.Parse(Console.ReadLine());
        
        x = x + y;
        
        Console.WriteLine ("Trzecia liczbe");
        y = int.Parse(Console.ReadLine());
        
        x = x + y;
        
        Console.WriteLine ($"Szukana suma to {x}");
    }
}