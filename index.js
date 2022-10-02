// $("h1").css("background-color","red")

$(function(){
    $("#app-title").text("經濟學系器材借閱系統")
    $("#myapp").append(Ebookcard(0)) 
   // $("#myapp").append(<Ebookcard  number={5}/>)

})

function Ebookcard(number){

  let action =  (number>0)? "借用":"預約"
  return `<div class="ebookcard">
  <div class="ebookcard-icon">
    <div class="ebookcard-icon-icon">${IconKindle()}</div>
    <div class="ebookcard-icon-iconName"></div>
  </div>
  <div class="ebookcard-pill">
    <div class="ebookcard-pill-availability">
      <div class="ebookcard-pill-availability-icon">${IconAvailable()}</div>
      <div class="ebookcard-pill-availability-number">${number+'/10'}</div>
    </div>
    <div class="ebookcard-pill-action">
      <div class="ebookcard-pill-action-type">${action}</div>
    </div>
  </div>
</div>`
}
function IconAvailable(){
  return `<img src="./icon-check.png"/>`
}
function IconKindle(){
  return `<img src="./icon-kindle.png"/>`
}
function Calendar(date="4/25"){
  return `<div class="calendar">
  <div class="calendar-date">
    <div class="calendar-date-number">${date}</div>
  </div>
</div>`
}
// non dom element tricks
// component function
function card(){
    return `<div class="card" style="width: 18rem;">
    <img src="https://cms-carrier.ntpu.edu.tw/uploads/62d1182f836cf05bcfa9c054cover_Image_38b3b07ac7.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
}
function ClassMapFooter(){
  return `<div class="classMap_footer">
  <div class="classMap_footer-word"></div>
  <div class="classMap_footer-icon"></div>
</div>`
}

function LectureCard(){
  return `<div class="lectureCard">
  <div class="lectureCard-info">
    <div class="lectureCard-info-word">
      <div class="lectureCard-info-word-topic"></div>
      <div class="lectureCard-info-word-lecturer"></div>
    </div>
  </div>
  <div class="lectureCard-icon"></div>
</div>`
}

