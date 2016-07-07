# molecular-absorption-spectroscopy-responsive-lab
##### Problem statement
Conversion of experiments in molecular absorption spectroscopy responsive lab from flash to JavaScript.

##### Different methods explored

* Conversion using pure JavaScript animations in the desired sequence.

* Using certain libraries and framework which would make the conversion easier, like [tools](http://gotoandlearn.com/play.php?id=174) for Create JS. It's a Flash Professional plugin that allows you to publish flash content to HTML5.

* Using [Google web Designer](https://www.google.com/webdesigner/) for creating interactive HTML5-based designs and motion graphics that can run on any device. 

* Using [Adobe Wallaby](https://blogs.adobe.com/labs/archives/2011/03/convert-flash-to-html-files-with-wallaby-on-labs-now.html) or [Animate CC](https://helpx.adobe.com/animate/using/creating-publishing-html5-canvas-document.html) for the conversion.

* Using ActionScript to JavaScript transpilers like [AS3JS](http://as3js.org/)

* [Haxe](http://haxe.org/) is a cross-platform toolkit. It is similar to ActionScript and hence it is one of the easiest options for conversion, in particular if used through [OpenFL](http://www.openfl.org/). Haxe can compile to several languages including JavaScript. Some automatic conversion tools are currently available, such as as3hx and as3tohx, which convert a significant part of the code for you.

##### Method adopted

The continuing absence of an easy conversion process from Flash to HTML5 and increased complexity in making further editing inhibits the development of HTML5 version using various tools mentioned above. Pure HTML5 / JavaScript is easier to understand, decompile and re-use.

##### Terminology

* Flash : Adobe Flash (formerly called Macromedia Flash and Shockwave Flash) is a multimedia software platform used for production of animations, browser games, rich Internet applications, desktop applications, mobile applications and mobile games.

* SWF file format : SWF is a file extension for a Shockwave Flash file format created by Macromedia and now owned by Adobe. SWF stands for Small Web Format. It consists of video and vector based animations. These can be viewed on web browsers only using Flash plug in. It is derived from FLA file.

* FLA file format : An FLA file is an editable video or animation project created with Adobe Flash. It is often saved as a .SWF file for use on the web.

* Flash Decompilor : Flash Decompiler is a SWF to FLA converter, which will help you decompile Flash movies, convert SWF elements into multiple formats and edit SWF files (texts, hyperlinks and more) on the go without Adobe Flash installed. Moreover, you will be able to extract all elements from SWF files and save them to your hard drive in various formats. Flash Decompiler doesn't decompile Captivate projectors (EXE), projectors created outside of Adobe Flash.

* SVG file format : Scalable Vector Graphics (SVG) is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation. 



##### Steps followed in the conversion.

* Get the .SWF files of the flash experiment which needs to be converted to JavaScript from github.

* Using [JPEXS free Flash Decompiler](https://www.free-decompiler.com/flash/download/) extract all the components of the experiment.


* Identify the components which together form images required.

* Combine these images using photoshop or any other photo editors available. Make sure all images are in PNG format.

* Position all these images in their appropriate positions in HTML and CSS code.

* Define functions for each of the apparatus which redirect to other functions according to the need of the experiment.

* Define one common function for upward and downward movement of any image which takes in final position initial position and the element to be moved. This function will work only for linear motions along straight line since position of the image is being changed every moment.

* For other kind of animations like pouring liquid from one apparatus to other, checkout the [sprite sheets](http://kwiksher.com/tutorials_kwik/tutorial-sprites/) obtained after extraction of SWF files and identify the animations needed. Convert the svg images of that sprite sheet to png images using [online convertors](http://image.online-convert.com/convert-to-png) available. Then change these images continously to obtain the required animations.

* After every step performed change the instruction which will explain what has to be done next.

* To plot the graph, since the data is not available, capture the screen of graph plotting from the flash experiment and play the video when 'scan' button is pressed. To capture only a part of the screen [QuickTime](http://quicktime.en.softonic.com/) can be used. If data is available then JavaScript frameworks like [Chart.js](http://www.chartjs.org/) can be used.

* Take screenshot of all graphs in a particular experiment. Then slideshow these images in a new window when Data button is clicked.

##### Additional scripts necessary 

* [jQuery](https://jquery.com/) for HTML document traversal and manipulation, event handling, animation, and Ajax.

* [Bootstrap](http://getbootstrap.com/) to make front-end web development faster and easier. It helps in dividing web page into various rows and columns.

* jQueryRotate.js for rotating certain images.


