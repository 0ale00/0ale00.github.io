let obj: any = { userName : "Mario", userBirthYear : 1980 };
// recuperato da chiamata


function greet(name: string, age: number) {
    console.log("Hello, " + name.toUpperCase() + " hai "+age+" anni.");
  }
/**
 * 
 * @param birthYear 
 * @returns 
 */

  function greAge (birthYear: number) : number{
    return new Date() -birthYear;
  }

console.log(obj);

greet(user["userName"],getAge(user["userBirthYear"]));
