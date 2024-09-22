(function($) {
    $.fn.GithubCommitHistory = function(options) {
        var defaults = {
            username: "deganandapriyambada",
            repo: "degananda.com",
            branch: "master",
            limit: 5,
            offset: 0
        };

        var options = $.extend(defaults, options);

        return this.each(function() {



            jQuery.getJSON("https://api.github.com/repos/" + options["username"] + "/" + options["repo"] + "/commits?per_page=5", function(data) {
                var commitHistory = document.getElementById("commitHistory");
                var htmlTemplate = "<ul class='commit-list'>";
                $.each(data, function(idx, commit) {
                    //console.log(commit.author);
                    //console.log(commit.comments_url);
                    //console.log(commit.commit.author);
                    //console.log(commit.commit.message);
                    //console.log(commit.commit.url);
                    //console.log(commit.commit.tree);
                    const dateCommit = new Date(commit.commit.author.date);
                    const formattedDate = dateCommit.toISOString().split('T')[0];
                    var hashSha = commit.commit.tree.sha;

                    htmlTemplate += `<li>  
                    <div class="title-container">
                        <div class="profpic">
                            <div class="contributor-small">
                                DF
                            </div>
                        </div>
                        <div class="incat">
                            <div> ${commit.commit.author.name} 
                            </div>
                                                <div class="commit-date">
                        ${formattedDate} ·
                        <a href="${commit.commit.url}">${hashSha.substring(0, 5)}</a>
                    </div>
                        </div>
                    </div>

                    <div class="commit-title">
                        ${commit.commit.message}
                    </div>
                        
                    </li>`;
                    
                });
                htmlTemplate += "</ul>";
                commitHistory.innerHTML = htmlTemplate;
            
            }).fail(function(jqXHR) {

            });

        });
    };

})(jQuery);
