function cutHex(h){return (h.charAt(0)=="#") ? h.substring(1,7):h}
function hexToR(h){return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h){return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h){return parseInt((cutHex(h)).substring(4,6),16)}

/*
	Allow to get separately R, G and B value from an hexadecimal value, as #ff55f8 > rgb(xxx,xxx,xxx);
	var hex = cutHex("#ff55f8");
	var R = hexToR(hex);
	var G = hexToG(hex);
	var B = hexToB(hex);
*/