
	$(document).ready(function(){
		(function($){
			var mouseX, mouseY;
					$(document).mouseover(function(e) {
    					mouseX = e.pageX;
    					mouseY = e.pageY;
					});
			$.fn.celebrate = function(options){
				var settings = $.extend({          		
	            		particles: 5,
	            		radius: 200,
	            		color: "black",
	            		unicode: null,
	            		complete: function() {}
	        		},options);
				    
				return this.each(function() {	
					for(i=0;i<settings.particles;i++){
						var particle = $("<p>"+ settings.unicode +"</p>").addClass("particle");
						$(particle).css("position","absolute");
						$(particle).css("margin-top",(Math.floor(Math.random())+10));
						$(particle).css("margin-left",(Math.floor(Math.random())+10));
						$(particle).css("font-size", "15px");
						$(particle).css("opacity", "1");
						$(particle).css("color", settings.color);
						$(particle).css("transform",'rotate(' + (Math.floor(Math.random()*1000)) + 'deg)');
						$(this).append($(particle));
						$(particle).offset({
						 	top:mouseY-$(particle).height()/2,
							left:mouseX-$(particle).width()/2
						});
						$(particle).animate(
							{
								"margin-top": (Math.floor(Math.random()*settings.radius)-settings.radius/2)+"px",
								"margin-left": (Math.floor(Math.random()*settings.radius)-settings.radius/2)+"px",
								"opacity":0,
								"font-size": (Math.floor(Math.random())+(Math.random()*50)+35)+"px",
								"css": ("transform",'rotate(' + (Math.floor(Math.random()*70+90)) + 'deg)')
							},
							{
								"duration": Math.floor(Math.random()*700)+150,
								"complete": function (){
									$(this).remove();
								}
							}
						);
					}
	        			settings.complete.call(this);
	    			});
	    			
			};
		}(jQuery));
	});