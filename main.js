setTimeout(()=>{window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY >window.innerHeight+1 );
})},1000)