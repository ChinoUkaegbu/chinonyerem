let works = document.getElementById("works")
let about = document.getElementById("about")
let contact = document.getElementById("contact")
let to_close = document.getElementById("to_close")
let my_name = document.getElementById("my_name")
let content = document.getElementById("child-page-listing")

function works_mouseClick()
{
  works.style.width = "80vw";

  about.style.width = "4vw";
  contact.style.width = "4vw";
  my_name.style.opacity = "0";
  content.style.opacity = "1";
  console.log("This works worked");
}

// window.onload = works_mouseClick;
setTimeout(works_mouseClick, 100);
