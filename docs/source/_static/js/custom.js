$( document ).ready(function() {

  var link = "https://lhelms2-rtd-template-2.readthedocs.io/en/logo-test/#";
  var element = document.createElement("a");
  element.setAttribute("href", link);
  element.setAttribute("class", "icon icon-home");
  element.innerHTML = " XXXXX User Documentation"
  wysidenavsearch = document.querySelector("body > div > nav > div > div.wy-side-nav-search");
  wysidenavsearch.appendChild(element);

});
