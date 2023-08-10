const langBtn = document.querySelector(".lang-btn");
const langModal = document.querySelector(".lang-modal");
const cancelBtn = document.querySelector(".cancelBtn");

// const btn = cancelBtn || langBtn;
// // const openMenu = (event) => {
// //     console.log(event);
    
// // }
langBtn.addEventListener('click', () => {
    langModal.classList.add('modal-active');
    langBtn.classList.add("lang-hide");
});
cancelBtn.addEventListener('click', () => {
    langModal.classList.remove('modal-active');
    langBtn.classList.remove("lang-hide");

});


