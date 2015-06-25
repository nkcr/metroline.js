# Metroline

Add a line containing links to your sections. The line acts as a scrollbar.

## Prerequiste

Use `Jquery`

## Install

Get the javascript and css (or scaa) file from dist folder and include them.

In your html, add after the body tag :

```html
<div id="scrollbar">
  <div id="scrollcursor">
  </div>
  <ul id="scrolllinks">
  </ul>
</div>
```

Then you need a section for each link. A section must have an id and the link's title :

```html
<section data-title="Link1" id="Link1">
...
</section>
```

# Changelog

## v0.0.1

First release
