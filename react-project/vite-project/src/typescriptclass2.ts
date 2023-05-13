let a3: number = 10;
let a4: string = "pragati";

let a5: boolean = true;
let colour = "red";
var a6: null = null;
let a7: string | boolean = true;
let a8: string | boolean = "ankit";
const a9: number[] = [10, 1, 11, 10];
const a10: string[] = ["ankit", "mukesh", "10", "oviya"];
const a11: undefined = undefined;
const a12: bigint =  2n ** 54n;


type State = "created" | "started" | "pending" | "completed";
const currentState: State = "pending";// it is a way to define the type which is available in it or not

type Gender = "male" | "female" | "open";
const gender: Gender = "male";

type Profile = {
    name: string;
    city: string;
    pincode: number;
  };
  
//   interface IProfile {
//     name: string;
//     city: string;
//     pincode: number;
//   }
  
  // name, city, pincode
  const profile: Profile = {
    name: "ankit",
    city: "morena",
    pincode: 476001,
  };
//console.log(color);