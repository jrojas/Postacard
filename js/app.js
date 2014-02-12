var postaCard = (function() {
    // public variables for PostaCard

    // public init method to be exposed to the document ready function 
    var init = function(){
 
        searchPhotoButton();
        

     };
    
    var searchPhoto = function(tag){
    
        var url= "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=d57bbd445f2e4d4685f8f3710ef9a394"
       $.getJSON(url, viewData);
        console.log(tag);
        console.log(url);
   
          
    };
    
    var viewData = function(photos){
     
       
        
        $.each(photos.data, function(index, photo)
                {
                    photo = viewTemplate(photo);
                    
                 
                   
                });
        
        console.log(photos);
        console.log(photos.pagination.next_url);
        
    };
    
    var viewTemplate =function(photo){
        var $phototemplate = $('#photo-template'),
            $container =$('.container');
        
        var photo= {
                    
                        user: photo.user.profile_picture,
                        lowres: photo.images.low_resolution.url,
                        likes: photo.likes.count,
                        
                        
                    };
                    
        var template = Handlebars.compile($($phototemplate).html());
                       $container.append(template(photo));
        
        $('.fa.fa-spinner.fa-spin').fadeOut('slow')
     
        
        
         
        
        
    
    
    };
    var searchPhotoButton = function()
    {
     
        var $phototemplate = $('#photo-template'),
            $container = $('.container');
        $('.search-sheet').submit(function(){
      
          
            var inputList = $('.inputList');
                    if ($.trim(inputList.val()) !== '')
                    {
                    var inputvalue = inputList.val();
                       console.log(inputvalue);
                       
                        searchPhoto(inputvalue);
                       
                        console.log(inputvalue);
                       
                       
                };
               
                    inputList.val('');
                    return false;
      
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
    postaCard.loadProp();
   
  
});
     

 
