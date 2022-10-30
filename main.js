//downloaded items
const burgerBtn = document.querySelector(".fa-bars");
const menu = document.querySelector(".main");

const changeBtn = () => {
	menu.classList.toggle("active");
	burgerBtn.classList.toggle("fa-xmark");
	// burgerBtn === "fa-bars" ? "fa-xmark" : "fa-bars";
};

burgerBtn.addEventListener("click", changeBtn);
