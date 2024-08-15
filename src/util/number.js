export default{

    format:function(value){

    

    let valStr=value;    
    if(typeof(value)=='number'){
        valStr= value.toString();
    }

    if(value==undefined || value==null){
        valStr='0';

    }
    
    
    valStr = valStr.replace(/[^0-9.,]/g, '');

    if (valStr.indexOf(',') > valStr.indexOf('.')) {
        valStr = valStr.replace(/,/g, '');
    } else {
        valStr = valStr.replace(/,/g, '.');
    }

    let num = parseFloat(valStr);

    if (isNaN(num)) {
        return '';
    }

    let parts = valStr.split('.');
    let integerPart = parts[0];
    let decimalPart = parts[1] ? parts[1] : '';

    let withCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if (decimalPart.length > 0) {
        decimalPart = decimalPart.length > 2 ? decimalPart.substring(0, 2) : decimalPart;
        decimalPart = decimalPart.padEnd(2, '0');
        return withCommas + '.' + decimalPart;
    } else {
        return withCommas;
    }

    }
}