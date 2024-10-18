let category = {},
    firstCategory = "",
    secondCategory = "",
    thirdCategory = "",
    selectedCategoryEntityFirst = ``,
    selectedCategoryEntitySecond = ``;
const headerCategoryBox = document.querySelector(".header-category-box"),
    headerCategoryIcon = headerCategoryBox.querySelector("i"),
    headerCategoryViewBox = document.querySelector(".header-category-view-box"),
    headerCategoryView = document.querySelectorAll(".header-category-view"),
    headerCategoryViewSelect = document.querySelectorAll(".header-category-view__select"),
    headerCategoryViewList = document.querySelectorAll(".header-category-view__list"),
    selectedHeaderCategorySecond = headerCategoryViewSelect[1].querySelector("span"),
    selectedHeaderCategoryThird = headerCategoryViewSelect[2].querySelector("span");

function loadJson() {
    $.ajax({
        url:"/data/product.json",
        error: function(){
            alert("서버 점검중");
        },
        async: false,
        success: function (json){
            category = json;
        }
    })
}
function makeCategoryListFirst() {
    const firstList = Object.keys(category);
    firstList.forEach(name => {
        const a = document.createElement('a');
        a.innerText = `${name}`;
        headerCategoryViewList[0].appendChild(a);
    })
}
function makeCategoryListSecond(event) {
    headerCategoryView[1].classList.remove('hide');
    if(selectedCategoryEntityFirst)
        selectedCategoryEntityFirst.classList.remove('bg--red');
    selectedCategoryEntityFirst = event.target;
    selectedCategoryEntityFirst.classList.add('bg--red');

    const list = headerCategoryViewList[1];
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    firstCategory = event.target.innerText;
    selectedHeaderCategorySecond.innerText = firstCategory;
    const secondList = Object.keys(category[firstCategory])
    secondList.forEach(name => {
        const a = document.createElement('a');
        a.innerText = `${name}`;
        list.appendChild(a);
    })
}

function makeCategoryListThird(event) {
    if(selectedCategoryEntitySecond)
        selectedCategoryEntitySecond.classList.remove('red');
    selectedCategoryEntitySecond = event.target;
    selectedCategoryEntitySecond.classList.add('red');

    const list = headerCategoryViewList[2];
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    secondCategory = event.target.innerText;
    selectedHeaderCategoryThird.innerText = secondCategory;
    const thirdList = category[firstCategory][secondCategory]
    thirdList.forEach(name => {
        const a = document.createElement('a');
        a.innerText = `${name}`;
        list.appendChild(a);
    })
}
function showHeaderCategoryViewBox() {
    headerCategoryViewBox.classList.remove('hide');
}
function hideHeaderCategoryViewBox() {
    setTimeout(()=>{
        headerCategoryViewBox.classList.add('hide');
        headerCategoryView[1].classList.add('hide');
        headerCategoryView[2].classList.add('hide');
        if(selectedCategoryEntityFirst)
            selectedCategoryEntityFirst.classList.remove('bg--red');
        if(selectedCategoryEntitySecond)
            selectedCategoryEntitySecond.classList.remove('red');
    }, 300);
    
}
function showHeaderCategoryList(event) {
    if(event.target == headerCategoryViewList[0]) {
        headerCategoryView[2].classList.add('hide');
        const category_names = headerCategoryViewList[0].querySelectorAll('a');
        category_names.forEach(name => {
            name.addEventListener("mouseenter", makeCategoryListSecond);
        })
    }
    if(event.target == headerCategoryViewList[1]) {
        headerCategoryView[2].classList.remove('hide');
        const category_names = headerCategoryViewList[1].querySelectorAll('a');
        category_names.forEach(name => {
            name.addEventListener("mouseenter", makeCategoryListThird);
        })
    }
}
function init() {
    loadJson();
    makeCategoryListFirst();
    headerCategoryViewList[0].addEventListener("mouseenter", showHeaderCategoryList);
    headerCategoryViewList[1].addEventListener("mouseenter", showHeaderCategoryList);
    headerCategoryIcon.addEventListener("mouseenter", showHeaderCategoryViewBox);
    headerCategoryBox.addEventListener("mouseleave", hideHeaderCategoryViewBox);
}

init();