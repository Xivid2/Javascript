$(document).ready(function(){
    TaskSix.initialize();
});

var TaskSix = {
    	initialize: function() {
    		$(".containerImage")
    			.on( "click", function() {
    				TaskSix.showBigImageContainer( this.id );
    				TaskSix.showBigImages( this.id );
    			})
    			.mouseover( function() {
    				$(this).css( "opacity", "0.8" );
    				$(this).css( "cursor", "pointer" );
    				$(this).animate({ width: "28%", height: "170px" }, 'slow' );
    			})
    			.mouseleave( function() {
    				$(this).css( "opacity", "1" );
    				$(this).animate({ width: "25%", height: "150px" }, 'fast' );
    			});
    		TaskSix.createBigDiv();
    	},
    	createBigDiv: function() {
    		var bigImageContainerConfig = {
    			attributes: {
    				id: "bigImageContainer"
    			}
    		}
    		var bigImageContainer = NodeFactory.addNewDiv( bigImageContainerConfig );
    		var bigImageContent = document.getElementById("content");
    		bigImageContent.appendChild( bigImageContainer );

    		$("#bigImageContainer").append('<a class = "prev">' + '&#10094' + '</a>');
    		$("#bigImageContainer").append('<a class = "next">' + '&#10095' + '</a>');
    		$("#bigImageContainer").append('<button id = "expand">' + "Expand" + '</button>');
    		$("#bigImageContainer").append('<div id = "closeImageDiv">' + "Close Image" + '</div>');
    		$("#closeImageDiv").append('<button id = "closeImage">' + "X" + '</div>');
    		$("#bigImageContainer").append('<div id = "imageCounterDiv"></div>');
    	},
    	showBigImages: function( elId ) {
    		imageId = elId;
    		$('.bigContainerImage').remove();

    		var src = 'image' + elId + '.jpg';
    		$("#bigImageContainer").append('<img class="bigContainerImage"></img>');
    		$(".bigContainerImage").attr( 'src', src );

    		var imagesLength = document.querySelectorAll( ".containerImage" );

    		$("#bigImageContainer").hover( function() {
    			$(".prev").show();
    			$(".next").show();
    		})
    		var $leftArrow = $('.prev').click( function () {
			    $(this).addClass('clicked');
			});
			var $rightArrow = $('.next').click( function () {
			    $(this).addClass('clicked');
			});
			$("#imageCounterDiv").append('<p>' + imageId + " / " + imagesLength.length + " images" + '</p>');

			$('.prev').click(function () {
			    if ($leftArrow.is('.clicked')) {
			       imageId --;
			       while ( imageId < 1 ) {
			       		return imageId = imagesLength.length + 1;
			       }
			       var imgId = 'image' + imageId + '.jpg';
			       $('.bigContainerImage').remove();
			       $("#bigImageContainer").append('<img class="bigContainerImage"></img>');
			       $(".bigContainerImage").attr( 'src', imgId );
			       $("#imageCounterDiv").empty();
			       $("#imageCounterDiv").append('<p>' + imageId + " / " + imagesLength.length + " images" + '</p>');
			    }
			});

			$('.next').click(function () {
			    if ($rightArrow.is('.clicked')) {
			       imageId ++;
			       while ( imageId > imagesLength.length ) {
			       		return imageId = 0;
			       }
			       var imgId = 'image' + imageId + '.jpg';
			       $('.bigContainerImage').remove();
			       $("#bigImageContainer").append('<img class="bigContainerImage"></img>');
			       $(".bigContainerImage").attr( 'src', imgId );
			       $("#imageCounterDiv").empty();
			       $("#imageCounterDiv").append('<p>' + imageId + " / " + imagesLength.length + " images" + '</p>');
			    }
			});
    	},
    	showBigImageContainer: function( elId ) {
    		$('#bigImageContainer').show();
    		$('#imageContainer').css( "opacity", "0.1" );
    		$('body').css( "background", "#d1d1d1" );
    	}
    }