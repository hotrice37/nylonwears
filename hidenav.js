document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    // add padding-top to body
    navbar_height = document.querySelector('.navbar').offsetHeight;
    
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
                document.body.style.paddingTop = navbar_height + 'px';
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
                document.body.style.paddingTop = 0;
            }
            last_scroll_top = scroll_top;
      }); 
      // window.addEventListener
    }
    // if
  
  }); 
  // DOMContentLoaded  end