import { handleProfileSignup, handleProfileSignupWithTimestamp, handleProfileSignupWithRenamedFields, handleProfileSignupGroupedByStatus, handleProfileSignupWithDetailedError } from './6-final-user';

async function main() {
//   const result = await handleProfileSignup("Chymezy", "Josh", "josh.jpg");
//   console.log(result);
// console.log(handleProfileSignup("Chymezy", "Josh", "josh.jpg"));
    // const result = await handleProfileSignupWithTimestamp("Chymezy", "Josh", "josh.jpg");
    // const result = await handleProfileSignupGroupedByStatus("Chymezy", "Josh", "josh.jpg");
    const result = await handleProfileSignupWithDetailedError("Chymezy", "Josh", "josh.jpg");
    // const result = await handleProfileSignupWithRenamedFields("Bob", "Dylan", "bob_dylan.jpg");
    console.log(result);
}

main();
