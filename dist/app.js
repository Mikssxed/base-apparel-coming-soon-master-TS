const mainimg = document.getElementById("mainimg");
const imgmobile = document.getElementById("mainimg-mobile");
const text = document.querySelector(".error-text");
const input = document.getElementById("email");
const validate = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})$/; //regex for email validation
const button = document.querySelector("button");
const errorimg = document.getElementById("error-img");
const swapimg = () => {
    if (window.innerWidth > 1000) {
        mainimg.style.display = "block";
        imgmobile.style.display = "none";
    }
    else {
        mainimg.style.display = "none";
        imgmobile.style.display = "block";
    }
};
window.onload = swapimg;
window.addEventListener('resize', swapimg);
const validation = () => {
    text.classList.remove("validate");
    errorimg.style.display = "none";
    if (input.value.match(validate)) {
        text.innerHTML = "Thank You for subscribing our newsletter :)";
        text.classList.add("validate");
        input.style.border = "1px solid green";
    }
    else {
        text.innerHTML = "Please provide a valid email";
        errorimg.style.display = "block";
        input.style.border = "1px solid var(--primary-color2)";
    }
};
button.addEventListener('click', validation);
