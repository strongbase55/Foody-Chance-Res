const menuItems = document.getElementById('menu-items');
const openButton = document.getElementById('openn');
const closeButton = document.getElementById('closee');

function openMenu() {
    if (menuItems.style.display === 'none' || menuItems.style.display === '') {
        menuItems.style.display = 'block';
        openButton.style.display = 'none';
        closeButton.style.display = 'block';
    } else {
        menuItems.style.display = 'none';
        openButton.style.display = 'block';
        closeButton.style.display = 'none';
    }
}

function closeMenu() {
    if (menuItems.style.display === 'block' || menuItems.style.display === '') {
        menuItems.style.display = 'none';
        openButton.style.display = 'block';
        closeButton.style.display = 'none';
    } else {
        menuItems.style.display = 'block';
    }
}
