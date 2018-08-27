# highlight-content
Follow along and highlight content.

This is a small snippet to create a dynamic way of highlighting elements, while the background follows you along. 
It works on any element that has a class name "hlt". 

The highlight box is built with a span: 
<span class="hl-background"></span>
You can add the class "on-top" to make it appear on top of the elements, but keep in mind that you won't be able to click on those
<span class="hl-background on-top"></span>

Also, if you want the highlight box to go away when you stop hovering the item, just remove the comment on line 19 of the js/functions.js file. //background.classList.remove('active');

The CSS its mostly for presentation, and the important classes are the following:
```
.hl-background {
	position: absolute;
	opacity: 0;
	transition: all 0.3s ease;
	box-shadow: 0 0 0 2px rgba(44,176,143,1);
	background-color: rgba(44,176,143,0.05);
}

.hl-background.on-top {
	z-index: 9999;
}

.hl-background.active {
	display: block;
	opacity: 1;
}
```

These are also in charge of the L&F so you can change them to suit your style.

Live demo at: http://emrevera.com/follow-along-highlight-content/
