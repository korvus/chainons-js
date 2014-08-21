function nextSibling(elem){
    do {elem = elem.nextSibling;} while (elem && elem.nodeType !== 1);
    return elem;        
}

function prevSibling(elem){
    do {elem = elem.previousSibling;} while (elem && elem.nodeType !== 1);
    return elem;        
}

// prevSibling(node) and nextSibling(node) allow to move in the DOM hierarchy

function getElementByClassName(classname, wrapNode){
	var wrapNode = undefined == wrapNode ? document : wrapNode;
	if(document.querySelector===undefined){
	    var a = [];
	    var re = new RegExp('(^| )'+classname+'( |$)');
	    var els = wrapNode.getElementsByTagName("*");
	    for(var i=0,j=els.length; i<j; i++)
	        if(re.test(els[i].className))a.push(els[i]);
	    return a;
	}else{
	    return wrapNode.querySelectorAll("." + classname);
	}
};

// getElementByClassName return an array of DOM element selected by class name. Take two argument : classname, a string designing the class, wrapnode, a node where the search is executed. last one is optional.