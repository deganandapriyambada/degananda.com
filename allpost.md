---
permalink: /search
---
{% include meta.header.html title ="Search" %}

<body>

<div class="whole-site">
    <div class="topmenu">
        <div class="topmenu-container">
            {% include top.menu.html type = "withoutserach" %}
        </div>
    </div>
</div>


<div class="padding-container">
    <h2> Search </h2>
    <div class="big-search-container">
      <div class="big-search">
          <input type="text" placeholder="what are you looking for?" id="search-input" >
          <button id="bsearch">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
      </div>
    </div>
    <div id="results-info">
      Results for "<b><span id="results-info-text"></span></b>"
    </div>
  
  <div class="post-type-1">
      <div class="post-type-1-container">
          <ul>
              <li>
                  <div class="post-type1-content">
                      <div class="post-type1-title" style="width: 35%;">
                         <b> Post Title </b>
                      </div>
                      <div class="post-type1-info" style="width: 15%;">
                         <b>  Topics </b>
                      </div>
                      <div class="post-type1-info" style="width: 15%;">
                         <b>  Date </b>
                      </div>
                      <div class="post-type1-info" style="width: 20%;">
                          <b>  Tags </b>
                      </div>
                  </div>  
              </li>
          </ul>
        </div>
    </div>
  
  <div class="post-type-1">
      <div class="post-type-1-container">
        <ul id="results-container"></ul>
      </div>
  </div>

  </div>

  {% include footer.menu.html widthconfig="full" %}



<!-- Script pointing to search-script.js -->
<script src="/assets/js/simple-jekyll-search.min.js" type="text/javascript"></script>
<!-- Configuration -->
<script>
var sjs = SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  limit: 10,
  noResultsText: '<li style="background: none; padding: 30px 0px 30px 0px;"><u>Result not found.</u> Try another keyword. <br /> Or maybe try to browse our <a href="#">content catalogue</a> ?</li>',
      searchResultTemplate: 
          `
          <li>
            <div class="post-type1-content">
                      <div class="post-type1-title">
                          <span class="post-date"> {date} &nbsp;  </span> 
                          <a class="post-link" href="{url}">{title}</a>
                      </div>
                      <div class="post-type1-info">
                          <a href="/category/{categories}/">{categories}</a>
                      </div>
                      <div class="post-type1-info">
                          {date}
                      </div>
                      <div class="post-type1-info">
                          {tags}
                      </div>
            </div>  
          </li>
          `
});

window.addEventListener(
  "load",
  function () {
    var searchParam = new URLSearchParams(window.location.search).get("search");
    if (searchParam != null) {
      document.getElementById("search-input").value = searchParam;
      document.getElementById("results-info-text").innerHTML =  searchParam;
      sjs.search(searchParam);
    }
    document.getElementById("search-input").placeholder =
      "Search some topics or title";

    document.getElementById("search-input").addEventListener('input', function (evt) {
        document.getElementById("results-info-text").innerHTML =  document.getElementById("search-input").value;
    });

  },
  false
);
</script>


</body>