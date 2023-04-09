function toggleMenu(){
    document.getElementById("sidebar-ico").classList.toggle("open");
    document.getElementById('burguer-ico').classList.toggle("open");
}
const x = document.getElementById('burguer-ico')
x.onclick = toggleMenu;

let d = new Date();
    document.getElementById('currentYear').textContent = d.getFullYear();
let lastUpdated = document.lastModified;
    document.getElementById('lastModified').textContent = lastUpdated;
/*Lazy Load*/
const images = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    images.forEach((img) => {
        observer.observe(img);
    });
} else {
    images.forEach((img) => {
        loadImages(img);
    });
}