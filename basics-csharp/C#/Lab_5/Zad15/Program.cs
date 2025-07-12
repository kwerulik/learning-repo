using System;

public class Program
{
    static void Main()
    {
        Console.WriteLine("Podaj pojemnosc plecaka");
        int pojemnosc = int.Parse(Console.ReadLine());

        Console.WriteLine("Podaj ilość przemiotów");
        int ilosc = int.Parse(Console.ReadLine());

        string[,] przedmioty = new string[ilosc, 3];
        for (int i = 0; i < ilosc; i++)
        {
            Console.WriteLine($"Podaj nazwe {i + 1}. przedmiotu");
            przedmioty[i, 0] = Console.ReadLine();

            Console.WriteLine($"Podaj wage {i + 1}. przedmiotu");
            przedmioty[i, 1] = Console.ReadLine();

            Console.WriteLine($"Podaj wartosc {i + 1}. przedmiotu");
            przedmioty[i, 2] = Console.ReadLine();
        }

 /*     
        przedmioty[0, 0] = "Zegarek";
        przedmioty[0, 1] = "3"; //waga
        przedmioty[0, 2] = "6"; //wartosc

        przedmioty[1, 0] = "Berlinki";
        przedmioty[1, 1] = "1";
        przedmioty[1, 2] = "1";

        przedmioty[2, 0] = "Pistolet";
        przedmioty[2, 1] = "2";
        przedmioty[2, 2] = "3";

        przedmioty[3, 0] = "Ser";
        przedmioty[3, 1] = "3";
        przedmioty[3, 2] = "7";

        przedmioty[4, 0] = "Piłka";
        przedmioty[4, 1] = "1";
        przedmioty[4, 2] = "2";
 */

        int[] plecak = new int[ilosc];

        while (pojemnosc > 0)
        {
            int najlepszyIndex = -1;
            double najlepszyStosunek = 0;

            for (int i = 0; i < ilosc; i++)
            {
                if (plecak[i] == 0 && int.Parse(przedmioty[i, 1]) <= pojemnosc)
                {
                    double stosunek = int.Parse(przedmioty[i, 2]) / double.Parse(przedmioty[i, 1]);
                    if (stosunek > najlepszyStosunek)
                    {
                        najlepszyIndex = i;
                        najlepszyStosunek = stosunek;
                    }
                }
            }

            if (najlepszyIndex == -1)
            {
                break;
            }

            plecak[najlepszyIndex] = 1;
            pojemnosc -= int.Parse(przedmioty[najlepszyIndex, 1]);
        }



        int sumWaga = 0;
        int sumWartosc = 0;

        Console.WriteLine("Zapakowane przedmioty:");

        for (int i = 0; i < ilosc; i++)
        {
            if (plecak[i] == 1)
            {
                Console.WriteLine(przedmioty[i, 0]);
                sumWaga += int.Parse(przedmioty[i, 1]);
                sumWartosc += int.Parse(przedmioty[i, 2]);
            }
        }

        Console.WriteLine($"Sumaryczna waga: {sumWaga}");
        Console.WriteLine($"Sumaryczna wartość: {sumWartosc}");
    }
}

