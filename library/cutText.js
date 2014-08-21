function cutText(txt,hl,endchar){
	var hl = undefined == hl ? 70 : hl;
	var endchar = undefined == endchar ? "…" : endchar;
    if(txt.length>hl){
        ntxt = txt.substr(0,hl);
        ntxt = ntxt+endchar;
    }else{
        ntxt = txt;
    }
    return ntxt;
}

/* Will cut a text at lenght XX (second parameter), and terminate it with X character (third parameter) 
cutText("lorem ipsum ...");
cutText("lorem ipsum ...",100);
cutText("lorem ipsum ...",100,"!");
*/