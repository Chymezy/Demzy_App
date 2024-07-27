namespace App.lesson1
{
    public class Numeric
    {
        public void NumericTypes() // Removed static keyword
        {
            int x = 20,
                y = 2,
                z = 7;
            System.Console.WriteLine($"{x} {y} {z}");
                
            int age = 23;
            Console.WriteLine(age);
            Console.WriteLine(int.MaxValue);
            Console.WriteLine(int.MinValue);
            System.Console.WriteLine(age.GetType());

            long bigNumber = 90000000L;
            System.Console.WriteLine(bigNumber);
            System.Console.WriteLine(long.MaxValue);
            System.Console.WriteLine(long.MinValue);
            System.Console.WriteLine(bigNumber.GetType());

            double negative = -55.2D;
            System.Console.WriteLine(negative);
            System.Console.WriteLine(double.MaxValue);
            System.Console.WriteLine(double.MinValue);
            System.Console.WriteLine(negative.GetType());

            float precision = 5.0000001F;
            System.Console.WriteLine(precision);
            System.Console.WriteLine(float.MaxValue);
            System.Console.WriteLine(float.MinValue);
            System.Console.WriteLine(precision.GetType());

            decimal money = 99.23M;
            System.Console.WriteLine(money);
            System.Console.WriteLine(decimal.MaxValue);
            System.Console.WriteLine(decimal.MinValue);
            System.Console.WriteLine(money.GetType());
        }
    }
}
