var postaCard = (function() {
      
   

    // public variables for PostaCard
   

    
    // public init method to be exposed to the document ready function 
    var init = function(){
        
        
     };
    
    var searchPhoto = function(tag){
        
        console.log(tag);
        var url= "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=d57bbd445f2e4d4685f8f3710ef9a394"
        $.getJSON(url, viewData);
           
    
    };
    
    
    var viewData = function(photos){
        
        console.log(photos);
        $.each(photos.data, function(index, photo){
            photo = "<div class='photoborder'>" + "<img src='"
            +photo.images.low_resolution.url +"'/>" + '</div>' ;
            $('.container').append(photo);
        
        });
        var source   = $("#photo-template").html();
        var template = Handlebars.compile(source);
           
    
    };
    


    // public API
    return {loadProp: init,
            search: searchPhoto
           };
 
})();


$(document).ready(function()
{
    postaCard.search('santodomingo');
    
 
});
     

 
