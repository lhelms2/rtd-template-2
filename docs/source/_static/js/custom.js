$( document ).ready(function() {

  // Insert Project Name "XXXX User Documentation" below html_logo in sidebar navigation
  var project_name_link = document.createElement("a");
  var project_name_text = document.createTextNode(" XXXX User Documentation");
  project_name_link.appendChild(project_name_text);
  project_name_link.setAttribute("href", "https://lhelms2-rtd-template-2.readthedocs.io/en/logo-test/#");
  project_name_link.classList.add("icon");
  project_name_link.classList.add("icon-home");
  wysidenavsearch = document.querySelector("body > div > nav > div > div.wy-side-nav-search > a");
  wysidenavsearch.insertBefore(project_name_link, a);

});
