namespace App.Exercise2
{
    class Checker
    /*
        create and initialize two integers
        make a variable to workout the reminder
        output reminder to the screen
        change the first variable to another number
            - recalculate the remainder
            - output new remainder to screen
    */
    {
        public void EvenOddChecker()
        {
            var number = 50;
            var second = 23;
            System.Console.WriteLine($"remainder: {number % second}");
        }
    }
}