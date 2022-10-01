// $("h1").css("background-color","red")

$(function(){
    $("#app-title").text("經濟學系器材借閱系統")
    $("#myapp").append(card()) 

})

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