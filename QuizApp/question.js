const questions = [
  {
    category: "programming",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Pre Processor",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which of the following is a correct way to declare a variable in JavaScript?",
        options: [
          "var x = 10;",
          "variable x = 10;",
          "int x = 10;",
          "let 10 = x;",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which HTML tag is used to define an internal stylesheet?",
        options: ["&lt;script&gt;", "&lt;style&gt;", "&lt;css&gt;", "&lt;link&gt;"],
        correctAnswer: 1,
      },      
      {
        question:
          "What is the output of 'console.log(typeof null)' in JavaScript?",
        options: ["null", "object", "undefined", "number"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is not a JavaScript framework?",
        options: ["React", "Angular", "Vue", "Django"],
        correctAnswer: 3,
      },
      {
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which programming language is known as the backbone of web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        correctAnswer: 1,
      },      
      {
        question: "Which of the following is a valid JSON syntax?",
        options: [
          "{name: 'John', age: 30}",
          "{'name': 'John', 'age': 30}",
          '{"name": "John", "age": 30}',
          "{name = 'John', age = 30}",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the correct way to create a function in JavaScript?",
        options: [
          "function myFunction() {}",
          "function:myFunction() {}",
          "def myFunction() {}",
          "create myFunction() {}",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "IBM"],
        correctAnswer: 1,
      },
      {
        question: "What is a closure in JavaScript?",
        options: [
          "A function inside another function that has access to the outer function's variables",
          "A function that is immediately invoked",
          "A block of code that runs indefinitely",
          "An error in the code",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a JavaScript data type?",
        options: ["Number", "String", "Boolean", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "What is the use of the 'this' keyword in JavaScript?",
        options: [
          "To refer to the current object",
          "To create a new object",
          "To bind a function",
          "None of the above",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the default value of an uninitialized variable in JavaScript?",
        options: ["0", "null", "undefined", "NaN"],
        correctAnswer: 2,
      },
      {
        question:
          "Which method is used to parse a string to an integer in JavaScript?",
        options: ["parseInt()", "parseFloat()", "Number()", "toString()"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the 'use strict' directive in JavaScript?",
        options: [
          "To enable strict mode in JavaScript",
          "To ignore errors",
          "To enable debugging",
          "None of the above",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which of the following is not a reserved word in JavaScript?",
        options: ["let", "class", "yield", "newVar"],
        correctAnswer: 3,
      },
      {
        question:
          "What is the correct syntax to create an array in JavaScript?",
        options: [
          "let arr = ();",
          "let arr = [];",
          "let arr = <>;",
          "let arr = {};",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which JavaScript method is used to access an HTML element by its ID?",
        options: [
          "getElementById()",
          "getElementsByClassName()",
          "querySelector()",
          "querySelectorAll()",
        ],
        correctAnswer: 0,
      },
      {
        question: "What does the '===' operator check in JavaScript?",
        options: [
          "Equality of value",
          "Equality of type",
          "Equality of both value and type",
          "None of the above",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "&lt;!-- --&gt;", "&lt;/* */&gt;", "#"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a correct way to declare a constant in JavaScript?",
        options: ["const x = 10;", "let x = 10;", "var x = 10;", "constant x = 10;"],
        correctAnswer: 0,
      },            
      {
        question: "What is the result of 3 + '3' in JavaScript?",
        options: ["6", "33", "NaN", "Error"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the correct way to call a function named 'myFunction'?",
        options: [
          "myFunction;",
          "call myFunction();",
          "myFunction();",
          "None of the above",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "Which JavaScript object method is used to convert an object to a string?",
        options: ["toString()", "valueOf()", "Stringify()", "parse()"],
        correctAnswer: 0,
      },
    ],
  },
  {
    category: "math",
    questions: [
      {
        question: "What is the value of pi (π) approximately?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        correctAnswer: 1,
      },
      {
        question: "What is the area of a circle with radius 7?",
        options: ["49π", "14π", "49", "14"],
        correctAnswer: 0,
      },      
      {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
      },
      {
        question: "What is 7 + 6 * 2?",
        options: ["26", "19", "20", "21"],
        correctAnswer: 1,
      },
      {
        question: "What is the derivative of x^2?",
        options: ["2x", "x", "x^2", "2"],
        correctAnswer: 0,
      },
      {
        question: "What is the sum of the angles in a triangle?",
        options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
        correctAnswer: 1,
      },
      {
        question: "What is the factorial of 5?",
        options: ["120", "60", "24", "12"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of the golden ratio?",
        options: ["1.414", "1.618", "2.718", "3.142"],
        correctAnswer: 1,
      },
      {
        question: "What is the equation for the area of a circle?",
        options: ["πr^2", "2πr", "πd", "r^2"],
        correctAnswer: 0,
      },
      {
        question: "What is 15% of 200?",
        options: ["20", "25", "30", "35"],
        correctAnswer: 2,
      },
      {
        question: "What is the solution to the equation 2x + 3 = 7?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
      },
      {
        question: "What is the square of 15?",
        options: ["225", "250", "275", "300"],
        correctAnswer: 0,
      },
      {
        question: "What is 10 to the power of 3?",
        options: ["100", "1000", "10", "10000"],
        correctAnswer: 1,
      },
      {
        question: "What is the decimal equivalent of 3/4?",
        options: ["0.5", "0.25", "0.75", "1"],
        correctAnswer: 2,
      },
      {
        question: "What is the slope of a horizontal line?",
        options: ["0", "1", "-1", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of sin(90°)?",
        options: ["0", "1", "0.5", "-1"],
        correctAnswer: 1,
      },
      {
        question: "What is the solution to x^2 = 9?",
        options: ["1", "3", "-3", "±3"],
        correctAnswer: 3,
      },
      {
        question:
          "What is the perimeter of a rectangle with length 10 and width 5?",
        options: ["30", "20", "15", "25"],
        correctAnswer: 0,
      },
      {
        question: "What is the cube root of 27?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
      },
      {
        question: "What is the greatest common divisor of 36 and 48?",
        options: ["6", "12", "18", "24"],
        correctAnswer: 1,
      },
      {
        question: "What is 20% of 50?",
        options: ["5", "10", "15", "20"],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the first 10 natural numbers?",
        options: ["45", "55", "65", "75"],
        correctAnswer: 1,
      },
      {
        question: "What is the volume of a cube with side length 4?",
        options: ["16", "32", "64", "128"],
        correctAnswer: 2,
      },
      {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        correctAnswer: 1,
      },
      {
        question: "What is the solution to the inequality 2x > 6?",
        options: ["x > 2", "x > 3", "x > 4", "x > 5"],
        correctAnswer: 1,
      },
    ],
  },
  {
    category: "science",
    questions: [
      {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "HO"],
        correctAnswer: 1,
      },
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        correctAnswer: 2,
      },
      {
        question: "What gas do plants primarily use for photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 2,
      },
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
        correctAnswer: 2,
      },
      {
        question: "What is the boiling point of water at sea level?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: 1,
      },
      {
        question: "What is the process by which plants make their food?",
        options: [
          "Respiration",
          "Photosynthesis",
          "Fermentation",
          "Transpiration",
        ],
        correctAnswer: 1,
      },
      {
        question: "What element does 'O' represent on the periodic table?",
        options: ["Oxygen", "Osmium", "Oxide", "Ozone"],
        correctAnswer: 0,
      },
      {
        question: "What type of galaxy is the Milky Way?",
        options: ["Elliptical", "Spiral", "Irregular", "Lenticular"],
        correctAnswer: 1,
      },
      {
        question: "What is the primary gas in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 1,
      },
      {
        question: "What is the center of an atom called?",
        options: ["Electron", "Proton", "Nucleus", "Neutron"],
        correctAnswer: 2,
      },
      {
        question: "What is the speed of light in a vacuum?",
        options: [
          "300,000 km/s",
          "150,000 km/s",
          "299,792 km/s",
          "250,000 km/s",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the formula for calculating force?",
        options: [
          "Force = Mass x Velocity",
          "Force = Mass x Acceleration",
          "Force = Mass / Acceleration",
          "Force = Velocity / Time",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the most abundant element in the universe?",
        options: ["Oxygen", "Hydrogen", "Carbon", "Helium"],
        correctAnswer: 1,
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Skin", "Heart", "Lungs"],
        correctAnswer: 1,
      },
      {
        question: "What is the pH value of pure water?",
        options: ["7", "0", "14", "1"],
        correctAnswer: 0,
      },
      {
        question: "What particle in an atom has a negative charge?",
        options: ["Proton", "Electron", "Neutron", "Quark"],
        correctAnswer: 1,
      },
      {
        question: "What is the study of plants called?",
        options: ["Zoology", "Botany", "Ecology", "Geology"],
        correctAnswer: 1,
      },
      {
        question: "What is the smallest unit of life?",
        options: ["Organ", "Cell", "Molecule", "Tissue"],
        correctAnswer: 1,
      },
      {
        question: "What is the main source of energy for life on Earth?",
        options: ["Wind", "The Sun", "Water", "The Moon"],
        correctAnswer: 1,
      },
      {
        question: "What is the SI unit of temperature?",
        options: ["Fahrenheit", "Celsius", "Kelvin", "Rankine"],
        correctAnswer: 2,
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Gd", "Go"],
        correctAnswer: 1,
      },
      {
        question:
          "What organ is responsible for pumping blood in the human body?",
        options: ["Lungs", "Liver", "Brain", "Heart"],
        correctAnswer: 3,
      },
      {
        question: "What is the most common type of star in the universe?",
        options: ["Red Dwarf", "White Dwarf", "Blue Giant", "Supernova"],
        correctAnswer: 0,
      },
      {
        question: "What is the force that pulls objects toward the Earth?",
        options: ["Friction", "Magnetism", "Gravity", "Inertia"],
        correctAnswer: 2,
      },
      {
        question: "What type of blood cells help fight infections?",
        options: [
          "Red Blood Cells",
          "White Blood Cells",
          "Platelets",
          "Plasma",
        ],
        correctAnswer: 1,
      },
    ],
  },
];
export default questions;
