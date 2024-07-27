namespace App.Loops
{
    class Loop
    {
        public void ForLoop()
        {
            System.Console.Write("What your age? ");
            var age = Convert.ToInt32(Console.ReadLine());
            System.Console.Write("number of loop display: ");
            var loopVar = Convert.ToInt32(Console.ReadLine());
         
            if(age > 10 && age < 18)
            {
                System.Console.Write("Enter first number: ");
                var firstNum = Convert.ToInt32(Console.ReadLine());

                System.Console.Write("Enter second number: ");
                var secondNum = Convert.ToInt32(Console.ReadLine());

                System.Console.Write($"What the result of {firstNum} x {secondNum}: ");
                int userAnswer = Convert.ToInt32(Console.ReadLine());

                int answer = firstNum * secondNum;
                if (userAnswer != answer)
                {
                    System.Console.WriteLine("Incorrect answer. Try again.");
                }
                else
                {
                    for (int i = 0; i < loopVar; i++)
                    {
                        System.Console.WriteLine("well done! your answer is correct");
                    }
                }
            }
            else
            {
                System.Console.WriteLine("Access denied!");
            }
        }
        public void WhileLoop()
        {
            System.Console.Write("What your age? ");
            var age = Convert.ToInt32(Console.ReadLine());
            
            if (age > 10 && age < 18)
            {
                bool loopSwitch = true;
                while(loopSwitch)
                {
                    System.Console.Write("Enter first number: ");
                    var firstNum = Convert.ToInt32(Console.ReadLine());
                    System.Console.Write("Enter second number: ");
                    var secondNum = Convert.ToInt32(Console.ReadLine());

                    System.Console.Write($"\nWhat the result of {firstNum} x {secondNum}: ");
                    int userAnswer = Convert.ToInt32(Console.ReadLine());
                    int answer = firstNum * secondNum;

                    if (answer == userAnswer)
                    {
                        System.Console.WriteLine($"{answer} is correct, well done!");
                        loopSwitch = false;
                    }
                    else
                    {
                        System.Console.WriteLine("Incorrect. try again\n");
                    }
                }
            }
            else
            {
                System.Console.WriteLine("Access denied! You must be a teenager (11-17yrs)");
            }
        }
        public void DoWhileLoop()
        {
            int userAnswer = 0;
            int answer = 0;

            do
            {
                System.Console.Write("What is your age? ");
                var age = Convert.ToInt32(Console.ReadLine());

                if (age > 10 && age < 18)
                {
                    System.Console.Write("Enter first number: ");
                    var firstNum = Convert.ToInt32(Console.ReadLine());
                    System.Console.Write("Enter second number: ");
                    var secondNum = Convert.ToInt32(Console.ReadLine());

                    System.Console.Write($"\nWhat is the result of {firstNum} x {secondNum}? ");
                    userAnswer = Convert.ToInt32(Console.ReadLine());
                    answer = firstNum * secondNum;

                    if (answer == userAnswer)
                    {
                        System.Console.WriteLine($"{answer} is correct, well done!");
                    }
                    else
                    {
                        System.Console.WriteLine("Incorrect. Try again\n");
                    }
                }
                else
                {
                    System.Console.WriteLine("You must be a teenager (11-17 yrs). Try again\n");
                    break;
                }

            } while (answer != userAnswer);
        }
    }

}