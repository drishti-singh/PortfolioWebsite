// toggle icon navbar
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

let menuIcon = document.getElementById("menu-icon");
let navbar = document.getElementsByClassName("navbar")[0];
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("new");
});

// srcoll sections active link
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*= " + id + " ]")
          .classList.add("active");
      });
    }
  });

  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when clicked on navbar link
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("new");
};

// Scroll reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content , .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img , .services-container , .portfolio-box , .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1", { origin: "left" });
ScrollReveal().reveal(".home-content p ", { origin: "right" });

// typed js
var typed = new Typed(".span", {
  strings: ["Frontend Developer", "UI/UX designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});



function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_igdv1vn";
  const templeteID = "template_s31etjk";
  emailjs
    .send(serviceID, templeteID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").email = "";
      document.getElementById("number").number = "";
      document.getElementById("subject").subject = "";
      document.getElementById("message").message = "";
      console.log(res);
      alert("Your message sent successfully");
    })
    .catch((err) => console.log(err));
}
