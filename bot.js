(function(){

  var like = document.getElementsByClassName('Icon Icon--heart Icon--medium'); 
  var comment = document.getElementsByClassName('Icon Icon--medium Icon--reply'); 
  var l = 0;
  var c = 0;
  var url = window.location.href;
  
  if(url.includes('test')) { //Change the keyword to whatever you're looking for in the URL
    setTimeout(function(){
    
      function scroll() {
        var ci = comment.length - 1;
        comment[ci].scrollIntoView();
        setTimeout(function(){
          perform();
        }, 5000);
      }
      
      function perform(){
        like[l].click();
        comment[c].click();
        setTimeout(function(){
          document.execCommand('insertText', true, 'hey');
          setTimeout(function(){
            var button = document.getElementsByClassName('button-text replying-text');
            button[0].click();
            setTimeout(function(){
              l += 2;
              c++;
              if(c < comment.length) {
                perform();
              } else {
                scroll();
              }
            }, 1000);
          }, 1000);
        }, 1000);
      }
      
      perform();
      }, 5000);
  }
})();
