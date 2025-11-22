// array of 6 objects 

let users = [
    {
        name: "Riya Roy",
        profession: "Software Engineer",
        details: "Loves coding and building full-stack apps.",
        image: "https://images.unsplash.com/photo-1662434110503-728838fe1b5d?w=600"
    },
    {
        name: "Amit Sharma",
        profession: "Frontend Developer",
        details: "Expert in React and UI design.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600"
    },
    {
        name: "Sana Khan",
        profession: "Designer",
        details: "Creates beautiful user interfaces.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600"
    },
    {
        name: "Rohit Das",
        profession: "Backend Developer",
        details: "Works with Node.js and databases.",
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600"
    },
    {
        name: "Priya Sen",
        profession: "Data Analyst",
        details: "Loves working with data visualization.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600"
    },
    {
        name: "Joy Mukherjee",
        profession: "Project Manager",
        details: "Handles teams and project planning.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600"
    }
];

//selct container
let container = document.querySelector('#container');

//loop to create cards
users.forEach(user => {
let card = document.createElement('div');
card.className = 'card';

card.innerHTML = `
<img src='${user.image}' alt='photo'/>
<h1>${user.name}</h1>
<h2>${user.profession}</h2>
<p>${user.details}</p>
`
;

container.appendChild(card);
});