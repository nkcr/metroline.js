# Metroline

Add a line containing links to your sections. The line acts as a scrollbar.

---

![img](http://s30.postimg.org/4digxvhip/Capture_d_cran_2015_06_25_14_14_16.png)

## Prerequiste

Use `Jquery`

## Install

Get the javascript and css (or scss) files from the *dist* folder and include them.

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

Finally, fire the javascript :

```javascript
new Metroline();
```

# Changelog

## v0.0.1

First release
