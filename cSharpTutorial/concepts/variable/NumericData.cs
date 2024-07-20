namespace App.lesson1
{
    public class Numeric
    {
        public void NumericTypes()
        {
            int x = 20,
                y = 2,
                z = 7;
            System.Console.WriteLine($"{x} {y} {z}");
            
            var textAge = "23"; // easier way to declare datatype but must be initialzed
            int age = Convert.ToInt32(textAge);
            Console.WriteLine($"age: {age}");
            Console.WriteLine($"max range: {int.MaxValue}");
            Console.WriteLine($"min range: {int.MinValue}");
            System.Console.WriteLine($"class of \"int\": {age.GetType()}");

            string textBigNumber = "90000000";
            var textConvt = Convert.ToInt64(textBigNumber);
            long bigNumber = 90000000L;
            System.Console.WriteLine($"converted long: {textConvt}");
            System.Console.WriteLine(bigNumber);
            System.Console.WriteLine(long.MaxValue);
            System.Console.WriteLine(long.MinValue);
            System.Console.WriteLine(bigNumber.GetType());

            string textNegative = "-88.6";
            double tNegative = Convert.ToDouble(textNegative);
            var negative = -55.2D;
            System.Console.WriteLine($"converted textNum: {tNegative}");
            System.Console.WriteLine(negative);
            System.Console.WriteLine(double.MaxValue);
            System.Console.WriteLine(double.MinValue);
            System.Console.WriteLine(negative.GetType());

            string textPrecision = "6.000002";
            float tPrecision = Convert.ToSingle(textPrecision);
            var precision = 5.0000001F;
            System.Console.WriteLine($"converted textNum: {tPrecision}");
            System.Console.WriteLine(precision);
            System.Console.WriteLine(float.MaxValue);
            System.Console.WriteLine(float.MinValue);
            System.Console.WriteLine(precision.GetType());

            var textMoney = "89.93";
            decimal tMoney = Convert.ToDecimal(textMoney);
            decimal money = 99.23M;
            System.Console.WriteLine($"converted textNum: {tMoney}");
            System.Console.WriteLine(money);
            System.Console.WriteLine(decimal.MaxValue);
            System.Console.WriteLine(decimal.MinValue);
            System.Console.WriteLine(money.GetType());
        }
    }
}
