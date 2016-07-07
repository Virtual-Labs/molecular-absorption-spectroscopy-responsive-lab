# molecular-absorption-spectroscopy-responsive-lab
#### Problem statement
Conversion of experiments in molecular absorption spectroscopy responsive lab from flash to JavaScript.

#### Introduction
The most interactive multimedia on the Web, which is in use is Flash. Flash offers the webmaster a single platform to create content that will be seen by the majority of Web site users, and that everyone who sees Flash will be able to interact with it in exactly the same way. However, there are some arguments against Flash, and many webmasters choose to use Flash in only limited pockets within their site. Hence creating similar experiences in JavaScript, we can avoid many of the problems inherent in Flash.

#### Motivation
###### Problems with Flash

* Accessibility : One of the major problems with Flash is that it presents difficulties for many people with disabilities. For some the issues are in translation from Flash to the screen reader. For others the big problem is the lack of keyboard navigation options in most Flash animations. For those who cannot use a mouse, an animation that requires mouse clicks is of no use.

* Search Engine Friendliness : The next major problem is Flash doesn't work well with all search engines. While there are capabilities within search engines to index Flash, they do it poorly. The Macromedia Flash Search Engine SDK has been around for years, but you're unlikely to see any Flash-only Web site show up properly in a free search engine. 

* Poor degradation : The next major issue for Flash is it doesn't fail well. When a Web application is said to degrade well, it means that even if an end user doesn't have the latest and the greatest software, they'll still have some content, and will be able to interact at some level with your application. Unfortunately, if a user doesn't have Flash at all, or if they don't have the right version of Flash, they'll get nothing.

###### Using JavaScript

These days, you can use JavaScript libraries that work fantastically across almost all platforms, and with a little thought you can ensure that you're still presenting usable content to users who don't have JavaScript enabled. Consider, for instance, the heavy use of JavaScript in sites like Google Maps. They work well for almost everyone as-is, and the lower-featured HTML-only versions work if JavaScript isn't working. Here there are no holes, no plugin suggestions, just a site that works.

With JavaScript and CSS, you can write accessibility into the site from the beginning. For any mouse-driven action, you can create a keyboard equivalent with as little as a single line added to your code. Of course, it's important to add ALT tags to images whenever they have bearing on the usability of the page. You can set the tab order of the elements in your page so a mouse-less user can navigate in a logical way based on the flow of information rather than the default order in the browser. CSS even includes standards for telling screen readers what voices to use, these can be added to your definitions for bolded text or headers, giving a customized experience similar to the one that sighted users receive.

Another advantage of JavaScript is that the code to make an animation flutter across the entire screen is no bigger than one that flutters across a small section of the screen. The complexity of the actual animation and the size of any image files used in your animation will determine its memory usage, not the size onscreen. All the while, all the text and links will be 100% indexable by the search engines because they're available in plain text to read.


#### Different methods explored

* Conversion using pure JavaScript animations in the desired sequence.

* Using certain libraries and framework which would make the conversion easier, like [tools](http://gotoandlearn.com/play.php?id=174) for Create JS. It's a Flash Professional plugin that allows you to publish flash content to HTML5.

* Using [Google web Designer](https://www.google.com/webdesigner/) for creating interactive HTML5-based designs and motion graphics that can run on any device. 

* Using [Adobe Wallaby](https://blogs.adobe.com/labs/archives/2011/03/convert-flash-to-html-files-with-wallaby-on-labs-now.html) or [Animate CC](https://helpx.adobe.com/animate/using/creating-publishing-html5-canvas-document.html) for the conversion.

* Using ActionScript to JavaScript transpilers like [AS3JS](http://as3js.org/)

* [Haxe](http://haxe.org/) is a cross-platform toolkit. It is similar to ActionScript and hence it is one of the easiest options for conversion, in particular if used through [OpenFL](http://www.openfl.org/). Haxe can compile to several languages including JavaScript. Some automatic conversion tools are currently available, such as as3hx and as3tohx, which convert a significant part of the code for you.

#### Method adopted

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


