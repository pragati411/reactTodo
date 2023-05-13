interface IProfile {
    name: string;
    city: string;
    hobbies: string[];
  }
  
  const user: IProfile = {
    name: "Saurav",
    city: "Indore",
    hobbies: ["cricket"],
  };
  
  user.city = "Ratlam";
  user.city = "delhi";
  user.city = "gwalior";

  
  const userProfiles: IProfile[] = [
    {
      name: "Rahul",
      city: "bangalore",
      hobbies: ["bikes"],
    },
    {
      name: "pragati",
      city: "satna",
      hobbies: ["bikes"],
    },
    {
      name: "Rahul",
      city: "bangalore",
      hobbies: ["bikes"],
    },
    {
      name: "Rahul",
      city: "bangalore",
      hobbies: ["bikes"],
    },
  ];
//   TypeScript Readonly keys
// Typescript extending Interfaces
// Typescript Omit extending
// TypeScript Partial Extending
// Interface vs Types