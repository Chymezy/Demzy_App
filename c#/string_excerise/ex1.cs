using System;
using System.Diagnostics;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Text;

class Application
{
    public static void Main(string[] args)
    {
        // StringConcat();
        // ChangeCase();
        // StringInterpolate();
        // StringEscape();
        // StringLooping();
        // StringBuilderDemo();
        // WorikingWithArrays();
        // PadAndTrim();
        SearchingString();
    }

    public static void StringConcat()
    {
        string firstName = "Joshua";
        string lastName = "Benjamin";
        string fullName = firstName + " " + lastName;
        Console.WriteLine(fullName);
    }
    public static void ChangeCase()
    {
        string fName = "Joshua";
        string lName = "Benjamin";
        string fullName = fName.ToLower() + " " + lName;
        string upper_lName = fName + " " + lName.ToUpper(); 
        Console.WriteLine(fullName);
        Console.WriteLine(upper_lName);
        Console.WriteLine(fullName.ToUpperInvariant());
    }
    public static void StringInterpolate()
    {
        string fName = "Joshua";
        string lName = "Benjamin";
        Console.WriteLine($"full name: {fName} {lName}");
        Console.WriteLine("full name: {0} {1}",fName, lName);
    }
    public static void StringEscape()
    {
        string website = $@"https://github.com/chymezy";
        string facebook = "https://github.com/chymezy"; // urls don't need to be escaped
        string filePath = "C:/documents/c/exercise"; // urls don't need to be escaped
        Console.WriteLine(website);
        Console.WriteLine(facebook);
        Console.WriteLine(filePath);
    }
    public static void StringLooping()
    {
        string test = "Josh";
        test += " Benjamin";
        test += " is a cool guy";
        Console.WriteLine(test);
    }
    public static void StringBuilderDemo()
    {
        Stopwatch regularStopwatch = new();
        regularStopwatch.Start();

        string test = "";
        for (int i = 0; i < 10000; i++)
        {
            test += i;
        }
        regularStopwatch.Stop();
        System.Console.WriteLine($"Regular Stopwatch: { regularStopwatch.ElapsedMilliseconds }ms");

        Stopwatch builderStopwatch = new();
        builderStopwatch.Start();

        StringBuilder sb = new();
        for (int i = 0; i < 1000000; i++)
        {
            sb.Append(i);
        }
        sb.ToString();
        builderStopwatch.Stop();
        System.Console.WriteLine($"Builder Stopwatch: { builderStopwatch.ElapsedMilliseconds }ms");
    }
    public static void WorikingWithArrays()
    {
        int[] ages = new int[] { 6, 7, 8, 3, 5 };
        string result;
        result = String.Concat(ages);
        result = String.Join(",", ages);
        System.Console.WriteLine(result);

        string test = "Joe,Ben,Josh";
        string[] resultArray = test.Split(",");
        Array.ForEach(resultArray, c => System.Console.WriteLine(c));


        string testArray = "Joe, Ben, Josh";
        string[] ArrayResult = testArray.Split(",");
        Array.ForEach(ArrayResult, c => System.Console.WriteLine(c));
    }
    private static void PadAndTrim()
    {
        string testString = "    Hello World      ";
        string result;
        result = testString.TrimStart();
        System.Console.WriteLine($"'{result}'");

        result = testString.TrimEnd();
        System.Console.WriteLine($"'{result}'");

        result = testString.Trim();
        System.Console.WriteLine($"'{result}'");

        testString = "1.15";
        result = testString.PadLeft(10,'0');
        System.Console.WriteLine(result);

        result = testString.PadRight(10,'0');
        System.Console.WriteLine(result);
    }
    public static void SearchingString()
    {
        string textString = "This is a test of a the search test.";
        bool resultBoolean;
        int resultInt;

        // StartsWith
        resultBoolean = textString.StartsWith("This is");
        System.Console.WriteLine($"Starts with \"This is\": {resultBoolean}");

        resultBoolean = textString.StartsWith("ThIs is");
        System.Console.WriteLine($"Starts with \"This is\": {resultBoolean}");

        // EndsWith
        resultBoolean = textString.EndsWith("the search.");
        System.Console.WriteLine($"Ends with \"the search.\": {resultBoolean}");

        resultBoolean = textString.EndsWith("the search");
        System.Console.WriteLine($"Ends with \"the search.\": {resultBoolean}");

        // contains
        resultBoolean = textString.Contains("test");
        System.Console.WriteLine($"Contains \"test\": {resultBoolean}");

        resultBoolean = textString.Contains("test");
        System.Console.WriteLine($"Contains \"test\": {resultBoolean}");

        // Index of
        resultInt = textString.IndexOf("test");
        System.Console.WriteLine($"Index of \"test\": {resultInt}");

        resultInt = textString.IndexOf("test", 11);
        System.Console.WriteLine($"Index of \"test\" after character 10: {resultInt}");

        resultInt = textString.IndexOf("test", 32);
        System.Console.WriteLine($"Index of \"test\" after character 10: {resultInt}");

        // Last Index of
        resultInt = textString.LastIndexOf("test");
        System.Console.WriteLine($"Last Index of \"test\": {resultInt}");

        resultInt = textString.LastIndexOf("test", 11);
        System.Console.WriteLine($"Last Index of \"test\" after character 10: {resultInt}");

        resultInt = textString.LastIndexOf("test", 32);
        System.Console.WriteLine($"Last Index of \"test\" after character 10: {resultInt}");
    }
}
