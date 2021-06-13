
var btn = document.getElementById('btn');
btn.onclick =function(){
  alert("hello");
}

$(document).ready(
function(){
  $('#btn').hover(
    function(){
      $("#h2").css("font-size",'40px');
      $("#h2").text("Project X");
      $("#h3").text("Beta Version");
      $(".cont").css("color",'#fff');
    },
    function(){
      $("#h2").css("font-size",'');
      $("#h2").text("Hello Geeks!");
      $("#h3").text("I am working in this Project.");
      $(".cont").css("color",'#000');
    }
  )
})
