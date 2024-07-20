namespace App.IfStatment
{
    class IfDecision
    {
        public void IfStatement()
        {
            System.Console.Write("Enter age: ");
            var x = Convert.ToInt32(Console.ReadLine());
            if (x > 10 && x < 18)
            {
                System.Console.WriteLine("You're a teen, access granted");
            }
            else
            {
                System.Console.WriteLine("Unaccepeted age. Access denied!");
            }
        }
        public void ElseIfStatement()
        {
            System.Console.Write("Enter age: ");
            var x = Convert.ToInt32(Console.ReadLine());
            if (x > 10 && x < 18)
            {
                System.Console.WriteLine("You're a teen, access granted");
            }
            else if (x <= 10)
            {
                System.Console.WriteLine("Under aged, access denied!");
            }
            else if (x >= 18)
            {
                System.Console.WriteLine("Check adult page!");
            }
            else
            {
                System.Console.WriteLine("Unaccepeted age. Access denied!");
            }
        }
        public void SwitchStatement()   // know when to use switch statment. Is good for specific case
        {
            System.Console.Write("Enter age: ");
            var age = Convert.ToInt32(Console.ReadLine());

            switch (age)
            {
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                    System.Console.WriteLine("You're a teen, access granted");
                    break;
                default:
                    System.Console.WriteLine("Access denied");
                    break;
            }
        }

    }
}