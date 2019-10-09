function Fullscreen() {
  var FullscreenText = document.getElementById("FullscreenText")
  if (document.getElementById("article").style.width === "66%") {
    document.getElementById("article").style.width = "100%";
    document.getElementById("article").style.left = "0";
    FullscreenText.innerHTML = "";
    if (document.getElementById("sidebar")) {
      document.getElementById("sidebar").style.display = "none";
    }
    if (document.getElementById("toc")) {
      document.getElementById("toc").style.display = "none";
    }
  } else {
    document.getElementById("article").style.width = "66%";
    document.getElementById("article").style.left = "17%";
    FullscreenText.innerHTML = "";
    if (document.getElementById("sidebar")) {
      document.getElementById("sidebar").style.display = "block";
    }
    if (document.getElementById("toc")) {
      document.getElementById("toc").style.display = "block";
    }
  }
}

function myFilter(filterId) {
  var contentId = filterId + "Content";
  var filter = document.getElementsByClassName('filter');
  var content = document.getElementsByName(contentId);

  for (var c = 0; c < content.length; c++)
    if (document.getElementById(content[c].id).style.display === "block") {
      document.getElementById(content[c].id).style.display = "none";
      document.getElementById(filterId).style.background = "#999999";
    } else {
      document.getElementById(content[c].id).style.display = "block";
      document.getElementById(filterId).style.background = "#008FD3";
    }

  for (var i = 0; i < filter.length; i++)
    if (filter[i].id !== filterId) {
      var insideBoxId = filter[i].id + "Box";
      var insideContentId = filter[i].id + "Content";
      var insideContent = document.getElementsByName(insideContentId);

      if (document.getElementById(insideBoxId).checked === false) {
        for (var ic = 0; ic < insideContent.length; ic++)
          {document.getElementById(insideContent[ic].id).style.display = "none";}
        document.getElementById(filter[i].id).style.background = "#999999";
      }
    }
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    vars[key] = value;
  });
  return vars;
}
