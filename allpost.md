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
    <h2> Search Article</h2>
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
  
<div id="results-loading" style="display:none; text-align:center; padding:20px;">
  <svg width="40" height="40" viewBox="0 0 40 40" stroke="#888" fill="none">
    <circle cx="20" cy="20" r="18" stroke-width="4" stroke-opacity="0.3"></circle>
    <circle cx="20" cy="20" r="18" stroke-width="4" stroke-linecap="round">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 20 20"
        to="360 20 20"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
  <div style="font-size:14px; margin-top:8px;">Loading search results...</div>
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