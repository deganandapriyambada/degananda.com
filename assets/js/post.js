/* detect heading */
var tags = [ "h1", "h2" ];
var all_headings = [];
var elems = document.querySelectorAll('h1, h2');
var postHeadingUl = document.getElementById("post-heading");
var finalMenuTree = "";
var topHeadingItem = "<ul>";

for(var tt = 0 ; tt<elems.length; tt++){
  var currentElement = elems[tt];
  if(currentElement.localName == "h1"){

    topHeadingItem += `<li>${currentElement.innerHTML}</li>`;

    if(tt >= 0){
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
topHeadingItem += "</ul>";

/*
var observer = new IntersectionObserver(function(entries) {
  if(entries[0].isIntersecting === true){
      document.getElementById("twoblock-right").style.position = null;
      document.getElementById("twoblock-right").style.position = null;
      document.getElementById("twoblock-right").style.position = null;   
  } else {
      document.getElementById("twoblock-right").style.position = "fixed";
      document.getElementById("twoblock-right").style.top = "2%";
      document.getElementById("twoblock-right").style.right = "0%";   
  }
}, { threshold: [0] });

var observerSiteFooter = new IntersectionObserver(function(entries) {
  if(entries[0].isIntersecting === true){
      document.getElementById("twoblock-right").style.display = "none";   
  } else {
      document.getElementById("twoblock-right").style.display = null;  
  }
}, { threshold: [0] });


observer.observe(document.querySelector("#okoy"));
observerSiteFooter.observe(document.querySelector("#footer-page"));
*/

const progressBar = document.querySelector('#reading-progress');
const section = document.querySelector('.post-container');

const scrollProgressBar = () => {
	let scrollDistance = -(section.getBoundingClientRect().top);
  let lengthVal = (scrollDistance/section.getBoundingClientRect().height)*100;
  console.log(lengthVal);
 if(scrollDistance > 0){
    progressBar.style.width = lengthVal + '%';
  } else if(scrollDistance >= 100){
    progressBar.style.width =  '100%';
  } else {
    progressBar.style.width =  '0%';
  }


};


window.addEventListener('scroll', scrollProgressBar);


