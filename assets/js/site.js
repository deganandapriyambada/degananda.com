
  if('serviceWorker' in navigator) {
    window.addEventListener('load', function(){
      navigator.serviceWorker.register('/sw.js')
    })
  }

function search(){
    var searchValue = document.getElementById("search-pl").value;
    window.location.href = "/search?search=" + searchValue;
}