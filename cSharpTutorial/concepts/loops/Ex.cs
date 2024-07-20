/*
    Exercises

    Basic: Use a for loop to print the even numbers from 2 to 20.
    Intermediate: Use a while loop to reverse a given number.
    Advanced: Use a foreach loop to iterate over a list of objects and print their properties.
*/
using System;
namespace App.LoopEx
{
    class LoopExercise
    {
        public void ForExercise()
        {
            for (int i = 2; i <= 20; i += 2)
            {
                System.Console.Write($"{i}, ");
            }
            System.Console.WriteLine();
        }

        public void WhileExercise()
        {
            System.Console.Write("Enter number: ");
            string? inputNum = Console.ReadLine();
            
            if (string.IsNullOrEmpty(inputNum))
            {
                System.Console.WriteLine("Invalid input. Please enter a valid number.");
                return;
            }

            // Convert the input string to a list of integers representing the digits
            List<int> lNum = new();
            foreach (char c in inputNum)
            {
                if (char.IsDigit(c))
                {
                    lNum.Add(c - '0'); // Convert character to integer
                }
                else
                {
                    System.Console.WriteLine($"Invalid character '{c}' in input. Skipping.");
                }
            }

            // Print the digits to check if they are correctly stored
            System.Console.Write("Digits in the list:");
            foreach (var digit in lNum)
            {
                System.Console.Write($" {digit} ");
            }

            // Reverse the digits using a while loop
            int num = Convert.ToInt32(inputNum);
            List<int> reversedDigits = new();
            while (num > 0)
            {
                int digit = num % 10;
                reversedDigits.Add(digit);
                num /= 10;
            }

            // Print the reversed digits
            System.Console.Write("\nReversed digits:");
            foreach (var digit in reversedDigits)
            {
                System.Console.Write($" {digit} ");
            }
            System.Console.WriteLine();
        }
    }
}
