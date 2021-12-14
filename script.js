let works = document.getElementById("works")
let about = document.getElementById("about")
let contact = document.getElementById("contact")
let to_close = document.getElementById("to_close")
let my_name = document.getElementById("my_name")

function works_mouseClick()
{
  works.style.width = "80vw";

  about.style.width = "4vw";
  contact.style.width = "4vw";
  my_name.style.opacity = "0";
  console.log("This works worked");
}

function about_mouseClick()
{
  about.style.width = "80vw";

  works.style.width = "4vw";
  contact.style.width = "4vw";
  my_name.style.opacity = "0";
  console.log("This about worked");
}

function contact_mouseClick()
{
  contact.style.width = "80vw";

  works.style.width = "4vw";
  about.style.width = "4vw";
  my_name.style.opacity = "0";
  console.log("This contact worked");
}

works.onclick = works_mouseClick;
about.onclick = about_mouseClick;
contact.onclick = contact_mouseClick;


to_close.addEventListener("click", function(){
  works.style.width = "4vw";
  about.style.width = "4vw";
  contact.style.width = "4vw";
  my_name.style.opacity = "1";
});
