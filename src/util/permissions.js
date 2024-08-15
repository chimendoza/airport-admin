
function updateElement(el, binding) {


    let hasPermission=checkPermission(binding.value);

    if (!hasPermission) {
        el.style.display = 'none';
     
    }
          


}


export const checkPermission=function(p,o){


    let operator=o?o:'or';

    const permissions = JSON.parse(localStorage.getItem('permissions')) || [];    

    if(p){

    const checks=p.split(',');

    
    if(checks.length>0){

            let matches=0;

            for(var i in checks){
                    const ch=checks[i];
                    const permissionToCheck = ch.split('.');
                    const controller=permissionToCheck[0];
                    const action=permissionToCheck[1];
                    let c=permissions.findIndex(e=>e.controller==controller);
                    if(c!=-1){
                        let a=permissions[c].actions.findIndex(e=>e==action);
                        if(a!=-1){
                            matches++;
                        }
                    }
            }


            if(operator=='or'){
                if(matches>0){
                    return true;
                }
            }else{
                if(matches==checks.length)
                    return true;
            }

        }

    }


  return false;
  

}




const allow={
    mounted(el, binding) {
        updateElement(el,binding);
        },
        updated(el,binding){
        updateElement(el,binding);
        }
    };

    

export {allow} 

    
