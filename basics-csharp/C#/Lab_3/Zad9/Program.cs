using System;

public class Program
{
    public static void Main()
    {
        Console.WriteLine("Podaj wiadomość do zaszyfrowania");
        string wiadomosc = Console.ReadLine();

        Console.WriteLine("Podaj przesuniecie");
        int x = int.Parse(Console.ReadLine());

        int n = wiadomosc.Length;

        string szyfr = "";

        for (int i = 0; i < n; i++) 
        {
            if (char.IsLetter(wiadomosc[i]))
            {
                char litera = (char)(wiadomosc[i] + x);



                if (wiadomosc[i] >= 'a' && litera > 'z' && wiadomosc[i] <= 'z')
                {
                    litera = (char)(litera - 26);
                }

                if (wiadomosc[i] >= 'A' && litera > 'Z' && wiadomosc[i] <= 'Z')
                {
                    litera = (char)(litera - 26);
                }
                szyfr += litera;
            }
            else
            {
                szyfr += wiadomosc[i];
            }
        }
        Console.WriteLine($"Zaszyfrowana wiadomość to: {szyfr}");
    }
}