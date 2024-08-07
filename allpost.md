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
            {% include top.menu.html %}
        </div>
    </div>
</div>


  <div class="width-container">
    <!-- Html Elements for Search -->
    <div id="search-container">
      <input type="text" id="search-input" placeholder="search...">
      <button id="bsearch" type="button">search</button>
      <ul id="results-container"></ul>
    </div>
  </div>

  {% include footer.menu.html widthconfig="full" %}



<!-- Script pointing to search-script.js -->
<script>

</script>
<script src="/assets/js/simple-jekyll-search.min.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
var sjs = SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  noResultsText: 'No results found :(',
      searchResultTemplate: "<li class='card'>" +
          "<div class='content'>" +
            "<a class='post-link' href='{url}'>{title}</a>" +
            "<span class='post-meta'>{date} • {tags}</span>" +
          "</div>" +
        "</li>"
});

window.addEventListener(
  "load",
  function () {
    var searchParam = new URLSearchParams(window.location.search).get("search");
    if (searchParam != null) {
      document.getElementById("search-input").value = searchParam;
      sjs.search(searchParam);
    }
    document.getElementById("search-input").placeholder =
      "Type your search here...";
  },
  false
);



</script>


</body>