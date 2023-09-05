// $( document ).ready(function() {

  // Add project name "XXXX User Documentation" below NCSA logo in menu pane
//  var project_link = document.createElement("a");
//  var project_text = document.createTextNode(" XXXX User Documentation");
//  project_link.appendChild(project_text);
//  project_link.setAttribute("href", "https://lhelms2-rtd-template-2.readthedocs.io/en/logo-test/#");
//  project_link.classList.add("icon");
//  project_link.classList.add("icon-home");
//  wysidenavsearch = document.querySelector("body > div > nav > div > div.wy-side-nav-search > a");
//  wysidenavsearch.appendChild(project_link);
// });


$( document ).ready(function() {

  var link = "https://lhelms2-rtd-template-2.readthedocs.io/en/logo-test/#";
  var element = document.createElement("a");
  element.setAttribute("href", link);
  element.innerHTML = " XXXXX User Documentation"
  wysidenavsearch = document.querySelector("body > div > nav > div > div.wy-side-nav-search > a");
  wysidenavsearch.appendChild(element);

});
