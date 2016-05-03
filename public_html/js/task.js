$(function () {
    var APPLICATION_ID = "355C4B83-8288-6546-FF81-642A5824E900",
    SECRET_KEY = "8BDCFE7D-FD7F-B215-FF45-FC3088A20E00",
    VERSION = "v1";
    
   Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
       
      
       
          

          
        
       
     
       
          
           var addBlogScript =$ ("#add-blog-template").html(); 
           var addBlogTemplate = Handlebars.compile(addBlogScript);
           
           $('.main-container').html(addBlogTemplate);
       
       $(document).on('submit', '.form-add-blog', function(event){
          event.preventDefault();
          var x;
          x = document.getElementById("title").value;
          var y;
          
           y = document.getElementById("content").value;
           if (x == ""){
               Materialize.toast('Cant leave it blank', 4000, 'rounded');
               return false;
                   
           }
            if (y == ""){
               Materialize.toast('Cant leave it blank', 4000, 'rounded');
               return false;
          
           }
          
          else {
          var data = $(this).serializeArray(),
          title = data[0].value,
          content = data[1].value;
          
          var dataStore = Backendless.Persistence.of(Posts);
          
          var postObject = new Posts({
              title: title,
              content: content,
              authorEmail: Backendless.UserService.getCurrentUser().email
          });
          
          dataStore.save(postObject);
          this.title.value = "";
          this.content.value = "";
      }
       });
        
           
          
            });

function Posts(args) {
    
   
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

