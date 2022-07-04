const item =document.querySelectorAll('article');
const aside =document.querySelector('aside');
const close =document.querySelector('aside span');

for(let aa of item){        //각각의 아티클(item)에 적용
    aa.addEventListener("click", e => {
        let title = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute('src');
        console.log(vidSrc);


        aside.querySelector('h2').innerText = title;
        aside.querySelector('p').innerText = txt;
        aside.querySelector('video').setAttribute('src',vidSrc);
        //aside요소의 내부 콘텐츠에 클릭한 article에서 가져온 변수를 적용

        aside.querySelector('video').play();    //aside 요소 내부 동영상 재생

        aside.classList.add("on");      //aside에 클라스 on추가(팝업 패널이 튀어나옴)
    });

    aa.addEventListener("mouseenter", e => {
        //각각 article요소에 mouseenter이벤트 발생
        e.currentTarget.querySelector("video").play();
        //현재 이벤트가 바인딩 된(currentTarget) 엘리먼트의 자식요소 video가 play된다
    });

    aa.addEventListener("mouseleave", e=>{
        e.currentTarget.querySelector("video").pause();
    })


};  //for문 끝


//aside안의 CLOSE버튼을 클릭하면
close.addEventListener("click", ()=>{  
    aside.classList.remove("on");  
    aside.querySelector("video").pause(); 
})