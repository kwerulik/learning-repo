using System;

public class Program
{
    public static void Main()
    {
        int x;
        int y;
        int z;
        int n;
        Console.WriteLine ("Podaj x");
        x = int.Parse(Console.ReadLine());
        
        Console.WriteLine ("Aby obliczyc(wybierz odpowiedznia liczbe):");
        Console.WriteLine ("x^4");
        Console.WriteLine ("1");
        Console.WriteLine ("");
        Console.WriteLine ("x^6");
        Console.WriteLine ("2");
        Console.WriteLine ("");
        Console.WriteLine ("x^7");
        Console.WriteLine ("3");
        Console.WriteLine ("");
        Console.WriteLine ("x^8");
        Console.WriteLine ("4");
        Console.WriteLine ("");
        Console.WriteLine ("x^3+ x^10");
        Console.WriteLine ("5");
        Console.WriteLine ("");
        Console.WriteLine ("x^5 + x^13");
        Console.WriteLine ("6");
        Console.WriteLine ("");
        Console.WriteLine ("x^2 + x^5 + x^17");
        Console.WriteLine ("7");
        Console.WriteLine ("");
        y = int.Parse(Console.ReadLine());        

        if(y == 1)
        {
            x = x * x;
            x = x * x;
            Console.WriteLine($"Wynik to {x}");
        }
        else if(y == 2)
        {
            z = x * x;
            x = z * x;
            x = x * x;
            Console.WriteLine($"Wynik to {x}");
        }
        else if(y == 3)
        {
            z = x * x;
            x = z * x;
            x = x * z * z;
            Console.WriteLine($"Wynik to {x}");
        }
        else if (y == 4)
        {
            z = x * x;
            x = z * z;
            x = x * x;
            
            Console.WriteLine($"Wynik to {x}");
        }
        else if (y == 5)
        {
            z = x * x;
            y = z * x;
            z = z * y;
            z = z * z;
            x = y + z;
            Console.WriteLine($"Wynik to {x}");
        }
        else if (y == 6)
        {
            z = x * x;
            y = z * x;
            z = y * z;
            y = y * z * z;
            x =  y + z;
            Console.WriteLine($"Wynik to {x}");
        }
        else if (y == 7)
        {
            z = x * x;
            y = z * x;
            y = z * y;
            n = y * y * y * z;
            x = z + y + n;
            Console.WriteLine($"Wynik to {x}");
        }
        else 
        {
            Console.WriteLine("Blad w danych");
        }
    }
}