function setActive(element, newSection) {
  var links = document.getElementsByClassName("topnav")[0].getElementsByTagName("a")
  console.log(newSection)
  for (var i = 0; i < links.length; i++) {

    links[i].classList.remove("active")
  }



  // document.getElementById("user-sections").style.color =

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



ids = ["ML", "ROBOT", "APP"]



function downloadPDF(url, name) {
  // Replace 'your_file_url' with the actual URL of the file you want to download


  // Create a hidden link element
  var link = document.createElement('a');
  link.href = url;

  // Set the download attribute with the desired file name
  link.download = name;

  // Append the link to the document
  document.body.appendChild(link);

  // Trigger a click event on the link to start the download
  link.click();

  // Remove the link from the document after the download starts
  document.body.removeChild(link);
}

function redirectToAnotherWebsite(url) {
  // Use window.location.href to redirect to the specified URL
  window.location.href = url;
}

function makeFullScreen(elementName) {

  for (var i = 0; i < ids.length; i++) {
    if (elementName === ids[i]) {
      document.getElementById(ids[i]).classList.add('active');
      document.getElementById(ids[i]).classList.remove('non-active');
    } else {
      document.getElementById(ids[i]).classList.remove('active');
      document.getElementById(ids[i]).classList.add('non-active');
    }
  }


}
