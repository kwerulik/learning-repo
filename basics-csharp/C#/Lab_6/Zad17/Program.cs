using System;

public class Program
{
    static void Main()
    {
        bool n = true;

        while (n)
        {
            // 1 - kamien
            // 2 - papier
            // 3 - mozyce
            Console.WriteLine("Wybierz swój ruch");
            Console.WriteLine("1 - kamien");
            Console.WriteLine("2 - papier");
            Console.WriteLine("3 - nozyce");

            int ruch = int .Parse(Console.ReadLine());
            
            Random rnd = new Random();
            int x = rnd.Next(1,4);

            Console.WriteLine();

            if (x == 1) 
            {
                Console.WriteLine("Komputer wybrał Kamień");
                if (ruch == 1) 
                {
                    Console.WriteLine("Kamien - Kamien, remis");
                }
                else if (ruch == 2) 
                {
                    Console.WriteLine("Papier - Kamien, gracz wygrał");
                }
                else if (ruch == 3) 
                {
                    Console.WriteLine("Nożyce - Kamien, komputer wygrał");
                }
            }

            else if (x == 2)
            {
                Console.WriteLine("Kompueter wybrał Papier");
                if (ruch == 1)
                {
                    Console.WriteLine("Kamien - Papier, kompuer wygrał");
                }
                else if (ruch == 2)
                {
                    Console.WriteLine("Papier - Papier, remis");
                }
                else if (ruch == 3)
                {
                    Console.WriteLine("Nożyce - Papier, gracz wygrał");
                }
            }

            else if (x == 3)
            {
                Console.WriteLine("Kompueter wybrał Nożyce");
                if (ruch == 1)
                {
                    Console.WriteLine("Kamien - Nożyce, gracz wygrał");
                }
                else if (ruch == 2)
                {
                    Console.WriteLine("Papier - Nożyce, komputer wygrał");
                }
                else if (ruch == 3)
                {
                    Console.WriteLine("Nożyce - Nożyce, remis");
                }
            }

            Console.WriteLine();
            Console.WriteLine("Czy chcesz kontynłować?");
            Console.WriteLine("1 - Tak");
            Console.WriteLine("2 - Nie");
            int odp = int.Parse(Console.ReadLine());

            if (odp == 2)
            {
                n = false;
            }
            Console.WriteLine();
        }
    }
}