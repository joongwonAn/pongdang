const introTap = document.querySelector('.intro_tap');
const profileTap = document.querySelector('.profile_tap');
const introWrap = document.querySelector('.intro_wrap');
const profileWrap = document.querySelector('.profile_wrap');
const content = document.querySelector('.content');
const hashtagList = document.querySelector('.hashtag_list');
const hashtagModifyBtn = document.querySelector('.hashtag_modify_btn');

introTap.addEventListener('click', () => {
    introTap.style.color = '#000';
    profileTap.style.color = '#999999';
    introWrap.style.display = 'block';
    profileWrap.style.display = 'none';
    content.style.height = '740px';
})
profileTap.addEventListener('click', () => {
    introTap.style.color = '#999999';
    profileTap.style.color = '#000';
    introWrap.style.display = 'none';
    profileWrap.style.display = 'block';
    content.style.height = '1130px';
    hashtagModifyBtn.style.transform = `translate(30px, ${hashtagList.clientHeight - 28}px)`;
})

const passwordUpdateBtn = document.querySelector('.passwordUpdateBtn');
const passwordValidation = document.querySelector('.password_validation');
const passwordCheckValidation = document.querySelector('.password_check_validation');
const passwordInput = document.querySelector('#passwordInput');
const passwordCheckInput = document.querySelector('#passwordCheckInput');

passwordUpdateBtn.addEventListener('click', validate);

function validate(){
    const re = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/

    if(!check(re,passwordInput)) {
        return false;
    }
    if(passwordInput.value != passwordCheckInput.value) {
        passwordCheckValidation.style.display = "block";
        passwordCheckInput.value = "";
        passwordCheckInput.focus();
        return false;
    }
    passwordCheckValidation.style.display = "none";
    passwordInput.value = '';
    passwordCheckInput.value = '';
    alert("비밀번호 변경이 완료되었습니다.");
}

function check(re, what) {
    if(re.test(what.value)) {
        passwordValidation.style.display = "none";
        return true;
    }
    passwordValidation.style.display = "block";
    what.focus();
}

const area = document.querySelector('.area');
const areaInput = document.querySelector('#areaInput');
const areaInputWrap = document.querySelector('.area_input_wrap');
const areaModifyBtn = document.querySelector('.area_modify_btn');
const areaCancelBtn = document.querySelector('.area_cancel_btn');
const areaItem = document.querySelector('.area_item');
const areaBtnWrap = document.querySelector('.area_btn_wrap');
const areaValidation = document.querySelector('.area_validation');

areaModifyBtn.addEventListener('click', () => {
    if(areaModifyBtn.classList.contains('area_update_btn')){
        if(!areaInput.value){
            areaValidation.style.display = 'block'
            return;
        }
        areaModifyBtn.innerText = '수정';
        areaModifyBtn.classList.remove('area_update_btn');
        areaCancelBtn.style.display = 'none';
        area.style.display = 'block';
        areaInputWrap.style.display = 'none';
        area.innerText = areaInput.value;
        areaItem.style.height = '80px';
        areaBtnWrap.style.transform = 'translate(0, 0)';
        content.style.height = '1130px';
    } else {
        areaModifyBtn.innerText = '변경';
        areaModifyBtn.classList.add('area_update_btn');
        areaCancelBtn.style.display = 'block';
        area.style.display = 'none';
        areaInputWrap.style.display = 'block';
        areaItem.style.height = '116px';
        areaBtnWrap.style.transform = 'translate(0, 42px)';
        areaValidation.style.display = 'none'
        content.style.height = '1160px';
    }
})
areaCancelBtn.addEventListener('click', () => {
    areaModifyBtn.innerText = '수정';
    areaModifyBtn.classList.remove('area_update_btn');
    areaCancelBtn.style.display = 'none';
    area.style.display = 'block';
    areaInputWrap.style.display = 'none';
    areaItem.style.height = '80px';
    areaBtnWrap.style.transform = 'translate(0, 0)';
    content.style.height = '1130px';
})

const introduce = document.querySelector('.introduce');
const introduceInput = document.querySelector('#introduceInput');
const introduceModifyBtn = document.querySelector('.introduce_modify_btn');
const introduceCancelBtn = document.querySelector('.introduce_cancel_btn');

introduceModifyBtn.addEventListener('click', () => {
    if(introduceModifyBtn.classList.contains('introduce_update_btn')){
        introduceModifyBtn.innerText = '수정';
        introduceModifyBtn.classList.remove('introduce_update_btn');
        introduceCancelBtn.style.display = 'none';
        introduce.style.display = 'block';
        introduceInput.style.display = 'none';
        introduce.innerText = introduceInput.value;
    } else {
        introduceModifyBtn.innerText = '변경';
        introduceModifyBtn.classList.add('introduce_update_btn');
        introduceCancelBtn.style.display = 'block';
        introduce.style.display = 'none';
        introduceInput.style.display = 'block';
        introduceInput.focus();
    }
})
introduceCancelBtn.addEventListener('click', () => {
    introduceModifyBtn.innerText = '수정';
    introduceModifyBtn.classList.remove('introduce_update_btn');
    introduceCancelBtn.style.display = 'none';
    introduce.style.display = 'block';
    introduceInput.style.display = 'none';
})

function setThumbnail(event) {
    const imgMain = document.querySelector(".picture");
    imgMain.style.display = "block";
    let reader = new FileReader();
    reader.onload = function (event) {
        const img = document.createElement('img');
        img.className = 'thumbnail';
        imgMain.style.border = 'none';
        imgMain.innerHTML = '';
        imgMain.append(img);
        img.setAttribute("src", event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
}

function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            let addr = ''; // 주소 변수
            let extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                // if(extraAddr !== ''){
                //     extraAddr = ' (' + extraAddr + ')';
                // }
                // // 조합된 참고항목을 해당 필드에 넣는다.
                // document.getElementById("sample6_extraAddress").value = extraAddr;

            }
            else {
                // document.getElementById("sample6_extraAddress").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('postcodeInput').value = data.zonecode;
            document.getElementById("areaInput").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("areaInput").focus();
        }
    }).open();
}

const xhr = new XMLHttpRequest();

xhr.onload = () => {
    if(xhr.status === 200){
        const response = JSON.parse(xhr.response);
        for(let i = 0; i < response.hashtag.length; i++){
            const li = document.createElement('li')
            li.className = 'inner_hashtag_item';
            li.innerText = `#${response.hashtag[i]}`;
            hashtagList.append(li);
        }
    }
}

xhr.open("GET", "./hashtag.json", true);
xhr.send(null);


