<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Example</title>
	<link rel="stylesheet" title="Minimum" href="example.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script type='text/javascript' src='example.js'></script>
	<?php

	$dir = "./library/";
	if (is_dir($dir)){
	   	if ($dh = opendir($dir)) {
	       	while (($file = readdir($dh)) !== false) {
	       		$path = $dir.$file;
	       		if(filetype($path)!="dir"){
	       			echo "<script type='text/javascript' src='library/".$file."'></script>\n";
	           	}
	       }
	       closedir($dh);
	   }
	}

	?>

</head>
<body>

	<section>
		<h1>colorConvertor.js</h1>
		<h2>cutHex();</h2>
			<div class="example h">
				<span><strong>Param:</strong> string with hexadecimal value, including # sign</span>
				<div class="bwa">
					<code class="before">
var valuehexa = "#ff00fa";
					</code>
					<code class="while">
var newvaluehexa = cutHex(valuehexa);
					</code>
					<code class="after">
ff00fa
					</code>
				</div>
			</div>
		<h2>hexToR();</h2>
			<div class="example h">
				<span><strong>Param:</strong> string in hexidecimal value (excluding # sign).</span>
				<div class="bwa">
					<code class="before">
var valuehexa = "ff00fa";
					</code>
					<code class="while">
var valueRed = hexToR(valuehexa);
					</code>
					<code class="after">
 255
					</code>
				</div>
			</div>
		<h2>hexToG();</h2>
			<div class="example h">
				<span><strong>Param:</strong> string in hexidecimal value (excluding # sign).</span>
				<div class="bwa">
					<code class="before">
var valuehexa = "ff00fa";
					</code>
					<code class="while">
var valueRed = hexToG(valuehexa);
					</code>
					<code class="after">
0
					</code>
				</div>
			</div>
		<h2>hexToB();</h2>
			<div class="example h">
				<span><strong>Param:</strong> string in hexidecimal value (excluding # sign).</span>
				<div class="bwa">
					<code class="before">
var valuehexa = "ff00fa";
					</code>
					<code class="while">
var valueRed = hexToB(valuehexa);
					</code>
					<code class="after">
250
					</code>
				</div>
			</div>
	</section>

	<section>
		<h1>addJSfile.js</h1>
		<h2>addScript()</h2>
			<div class="example h">
				<span><strong>Param:</strong> string for the path of js file.</span>
				<div class="bwa">
					<code class="before">
var pathJS = "example.js";
					</code>
					<code class="while">
addScript(pathJS);
					</code>
					<code class="after">
&lt;script type='text/javascript' src='example.js'&gt;&lt;text/script&gt;
					</code>
					<span>will write it in the current document, in head part.</span>
				</div>
			</div>
	</section>

	<section>
		<h1>addCSSfile.js</h1>
		<h2>addCSS()</h2>
			<div class="example h">
				<span><strong>Param:</strong> string of CSS properties.</span>
				<div class="bwa">
					<code class="before">
var cssProperties = "body{margin:0;}";
					</code>
					<code class="while">
addCSS(cssProperties);
					</code>
					<code class="after">
&lt;style type="text/css" media="screen" rel="stylesheet"&gt;
body{margin:0;}
&lt;style&gt;
					</code>
					<span>will include it in the head document.</span>
				</div>
			</div>
	</section>

	<section>
		<h1>randomPercent.js</h1>
		<h2>hasard()</h2>
			<div class="example h">
				<span><strong>Param 1:</strong> one number for minimum. <em>optionnal - default value is 10</em>.</span>
				<span><strong>Param 2:</strong> one number for maximum. <em>optionnal - default value is 35</em>.</span>
				<span>Made for generate randomely a decrease.</span>
				<div class="bwa">
					<code class="while">
var randNumber = hasard(10,20);
					</code>
					<code class="after">
17
					</code>
				</div>
			</div>
	</section>

	<section>
		<h1>cutText.js</h1>
		<h2>cutText()</h2>
			<div class="example h">
				<span><strong>Param 1:</strong> the string you want to cut.</span>
				<span><strong>Param 2:</strong> a number for define how long the string is before cut. <em>optionnal - default value is 35</em>.</span>
				<span><strong>Param 3:</strong> a string giving what put at the end of the string.<em>optionnal - default value is charachter "…"</em>.</span>
				<span>Made for generate randomely a decrease.</span>
				<div class="bwa">
					<code class="before">
var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
					</code>
					<code class="while">
var newLorem = cutText(lorem,20,"!!!");
					</code>
					<code class="after">
Lorem ipsum dolor si!!!
					</code>
				</div>
			</div>
	</section>

	<section>
		<h1>formatagePrice.js</h1>
		<h2>removeDecimal()</h2>
			<div class="example h">
				<span><strong>Param:</strong> a string including price value, space, separation and currency symbol.</span>
				<span>Made for generate randomely a decrease.</span>
				<div class="bwa">
					<code class="before">
var oldPrice = "12,52 €";
					</code>
					<code class="while">
var newPrice = removeDecimal(oldPrice);
					</code>
					<code class="after">
12 €
					</code>
				</div>
			</div>
		<h2>addDecimals();</h2>
			<div class="example h">
				<span><strong>Param 1:</strong> a string including price and currency symbol.</span>
				<span><strong>Param 2:</strong> a number indicating when function must stop to operate (value including currency value). <em>optionnal - default value is 6</em></span>
				<span>Made for generate randomely a decrease.</span>
				<div class="bwa">
					<code class="before">
var oldPrice = "200 €";
					</code>
					<code class="while">
var newPrice = addDecimals(oldPrice);
					</code>
					<code class="after">
200,00 €
					</code>
				</div>
			</div>
		<h2>currencySwitch()</h2>
			<div class="example h">
				<span><strong>Param:</strong> a string including price and currency symbol.</span>
				<span>This very specific function work only for price with euro currency, and automaticaly also suppress decimals.</span>
				<div class="bwa">
					<code class="before">
var oldPrice = "15,00 €";
					</code>
					<code class="while">
var newPrice = currencySwitch(oldPrice);
					</code>
					<code class="after">
€ 15
					</code>
				</div>
			</div>
	</section>

	<section>
		<h1>DOMsibling.js</h1>
		<h2>nextSibling()</h2>
			<div class="example h">
				<span><strong>Param 1:</strong> a DOM element from where you surf in the document.</span>
				<div class="bwa">
					<code class="before">
var divDom = document.getElementById("monid");
					</code>
					<code class="while">
var nextToTheDiv = nextSibling(divDom);
					</code>
					<span>Return a DOM node</span>
				</div>
			</div>
		<h2>prevSibling()</h2>
			<div class="example h">
				<span><strong>Param 1:</strong> a DOM element from where you surf in the document.</span>
				<div class="bwa">
					<code class="before">
var divDom = document.getElementById("myId");
					</code>
					<code class="while">
var nextToTheDiv = prevSibling(divDom);
					</code>
					<span>Return a DOM node</span>
				</div>
			</div>
		<h2>getElementByClassName()</h2>
			<div class="example h">
				<span><strong>Param 1:</strong> a string, the class name you search for.</span>
				<span><strong>Param 2:</strong> a DOM element allowing to scope the search of the class you want. <em>optionnal - default value is document</em>.</span>
				<div class="bwa">
					<code class="before">
var ulDom = document.getElementById("myUL");
					</code>
					<code class="while">
var myli = getElementByClassName("thisismyli",ulDom);
					</code>
					<span>Return an array with Dom elements inside, for 1 or more results.</span>
				</div>
			</div>
	</section>

	<section>
		<h1>addClass.js</h1>
		<h2>addClass()</h2>
			<div class="example h">
				<span><strong>Param 1:</strong> the DOM element you want assign a new classname.</span>
				<span><strong>Param 2:</strong> a string with the classname.</span>
				<div class="bwa">
					<code class="before">
&lt;div id="myDiv" class="testClass"&gt; my element &lt;/div&gt;
					</code>
					<code class="while">
var myDivDOM = document.getElementById("myDiv");
var myli = getElementByClassName(myDivDOM,"newClass");
					</code>
					<code class="after">
&lt;div id="myDiv" class="testClass newClass"&gt; my element &lt;/div&gt;
					</code>
				</div>
			</div>
	</section>


</body>
</html>