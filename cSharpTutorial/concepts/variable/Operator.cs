using System.Xml;

namespace App.Operator
{
    class Operators
    {

        public void AssignmentOperator()
        {
            // + - * / applies to integers
            int age = 2;
            age++;
            age = age + 1;
            age += 1;
            System.Console.WriteLine(age);
            --age;
            age = age - 1;
            age -= 1;
            System.Console.WriteLine(age);

            int i = 0;
            System.Console.WriteLine($"value: {i++}");
            // ++i;
            System.Console.WriteLine($"value: {i}");

            int c = 5;
            c += 2; // c = c + 2; Output: 7
            c -= 3; // c = c - 3; Output: 4
            c *= 4; // c = c * 4; Output: 16
            c /= 2; // c = c / 2; Output: 8
            c %= 3; // c = c % 3; Output: 2

            // text types use only "+"
            string name = "Josh";
            name += " is a programmer";
            System.Console.WriteLine(name);

            char letter = 'a';
            letter += 'c';
            System.Console.WriteLine(letter);
        }
        public void ArithmeticOperator()
        {
            int a = 10;
            int b = 3;

            System.Console.WriteLine($"sum: {a+b}");
            System.Console.WriteLine($"sub: {a-b}");
            System.Console.WriteLine($"mul: {a*b}");
            System.Console.WriteLine($"div: {a/b}");
            System.Console.WriteLine($"mod: {a%b}");
        }
        public void ComparisonOperator()
        {
            int d = 10;
            int e = 15;

            System.Console.WriteLine(d == e);
            System.Console.WriteLine(d != e);
            System.Console.WriteLine(d <= e);
            System.Console.WriteLine(d >= e);
            System.Console.WriteLine(d < e);
            System.Console.WriteLine(d > e);
        }
        public void LogicalOperator()
        {
            bool f = true;
            bool g = false;

            System.Console.WriteLine(f && g);
            System.Console.WriteLine(f || g);
            System.Console.WriteLine(!f);
            System.Console.WriteLine(!g);
        }
        public void BitwiseOperator()
        {
            int h = 5;  // Binary: 0101
            int i = 3;  // Binary: 0011
            Console.WriteLine(h & i); // Output: 1  (Binary: 0001)
            Console.WriteLine(h | i); // Output: 7  (Binary: 0111)
            Console.WriteLine(h ^ i); // Output: 6  (Binary: 0110)
            Console.WriteLine(~h);    // Output: -6 (Binary: 1010 in 2's complement)
            Console.WriteLine(h << 1); // Output: 10 (Binary: 1010)
            Console.WriteLine(h >> 1); // Output: 2  (Binary: 0010)

        }
        public void ConditionalOperator()
        {
            int j = 30;
            int k = 20;
            int min = j < k ? j : k;
            System.Console.WriteLine(min);
        }
        public void NullOperator()
        {
            string? l = null;
            string m = l ?? "default";
            System.Console.WriteLine(m);

            string? n = "hello";
            System.Console.WriteLine($"str length: {n?.Length}");

            int score = 65;
            string grade = score >= 70 ? "passed" : "failed";
            System.Console.WriteLine(grade);

            string? input = null;
            string message = input ?? "default message";
            System.Console.WriteLine(message);
        }
        public string GetGreeting(bool isMorning)
        {
            return isMorning ? "Good Morning" : "Good Evening";
        }
        public string CheckEvenOrOdd(int num)
        {
            // Write a method CheckEvenOrOdd that takes an integer as a parameter and returns "Even" 
            // if the number is even, and "Odd" if the number is odd.
            // Use the ternary operator within the method.

            return num % 2 == 0 ? "Even" : "Odd";
        }
    }
}