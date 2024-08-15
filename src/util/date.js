

const date={

    format:function(date,short){



        if(date){
            let sh=short || true;


            let d=date.split(" ");

            let parts=d[0].split("-");

            const months=['Enero',
                        'Febrero',
                        'Marzo',
                        'Abril',
                        'Mayo',
                        'Junio',
                        'Julio',
                        'Agosto',
                        'Septiembre',
                        'Octubre',
                        'Noviembre',
                        'Diciembre'];

            let month_name=months[parseInt(parts[1])-1];

            return parts[2]+' '+(sh?month_name.substring(0,3):month_name)+' '+parts[0];

        }

        return '';

    },

    now:function(){

        
            const now = new Date();
        
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Meses van de 0 a 11
            const day = String(now.getDate()).padStart(2, '0');
        
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
        
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        

    },

    dbformat:function(date,t){


        if(date){
                let time=true;
                if(t===false){
                    time=false;
                }
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses van de 0 a 11
                const day = String(date.getDate()).padStart(2, '0');
            
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                const seconds = String(date.getSeconds()).padStart(2, '0');
            

                if(time){

                    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                }else{
                    return `${year}-${month}-${day}`;
                }
        return '';
        
        }

}





}





export default date;