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
});