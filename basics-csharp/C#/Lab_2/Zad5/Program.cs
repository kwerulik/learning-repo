using System;
using System.Security.Cryptography;

public class Program
{
    public static void Main()
    {
        Console.WriteLine("Wybierz opcje");
        Console.WriteLine("1. AB -> BA");
        Console.WriteLine("2. ABC -> CAB");
        Console.WriteLine("3. ABCD -> BADC");
        Console.WriteLine("4. ABCD -> DABC");
        int x = int.Parse(Console.ReadLine());

        int y = 0;
        int[] ciag;

        switch(x)
        {
            case 1:
                Console.WriteLine("Podaj dwie liczby");
                ciag = new int[2];

                for (int i = 0; i < 2; i++) 
                {
                    ciag[i] = int.Parse(Console.ReadLine());
                }

                y = ciag[0];
                ciag[0] = ciag[1];
                ciag[1] = y;

                Console.WriteLine("Szukany ciag:");
                for (int i = 0; i < 2; i++)
                {
                    Console.Write(ciag[i] + " ");
                }
                break;

            case 2:
                Console.WriteLine("Podaj trzy liczby");
                ciag = new int[3];

                for (int i = 0; i < 3; i++)
                {
                    ciag[i] = int.Parse(Console.ReadLine());
                }

                y = ciag[0];
                ciag[0] = ciag[2];
                ciag[2] = ciag[1];
                ciag[1] = y;

                Console.WriteLine("Szukany ciag:");
                for (int i = 0; i < 3; i++)
                {
                    Console.Write(ciag[i] + " ");
                }
                break;
            
            case 3:
                Console.WriteLine("Podaj cztery liczby");
                ciag = new int[4];

                for (int i = 0; i < 4; i++)
                {
                    ciag[i] = int.Parse(Console.ReadLine());
                }

                y = ciag[0];
                ciag[0] = ciag[1];
                ciag[1] = y;

                y = ciag[2];
                ciag[2] = ciag[3];
                ciag[3] = y;

                Console.WriteLine("Szukany ciag:");
                for (int i = 0; i < 4; i++)
                {
                    Console.Write(ciag[i] + " ");
                }

                break;

            case 4:
                Console.WriteLine("Podaj cztery liczby");
                ciag = new int[4];

                for (int i = 0; i < 4; i++)
                {
                    ciag[i] = int.Parse(Console.ReadLine());
                }

                y = ciag[0];
                ciag[0] = ciag[3];
                ciag[3] = ciag[2];
                ciag[2] = ciag[1];
                ciag[1] = y;
                
                Console.WriteLine("Szukany ciag:");
                for (int i = 0; i < 4; i++)
                {
                    Console.Write(ciag[i] + " ");
                }
                break;

            default:
                Console.WriteLine("Bład w podanej opcji");
                Environment.Exit(0);
                break;
        }


    }
}