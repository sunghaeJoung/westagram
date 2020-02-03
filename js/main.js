const feed = document.querySelector(".feed1"),
    addComment = feed.querySelector(".addComment"),
    input = feed.querySelector("input"),
    btn =  feed.querySelector(".submitBtn");


function saveComment(text) {
    let div = document.createElement("div");
    let spanId = document.createElement("span"); //댓글쓴 사람 id
    let spanText = document.createElement("span"); //댓글 내용
    //html에 이미지 넣는 방법
    let img = document.createElement("img");
    img.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
    div.classList.add("comment-list");
    spanId.classList.add("comment-id");
    spanText.classList.add("comment-text");
    spanId.innerText = "_sunghae__";
    spanText.innerHTML = text;
    div.appendChild(spanId);
    div.appendChild(spanText);
    div.appendChild(img);
    addComment.appendChild(div);
    console.log(addComment);
}

function writeComment() {
     const newComment = input.value //입력한 댓글을 변수에 저장
     saveComment(newComment);
     input.value = ""; //input에 입력 후 click하면 입력한 텍스트가 사라짐!!
}


function init() {
    btn.addEventListener("click", writeComment);
}

init();


/* 
1. input창에 댓글 입력 후 submit하면 제출
2. createElement를 사용해서 입력된 댓글 추가
  2-1 comment-box에 div랑 span 추가
  2-2 추가한 div에 class(comment-list) 추가
  2-3 입력된 내용을 span에 넣기
  2-4 appendChild 해서 div를 comment-box에 추가
*/