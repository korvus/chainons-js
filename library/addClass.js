function addClass(nodeToCheck, cl){
    var existing = nodeToCheck.className;
    var clls = existing.split(" ");
    var alreadyExist = 0;
    for(var a=0; a<clls.length; a++){
        if(clls[a]===cl){
            alreadyExist++;
        }
    }
    if(alreadyExist===0){
        nodeToCheck.className = nodeToCheck.className+" "+cl;
    }
}

// addClass(DOMElement, "classname"); Two parameters are the DOM element and the class name. It check if class already exist or not

