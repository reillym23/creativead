(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"rhinoadfinal_atlas_1", frames: [[0,1504,592,99],[0,1002,1200,500],[0,0,1000,1000]]},
		{name:"rhinoadfinal_atlas_2", frames: [[0,0,2000,1500]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["rhinoadfinal_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2432,195);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2932,346);


(lib.background = function() {
	this.initialize(ss["rhinoadfinal_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.leaves1 = function() {
	this.initialize(ss["rhinoadfinal_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.rhinocircle = function() {
	this.initialize(ss["rhinoadfinal_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rhinocircle();
	this.instance.setTransform(-127.9,-127.9,0.2558,0.2558);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.9,-127.9,255.8,255.8);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rhinocircle();
	this.instance.setTransform(-127.9,-127.9,0.2558,0.2558);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.9,-127.9,255.8,255.8);


(lib.thanks = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.thanks, new cjs.Rectangle(0,0,296,49.5), null);


(lib.save2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// save
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.2533,0.2533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,616.1,49.4);


(lib.donate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.1426,0.1426);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,418.1,49.4);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.leaves1();
	this.instance.setTransform(0,0,0.1571,0.1571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314.3,235.7);


(lib.leaves = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.instance = new lib.button();
	this.instance.setTransform(157.1,117.9,1,1,0,0,0,157.1,117.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314.3,235.7);


(lib.button2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// save2
	this.button = new lib.save2();
	this.button.name = "button";
	this.button.setTransform(185.95,24.7,0.6039,1,0,0,0,307.9,24.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A2+EsIAApXMAt9AAAIAAJXg");
	this.shape.setTransform(147.05,30.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button,p:{scaleX:0.6039,scaleY:1,x:185.95,y:24.7}}]}).to({state:[{t:this.button,p:{scaleX:0.6753,scaleY:1.9736,x:186,y:24.75}}]},1).to({state:[{t:this.button,p:{scaleX:0.6039,scaleY:1,x:185.95,y:24.7}}]},1).to({state:[{t:this.shape},{t:this.button,p:{scaleX:0.6039,scaleY:1,x:185.95,y:24.7}}]},1).wait(97));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-24,416,97.5);


// stage content:
(lib.rhinoadfinal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.worldwildlife.org/species/sumatran-rhino', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	// Layer_12
	this.instance = new lib.thanks();
	this.instance.setTransform(-96.05,502.2,1,1,0,0,0,148,24.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:false},0).to({x:199.95},11).wait(41));

	// donate
	this.instance_1 = new lib.donate();
	this.instance_1.setTransform(80.75,579.4,0.5332,1.6106,0,4.6376,-1.1118,0,49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:49.7,scaleX:1.1608,scaleY:3.5063,x:80.8,y:579.55},10).wait(36).to({x:394.8},18).wait(36));

	// button2
	this.button = new lib.button2();
	this.button.name = "button";
	this.button.setTransform(194.1,109.05,1,1,0,0,0,186.1,24.7);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.button2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(100));

	// Layer_4
	this.instance_2 = new lib.leaves1();
	this.instance_2.setTransform(310.25,611.7,0.1571,0.1571,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// leaves
	this.instance_3 = new lib.leaves();
	this.instance_3.setTransform(153.1,97.9,1,1,0,0,0,157.1,117.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

	// Layer_2
	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.setTransform(-128.1,299.9);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween2("synched",0);
	this.instance_5.setTransform(147.9,299.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5}]},20).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({_off:true,x:147.9},20).wait(71));

	// Layer_1
	this.instance_6 = new lib.background();
	this.instance_6.setTransform(0,600,0.5,0.62,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-106,280,1000,331.70000000000005);
// library properties:
lib.properties = {
	id: 'B8089B7FC672BF4F8CCE4B790F84524F',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_2.png?1676298503894", id:"CachedBmp_2"},
		{src:"images/CachedBmp_1.png?1676298503894", id:"CachedBmp_1"},
		{src:"images/rhinoadfinal_atlas_1.png?1676298503864", id:"rhinoadfinal_atlas_1"},
		{src:"images/rhinoadfinal_atlas_2.png?1676298503864", id:"rhinoadfinal_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B8089B7FC672BF4F8CCE4B790F84524F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;