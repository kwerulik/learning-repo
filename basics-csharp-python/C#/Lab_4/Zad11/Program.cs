using System;

public class program
{
    public static void Main()
    {
        Console.WriteLine("Podaj ilosc kolumn");
        int n = int.Parse(Console.ReadLine());

        Console.WriteLine("Podaj ilosc wierszy");
        int m = int.Parse(Console.ReadLine());
            
        int[,] macierz = new int[m, n];
        Random rnd = new Random();

        //Przypisanie Wartosci do moacierzy
        for (int i = 0; i < m; i++) 
        {
            for (int j = 0; j < n; j++)
            {
                macierz[i, j] = rnd.Next(0,11);
            }
        }

        Console.WriteLine();

        //wyswietlanie macierzy
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                Console.Write($"{macierz[i,j], -3} ");
            }
            Console.WriteLine();    
        }

        Console.WriteLine();


        //Sumowanie kolumn
        int suma = 0;
        for (int i = 0;i < n; i++)
        {
            for(int j = 0;j < m; j++)
            {
                suma += macierz[j,i];
            }
            Console.WriteLine($"Suma {i + 1}. kolumny to {suma}");
            suma = 0;
        }

        Console.WriteLine();    

        //Najwiekszy elemeny wiersza
        int max = 0;
        int y = 0;

        for (int i = 0; i < m; i++)
        {
            for(int j = 0; j < n; j++)
            {
                if (macierz[i,j] >= max)
                {
                    max = macierz[i,j];
                    y = j;
                }
            }
            Console.WriteLine($"Najwiekszy element w {i + 1}. wierszu to {max} na {y + 1}. miejscu");
            max = 0;
            y = 0;
        }

        Console.WriteLine();    

        //suma głównej przekątnej
        for (int i = 0; i < m ; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (i == j)
                {
                    suma += macierz[i, j];
                }
            }
        }
        Console.WriteLine($"Suma głównej przekątnej to {suma}");
        
        //suma nad główna przekątną
        suma = 0;
        for (int i = 0;i < m ; i++)
        {
            for (int j = 0; j < n ; j++)
            {
                if(i < j) 
                {
                        suma += macierz[i,j];
                }
            }
        }
        Console.WriteLine($"Suma nad główną przekątną to {suma}");

        //suma pod główna przekątną
        suma = 0;
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (i > j)
                {
                    suma += macierz[i, j];
                }
            }
        }
        Console.WriteLine($"Suma pod główną przekątną to {suma}");

    }

}