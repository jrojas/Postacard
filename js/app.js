var postaCard = (function () {
    // public variables for PostaCard
    // public init method to be exposed to the document ready function 
    
    var init = function () {
        searchPhotoButton(); 
       
        
    };

    var searchPhoto = function (tag) {
        var $photoBorder = $('.photoborder');
        $photoBorder.detach();
       
        
        if(tag == false){
			var url = $('.tog').attr('data-page');
		}else{
	        var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=d57bbd445f2e4d4685f8f3710ef9a394";
		}

        //remove for paging to work $.getJSON(url, viewData);
        $.ajax({
			url: url,
			dataType: 'jsonp',
			success: viewData,
			error: function(data){
				console.log(data);
			}
		});


        console.log(tag);
        console.log(url);

    };

    var viewData = function (photos) {
        $.each(photos.data, function (index, photo) {
            photo = viewTemplate(photo);

        });
        console.log(photos);
        console.log(photos.pagination.next_url);
        $('.tog').attr('data-page',photos.pagination.next_url);
    };

    var viewTemplate = function (photo) {
        var $phototemplate = $('#photo-template'),
            $container = $('.container');

        var photo = {
            user: photo.user.profile_picture,
            lowres: photo.images.low_resolution.url,
            likes: photo.likes.count,

        };

        var template = Handlebars.compile($($phototemplate)
            .html());
        $container.append(template(photo));


        fadeOut('.fa.fa-spinner.fa-spin', 'slow');


    };
    var searchPhotoButton = function () {

        var $inputList = $('.inputList');

            $('.search-sheet')
                .submit(function () {

                    if ($.trim($inputList.val()) !== '') {

                        var $inputvalue = $inputList.val();
                        console.log($inputvalue);
                        searchPhoto($inputvalue);
                        fadeIn('.fa.fa-spinner.fa-spin', 'fast');
                        console.log($inputvalue);
                    };

                    $inputList.val('');
                    return false;


                });


    };

    //Helpers
    var fadeIn = function (dom, effect) {
        $(dom)
            .fadeIn(effect);

    };
    var fadeOut = function (dom, effect) {
        $(dom)
            .fadeOut(effect);

    };


    // public API
      
    return {
        loadProp: init,
        search: searchPhoto

    }; 
})();

$(document)
    .ready(function () {
        postaCard.search('santodomingo');
        postaCard.loadProp();
        
$('.tog').on('click',function(){
			postaCard.search(false);
		});

    });   