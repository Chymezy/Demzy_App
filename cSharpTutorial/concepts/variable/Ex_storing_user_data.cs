namespace App.StoringUserData
{
    class StoringData
    {
        public void UserData()
        {
            /*
                define a variable to hold user name
                define a variable to hold user phone number
                define a variable to hold user age
                print variables line by line on the screen
                Extra: define variable using the var keyword.
            */
            System.Console.Write("Input name: ");
            var userName = System.Console.ReadLine();
            System.Console.Write("Input phone No.: ");
            var phoneNumber = System.Console.ReadLine();
            System.Console.Write("Input age: ");
            var age = System.Console.ReadLine();
            System.Console.WriteLine("Information stored sucessfully...");
            System.Console.WriteLine("\n.......................................\n");
            System.Console.WriteLine($" name: {userName}\n phone number: {phoneNumber}\n age: {age}\n");
        }
    }
}