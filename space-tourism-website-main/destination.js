import './assets/css/header.css'
import './assets/css/destination.css'


const elementname = document.getElementById("planet_name");
const elementtext = document.getElementById("space_text");
const elementimg = document.getElementById("planetimg");
const elementdays = document.getElementById("days");
const elementdistance = document.getElementById("distance");
const elementclick0 = document.getElementById("planet_moon");
const elementclick1 = document.getElementById("planet_mars");
const elementclick2 = document.getElementById("planet_europa");
const elementclick3 = document.getElementById("planet_titan");


elementclick0.addEventListener("click", Moon);
elementclick1.addEventListener("click", Mars);
elementclick2.addEventListener("click", Europa);
elementclick3.addEventListener("click", Titan);


function Moon() {
    elementclick0.classList.add("active");
    elementclick1.classList.remove("active");
    elementclick2.classList.remove("active");
    elementclick3.classList.remove("active");
	elementimg.setAttribute("src", "./assets/destination/image-moon.png")
	elementname.innerText = "MOON";
	elementtext.innerText = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    elementdays.innerText = "3 days";
    elementdistance.innerText = "384,400 km";
}
function Mars() {
    elementclick0.classList.remove("active");
    elementclick1.classList.add("active");
    elementclick2.classList.remove("active");
    elementclick3.classList.remove("active");
	elementimg.setAttribute("src", "./assets/destination/image-mars.png")
	elementname.innerText = "MARS";
	elementtext.innerText = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    elementdays.innerText = "9 months";
    elementdistance.innerText = "225 mil. km";
}
function Europa() {
    elementclick0.classList.remove("active");
    elementclick1.classList.remove("active");
    elementclick2.classList.add("active");
    elementclick3.classList.remove("active");
	elementimg.setAttribute("src", "./assets/destination/image-europa.png")
	elementname.innerText = "EUROPA";
	elementtext.innerText = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    elementdays.innerText = "3 years";
    elementdistance.innerText = "628 mil. km";
}
function Titan() {
    elementclick0.classList.remove("active");
    elementclick1.classList.remove("active");
    elementclick2.classList.remove("active");
    elementclick3.classList.add("active");
	elementimg.setAttribute("src", "./assets/destination/image-titan.png")
	elementname.innerText = "TITAN";
	elementtext.innerText = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    elementdays.innerText = "7 years";
    elementdistance.innerText = "1.6 bil. km";
}