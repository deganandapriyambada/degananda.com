# _plugins/headings_list.rb

Jekyll::Hooks.register :posts, :post_render do |post|
    headings = post.output.scan(/<h[1][^>]*>(.*?)<\/h[1]>/).flatten
    post.data['headings'] = headings
  end