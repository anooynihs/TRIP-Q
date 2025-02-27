// 메뉴 팝업창
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');

menuBtn.addEventListener('click',()=>{
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
})

window.addEventListener('scroll', () => {
    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
    }
});