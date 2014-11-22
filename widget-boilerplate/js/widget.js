(function ($) {
	"use strict";
	$(function () {
		      
      head.load( { timeago: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-timeago/1.4.1/jquery.timeago.min.js' }, function(){
      
      var query = "https://query.yahooapis.com/v1/public/yql?q=select%20title%2C%20link.href%2C%20updated%20from%20atom%20where%20url%3D%22https%3A%2F%2Ftheatrewiki.ca%2Findex.php%3Ftitle%3DSpecial%3ANewPages%26feed%3Datom%22%20limit%205&format=json&callback="
      var container = $('.container');
      
        $.getJSON(query, function(data){
          
          var articles = data.query.results.entry;
                    
          $.each(articles, function(){
            
            var self = this,
                title = self.title,
                url = self.link.href,
                timestamp = self.updated,
                link = $('<a/>'),
                timeago = $('<time/>'),
                listEntry = $('<li/>');
            
            link.append($('<a/>'))
              .attr('href', url)
              .attr('title', title)
              .text(title)
              .addClass('tw-latest-hed')
              .appendTo(listEntry);

            timeago.attr('datetime', timestamp)
              .addClass('timeago')
              .appendTo(listEntry);              
                        
            listEntry.appendTo(container);
            
          });         
          
          $('time.timeago').timeago();
          
        });
      
      });		
		
	});
}(jQuery));