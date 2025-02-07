/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

/* added for corporate network */
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        // Remove the 'clicked' class from all boxes
        document.querySelectorAll('.box').forEach(b => b.classList.remove('clicked'));
        // Add the 'clicked' class to the clicked box
        box.classList.add('clicked');
    });
});
/* */ 

/* added for dynamic main page */
// 이전 페이지 인덱스 가져오기
const lastPageIndex = parseInt(localStorage.getItem("lastPageIndex"), 10) || 0;

// 다음 페이지 인덱스 계산
const nextPageIndex = (lastPageIndex + 1) % pages.length;

// 다음 페이지 렌더링
document.getElementById('app').innerHTML = pages[nextPageIndex];

// 현재 인덱스 저장
localStorage.setItem("lastPageIndex", nextPageIndex);
/**/

/* added for service navigation bar */
document.addEventListener("DOMContentLoaded", () => {

    const tabLinks = document.querySelectorAll(".tab-link"); // 메인 탭 링크
    const tabSubs = document.querySelectorAll(".tab-sub");  // 서브 탭 섹션

    tabLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            // 모든 메인 탭의 활성화 상태 초기화
            tabLinks.forEach(l => l.classList.remove("active"));
            // 모든 서브 탭 숨기기
            tabSubs.forEach(sub => sub.classList.remove("active"));

            // 클릭된 메인 탭 활성화
            link.classList.add("active");

            // 해당 서브 탭 표시
            const target = link.dataset.target; // 클릭된 탭의 data-target 값
            const subTab = document.getElementById(target);
            if (subTab) {
                subTab.classList.add("active");
            }
        });
    });
    
    /*
    const mainTabs = document.querySelectorAll(".tab-link");
    const subTabs = document.querySelectorAll(".tab-sub");
    const subTabLinks = document.querySelectorAll(".tab-sub a");


    // 메인 탭 클릭 이벤트
    mainTabs.forEach((tab) => {
        tab.addEventListener("click", (event) => {
            event.preventDefault();

            // 모든 서브 탭 숨기기
            subTabs.forEach((subTab) => subTab.classList.remove("active"));

            // 선택된 서브 탭 표시
            const targetId = tab.getAttribute("data-target");
            const targetSubTab = document.getElementById(targetId);
            if (targetSubTab) {
                targetSubTab.classList.add("active");
            }

            // 화면 상단으로 이동
            targetSubTab.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // 서브 탭 클릭 이벤트
    subTabLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            // 모든 서브 탭 링크에서 active 제거
            subTabLinks.forEach((subLink) => subLink.classList.remove("active"));

            // 현재 클릭된 링크에 active 추가
            link.classList.add("active");

            // 해당 위치로 스크롤 이동
            const targetSection = document.querySelector(link.getAttribute("href"));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
    */

});
/**/