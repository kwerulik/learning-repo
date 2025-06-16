using System;

class Program
{
    static void Main()
    {
        int[,] macierz =
        {
            {4, 0, 2, 0, 0, 5, 0, 0, 0, 3},
            {0, 5, 0, 4, 0, 0, 0, 3, 2, 0},
            {0, 0, 4, 0, 3, 0, 5, 0, 0, 4},
            {3, 0, 0, 5, 0, 4, 0, 0, 2, 0},
            {0, 4, 0, 0, 2, 0, 3, 0, 0, 5},
            {2, 0, 3, 0, 0, 0, 4, 5, 0, 0},
            {0, 3, 0, 2, 0, 0, 0, 4, 5, 0},
            {5, 0, 0, 0, 4, 0, 0, 2, 0, 3},
            {0, 2, 5, 0, 0, 3, 0, 0, 4, 0},
            {0, 0, 0, 3, 5, 0, 2, 0, 0, 4},
            {3, 0, 4, 0, 0, 0, 5, 0, 0, 2},
            {0, 4, 0, 5, 0, 3, 0, 0, 0, 2},
            {5, 0, 0, 0, 2, 0, 0, 3, 0, 4},
            {0, 3, 2, 0, 0, 4, 0, 5, 0, 0},
            {4, 0, 0, 3, 0, 5, 0, 0, 2, 0},
            {0, 2, 0, 0, 4, 0, 3, 0, 5, 0},
            {0, 0, 3, 4, 0, 0, 2, 0, 0, 5},
            {2, 5, 0, 0, 3, 0, 0, 4, 0, 0},
            {0, 0, 4, 0, 0, 2, 0, 3, 5, 0},
            {0, 4, 0, 2, 0, 0, 5, 0, 3, 0}
        };

        string[] users = new string[macierz.GetLength(0)];
        string[] items = new string[macierz.GetLength(1)]; 

        for (int i = 0; i < macierz.GetLength(0); i++)
        {
            users[i] = "user" + (i + 1);
        }

        for (int i = 0; i < macierz.GetLength(1); i++)
        {
            items[i] = "items" + (i + 1);
        }


        //Wyswietlanie macierzys
        Console.Write("User");

        for (int i = 0; i < macierz.GetLength(1); i++)
        {
            Console.Write($"{items[i], 8}");
        }
        Console.WriteLine();


        for (int i = 0; i < macierz.GetLength(0); i++)
        {
            Console.Write($"{users[i], -8}");

            for(int j = 0; j < macierz.GetLength(1); j++)
            {
                Console.Write($"{macierz[i, j], -8}");
            }
            Console.WriteLine();
        }
    }
}