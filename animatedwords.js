const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 3000);
    setTimeout(() => {
        text.textContent = "Blogger";
    }, 9000);
    setTimeout(() => {
        text.textContent = "Youtuber";
    }, 14000);
}

textLoad();
setInterval(textLoad, 18000)
// 18000
// 20000
// 17000