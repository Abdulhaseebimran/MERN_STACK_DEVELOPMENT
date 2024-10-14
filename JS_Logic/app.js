// JS Logic

// forEach: means har aik element k liye ek function call karna
// break and continue are not allowed in forEach

const names = ['John', 'Paul', 'George', 'Ringo'];

// names.forEach(function(value) {
//     // console.log('Hello ' + value);
    
//     if(value === 'Paul') {
//         console.log('Hello ' + value);
//     }else{
//         console.log('Hi ' + value);
//     }
// })

// Map: means har aik element k liye ek function call karna aur uska result return karna 
// break and continue are not allowed in Map
// Map ko use karte howe hum is array se aik naya array bana sakte hain jis me kuch changes kiye hain

// let newNames = names.map(function(value) {
//     return value + " Jee";
// });

// console.log(newNames);
// console.log(names);

// Filter: meeans aik aise new array jisme bane ga or filter values ko check karke new array me add kare ga.

// let newNames = names.filter(function(value) {
//     return true;
// });

// let newNames = names.filter(function(value){
//     return value === 'Paul';
// });

// console.log(newNames);
// console.log(names);

// destructuring: means kisi bhi array ya object se values ko alag alag variables me store karna

const randomUserProfile = {
    id: 2024,
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    contactInfo: {
        email: "john.doe@example.com",
        phone: "+1-555-9876543",
        address: {
            street: "456 Elm Street",
            city: "Los Angeles",
            state: "California",
            country: "USA",
            zipCode: "90001"
        }
    },
    socialProfiles: {
        linkedIn: "https://www.linkedin.com/in/johndoe",
        github: "https://github.com/johndoe123",
        portfolio: "https://johndoe.dev"
    },
    education: [
        {
            degree: "Master of Science in Software Engineering",
            institution: "Stanford University",
            graduationYear: 2022
        }
    ],
    skills: {
        frontEnd: ["HTML", "CSS", "JavaScript", "Angular", "Svelte"],
        backEnd: ["Node.js", "Django", "Ruby on Rails"],
        database: ["PostgreSQL", "MongoDB", "Firebase"],
        versionControl: ["Git", "GitLab"],
        devOps: ["Kubernetes", "Azure", "Jenkins"]
    },
    experience: [
        {
            title: "Software Engineer",
            company: "Tech Innovations Inc.",
            duration: "2022-Present",
            responsibilities: [
                "Developing scalable applications using Angular and Node.js",
                "Managing cloud infrastructure with Azure",
                "Collaborating with cross-functional teams to implement new features"
            ]
        },
        {
            title: "Junior Developer",
            company: "Startup Hub",
            duration: "2020-2022",
            responsibilities: [
                "Built MVP products for clients using Ruby on Rails",
                "Integrated third-party APIs for payment and authentication systems",
                "Collaborated with designers to improve UI/UX"
            ]
        }
    ],
    hobbies: ["Photography", "Hiking", "Open-source contributions"],
    preferences: {
        theme: "light",
        notifications: false
    },
    status: "Active"
};


// let {zipCode} = randomUserProfile.contactInfo.address;
// console.log(zipCode);

// let {firstName, lastName} = randomUserProfile.name;
// console.log(firstName);
// console.log(lastName);

// let {hobbies} = randomUserProfile;
// let [firstValue,,lastValue] = hobbies;

// console.log(firstValue);
// console.log(lastValue);

// spread and rest operator (...): 

// spread operator: means kisi bhi array ya object k elements ko alag alag variables me store karna

let arr1 = [1, 2, 3, 4, 5];
// let copyarr = arr1; // reference copy hogi is me agar kisi me changes karein ge to dono me changes ayein ge

let copyarr = [...arr1]; // spread operator se copy hogi is me agar kisi me changes karein ge to dono me changes nahi ayein ge

let obj1 = {
    name: 'Ali',
    age: 25,
    city: 'Karachi',
}

let copyobj = {...obj1};

console.log(copyobj);

// rest operator: means kisi bhi array ya object k elements ko alag alag variables me store karna

function sum(...args) {
    console.log(args);
}

sum(1, 2, 3, 4, 5, 6);
