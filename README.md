# Metroline

Add a line containing links to your sections. The line acts as a scrollbar.

---

![img](http://s30.postimg.org/4digxvhip/Capture_d_cran_2015_06_25_14_14_16.png)

## Prerequiste

**Javascript** :  
Use `Jquery`

**CSS**:  
```
html,body {
  height: 100%;
}
```

## Install

```
npm install metroline.js
```

OR

Get the javascript and css (or scss) files from the *dist* folder and include them.

## Set up

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

**Note**
For best style, it assumes you have at least the following css reset :

```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

ul,li {
	list-style-type: none;
}
```

# Changelog

## v0.1.2

Code cleaning

## v0.1.1

Fixed bug wrongly displaying titles in some cases

## v0.1.0

Handle window resize.
Some code refactoring

## v0.0.4

Take care that there is no links already present when adding links.

## v0.0.3

Fixed a style bug with the first link. Now javascript automatically add "active" class for the first `<li>...</li>`

## v0.0.2

Changed the way links switch style when scrolled. Now use a class "active" instead of manually apply style via javascript.

## v0.0.1

First release
