using System;

public class Program
{
    public static void Main()
    {
        Console.WriteLine("Podaj liczbe naturalna z przedziału od 1 - 10");
        int n = int.Parse(Console.ReadLine());

        double[] ciag = new double[n + 1];
        ciag[0] = 1;

        if (n <= 0 || n >= 11)
        {
            Console.WriteLine("Bład");
            return;
        }

        for (int i = 1; i <= n; i++)
        {
            ciag[i] = i * ciag[i - 1] + 1.0 / i;
        }

        for (int i = 1; i <= n ; i++) 
        {

            Console.WriteLine(ciag[i].ToString("0.0000"));     
        }
    }
}