function list() {
    var x = document.getElementById("listdiv");
    var y = document.getElementById("listbtn");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "hide"
    } else {
      x.style.display = "none";
      y.innerHTML = "show"
    }
}

$(document).ready(function() {
  $("#listdiv").load('/src/lists/ach.html');
  $('#serv-list').load('/src/lists/service-list.html');
  mobi_css();
});

function mobi_css(){
  var home_b1 = document.getElementById("home_b1")
  var about_b1 = document.getElementById("about_b1")
  var about_b2 = document.getElementById("about_b2")
  var about_b3 = document.getElementById("about_b3")

  if( window.innerWidth <= 575) {
    console.log("mobile?");
    if (home_b1){home_b1.style.animationDelay='.9s';}
    else if(about_b1 || about_b2 || about_b3){
      about_b1.style.animationDelay='.9s';
      about_b2.style.animationDelay='1.1s';
      about_b3.style.animationDelay='1.3s';
    }
  } else {
    if (home_b1){home_b1.style.animationDelay='.4s';}
    else if(about_b1 || about_b2 || about_b3){
      about_b1.style.animationDelay='.4s';
      about_b2.style.animationDelay='.8s';
      about_b3.style.animationDelay='.9s';
    }
  }

}