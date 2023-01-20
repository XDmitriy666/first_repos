const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

let c = 0;

function sliderAuto() {
    const slider = setInterval((i) => {
        c++
        if (c>3){c=0}
        hideTabContent()
        showTabContent(c)
    },1500);
}

hideTabContent();
showTabContent();
sliderAuto();

tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabContent();
                showTabContent(i);
                c = i;
            }
        });
    }
});

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

console.log(modal, "modal");
console.log(modalTrigger, " modalTrigger");
console.log(closeModalBtn, " closeModalBtn");

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

modalTrigger.addEventListener("click", openModal);

modal.addEventListener("click", (event) => {
    if (event.target == modal) {
        closeModal();
        console.log(event.target);
    }
});

closeModalBtn.addEventListener("click", closeModal);

const openScrollModal = () => {
    const doc = document.documentElement;

    if (doc.scrollTop + doc.clientHeight >= doc.scrollHeight) {
        openModal();
        document.body.style.overflow = "hidden";
    }
}

window.addEventListener("scroll", openScrollModal)