---
layout: page
title: Topik
permalink: /topik/
---
{% assign groups = site.posts | group_by: "category" %}
<ul class="chips">
  {% for g in groups %}
  <li><a href="#{% if g.name == '' %}lainnya{% else %}{{ g.name | slugify }}{% endif %}">{% if g.name == '' %}Lainnya{% else %}{{ g.name }}{% endif %} <span>{{ g.items.size }}</span></a></li>
  {% endfor %}
</ul>

{% for g in groups %}
<section class="list-group" id="{% if g.name == '' %}lainnya{% else %}{{ g.name | slugify }}{% endif %}">
  <h2>{% if g.name == '' %}Lainnya{% else %}{{ g.name }}{% endif %}</h2>
  <ul class="entry-list">
    {% for post in g.items %}
    <li>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %b %Y" }}</time>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
  </ul>
</section>
{% endfor %}
