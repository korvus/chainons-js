
(function(){
  
  /* Get sizes */
  var myObject = {};
  var w, h = 0;

  myObject.getSizes = function(){
      if(typeof(window.innerWidth) == 'number'){
        w = window.innerWidth;
        h = window.innerHeight;
      }else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)){
        w = document.documentElement.clientWidth;
        h = document.documentElement.clientHeight;
      }else if(document.body&&(document.body.clientWidth || document.body.clientHeight)){
        w = document.body.clientWidth;
        h = document.body.clientHeight;
      }
      return {"height":h,"width":w};
  };

})


(function(){

    var myObject = {};

    myObject.getTop = function(obj){
        var t = obj.offsetTop;
        var parentObj = obj.offsetParent;
        while(parentObj != null){
            t += parentObj.offsetTop;
            parentObj = parentObj.offsetParent;
        }
        return t;
    };

    myObject.getLeft = function(obj){
        var l = obj.offsetLeft;
        var parentObj = obj.offsetParent;
        while(parentObj != null){
            l += parentObj.offsetLeft;
            parentObj = parentObj.offsetParent;
        }
        return l;
    };

    myObject.getHeightW = function(){
            if(typeof(window.innerWidth) == 'number'){
                h = window.innerHeight;
            }else if(document.documentElement && (document.documentElement.clientHeight)){
                h = document.documentElement.clientHeight;
            }else if(document.body&&(document.body.clientHeight)){
                h = document.body.clientHeight;
            }
            return h;
    };

    myObject.getWidthW = function(){
            if(typeof(window.innerWidth) == 'number'){
                w = window.innerWidth;
            }else if(document.documentElement && (document.documentElement.clientWidth)){
                w = document.documentElement.clientWidth;
            }else if(document.body&&(document.body.clientWidth)){
                w = document.body.clientWidth;
            }
            return w;
    };

    myObject.getHeight = function(obj){
        if(obj.offsetHeight)          {oHeight=obj.offsetHeight;}
        else if(obj.style.pixelHeight){oHeight=obj.style.pixelHeight;}
        return oHeight;
    }

    window.twGetCoord = myObject;
})()

var cnsl = "";
var hauteurdelafenetre = twGetCoord.getHeightW();
function twCheckVisibility(obj){
    positionTopWidget = twGetCoord.getTop(obj);
    heightWidget = twGetCoord.getHeight(obj);
    posBottom = positionTopWidget+heightWidget;
    if(hauteurdelafenetre>positionTopWidget){
        if(hauteurdelafenetre>posBottom){
            cnsl += "visible<br />";
        }else{
            dif = hauteurdelafenetre - positionTopWidget;
            percentVisible = Math.round(dif*100/heightWidget);
            cnsl += "En partie visible a "+percentVisible+"%<br />";
        }
    }else{
        cnsl += "invisible<br />";
    }
    //if(hauteurdelafenetre)
}

window.onload = function(){
    document.getElementById("herewego").innerHTML = cnsl;
}