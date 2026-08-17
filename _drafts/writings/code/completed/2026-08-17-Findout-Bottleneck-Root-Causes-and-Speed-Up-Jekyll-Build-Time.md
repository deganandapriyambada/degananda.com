# The Impact of Long Running Jekyll Build Time

Jekyll is a static site generator which created based on ruby as the programming language. Over the time, the build time will be increased alongside with the numerous post,image or plugins that we have on the blog. Writing a new post might not directly affected with long build time. However, when we are about to adjust the jekyll template layout or adding new section, the build long time will reduce our productivity and efficiency.

Fortunately, there are several strategies to reduce jekyll build time by tweaking some of the code or jekyll config. Below are four key steps to figure out the bottle neck and how to overcome it

## Find the Slowness Root Causes during Build Time

Jekyll site is built using following command

	bundle exec jekyll build

it will recompile the whole site based on latest resources including (but not limited) markdown file, jekyll plugins, html css into one ready to be consumed website package under "_site" folder. The more resource we have, the more build time is required.

Jekyll has built in build time profiler capability to determine the most prominet resource that contribute to the build time.

	bundle exec jekyll build --profile

jekyll will count the build time (in second) for each pages.

[image jekyll build time profiler returning each of the page build time]

We can pin point and determine the underlying root causes by understanding the top 3 or top 5 pages which contriubte to the slowness. 

For example in our cases, the majority of the build time is dominated by **rendering process of the sitemap and feed**.

```json
| PHASE    |   TIME |
+----------+--------+
| RESET    | 0.0001 |
| READ     | 0.2624 |
| GENERATE | 0.0371 |
| RENDER   | 6.0010 |
| CLEANUP  | 0.0776 |
| WRITE    | 0.5354 |
 
Site Render Stats: 

| Filename | Count | Bytes |  Time |
| sitemap.xml| 1 | 67.24K | 4.390 |
| feed.xml | 1 | 84.74K | 0.353 |
```

sitemap.xml and feed.xml took up (4.390+0.353=4.742) seconds, or equal to nearly ~70% (4.742/6.934) of overall build time.

## Resolution: Exlucing the Plugin Generated Page During Rendering

Both of sitemap.xml and feed.xml are generated based on following plugins

1. gem 'jekyll-feed'
2. gem 'jekyll-sitemap'

The most easiest solution is commenting those two lines under the Gemfile

```json
#gem 'jekyll-feed'
#gem 'jekyll-sitemap'
```

However, the sitemap and feed page might gone and introducing runtime error as the jekyll config can't find related plugins/package if we forget to uncomment those and accidently commit it into production branch.

<hr />

its recommended to create two different (dev config yml and production config yml) config file instead of commenting the Gemfile.

use following command to start jekyll build with dev config

	bundle exec jekyll serve --config _config.dev.yml

here are the benchmark differences:

**before** excluding sitemap and feed plugins

[image took 8 second to build jekyll site with over 200+ posts and hundreds of image]

**after** excluding sitemap and feed plugins via config.dev.yml

[image took 2.161 second to build jekyll site with over 200+ posts and hundreds of image]

its around ~75% build time reduction.

## Further Build Time Reduction

Apart from excluding plugins which generate and render new pages, jekyll also offer other capabilities to reduce the build time.

Incremental Build

add --incremental parameter to only render the modified pages/post. it will further reduce the build time during the post modification

	bundle exec jekyll serve --config _config.dev.yml --incremental

for example, i modified one post, it only took X second instead of the whole 2.1 second because jekyll only compile and render the modified pages. Very handy, just like CDC (change data capture)

[image build time dropped into 0.4 seconds!]

## Live Reload

Live reload approach might not directly affect the build time, but it will affect the whole development time itself. Without live reload, we have to press refresh button (F5 on windows or command+R) on Mac OS which at least consume 0.X second. 

To avoid the page refresh routine, jekyll has built in functionality for live reloading.

	bundle exec jekyll serve --config _config.dev.yml --incremental --livereload

now everything the jekyll detect new file it will automatically re-build, re-render and reload automatically.