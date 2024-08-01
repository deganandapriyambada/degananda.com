/* detect heading */
var tags = [ "h1", "h2" ];
var all_headings = [];
var elems = document.querySelectorAll('h1, h2');
var postHeadingUl = document.getElementById("post-heading");
var finalMenuTree = "";
for(var tt = 0 ; tt<elems.length; tt++){
  var currentElement = elems[tt];
  if(currentElement.localName == "h1"){
    if(tt > 0){
    var itemLi = '<div class="post-section"><a href="#'+currentElement.id+'" class="post-heading-title">' + currentElement.innerHTML + "</a>";
    if(tt < (elems.length-1) && (elems[tt+1].localName == "h1")){
        itemLi += '</div>'
    }
    finalMenuTree += itemLi;

    }
  } else {
    var itemLiSecond = "";
    if(tt > 0 && elems[tt-1].localName == "h1"){
      itemLiSecond += "<ol>";
    }
    itemLiSecond += '<li><a href="#'+currentElement.id+'">' + currentElement.innerHTML + '</a></li>';
    if(tt < (elems.length-1) && (elems[tt+1].localName == "h1")){
      itemLiSecond += "</ol></div>";
    } else if(tt == (elems.length-1) && (elems[tt-1].localName == "h2")){
      itemLiSecond += "</ol></div>";
    }
    finalMenuTree += itemLiSecond;
  }
}
postHeadingUl.innerHTML += finalMenuTree;
