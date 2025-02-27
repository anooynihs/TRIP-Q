document.addEventListener('DOMContentLoaded', function() {
    const section1 = document.getElementById('section1');
    const scrollIcon = document.querySelector('.scroll-icon a');
    const footer = document.getElementById('footer');

    section1.addEventListener('scroll', function() {
    const sectionBottom = section1.scrollTop + section1.clientHeight;
    const footerTop = footer.offsetTop;

    if (sectionBottom >= footerTop) {
        // footer가 보이면 아이콘을 up으로 변경
        scrollIcon.classList.remove('down');
        scrollIcon.classList.add('up');
        scrollIcon.querySelector('img').src = './images/icon/scroll-up.png';
    } else {
        // 그렇지 않으면 down 아이콘 유지
        scrollIcon.classList.remove('up');
        scrollIcon.classList.add('down');
        scrollIcon.querySelector('img').src = './images/icon/scroll-down.png';
    }
    });
});

// section2 배너 슬라이드
const nowSlide = document.querySelector('.now');
const totalSlide = document.querySelector('.total');
const slide = document.querySelectorAll('.swiper-slide');

totalSlide.textContent = slide.length;

const swiper = new Swiper('.typical-bnr', {
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
    },
    loop: true,
    effect: 'fade',
    navigation: {
        prevEl: '.slide-btn .prev',
        nextEl: '.slide-btn .next',
    },
    on:{
        slideChange:function(){
            nowSlide.textContent = this.realIndex + 1;
        }
    },
});