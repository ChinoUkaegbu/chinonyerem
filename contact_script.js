let works = document.getElementById("works")
let about = document.getElementById("about")
let contact = document.getElementById("contact")
let to_close = document.getElementById("to_close")
let my_name = document.getElementById("my_name")
let contact_contents = document.getElementById("contact_contents")
let to_center = document.getElementById("to_center")

function contact_mouseClick()
{
  contact.style.width = "80vw";

  works.style.width = "4vw";
  about.style.width = "4vw";
  my_name.style.opacity = "0";
  contact_contents.style.opacity = "1";
  console.log("This contact worked");
}

// window.onload = contact_mouseClick;
setTimeout(contact_mouseClick, 30);

to_center.style.opacity = "1";
