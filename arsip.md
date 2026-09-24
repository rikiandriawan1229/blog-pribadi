---
layout: page
title: Arsip
permalink: /arsip/
---
{% assign years = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for y in years %}
<section class="list-group">
  <h2>{{ y.name }}</h2>
  <ul class="entry-list">
    {% for post in y.items %}
    <li>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %b" }}</time>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
  </ul>
</section>
{% endfor %}
