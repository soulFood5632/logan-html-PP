function setActive(element, newSection) {
  var links = document.getElementsByClassName("topnav")[0].getElementsByTagName("a")
  for (var i = 0; i < links.length; i++) {
    console.log(links)
    links[i].classList.remove("active")
  }

  element.classList.add("active")

  links = document.getElementsByClassName("user-sections")[0].getElementsByTagName("div")
  for (var i = 0; i < links.length; i++) {

    if (links[i].classList.contains("active")) {
      links[i].classList.remove("active")
      links[i].classList.add("non-active")
    }
  }

  document.getElementById(newSection).classList.remove("non-active")
  document.getElementById(newSection).classList.add("active")



}

ids = ["ML", "main", "ROBOT", "APP"]

function view_pop_up(elementName) {
  console.log(elementName)
  for (var i = 0; i < ids.length; i++) {
    if (elementName === ids[i]) {
      document.getElementById("B_" + elementName).classList.remove("non-active")
      document.getElementById("B_" + elementName).classList.add("active")
    } else {
      document.getElementById(ids[i]).classList.remove("active")
      document.getElementById(ids[i]).classList.add("non-active")
    }
  }
}

function removePopUp(elementName) {
  for (var i = 0; i < ids.length; i++) {
    if (elementName === ids[i]) {
      document.getElementById("B_" + elementName).classList.add("non-active")
      document.getElementById("B_" + elementName).classList.remove("active")
    } else {
      document.getElementById(ids[i]).classList.add("active")
      document.getElementById(ids[i]).classList.remove("non-active")
    }
  }

}
