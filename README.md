# molecular-absorption-spectroscopy-responsive-lab
##### Terminology
* SWF file format : SWF is a file extension for a Shockwave Flash file format created by Macromedia and now owned by Adobe. SWF stands for Small Web Format. It consists of video and vector based animations. These can be viewed on web browsers only using Flash plug in. It is derived from FLA file.

* FLA file format : An FLA file is an editable video or animation project created with Adobe Flash. It is often saved as a .SWF file for use on the web.

* Flash Decompilor : Flash Decompiler is a SWF to FLA converter, which will help you decompile Flash movies, convert SWF elements into multiple formats and edit SWF files (texts, hyperlinks and more) on the go without Adobe Flash installed. Moreover, you will be able to extract all elements from SWF files and save them to your hard drive in various formats. Flash Decompiler doesn't decompile Captivate projectors (EXE), projectors created outside of Adobe Flash.


##### Steps followed in the conversion of flash to JavaScript.
* Get the .swf file of the flash experiment which needs to be converted to JavaScript.

* Using JPEXS free Flash Decompiler extract all the components of the experiment.

* Combine parts of the Images obtained among the components extracted to form the required images using photoshop.

* Combine these images to one or more form frames.

* Position all the frames in their appropriate positions in HTML and CSS code.

* Place transparent image buttons over the frames in the places which should be clickable.

* On clicking these buttons replace the frame with a necessary frame and replace the button image with an appropriate one and provide desired animations to it.

* For animations, checkout the sprite sheets and identify the necessary animations needed. Then convert the svg images of that sprite sheet to png images using online convertors available. Then change these images continously to obtain the required animations.

* To plot the graph, since the data is not available, capture the screen of graph plotting from the flash experiment and play the video when 'scan' button is pressed.

##### Additional things used apart from pure JavaScript are
* jQueryRotate.js for rotating certain images.

