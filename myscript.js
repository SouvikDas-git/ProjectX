var int = 1; //counter var
var str1 = document.getElementById('h2').innerHTML;
var str2 = document.getElementById('h3').innerHTML;

function myfun1(){
    int=1;
    $("#btn").css("height",'0');
    $("#btn").css("width",'0');
    $("#h2").css("font-size", '');
    $("#h2").text(str1);
    $("#h3").text(str2);
    $(".cont").css("color", '#000');
}

var btn = document.getElementById('btn');
btn.onclick = function () {
  if (int == 2){
  myfun1();
  }
}


$(document).ready(
  function () {
    $('#btn').hover(
      function () {
        int=2;
        $("#btn").css("height",'2220px');
        $("#btn").css("width",'2220px');
        $("#h2").css("font-size",'40px');
        $("#h2").text("Project X");
        $("#h3").text("Beta Version");
        $(".cont").css("color", '#fff');
      },
      function(){myfun1();}
    )
  })
