const menu = document.querySelector(".main");

//downloaded buttons
const burgerBtn = document.querySelector(".fa-bars");
const homeBtn = menu.querySelector(".home");
const aboutUsBtn = menu.querySelector(".aboutUs");
const productsListBtn = menu.querySelector(".productsList");
const contactInfoBtn = menu.querySelector(".contactInfo");
const sendMsgBtn = document.querySelector(".form__button");
//download items

const headerSection = document.querySelector(".tittle");
const aboutSection = document.querySelector(".about");
const offerSection = document.querySelector(".offer");
const contactSection = document.querySelector(".contact");

//creating new functions, to use as a callback

//function to switch side menu on mobile devices
const changeBtn = () => {
	menu.classList.toggle("active");
	burgerBtn.classList.toggle("fa-xmark");
};

//function to scroll into proper section
const goToHeader = () => {
	headerSection.scrollIntoView({ behavior: "smooth" });
	menu.classList.toggle("active");
};
const goToAbout = () => {
	aboutSection.scrollIntoView({ behavior: "smooth" });
	menu.classList.toggle("active");
};
const goToOffer = () => {
	offerSection.scrollIntoView({ behavior: "smooth" });
	menu.classList.toggle("active");
};
const goToContact = () => {
	contactSection.scrollIntoView({ behavior: "smooth" });
	menu.classList.toggle("active");
};

//function to erase text in every input in contact section
const clearArea = () => {
	const nameArea = document.querySelector(".form__name");
	nameArea.value = "";
	const mailArea = document.querySelector(".form__mail");
	mailArea.value = "";
	const phoneArea = document.querySelector(".form__phone");
	phoneArea.value = "";
	const textArea = document.querySelector(".form__message");
	textArea.value = "";
};

//create events handling
burgerBtn.addEventListener("click", changeBtn);
homeBtn.addEventListener("click", goToHeader);
aboutUsBtn.addEventListener("click", goToAbout);
productsListBtn.addEventListener("click", goToOffer);
contactInfoBtn.addEventListener("click", goToContact);
sendMsgBtn.addEventListener("click", clearArea);
document.addEventListener("scroll", () => {
	const height = window.scrollY;
	const width = innerWidth;
	if (height < 19) {
		menu.classList.remove("activeMenu");
	}
	if (height > 20 && width > 719) {
		menu.classList.add("activeMenu");
	}
});
