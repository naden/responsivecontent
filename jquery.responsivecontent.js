/**
 * jQuery Responsivecontent Plugin
 * 
 * Licensed under The MIT License
 * 
 * @version     0.1
 * @since       08/13/2014
 * @author      Naden Badalgogtapeh <n.b@naden.de>
 * @link        http://www.naden.de/blog
 * @license     http://www.opensource.org/licenses/mit-license.php MIT 
 * @package     jQuery Plugins
 * @subpackage  Responsivecontent
 * 
 * History:
 * 0.1	08/13/2014	inital release 
 *   	   
 */ 
 
(function($) {
/**
 * Usage: $('selector').responsivecontent({options});
 *
 * @param options All possible attributes
 *
 * Options:
 * ---------------------------------------
 * NAME:        DEFAULT,  DESCRIPTION,                    POSSIBLE VALUES
 *
 * breakpoints:  {see default}
 * moreText:    'more',   text for the more button,       any string
 * moreClass:  '',       classname for the more <a>,     any classname
 * onClick:     function(item, flag) {},  onclick handler,  any callback function
 *
 */

$.fn.responsivecontent = function() {

  var
		settings = $.extend({}, $.fn.responsivecontent.defaults, arguments[0] || {}),
		that = this,
		index = 0;
  
  // get textlength in words by breakpoint
  function getLength() {
  	for(var k in settings.breakpoints) {
  		var
				v = settings.breakpoints[k];
				width = $(window).width();
  		
  		if(v.max > 0) {
  			if(width >= v.min && width <= v.max) {
  				return v.words;
				}
			}
			else {
				if(width >= v.min) {
  				return v.words;
				}
			}
		}
		
  	return 0;
	}
	
	// set content by devise width 	
	function setContent($this) {
		var
			text = $this.text(),
			words = text.split(' '),
			length = getLength();
		
		if(words.length > length) {		
			var p = $('<p>').addClass('responsivecontent responsivecontent-' + index).html(words.slice(0, getLength()).join(' ')),  	
		  	
		  // build "more" button
		  more = $('<a href="#" data-index="' + index + '"></a>').html(settings.moreText).addClass(settings.moreClass).click(function() {
		    settings.onClick(this, 0);
				
				var index = $(this).data('index');
		    
		    $('.responsivecontent-' + index + '-hidden').show();
		
		    // remove the "more" button"
		    $('.responsivecontent-' + index).remove();
		    
		    settings.onClick(this, 1);
		    
		    return false;
		  });
		  
		  p.append(more);
		  
		  $this.before(p);
			$this.addClass('responsivecontent-' + index + '-hidden').hide();
			
			index ++;
		}
	}
	
	function run() {
		that.each(function() {
  		setContent($(this));
  	});
	}
  
  run();
  
  // handle windows resizing?
  if(settings.resize) {
	  $(window).on('resize', function(){
	  	// remove prior snippets
	  	$('.responsivecontent').remove();
			run();
		});
	}
}

// default settings
$.fn.responsivecontent.defaults = {
	breakpoints: [
		{min: 1200, max: 0, words: 150, label: 'desktop'},
		{min: 768, max: 979, words: 80, label: 'tablet_desktop'},
		{min: 0, max: 767, words: 50, label: 'phone_tablet'},
		{min: 0, max: 480, words: 25, label: 'phone'},
	],
	resize: false,
  moreText: 'more',
  onClick: function(item, action, flag) {},
  moreClass: 'responsivecontent-more',
};
  
})(jQuery);