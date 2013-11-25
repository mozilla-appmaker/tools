function addSource(title, language, url) {
  var div = document.querySelector("#codes");
  var pre = document.createElement('pre');
  var code = document.createElement('code');
  pre.setAttribute('class', "brush: " + language);
  pre.appendChild(code);
  div.appendChild(pre);
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function(e) {
    code.textContent = e.target.responseText;
  };
  httpRequest.open('GET', url);
  httpRequest.send();
}
