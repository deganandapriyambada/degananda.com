---
permalink: /search
---
{% include meta.header.search.html title ="Search" %}

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


</body>