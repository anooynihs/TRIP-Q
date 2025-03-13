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

// section1 페이지 스크롤 안내 아이콘
const scrollIcon = document.querySelector('.scroll-icon a'); // 스크롤 아이콘
const footer = document.getElementById('footer'); // footer 요소
const section1 = document.getElementById('section1'); // section1 요소

section1.addEventListener('scroll', function() {
    const sectionRect = section1.getBoundingClientRect(); // section1의 위치 정보
    const footerRect = footer.getBoundingClientRect(); // footer의 위치 정보

    // footer의 상단이 section1 내부에 도달했는지 확인
    if (footerRect.top <= sectionRect.bottom) {
        scrollIcon.style.display = 'none'; // 아이콘 숨기기
    } else {
        scrollIcon.style.display = 'block'; // 아이콘 다시 보이기
    }
});

// section1 스크랩 아이콘
document.addEventListener('DOMContentLoaded', function () {
    const scrapButtons = document.querySelectorAll('.scrap-btn'); // 모든 스크랩 버튼 선택

    scrapButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // a 태그의 기본 이동 방지

            const icon = button.querySelector('img'); // 버튼 내부의 아이콘 이미지 선택
            const defaultIcon = button.getAttribute('data-default'); // 기본 아이콘
            const activeIcon = button.getAttribute('data-active'); // 클릭 후 변경될 아이콘

            // 아이콘 변경
            if (icon.src.includes(defaultIcon)) {
                icon.src = `./images/icon/${activeIcon}`;
                showScrapPopup(button, '스크랩 되었습니다.');
            } else {
                icon.src = `./images/icon/${defaultIcon}`;
                showScrapPopup(button, '스크랩이 취소되었습니다.');
            }
        });
    });

    function showScrapPopup(button, message) {
        // 팝업 요소 생성
        const popup = document.createElement('div');
        popup.classList.add('scrap-popup');
        popup.textContent = message;

        // 버튼 위치 기준으로 팝업 위치 설정
        const buttonRect = button.getBoundingClientRect();
        popup.style.top = `${window.scrollY + buttonRect.top - 35}px`; // 버튼 위에 표시
        popup.style.left = `${window.scrollX + buttonRect.left - 30}px`;

        // 팝업을 body에 추가
        document.body.appendChild(popup);

        // 0.5초 후 팝업 사라짐
        setTimeout(() => {
            popup.style.opacity = '0';
            setTimeout(() => popup.remove(), 300); // 완전히 사라진 후 제거
        }, 500);
    }
});

// section1 취향 맞춤 컬렉션 tab 메뉴 활성화
const tabButtons = document.querySelectorAll('.tab button');

tabButtons.forEach(button => {
    button.addEventListener('click', function () {
        // 모든 버튼에서 active 제거
        tabButtons.forEach(btn => btn.classList.remove('active'));

        // 클릭한 버튼에 active 추가
        this.classList.add('active');
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