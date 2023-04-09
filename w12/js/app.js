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

document.addEventListener("DOMContentLoaded", function() {
    var lazyBackgrounds = [].slice.call(document.querySelectorAll(".hero"));

    if ("IntersectionObserver" in window) {
        let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            lazyBackgroundObserver.unobserve(entry.target);
            }
        });
    });
    lazyBackgrounds.forEach(function(lazyBackground) {
        lazyBackgroundObserver.observe(lazyBackground);
    });
    }
});