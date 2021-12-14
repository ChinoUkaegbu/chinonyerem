let works = document.getElementById("works")
let about = document.getElementById("about")
let contact = document.getElementById("contact")
let to_close = document.getElementById("to_close")
let my_name = document.getElementById("my_name")
let about_me_content = document.getElementById("about_me_content")

function about_mouseClick()
{
  about.style.width = "80vw";

  works.style.width = "4vw";
  contact.style.width = "4vw";
  my_name.style.opacity = "0";
  // abstract.style.opacity = "1";
  about_me_content.style.opacity = "1";
  console.log("This about worked");
}

// window.onload = about_mouseClick;
setTimeout(about_mouseClick, 30);
