$( document ).ready(function() {

  // Insert Project Name "XXXX User Documentation" below html_logo in sidebar navigation
  var project_name_link = document.createElement("a");
  var project_name_text = document.createTextNode(" XXXX User Documentation");
  project_name_link.appendChild(project_name_text);
  project_name_link.setAttribute("href", "https://lhelms2-rtd-template-2.readthedocs.io/en/logo-test/#");
  project_name_link.classList.add("icon");
  project_name_link.classList.add("icon-home");
  wysidenavsearch = document.querySelector("body > div > nav > div > div.wy-side-nav-search > a");
  wysidenavsearch.appendChild(project_name_link);

  var arr = [1,0];
  var wy-side-nav-search = document.getElementsByClassName("wy-side-nav-search");
  var items = wy-side-nav-search[0].children;
  var elements = document.createDocumentFragment();

  arr.forEach(function(idx) {
      elements.appendChild(items[idx].cloneNode(true));
  });

  wrapper[0].innerHTML = null;
  wrapper[0].appendChild(elements);

});
