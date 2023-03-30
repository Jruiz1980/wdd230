const x = document.getElementById('burguer-ico');
    x.onclick = toggleMenu;
function toggleMenu(){
    document.getElementById('sidebar-ico').classList.toggle("open");
    document.getElementById('burguer-ico').classList.toggle("open");
}
