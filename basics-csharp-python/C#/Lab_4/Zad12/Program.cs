using System;
using System.ComponentModel;

public class Program
{
    public static void Main()
    {
        string[,] baza = new string[100, 5];
        int iloscKolumn = 5;
        baza[0, 0] = "Index";
        baza[0, 1] = "Imie";
        baza[0, 2] = "Nazwisko";
        baza[0, 3] = "Kierunek";
        baza[0, 4] = "Grupa";

        baza[2, 0] = "12345";
        baza[2, 1] = "Jan";
        baza[2, 2] = "Kowalski";
        baza[2, 3] = "Informatyka";
        baza[2, 4] = "B1";

        baza[3, 0] = "23456";
        baza[3, 1] = "Anna";
        baza[3, 2] = "Nowak";
        baza[3, 3] = "Matematyka";
        baza[3, 4] = "V3";

        baza[4, 0] = "98765";
        baza[4, 1] = "Michał";
        baza[4, 2] = "Wiśniewski";
        baza[4, 3] = "Skandynawistyka";
        baza[4, 4] = "S5";

        while (true)
        {

            Console.WriteLine("\nWybierz opcje:");
            Console.WriteLine("1. Dodawamie studentów");
            Console.WriteLine("2. Wyświetlenie całej bazy");
            Console.WriteLine("3. Wyszukanie studenta");
            Console.WriteLine("4. Usuniecie studenta");
            Console.WriteLine("5. Wyjscie");
            int wybor = int.Parse(Console.ReadLine());

            Console.WriteLine();
            switch (wybor)
            {

                //Dodawanie studenta
                case 1:
                    Console.WriteLine("Podaj ilu studentów dodac");
                    int n = int.Parse(Console.ReadLine());
                    n = n + iloscKolumn;

                    while(iloscKolumn < n)
                    {
                        bool ZlyIndex = false;
                        Console.WriteLine($"\nDodawanie {iloscKolumn - 1}. studenta(index, imie, nazwisko, kierunek, grupa)");
                        for (int j = 0; j < 5; j++)
                        {
                            switch (j)
                            {
                                case 0:
                                    Console.WriteLine("Podaj index(5 cyfr)");
                                    baza[iloscKolumn, j] = Console.ReadLine();
                                    for (int i = 0; i < iloscKolumn; i++)
                                    {
                                        if (baza[iloscKolumn, j].Length != 5 || baza[i, 0] == baza[iloscKolumn,j])
                                        {
                                            ZlyIndex = true;
                                        }
                                    }
                                    break;

                                case 1:
                                    Console.WriteLine("Podaj imie");
                                    baza[iloscKolumn, j] = Console.ReadLine();
                                    break;

                                case 2:
                                    Console.WriteLine("Podaj Nazwisko");
                                    baza[iloscKolumn, j] = Console.ReadLine();
                                    break;  

                                case 3:
                                    Console.WriteLine("Podaj Kierunek");
                                    baza[iloscKolumn, j] = Console.ReadLine();
                                    break;
                                case 4:
                                    Console.WriteLine("Podaj Grupe");
                                    baza[iloscKolumn, j] = Console.ReadLine();
                                    break;
                            }
                        }
                        if (ZlyIndex)
                        {
                            Console.WriteLine("Zły index");
                            continue;
                        }
                        else
                        {
                            iloscKolumn++;
                        }
                    }
                    break;


                //Wyswietlanie bazy
                case 2:
                    Console.WriteLine("Aktualna baza studentów");

                    for (int i = 0; i < iloscKolumn; i++)
                    {
                        for (int j = 0; j < 5; j++)
                        {
                            Console.Write($"{baza[i, j],-16}|");
                        }
                        Console.WriteLine();
                    }

                    break;


                //Wyszukiwanie studentow
                case 3:
                    Console.WriteLine("Podaj index szukanego Studenta");
                    string index = Console.ReadLine();
                    int z = 0;

                    for (int i = 0; i < iloscKolumn; i++)
                    {
                        if (baza[i, 0] == index)
                        {
                            z = i;
                            break;
                        }
                    }
                    if (z == 0)
                    {
                        Console.WriteLine("Nie ma takiego studenta");
                    }
                    else
                    {
                        Console.WriteLine("Szukany student");
                        Console.WriteLine($"{baza[z, 0],-16}|{baza[z, 1],-16}|{baza[z, 2],-16}|{baza[z, 3],-16}|{baza[z, 4]}");
                    }
                    break;


                //Usuwanie studenta
                case 4:

                    Console.WriteLine("Podaj index Studenta");
                    string usuwanie = Console.ReadLine();
                    int u = 0;

                    for (int i = 0; i < iloscKolumn; i++)
                    {
                        if (baza[i, 0] == usuwanie)
                        {
                            u = i;
                            break;
                        }
                    }

                    if (u == 0)
                    {
                        Console.WriteLine("Nie ma takiego studenta");
                    }
                    else
                    {
                        Console.WriteLine("Student do usuniecia");
                        Console.WriteLine($"{baza[u, 0],-16}|{baza[u, 1],-16}|{baza[u, 2],-16}|{baza[u, 3],-16}|{baza[u, 4]}");

                        for (int i = u;i < iloscKolumn;i++)
                        {
                            baza[i, 0] = baza[i + 1, 0];
                            baza[i, 1] = baza[i + 1, 1];
                            baza[i, 2] = baza[i + 1, 2];
                            baza[i, 3] = baza[i + 1, 3];
                            baza[i, 4] = baza[i + 1, 4];
                        }
                        iloscKolumn--;
                    }

                    break;


                //Wyjscie
                case 5:
                    Console.WriteLine("Zamykanie programu");
                    return;

            }
        }

    }
}