using System;

public class Progeram 
{
    public static void Main()
    {
        Console.WriteLine("Podaj liczbe od 1  do 99 999 999");
        string liczba = Console.ReadLine();

        int suma = 0;
        int n = liczba.Length;
        if(int.TryParse(liczba, out int x) && x >= 1 && x <= 99999999)
        {

            for (int i = 0; i < n; i++) 
            {
                if (liczba[i] % 2 == 0)
                {
                    suma += 1; 
                }
            }
        }
        else
        {
            Console.WriteLine("Błąd w podanej liczbie");
            Environment.Exit(0);
        }

        Console.WriteLine($"Podana liczba ma {n} cyfr, w tym {suma} parzystych");
    }
}