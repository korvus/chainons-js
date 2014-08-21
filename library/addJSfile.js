function addScript(source){
    var head = document.getElementsByTagName('HEAD')[0];
    var script = document.createElement('SCRIPT');
    script.type = "text/javascript";
    script.src = source;
    head.appendChild(script);
}

//addScript("/monfichier.js"); - add a js file into an html document