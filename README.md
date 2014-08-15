Responsive Content
===============================

jQuery plugin that make content respond to available screen resolution.

__How to use__

    $('selector').responsivecontent();

__Advanced use__
    
    $('selector').responsivecontent({resize: true, moreText: '...'});

__Options__

List of available options + presets.

__Breakpoints__

Breakpoints with screen resolutions taken from Bootstrap 2.x and the number of words to trim the text down to. Add as many as you like and or change the presets.

    breakpoints: [
     {min: 1200, max: 0, words: 150, label: 'desktop'},
     {min: 768, max: 979, words: 80, label: 'tablet_desktop'},
     {min: 0, max: 767, words: 50, label: 'phone_tablet'},
     {min: 0, max: 480, words: 25, label: 'phone'},
    ]

__Resize__

Set to true if you like to respond even to window
		resize: false

__More text__

Text for the generated button.

		moreText: 'more'

__More class__

CSS-Class for the generated button.
 
    moreClass: 'responsivecontent-more'
		
__Callback__

This function gets called two times on button click. With flag set to 0 before text expanding. Again with flag set to 1 after text expanding. 

		onClick: function(item, flag) {} 

*Any questions? Feel free so [contact me](http://www.naden.de/blog).*
