const menutab: any = document.querySelector(".menu-tab");
const menuhide: any = document.querySelector(".menu-hide");

menutab?.addEventListener("click", () => {
    menuhide.classList.toggle('show');
    menutab.classList.toggle('active');
})