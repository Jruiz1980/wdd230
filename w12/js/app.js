function toggleMenu(){
    document.getElementById("sidebar-ico").classList.toggle("open");
    document.getElementById('burguer-ico').classList.toggle("open");
}
const x = document.getElementById('burguer-ico')
    x.onclick = toggleMenu;