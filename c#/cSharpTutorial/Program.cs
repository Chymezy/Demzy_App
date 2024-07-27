using App.lesson1;
using App.TestData;
using App.Operator;
using App.StoringUserData;
using App.Exercise2;
using App.IfStatment;
using App.Loops;
using App.LoopEx;

namespace App
{
    class Program
    {
        static void Main(string[] args)
        {
            Numeric lesson1 = new();
            // lesson1.NumericTypes();

            TextData lesson2 = new();
            // lesson2.TextDataTypes();
            
            Operators lesson3 = new();
            // lesson3.AssignmentOperator();
            // lesson3.ArithmeticOperator();
            // lesson3.ComparisonOperator();
            // lesson3.LogicalOperator();
            // lesson3.BitwiseOperator();
            // lesson3.ConditionalOperator();
            // lesson3.NullOperator();
            // Console.WriteLine(lesson3.GetGreeting(false));
            // System.Console.WriteLine(lesson3.CheckEvenOrOdd(34));

            // StoringData user = new();
            // user.UserData();

            Checker check = new();
            // check.EvenOddChecker();

            IfDecision decision = new();
            // decision.IfStatement();
            // decision.ElseIfStatement();
            // decision.SwitchStatement();

            Loop loop = new();
            // loop.ForLoop();
            // loop.WhileLoop();
            // loop.DoWhileLoop();
            LoopExercise loopEx = new();
            loopEx.ForExercise();
            loopEx.WhileExercise();
        }
    }
}
