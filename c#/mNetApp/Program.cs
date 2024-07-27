// Program.cs
using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
        int x = 8;
        int y = 7;
        double z = x/(double)y;

        Console.WriteLine($"sum: {z}");
        Console.WriteLine(y.GetType());

        bool isNum = true;
        if (x < 5)
        {
            isNum = false;
        }
        Console.WriteLine(isNum);

        // Call method from MyFile.cs
        MyFile.PrintMessage();
    }
}
