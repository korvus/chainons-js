function removeDecimal(price){
    if(price.match(/,/)){
        lastdecimal = price.split(',');
        monney = lastdecimal[1].substring(2);
        price = lastdecimal[0]+monney;
    }
    if(price.match(/\./)){ 
        lastdecimal = price.split('.');
        price = lastdecimal[0];
    }
    return price;
}
//removeDecimal("15,15 €") remove decimals but allow to keep currency symbol, assuming . is used only in england. 15,15 € > 15 € et £15.15 > £15


function addDecimals(price,from){
	var from = undefined == from ? 6 : from;
	if(!price.match(/,/)){
	    if(price.match(/£/)){
	        if(price.length < from){
	            if(price.match(/ /)){
	                var formatedPrice = price.split(' ');
	                price = formatedPrice[0]+" "+formatedPrice[1]+".00";
	            }else{
	                var formatedPrice = price.split(' ');
	                price = formatedPrice[1]+".00 ";
	            }
	        }
	    }else{
	        if(price.length < from){
	            if(price.match(/ /)){
	                var formatedPrice = price.split(' ');
	                price = formatedPrice[0]+",00 "+formatedPrice[1];
	            }else{
	                var formatedPrice = price.split(' ');
	                price = formatedPrice[0]+",00 ";
	            }
	        }
	    }
	}
	return price;
}
// addDecimals("15 €",6) will adding the decimals if don't exist. 15 € > 15,00 €. Second parameter is the string lenght when this function operate. At least 6 by default.


function currencySwitch(price){
	var euro = /€/;
	thereIsAEuro = price.match(euro);
	var afterComma = /([.,]{1}[0-9]{2})?\s*[€$£]/;
	pr = price.replace(afterComma,"");
	if(thereIsAEuro){
	    pr = "€ "+pr;
	}
	return pr;
}
//currencySwitch(""); Switch currency from behing to the front of the value. For some special case like italia market for example.