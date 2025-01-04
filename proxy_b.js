$(document).ready(function(){
  $(once('make-link-behavior', '#makeLinkButton', context)).each(function () {
    console.log("tufts proxy this is loaded");
        $(this).on('click', function() {
            var oin=$('#edit-in');
            var oout=$('#edit-out');
            var intxt=oin.val();
            if(intxt.length==0) {
              oin.focus();
              alert("No URL entered!");
            } 
          
            else {
              var prep="https://resources.libraries.tufts.edu/?Location=";
              var rc=intxt.indexOf('https://resources.libraries.tufts.edu/?url=');
              var rd=intxt.indexOf('.libproxy.tufts.edu');
              var ezp = intxt.indexOf('ezproxy');
              var wellFormedHttp=intxt.indexOf('http://')
              var wellFormedHttps=intxt.indexOf('https://')
             if(wellFormedHttp=='0'||wellFormedHttps=='0'){
                
                  
                  if(rc==-1) {
                  if(rd==-1){
                            oout.val(prep+intxt);
                            oout.focus();
                            oout.select();
                            if((ezp>=0)||(rd>=0)){
                              let wording = "This looks like an ezproxy URL. " + 
                              "Please remove the ezproxy prefix and try again. " +
                              "You may also want to use the form at " +
                              "https://resources.libraries.tufts.edu/support/transform";
                              alert(wording);
                              oout.val("");
                              oin.focus();
                              oin.select();
                            }  
                      }
                  else{
                      alert("That is a translated URL and shouldn't be used. Click OK and I'll fix it for you");
                      intxt = intxt.replace(/.libproxy.tufts.edu/g,"")
                            oout.val(prep+intxt);
                            oin.focus();
                            oin.select();
                      }
                      }
                  else {
                        alert("That is already a proxied URL, so no change is needed");
                        oout.val("");
                        oin.focus();
                        oin.select();
                  }
              }
              else{
              alert("The URL source URL doesn't start with http:// or https:// or contains multiple entries, please enter a valid URL like http://someaddress.com");
                    oout.val("");
                    oin.focus();
                    oin.select();
              }
            }
          
              })
          
          
   
  })
});  