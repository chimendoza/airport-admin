import {push} from '../main.js'

const printer={


    print:function(route){


        let waiting=push.promise('Preparando...');


        let id='iframePrinter0';

        let prevIframe=document.getElementById(id);
        if(prevIframe){
            document.body.removeChild(prevIframe);
        }
        
        let iframe=document.createElement('iframe');
        iframe.id=id;
        iframe.attribute
        iframe.style.opacity=0;
        iframe.width=0;
        iframe.height=0;
        iframe.style.position='absolute';
        iframe.style.bottom='0';
        iframe.style.right='0';
        iframe.src=route;

        iframe.addEventListener('load',function(){
            setTimeout(function(){
                waiting.clear();
            },500)
            

        })


        document.body.appendChild(iframe);

        iframe.load();
        
        
        
    }


}


export default printer