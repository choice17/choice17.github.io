var test = document.getElementById("test");
var url = '/input';

function sendData() {
  var data = "a=" + $("#test").val().toString();
  return data;
}
function success(response) {
  console.log("post success" + response);
  $("#result").text(response);
// do something here 
}
function failure(response) {
  console.log("post fail" + response);
  $("#result").text("failure");
}
function submit_form() {
  $.get(url, sendData(), success)
   .fail(failure);
}

function tag_topic(idx) {
  if ((idx == 0) || (idx == 9))
    $("#projects").show();
  else
    $("#projects").hide();
  if ((idx == 1) || (idx == 9))
    $("#about").show();
  else
    $("#about").hide();
  if ((idx == 2) || (idx == 9))
    $("#contact").show();
  else
    $("#contact").hide();

}

var a_c = 1;
var p_c = 1;
var c_c = 1;

function toggle_content_about() {
  if (!a_c) {
    $("#about_content").show();
    $("#about_bn").val("hide");
    $("#about_bn").removeClass("btn-primary");
    $("#about_bn").addClass("btn-outline-primary");
    a_c = 1;
  } else {
    $("#about_content").hide();
    $("#about_bn").val("show");
    $("#about_bn").removeClass("btn-outline-primary");
    $("#about_bn").addClass("btn-primary");
    a_c = 0;
  }
}

function toggle_content_projects() {
  if (!p_c) {
    $("#projects_content").show();
    $("#projects_bn").val("hide");
    $("#projects_bn").removeClass("btn-primary");
    $("#projects_bn").addClass("btn-outline-primary");
    p_c = 1;
  } else {
    $("#projects_content").hide();
    $("#projects_bn").val("show");
    $("#projects_bn").removeClass("btn-outline-primary");
    $("#projects_bn").addClass("btn-primary");
    p_c = 0;
  }
}

function toggle_content_contact() {
  if (!c_c) {
    $("#contact_content").show();
    $("#contact_bn").val("hide");
    $("#contact_bn").removeClass("btn-primary");
    $("#contact_bn").addClass("btn-outline-primary");
    c_c = 1;
  } else {
    $("#contact_content").hide();
    $("#contact_bn").val("show");
    $("#contact_bn").removeClass("btn-outline-primary");
    $("#contact_bn").addClass("btn-primary");
    c_c = 0;
  }
}
function tag_home() {
  a_c = 1;
  p_c = 1;
  c_c = 1;
  tag_topic(9);
  toggle_content_projects();
  toggle_content_about();
  toggle_content_contact();

}