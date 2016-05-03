$(function () {
    var APPLICATION_ID = "355C4B83-8288-6546-FF81-642A5824E900",
    SECRET_KEY = "8BDCFE7D-FD7F-B215-FF45-FC3088A20E00",
    VERSION = "v1";
    
   Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
        
       var postCollection = Backendless.Persistence.of(Posts).find();
      console.log(postCollection); 
      
      var wrapper = {
              posts: postCollection.data
          };
          
          Handlebars.registerHelper('format', function (time){
              return moment(time).format("dddd, MMMM, Do YYYY")
          });
          
          var blogScript = $("#blogs-template").html();
          var blogTemplate = Handlebars.compile(blogScript);
          var blogHTML = blogTemplate(wrapper);
          
          $('.main-container').html(blogHTML);
          $(document).on('click', '.white-out-post', function(){
            var checkListScript = $("#check-done-template").html();
            var checkListTemplate = Handlebars.compile(checkListScript);
            $('.main-container').html(checkListTemplate);
        });
        
        $(document).on('click', '.white-in-post', function(){
            var uncheckListScript = $("#check-done-template").html();
            var uncheckListTemplate = Handlebars.compile(uncheckListScript);
            $('.main-container').html(uncheckListTemplate);
        });
        


                      
});

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

$(document).on('click','.trash', function(event) {
        console.log(event);
        Backendless.Persistence.of(Posts).remove(event.target.attributes.data.nodeValue);
        location.reload();
    });


    