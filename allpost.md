---
permalink: /search
---
{% include meta.header.html title ="Search" %}

<body>

<div class="whole-site">
    <div class="post-feedback">
        Got Feedback ? <a href='https://github.com/deganandapriyambada/degananda.com/edit/master/{{ page.name }}'>Edit This Page </a> on Github &nbsp; <i class="fa fa-external-link" aria-hidden="true"></i>
    </div>
    <div class="topmenu">
        <div class="topmenu-container">
            {% include top.menu.html type = "withoutserach" %}
        </div>
    </div>
</div>


  <div class="width-container">
    <h2>
    Search
    </h2>
    <div id="search-container">
      <input type="text" id="search-input" placeholder="search..."><button id="bsearch" type="button">
      <i class="fa fa-search" aria-hidden="true"></i>
      </button>
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
                      <div class="post-type1-title" style="width: 35%;">
                          <span class="post-date"> {date} &nbsp;  </span> 
                          <a class="post-link" href="{url}">{title}</a>
                      </div>
                      <div class="post-type1-info" style="width: 15%;">
                          <a href="/category/{categories}/">{categories}</a>
                      </div>
                      <div class="post-type1-info" style="width: 15%;">
                          {date}
                      </div>
                      <div class="post-type1-info" style="width: 20%;">
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