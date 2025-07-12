using System;

public class Program
{
    public static void Main()
    {
        Console.WriteLine("Wybierz opcje sortowania:");
        Console.WriteLine("1. Od najwiekszej");
        Console.WriteLine("2. Od najmniejszej");
        int x = int.Parse(Console.ReadLine());

        Console.WriteLine("Podaj ilosc lczb");
        int n = int.Parse(Console.ReadLine());

        if (n < 0 || n > 10)
        {
            Console.WriteLine("Zła ilość liczb");
            Environment.Exit(0);
        }


        Console.WriteLine("Podaj liczby");

        int[] ciag = new int[n];

        for (int i = 0; i < n; i++)
        {
            ciag[i] = int.Parse(Console.ReadLine());
        }

        Console.WriteLine("Podany ciag:");
        for (int i = 0;i < n; i++) 
        {
            Console.Write(ciag[i] + " ");
        }

        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - 1; j++)
            {
                if (ciag[j] > ciag[j +1])
                {
                    int z = ciag[j];
                    ciag[j] = ciag[j + 1];
                    ciag[j + 1] = z;  
                }
            }
        }

        Console.WriteLine();
        Console.WriteLine("Szuakny ciag:");
        if (x == 1)
        {
            for(int i = n - 1; i >= 0; i--) 
            {
                Console.Write(ciag[i] + " ");
            }
        }
        else if (x == 2) 
        {
            for (int i = 0; i < n; i++)
            {
                Console.Write(ciag[i] + " ");
            }
        }
        
    }
}