import './assets/css/crew.css'
import './assets/css/header.css'

const elementname = document.getElementById("crew_name");
const elementfunction = document.getElementById("crew_function");
const elementtext = document.getElementById("crew_text");
const elementimg = document.getElementById("crew_image");
const elementclick0 = document.getElementById("slide1");
const elementclick1 = document.getElementById("slide2");
const elementclick2 = document.getElementById("slide3");
const elementclick3 = document.getElementById("slide4");


elementclick0.addEventListener("click", Douglas);
elementclick1.addEventListener("click", Mark);
elementclick2.addEventListener("click", Victor);
elementclick3.addEventListener("click", Ansari);

function Douglas() {
	elementimg.setAttribute("src", "/assets/crew/image-douglas-hurley.png")
	elementname.innerText = "Douglas Hurley";
	elementfunction.innerText = "Commander";
	elementtext.innerText = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
}
function Mark() {
	elementimg.setAttribute("src", "./assets/crew/image-mark-shuttleworth.png")
	elementname.innerText = "Mark Shuttleworth";
	elementfunction.innerText = "Mission Specialist";
	elementtext.innerText = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
}
function Victor() {
	elementimg.setAttribute("src", "/assets/crew/image-victor-glover.png")
	elementname.innerText = "Victor Glover";
	elementfunction.innerText = "Pilot";
	elementtext.innerText = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
}
function Ansari() {
	elementimg.setAttribute("src", "./assets/crew/image-anousheh-ansari.png")
	elementname.innerText = "Anousheh Ansari";
	elementfunction.innerText = "Flight Engineer";
	elementtext.innerText = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
}