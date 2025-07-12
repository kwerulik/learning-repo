using System;

public class Program
{
    static void Main()
    {
        Console.WriteLine("Podaj liczbe całkowita");
        int x = int.Parse(Console.ReadLine());

        int[] lista = new int[x];
        int len = 0;


        for (int i = 2; i <= x; i++) 
        {
            int n = 0;

            
            for (int j = 2; j <= x; j++)
            { 
                if (i % j == 0 )
                {
                    n++;
                }
            }

            if (n == 1) 
            {
                lista[len] = i;
                len++;
            }

        }


        for (int i = 0; i < len; i++) 
        {
            Console.Write($"{lista[i]}, ");
        }
    }
}