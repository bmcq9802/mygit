/// 보그코리아 링크시스템 js - linksys.js ///

$(function(){//////////////////// jQB //////////////////////////////

console.log("링크시스템 로딩구역!");

/// 1. GNB 메뉴 링크 연결하기
// 대상 : .gnb a
// 이벤트 : click -> click() 메서드 사용
$(".gnb a").click(function(e){ //

    // e - 이벤트 전달변수 : 여러가지 이벤트관련 설정가능!

    // 기본 이동속성 막기
    e.preventDefault();
    // preventDefault() 기본이벤트 발생을 막아준다!
    // e라는 이벤트전달변수를 꼭 써야한다!

    // 2. 클릭된 a요소의 텍스트 읽어오기
    let mtxt = $(this).text().toLowerCase().trim();
    // toLowerCase() -> 소문자 변환 메서드
    // 비교) toUpperCase() -> 대문자 변환 메서드

    // trim() 메서드 : 문자데이터 앞뒤공백제거
    // -> 마지막 검색아이콘 클릭시 앞뒤공백있는 "search" 라는 글자가 나온다 이것의 앞뒤공백 제거
    
    console.log(mtxt);
    
    // 3. 페이지 이동하기 
    if (mtxt !=="search") // search가 아닐때만 이동!
        location.href = "sub.html?cat="+mtxt;
    
    // url 뒤에 ?(물음표) 키=값 쌍으로 보냄
    // cat 이라는 키 이름은 선생님이 지은것
    // 키=값으로 데이터를 맞추기 위해
    

}); /////////////////// click ////////////////////////////////////

}); ////////////////////////////////jQB//////////////////////