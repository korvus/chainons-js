function addCSS(content){
    var head  = document.getElementsByTagName('head')[0];
    var css  = document.createElement('style');
    css.setAttribute('type','text/css');
    css.setAttribute('media','screen');
    css.setAttribute('rel','stylesheet');
    if (document.all&&!window.opera){//Méthode inégalement utilisée par ie ou autre.
        css.styleSheet.cssText = content;
    }else{
        css.appendChild(document.createTextNode(content));
    }
    head.appendChild(css);
}

//addCSS("body{padding:0;};");