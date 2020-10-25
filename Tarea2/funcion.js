const $notificacion = document.querySelector('.notificaciones');

setInterval(
    function(){
      if($notificacion.style.backgroundColor == 'turquoise'){
        $notificacion.style.backgroundColor ='blue';
      }else{
        $notificacion.style.backgroundColor ='turquoise';
      } 
        
    
    }

,1000);
    