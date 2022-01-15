let titleEl = document.querySelector("h1")

console.log(titleEl, "using query");

let pEl = document.querySelector(".cool");

pEl.style.backgroundColor = "yellow";

titleEl.style.textAlign = "center";

let a = document.querySelector("a");
console.log(a);

a.setAttribute("href", "https://www.google.com");
a.classList.add("google-link");

let commentEls = document.querySelectorAll(".comment");
console.log(commentEls);

for(let commentEl of commentEls) {
	commentEl.style.fontSize = "30px";
}