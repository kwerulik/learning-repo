using System;

public class Program
{
    public static void Main()
    {
        double x;
        double y;
        double h;
        double pi = 3.1415;
        double V;
        double P;
        double PB;
        double PC;
        Console.WriteLine("Wybierz figure(podaj odpowienia liczbe):");
        Console.WriteLine("Ostroslup, wybierz 1 ");
        Console.WriteLine("");
        Console.WriteLine("Walec, wybierz 2");
        Console.WriteLine("");
        Console.WriteLine("Szescian, wybierz 3");
        y = double.Parse(Console.ReadLine());
        
        if (y == 1)
        {
            double hp;
            Console.WriteLine("Podaj wymiary ostroslupa");
            x = double.Parse(Console.ReadLine());
            h = double.Parse(Console.ReadLine());
            //Oblejtosc
            V = x * x * h / 3;
			V = Math.Round(V,2);
            // Pole Podastwy 
            P = x * x;
			P = Math.Round(P,2);
            // Pole powierzchni bocznej
            hp = Math.Sqrt((h * h) + (x/2 * x/2));
            PB = hp * x /2 ; 
            PB = PB * 4;
      		PB = Math.Round(PB,2);
			// Pole calkowite
            PC = PB + P;
			PC = Math.Round(PC,2);
            Console.WriteLine($"Szukane dane to: Objetosc = {V}, Pole Podstawy = {P}, wysokosc = {h}, Pole Boczne = {PB}, Pole Calkowite = {PC}");
        }
        else if (y == 2) 
        {
            Console.WriteLine("Podaj wymiary walca(wysokość, promień)");
            h = double.Parse(Console.ReadLine());
            x = double.Parse(Console.ReadLine());
            //Oblejtosc
            V = pi * x * x * h;
			V = Math.Round(V,2);
            // Pole Podastwy 
            P = pi * x * x;
			P = Math.Round(P,2);
            // Pole powierzchni bocznej
            PB = 2 * pi * x * h;
			PB = Math.Round(PB,2);
            // Pole calkowite
            PC = PB + P * 2;
			PC = Math.Round(PC,2);
            Console.WriteLine($"Szukane dane to: Objetosc = {V}, Pole Podstawy = {P}, wysokosc = {h}, Pole Boczne = {PB}, Pole Calkowite = {PC}");
        }
		else if (y == 3) 
        {
            Console.WriteLine("Podaj bok sześcianu");
            x = double.Parse(Console.ReadLine());
            //Oblejtosc
            V = x * x * x;
			V = Math.Round(V,2);
            // Pole Podastwy 
            P = x * x;
			P = Math.Round(P,2);
            // Pole powierzchni bocznej
            PB = P * 4;
			PB = Math.Round(PB,2);
            // Pole calkowite
            PC = P * 6;
			PC = Math.Round(PC,2);
            Console.WriteLine($"Szukane dane to: Objetosc = {V}, Pole Podstawy = {P}, wysokosc = {x}, Pole Boczne = {PB}, Pole Calkowite = {PC}");
        }
    }
}