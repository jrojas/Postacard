var postaCard = (function() {
      
   

    // public variables for PostaCard
 

    // public init method to be exposed to the document ready function 
    var init = function(){
        
        searchPhoto();
        
     };
    
    var searchPhoto = function(tag){
        
        console.log(tag);
        var url= "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=d57bbd445f2e4d4685f8f3710ef9a394"
        $.getJSON(url, viewData);
           
    
    };
    
    
    var viewData = function(photos){
        
        console.log(photos);
        $.each(photos.data, function(index, photo)
        {
            photo = "<div class='photoborder'>"
            +"<img class='lowres'  src='" +photo.user.profile_picture+"' />" 
            +"<img class='pic' src='" +photo.images.low_resolution.url +"'/>"
            
            +"<span class='likes'><strong>"+ photo.likes.count+"</strong></span>" +'</div>';
            
            
         $('.container').append(photo);
            
         
        
        });
        
           
    
    };
    
    


    // public API
    return {loadProp: init,
            search : searchPhoto
           
           };
 
})();


$(document).ready(function()
{
    postaCard.search('santodomingo');
    
    
 
});
     

 
