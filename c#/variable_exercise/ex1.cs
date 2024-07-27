using System;
using System.Diagnostics.CodeAnalysis;


class Application{
    public static void Main(string[] arg)
    {
        // VariableEx.Variable();
        // VariableEx2.Arithemtic(5,4);
        // TypeConversion.Conversion();
        // StringConcat.Concatenate("Joshua", "Benjamin");
        // VariableScope.Scope();
        // Constants.VarConstant(4);
        // Enumerations.Enumerate();
        SwitchCase.Switcher(3);
    }
}

//Task: Declare an integer variable named age and initialize it with your age. 
//Declare a string variable named name and initialize it with your name. Print both variables to the console.
class VariableEx
{
    public static void Variable()
    {
        int age = 30;
        string name = "Benjamin Joshua";

        Console.WriteLine($"name: {name}\n age: {age}");
    }
}

// Task: Declare two integer variables a and b, and assign them values. 
// Perform basic arithmetic operations (addition, subtraction, multiplication, and division)
// and print the results.

class VariableEx2
{
    public static void Arithemtic(int a, int b)
    {
        int sum = a + b;
        int sub = a - b;
        int div = a / b;
        int mul = a * b;
        Console.WriteLine($"sum: {sum}");
        Console.WriteLine($"subtraction: {sub}");
        Console.WriteLine($"division: {div}");
        Console.WriteLine($"multiplication: {mul}");
    }
}

    // Exercise 3: Type Conversion
    // Task: Declare a double variable and assign it a value. 
    // Convert the double to an integer and print both values.
class TypeConversion
{
    public static void Conversion()
    {
        double myDoubleVariable = 23.54;
        int newConvert = (int)myDoubleVariable;
        Console.WriteLine(newConvert);
        Console.WriteLine(newConvert.GetType());
        Console.WriteLine(myDoubleVariable.GetType());
    }
}

// Exercise 4: String Concatenation
// Task: Declare two string variables firstName and lastName. 
// Concatenate them to form a full name and print it.

class StringConcat
{
    public static void Concatenate(string firstName, string lastName)
    {
        string fullName = firstName + lastName;
        // Console.WriteLine($"full name: {firstName} {lastName}");
        Console.WriteLine($"full name: {fullName}");

    }
}

// Exercise 5: Scope of Variables

//     Task: Declare a variable inside a method and another one inside a loop. 
//     Print their values to understand the scope.

class VariableScope
{
    public static void Scope()
    {
        string varMethod = "methodVariable";
        for (int i = 0; i < 2; i++){
            Console.WriteLine(i);
        }
        Console.WriteLine(varMethod);
    }
}

// Intermediate Level
// Exercise 1: Constants

//     Task: Declare a constant for the value of Pi (3.14159) 
//     and use it to calculate the circumference of a circle given its radius.
class Constants
{
    public static void VarConstant(double radius)
    {
        double Pi = 3.14159;
        double circumference = 2*Pi*radius;
        Console.WriteLine($"circumference: {circumference}");
    }
}


// Exercise 4: Enumerations
//     Task: Define an enumeration for days of the week. 
//     Declare a variable of this enumeration type and print its value.

class Enumerations
{
    enum WeekDays {sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};

    public static void Enumerate()
    {
        {
           WeekDays today = WeekDays.Thursday;
           Console.WriteLine(today); 
        }
    }
}

// Exercise 5: Switch Case with Variables

//     Task: Write a program that uses a switch case to print a message 
//     based on the value of an integer variable (e.g., 1 for "One", 2 for "Two", etc.).

class SwitchCase
{
    public static void Switcher(int num)
    {
        switch(num)
        {
            case 1:
                Console.WriteLine("one");
                break;
            case 2:
                Console.WriteLine("Two");
                break;
            case 3:
                Console.WriteLine("Three");
                break;
        }
    }
}