
var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
String.prototype.colorRgb = function(){  
	var sColor = this.toLowerCase();  
	if(sColor && reg.test(sColor)){  
		if(sColor.length === 4){  
			var sColorNew = "#";  
			for(var i=1; i<4; i+=1){  
				sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));     
			}  
			sColor = sColorNew;  
		}  
		var sColorChange = [];  
		for(var i=1; i<7; i+=2){  
			sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));    
		}  
		return "RGB(" + sColorChange.join(",") + ")";  
	}else{  
		return sColor;    
	}  
};  
var MatrixClass = {
	createNew: function(){
　　　　var matrix = {  //public object
	        Property: "Test Static Property",    //public attributes 
	        setMatrix: function(json){    //public method 
				console.log("settings======================== ");
				$.each(json,function(name,value) {
					var settmp="";
					var comparetmp="";
					if(typeof value=="string"){
						comparetmp=name+"=\""+value+"\";";
						settmp=name+"=\""+value+"\";";
					}else{
						settmp=name+"="+value+";";
					}
					console.log(settmp);
					eval(settmp);
				});

				if(dataport0ip1==1){perblocksaveip=perblock;}
				else{perblocksaveport=perblock;}

				$("#returnctrl").click(function(){
					if(dblinner==1){
						console.log("return");
						innerinit();
						if(dataport0ip1==1){ipdata();}
						else{portdata();}
						$("#returnctrl").hide();
					}
				});
				console.log("end of settings==================");
	        },
			readportdata:function(path){
				d3.csv(path,function(d) {
					totalnum=256;
					var dataAll=d;
					portdataAll=new Array(totalnum);
					for(var i=0;i<totalnum;i++){
						portdataAll[i]=new Array(totalnum);
						for(var j=0;j<totalnum;j++){
							portdataAll[i][j]=0;
						}
					}
					var datalen=dataAll.length;

					for(var i=0;i<datalen;i++){
						var tmpport=parseInt(dataAll[i].PORT)-innerportstart;
						if(xdiv0mod1==0){
							var tmpxloc=parseInt(tmpport/totalnum);
							var tmpyloc=parseInt((tmpport-tmpxloc*totalnum));
						}else{
							var tmpyloc=parseInt(tmpport/totalnum);
							var tmpxloc=parseInt((tmpport-tmpyloc*totalnum));
						}
						var tmpvalue=parseInt(dataAll[i].VALUE);
						portdataAll[tmpxloc][tmpyloc]=portdataAll[tmpxloc][tmpyloc]+tmpvalue;
					}
					return 1;
				});
			},
			drawport:function(){
				innerinit();
				portdata();
			},
			readipdata:function(path){
				d3.csv(path,function(d) {
					totalnum=256;
					var dataAll=d;
					ipdataAll=new Array(totalnum);
					for(var i=0;i<totalnum;i++){
						ipdataAll[i]=new Array(totalnum);
						for(var j=0;j<totalnum;j++){
							ipdataAll[i][j]=0;
						}
					}
					var datalen=dataAll.length;
					for(var i=0;i<datalen;i++){
						var tmpip=dataAll[i].IP;
						var tmpiparr=tmpip.split(".");
						var tmpxloc=parseInt(tmpiparr[xa0b1c2d3]);
						var tmpyloc=parseInt(tmpiparr[ya0b1c2d3]);
						var tmpvalue=parseInt(dataAll[i].VALUE);
						ipdataAll[tmpyloc][tmpxloc]=ipdataAll[tmpyloc][tmpxloc]+tmpvalue;
					}
				});
			},
			drawip:function(){
				innerinit();
				ipdata();
			},
			drawMatrix:function(dataarr){
				innerinit();
				init(dataarr);
			},
			selectfunc:function(fun){selectfunction=fun;},
			getselectarr:function(){return selectarr;},
			getselectobj:function(){
				var arr=[];
				if(dataport0ip1==1){
					var curper=256/selectarr.length;
					for(var i=0;i<selectarr.length;i++){
						for(var j=0;j<selectarr[0].length;j++){
							if(selectarr[i][j]>0){
								if(curper==1){arr.push({"x":j,"y":i});}
								else{arr.push({"x":(j*curper+"-"+((j+1)*curper-1)),"y":(i*curper+"-"+((i+1)*curper-1))});}
							}
						}
					}
				}else{
					var curper=(256/selectarr.length)*(256/selectarr.length);
					for(var i=0;i<selectarr.length;i++){
						for(var j=0;j<selectarr[0].length;j++){
							if(selectarr[i][j]>0){
								if(xdiv0mod1==1){
									if(curper==1){arr.push({"port":j*Math.sqrt(curper)*256+curper*i});}
									else{arr.push({"port":(j*Math.sqrt(curper)*256+curper*i)+"-"+(j*Math.sqrt(curper)*256+curper*i+curper-1)});}
								}else{
									if(curper==1){arr.push({"port":i*Math.sqrt(curper)*256+curper*j});}
									else{arr.push({"port":(i*Math.sqrt(curper)*256+curper*j)+"-"+(i*Math.sqrt(curper)*256+curper*j+curper-1)});}
								}
								
							}
						}
					}
				}
				return arr;
			}
				
		};   
　　　　var selectfunction=function(){};
	    var lowcolor="#3f4041";var highcolor="#ffffff";var nonecolor="#020112";var hovercolor="#fe9f01";var hlcolor="#fe8001";
		
		var brushenable=1;var clickenable=1;
		var dataport0ip1=0;
		//var enablechangeper=1;
		var perblock=16;
		var perblocksave=16;var perblocksaveip=16;var perblocksaveport=16;
		var dblinner=0;
		var innerportstart=0;var innerportend=0;
		var inneripstartx=0;var inneripendx=0;var inneripstarty=0;var inneripendy=0;
		var selectx=-1;var selecty=-1;
		var totalnum;

		var xa0b1c2d3=0;var ya0b1c2d3=1;
		var ydiv0mod1=1;var xdiv0mod1=0; 

		var placeW=500;var placeH=500; 
		var placeid="matrix";
		var ipabcd=["A","B","C","D"];var portdivmod=["div","mod"];

		var bottompadding=20;var axiswidth=5;
	    var colorrectw=15;var colorrecth=placeH*0.3-bottompadding;
	    var colorbarw=25;var colorbarh=colorrecth;
		//data**********************************************************
		//var dataAll;var ipdataarr;var portdataarr;
		var portdataAll;var ipdataAll;var ipdataarr;var portdataarr;
		var selectarr;
		var numcntarr;
		var maxvalue;var minvalue;var middlevalue;
		//draw**********************************************************
		var svg;
		var grects;var rects;var gtexts;var xtexts;var ytexts;
		var textarr;
		//var returnbtn;
		var gcolor;var colorRect;var colortxt;
		var colorcompute = d3.interpolate(lowcolor.colorRgb(),highcolor.colorRgb());  
		var colorliner;
		var persent=0;var linearGradient;var colorflag=1;
		var gselect;
		var xScale;var xScalecopy;var xScale2;
		var axis;var brush;var brushtxt;var brushtxt2;

		//private methods
		var portdata=function(){
			console.log("portdata");
			var start = new Date().getTime();
			
			if(dblinner==1){
				totalnum=Math.sqrt(innerportend-innerportstart+1);
				portdataarr=new Array(totalnum);
				for(var i=0;i<totalnum;i++){
					portdataarr[i]=new Array(totalnum);
					for(var j=0;j<totalnum;j++){
						portdataarr[i][j]=0;
					}
				}
				for(var i=innerportstart;i<=innerportend;i++){
					if(xdiv0mod1==0){
						var tmpxloc=parseInt((i-innerportstart)/totalnum);
						var tmpyloc=parseInt((i-innerportstart)-tmpxloc*totalnum);
						var originx=parseInt(i/256);var originy=parseInt(i%256);
					}else{
						var tmpyloc=parseInt((i-innerportstart)/totalnum);
						var tmpxloc=parseInt((i-innerportstart)-tmpyloc*totalnum);
						var originy=parseInt(i/256);var originx=parseInt(i%256);
					}
					portdataarr[tmpxloc][tmpyloc]=portdataAll[originx][originy];
				}
			}else{
				totalnum=256;
				var sqrtperblock=parseInt(Math.sqrt(perblock));
				var perlen=totalnum/sqrtperblock;
				portdataarr=new Array(perlen);
				for(var i=0;i<perlen;i++){
					portdataarr[i]=new Array(perlen);
					for(var j=0;j<perlen;j++){
						portdataarr[i][j]=0;
					}
				}
				for(var i=0;i<256*256;i++){
					if(xdiv0mod1==0){
						var tmpxloc=parseInt(i/totalnum/sqrtperblock);
						var tmpyloc=parseInt((i-tmpxloc*totalnum*sqrtperblock)/perblock);
						var originx=parseInt(i/totalnum);var originy=parseInt(i%totalnum);
					}else{
						var tmpyloc=parseInt(i/totalnum/sqrtperblock);
						var tmpxloc=parseInt((i-tmpyloc*totalnum*sqrtperblock)/perblock);
						var originy=parseInt(i/totalnum);var originx=parseInt(i%totalnum);
					}
					portdataarr[tmpxloc][tmpyloc]=portdataarr[tmpxloc][tmpyloc]+portdataAll[originx][originy];
				}
			}
			var end = new Date().getTime();
			console.log("process data cost time "+(end - start));
			init(portdataarr);
		}
		var ipdata=function(path){
			console.log("ipdata");
			var start = new Date().getTime();
			if(dblinner==1){
				totalnum=(inneripendx-inneripstartx+1);
				ipdataarr=new Array(totalnum);
				for(var i=0;i<totalnum;i++){
					ipdataarr[i]=new Array(totalnum);
					for(var j=0;j<totalnum;j++){
						ipdataarr[i][j]=0;
					}
				}
				for(var i=inneripstartx;i<=inneripendx;i++){
					for(var j=inneripstarty;j<=inneripendy;j++){
						var tmpxloc=parseInt((i-inneripstartx)/perblock);
						var tmpyloc=parseInt((j-inneripstarty)/perblock);
						ipdataarr[tmpyloc][tmpxloc]=ipdataarr[tmpyloc][tmpxloc]+ipdataAll[j][i];
					}
				}	
			}else{
				totalnum=256;
				var perlen=totalnum/perblock;
				ipdataarr=new Array(perlen);
				for(var i=0;i<perlen;i++){
					ipdataarr[i]=new Array(perlen);
					for(var j=0;j<perlen;j++){
						ipdataarr[i][j]=0;
					}
				}
				for(var i=0;i<256;i++){
					for(var j=0;j<256;j++){
						var tmpxloc=parseInt(i/perblock);
						var tmpyloc=parseInt(j/perblock);
						ipdataarr[tmpyloc][tmpxloc]=ipdataarr[tmpyloc][tmpxloc]+ipdataAll[j][i];
					}
				}
			}
			var end = new Date().getTime();
			console.log("process data cost time "+(end - start));
			init(ipdataarr);
		}
		var init=function(dataarr){
			var start  = new Date().getTime();
			initcontainer();
			var perlen=dataarr.length;
			var perlen2=dataarr[0].length;
			selectarr=new Array(perlen);
			for(var i=0;i<perlen;i++){
				selectarr[i]=new Array(perlen2);
				for(var j=0;j<perlen2;j++){
					selectarr[i][j]=0;
				}
			}	
			if(selectx>=0&&selecty>=0&&dblinner==0){
				console.log("selectx "+selectx+" selecty "+selecty);
				selectarr[selectx][selecty]=1;
			}
			if(dblinner==0){
				if(dataport0ip1==1){
					if(perblock>32){textarr=new Array(perlen);for(var i=1;i<perlen;i++){textarr[i]=i*perblock;}}
					else{textarr=new Array(8);for(var i=1;i<8;i++){textarr[i]=i*32;}}
				}else{textarr=new Array(8);for(var i=1;i<8;i++){textarr[i]=i*32;}}
			}else{
				if(dataport0ip1==1){textarr=new Array(perblocksaveip);for(var i=0;i<perblocksaveip;i++){textarr[i]=i;}	}
				else{textarr=new Array(Math.sqrt(perblocksaveport));for(var i=0;i<Math.sqrt(perblocksaveport);i++){textarr[i]=i;}	}	
			}
			//************************************************************
			numcntarr=new Array(2);
			for(var i=0;i<perlen;i++){
				numcntarr[0]=_.union(numcntarr[0],dataarr[i]);
			}
			numcntarr[0]=_.sortBy(numcntarr[0], function(num){ return num; });
			if(numcntarr[0][0]==0){numcntarr[0]=_.rest(numcntarr[0]);}
			numcntarr[1]=new Array(numcntarr[0].length);
			for(var i=0;i<numcntarr[0].length;i++){
				numcntarr[1][i]=0;
			}
			for(var i=0;i<perlen;i++){
				for(var j=0;j<perlen2;j++){
					if(dataarr[i][j]>0){
						var tmpindex=_.indexOf(numcntarr[0], dataarr[i][j], true);
						numcntarr[1][tmpindex]=numcntarr[1][tmpindex]+1;
					}
				}
			}
			console.log(numcntarr[0]);console.log(numcntarr[1]);
			minvalue=numcntarr[0][0];
			maxvalue=numcntarr[0][numcntarr[0].length-1];
			var end = new Date().getTime();
			console.log("init cost time "+(end - start));
			initcolor(colorflag);
			privatedraw(dataarr,colorflag);
		}
		var initcontainer=function(){
			$("#"+placeid).css("width",placeW).css("height",placeH);
			d3.select("#"+placeid).selectAll("svg").remove();
			svg = d3.select("#"+placeid)
					.append("svg")  
					.attr("class","matrix")
					.attr("width",placeW)  
					.attr("height",placeH);
			grects=svg.append("g").attr("class","grects")
					.attr("transform", "translate(" + 25 + "," + 15 + ")");	
			gtexts=svg.append("g");
			gcolor=svg.append("g");
			gselect=svg.append("g");
			linearGradient = svg.append("defs").append("linearGradient")
							.attr("id","linearColor");
			var containertop=document.getElementById(""+placeid).offsetTop;
			var containerleft=document.getElementById(""+placeid).offsetLeft;
			$("#returnctrl").css("position","absolute").css("left",containerleft+placeW-colorbarw-colorrectw-100).css("top",containertop+placeH-bottompadding);
		}
		var initcolor=function(flag){
			var start  = new Date().getTime();
			if(flag==0){
				colorcompute = d3.interpolate(lowcolor.colorRgb(),highcolor.colorRgb()); 
				colorliner = d3.scale.linear()  
					.domain([Math.log(minvalue),Math.log(maxvalue)])  
					.range([0,1]); 
				linearGradient.attr("x1","0%").attr("y1","100%")
								.attr("x2","0%").attr("y2","0%");
				linearGradient.selectAll("stop").remove();
				linearGradient.append("stop").attr("offset","0%")
					.style("stop-color",lowcolor.colorRgb().toString());
				linearGradient.append("stop").attr("offset","100%")
					.style("stop-color",highcolor.colorRgb().toString());
			}else{
				var cntall=0;	
				for(var i=0;i<numcntarr[1].length;i++){
					cntall=cntall+numcntarr[1][i];
				}
				var cntnow=0;
				var middleindex=-1;
				for(var i=numcntarr[1].length-1;i>0;i--){
					cntnow=cntnow+numcntarr[1][i];
					if(cntnow>cntall*0.3){
						middleindex=i;
						middlevalue=numcntarr[0][i];
						break;
					}
				}
				persent=(100*middleindex/numcntarr[1].length);
				if(middleindex==-1){
					persent=50;middlevalue=(Math.log(maxvalue)+Math.log(minvalue))/2;
				}
				if(numcntarr[1].length==1){persent=0;middlevalue=maxvalue;}
				console.log("middlevalue: "+middlevalue+" persent:"+persent);
				
				//************************************************************
				colorcompute = d3.interpolate(lowcolor.colorRgb(),highcolor.colorRgb()); 

				colorliner = d3.scale.linear()  
					.domain([Math.log(minvalue),Math.log(middlevalue),Math.log(maxvalue)])  
					.range([0,1-persent/100,1]); 

				linearGradient.attr("x1","0%").attr("y1","100%")
								.attr("x2","0%").attr("y2",persent+"%")
								.attr("x3","0%").attr("y3","0%");
				linearGradient.selectAll("stop").remove();
				linearGradient.append("stop").attr("offset","0%")
					.style("stop-color",lowcolor.colorRgb().toString());
				linearGradient.append("stop").attr("offset",persent+"%")
					.style("stop-color",colorcompute(0.5));
				linearGradient.append("stop").attr("offset","100%")
					.style("stop-color",highcolor.colorRgb().toString());
			}
			var end = new Date().getTime();
			console.log("initcolor cost time "+(end - start));
		}
	    var privatedraw = function(drawdata,flag){
			//console.log(textarr);
			var start  = new Date().getTime();
			var numofgap=drawdata.length;
			var width=placeW-25-axiswidth-5-colorrectw-colorbarw;
			var height=placeH-15-bottompadding;
			rects=new Array(numofgap);
	        grects.selectAll("g").remove();
	        $(".tip-violet").remove();
	        //$(".grects").hide();
	        //*************************************************************************
	        var startinner  = new Date().getTime();
			for(var k=0;k<numofgap;k++){
				rects[k] = grects.append("g")
						.selectAll(".border")
						.data(drawdata[k])
						.enter()
						.append("rect")
						.attr("class","border")
						.attr("id",(d,i)=>("id:"+k+":"+i))
						.attr("x", function(d, i) { return width/numofgap*i; })
						.attr("y", function(d, i) { return height/numofgap*k; })
						.attr("width", width/numofgap+1)
						.attr("height", height/numofgap+1)
						.attr("fill", function(d, i) {
							if(selectarr[k][i]>0){return hlcolor.colorRgb();}
							else if(d==0){return nonecolor.colorRgb();}
							else{return colorcompute(colorliner(Math.log(d)));}
						});
				
				if(clickenable==1){
					rects[k].on("click", function(d,i){
						var tmpid=d3.select(this).attr("id").split(":");
						var m=parseInt(tmpid[1]);
						var n=parseInt(tmpid[2]);
						if(selectarr[m][n]==1){
							selectarr[m][n]=0;
							if(d==0){d3.select(this).attr("fill",nonecolor.colorRgb());}
							else{d3.select(this).attr("fill",colorcompute(colorliner(Math.log(d))));}
						}else{
							if(selectarr[m][n]==2){selectarr[m][n]=3;}
							else{
								if(selectarr[m][n]==3){selectarr[m][n]=2;}
								else{
									selectarr[m][n]=1;
									d3.select(this).attr("fill",hlcolor.colorRgb());
								}
							}
						}
						selectfunction();
					});
				}
				if(perblock>1&&dblinner==0){
					selectx=-1;selecty=-1;
					rects[k].on("dblclick", function(d,i){
						console.log("perblock "+perblock);
						var tmpid=d3.select(this).attr("id").split(":");
						var m=parseInt(tmpid[1]);
						selectx=m;selecty=i;
						dblinner=1;
						if(dataport0ip1==1){
							inneripstartx=(i+1)*perblock-perblock;
							inneripendx=(i+1)*perblock-1;
							inneripstarty=(m+1)*perblock-perblock;
							inneripendy=(m+1)*perblock-1;
							console.log(inneripstartx+"-"+inneripendx+" "+inneripstarty+"-"+inneripendy);
						}else{
							if(xdiv0mod1==1){
								innerportstart=(i*256*Math.sqrt(perblock)+perblock*m);
								innerportend=(i*256*Math.sqrt(perblock)+perblock*(m+1)-1);
							}else{
								innerportstart=(m*256*Math.sqrt(perblock)+perblock*i);
								innerportend=(m*256*Math.sqrt(perblock)+perblock*(i+1)-1);
							}
							console.log(innerportstart+"-"+innerportend);
						}
						//perblocksave=perblock;
						
						if(dataport0ip1==1){perblocksaveip=perblock;}
						else{perblocksaveport=perblock;}
						perblock=1;
						if(dataport0ip1==1){ipdata();}
						else{portdata();}
						$("#returnctrl").show();
					});
				}
				
				if(width/numofgap*height/numofgap>45){
					//console.log("HxW=:"+width/numofgap*height/numofgap);
					rects[k].attr("title",function(d,i){return titletxt(d,k,i);});
					rects[k].on("mouseover",function(){
								d3.select(this).attr("fill",hovercolor.colorRgb());
							})
							.on("mouseout",function(d,i){
								d3.select(this).attr("fill",function(d,i){
									var tmpid=d3.select(this).attr("id").split(":");
									var m=parseInt(tmpid[1]);
									var n=parseInt(tmpid[2]);
									if(selectarr[m][n]>0){return hlcolor.colorRgb();}
									else{
										if(d==0){return nonecolor.colorRgb();}
										else{return colorcompute(colorliner(Math.log(d)));}
									}
								});
							})
							.attr("stroke","#E6E6E6")
							.attr("stroke-width",function(){return 0.05*width/numofgap;})
							.attr("rx",function(){return 0.1*width/numofgap;})
							.attr("ry",function(){return 0.1*height/numofgap;});	
				}else{rects[k].append("title").text(function(d,i){return titletxt(d,k,i);});}
			}
			var endinner  = new Date().getTime();
			console.log("rect draw: "+(endinner-startinner));

			//*************************************************************************
			if((width/numofgap*height/numofgap>45)){
					$j4('.border').poshytip({
							className: 'tip-violet',
							bgImageFrameSize: 7,
							offsetX: -25,
							allowTipHover: false,
							fade: false,
							slide: false
					});
			}
			gtexts.selectAll("g").remove();
			
			var txtnum=textarr.length;
			xtexts = gtexts.append("g")
				.selectAll("text").data(textarr).enter().append("text")
	            .text(function (d) {
	            	if(dblinner==0){return d;}
	            	else{
	            		if(dataport0ip1==1){return inneripstartx+d;}
	            		else{return d;}
	            	}
	            })
				.attr("transform",function(d,i){
					if(dblinner==0){return "translate("+(27+i * width/txtnum)+"," + 14+ ")";}
					else{return "translate("+(27+(i+0.5)* width/txtnum)+"," + 14+ ")";}
				})
	            .style("text-anchor", "end")
	            .attr("class", "mono");
			ytexts = gtexts.append("g")
				.selectAll("text").data(textarr).enter().append("text")
	            .text(function (d) {
	            	if(dblinner==0){return d;}
	            	else{
	            		if(dataport0ip1==1){return inneripstarty+d;}
	            		else{return d;}
	            	}
	            })
				.attr("transform",function(d,i){
					if(dblinner==0){return "translate("+20+"," + (17+i * height/txtnum)+ ")";}
					else{return "translate("+(20)+"," + (17+(i+0.5)* height/txtnum)+ ")";}
				})
	            .style("text-anchor", "end")
	            .attr("class", "mono");
	        var ytxt=gtexts.append("g")
				.selectAll("text").data([0]).enter().append("text")
	            .text(function (d) {
					if(dataport0ip1==1){return ipabcd[ya0b1c2d3];}
					else{return portdivmod[ydiv0mod1];}
				})
				.attr("transform",function(d,i){
					return "translate("+20+"," + (17+ textarr.length* height/txtnum)+ ")";
				})
	            .style("text-anchor", "end")
	            .attr("class", "mono");
			var xtxt=gtexts.append("g")
				.selectAll("text").data([0]).enter().append("text")
	            .text(function (d) {
					if(dataport0ip1==1){return ipabcd[xa0b1c2d3];}
					else{return portdivmod[xdiv0mod1];}
				})
				.attr("transform",function(d,i){
					return "translate("+(23+textarr.length* width/txtnum)+"," + 14+ ")";
				})
	            .style("text-anchor", "end")
	            .attr("class", "mono");
	        //*************************************************************************
	        var barScale = d3.scale.linear()  
	                            .domain([Math.log(_.min(numcntarr[1])),Math.log(_.max(numcntarr[1]))])  
	                            .range([0.2*colorbarw,colorbarw]); 
	        var anitixScale;
	        if(colorflag==0){
	        	xScale = d3.scale.linear().domain([Math.log(maxvalue),Math.log(minvalue)])  
	                            .range([colorrecth,0]);  
	            xScale2= d3.scale.linear().domain([colorrecth,0]).range([Math.log(maxvalue),Math.log(minvalue)]);  
		        xScalecopy = d3.scale.linear().domain([Math.log(minvalue),Math.log(maxvalue)])  
		                            .range([colorrecth,0]);
		        anitixScale = d3.scale.linear().domain([Math.log(maxvalue),Math.log(minvalue)])  
		                            .range([0,colorbarh]); 
		    }else{
		    	xScale = d3.scale.linear().domain([Math.log(maxvalue),Math.log(middlevalue),Math.log(minvalue)])  
	                            .range([colorrecth,(1-persent/100)*colorbarh,0]);  
	            xScale2= d3.scale.linear().domain([colorrecth,(1-persent/100)*colorbarh,0]) .range([Math.log(maxvalue),Math.log(middlevalue),Math.log(minvalue)]);
		        xScalecopy = d3.scale.linear().domain([Math.log(minvalue),Math.log(middlevalue),Math.log(maxvalue)])  
		                            .range([colorrecth,(1-persent/100)*colorbarh,0]);
		        anitixScale = d3.scale.linear().domain([Math.log(maxvalue),Math.log(middlevalue),Math.log(minvalue)])  
		                            .range([0,(1-persent/100)*colorbarh,colorbarh-2]); 
		    }
			
	        gcolor.selectAll("g").remove();
			colorRect = gcolor.append("g")
					.append("rect")
					.attr("x", placeW-5-colorrectw-colorbarw)
					.attr("y", placeH-bottompadding-colorrecth)
					.attr("width", colorrectw)
					.attr("height", colorrecth)
					.attr("stroke","#666666")
					.attr("stroke-width","1px")
					.attr("rx","1px")
					.attr("ry","1px")
					.style("fill","url(#" + linearGradient.attr("id") + ")");

	        var colorbar = gcolor.append("g").attr("class","colorbar")
					.selectAll("rect")
					.data(numcntarr[1])
					.enter()
					.append("rect")
					.attr("x", placeW-5-colorbarw)
					.attr("y", function(d,i){return placeH-bottompadding-colorbarh+anitixScale(Math.log(numcntarr[0][i]));})
					.attr("width", function(d,i){
						if(_.uniq(numcntarr[1]).length==1){return colorbarw;}
						else{return barScale(Math.log(d));}
					})
					.attr("height", "2px")
					.attr("rx","1px")
					.attr("ry","1px")
					.style("fill","grey");
			var colorrecttxt=gcolor.append("g")
				.selectAll("text").data(["min","max"])
	            .enter().append("text")
	            .text(function (d) {return d;})
				.attr("transform",function(d,i){return "translate("+(placeW-5-colorbarw-colorrectw)+","+(placeH-bottompadding*(i+0.3)-colorbarh*i)+")";})
	            .attr("class", "mono");

			brush = d3.svg.brush()
						.y(xScalecopy)
						.on("brush", brushed)
						.on("brushend",function(){
							//console.log(brush.extent());
							selectfunction();
						});
			brushtxt=gcolor.append("g").selectAll("text")
					.data(["",""]).enter().append("text")
					.attr("x",(placeW-5-colorbarw-colorrectw)).attr("y",(placeH-colorbarh-bottompadding))
					.attr("class","mono brushtxt")
					.text(d=>d);
			brushtxt2=gcolor.append("g").selectAll("text")
					.data([""]).enter().append("text")
					.attr("x",(placeW-5-colorbarw-colorrectw)).attr("y",(placeH-colorbarh-bottompadding))
					.attr("class","mono")
					.text(d=>d);

			if(brushenable==1){
				var brushrect=gcolor.append("g")
				  .attr("class", "x brush")
				  .attr("transform","translate("+(placeW-5-colorrectw-colorbarw)+","+(placeH-bottompadding-colorrecth)+")")
				  .call(brush)
				  .selectAll("rect")
				  .attr("x",0)
				  .attr("width", colorrectw+colorbarw); 
			}
			brushrect.on("mousemove",function(){
					  var ytop=event.clientY+window.pageYOffset-(placeH-bottompadding-colorrecth+document.getElementById(""+placeid).offsetTop);			  
					  brushtxt2.data(["e^"+xScale2(colorrecth-ytop).toFixed(1)]).text(d=>d).attr("transform",(d,i)=>("translate("+0+","+ytop+")"));
			});
			//*************************************************************************
			gselect.selectAll("g").remove();
			var selecttxt=gselect.append("g").append("text")
					.attr("x",25).attr("y",placeH-5)
					.attr("class","mono")
					.text(function(){
						if(dblinner==1){
							if(dataport0ip1==1){return "ip "+ipabcd[xa0b1c2d3]+":"+inneripstartx+"-"+inneripendx+" "+ipabcd[ya0b1c2d3]+":"+inneripstarty+"-"+inneripendy;}
							else{return "port:"+innerportstart+"-"+innerportend;}
						}else{
							if(dataport0ip1==1){return "ip "+ipabcd[xa0b1c2d3]+":0-255 "+ipabcd[ya0b1c2d3]+":0-255";}
							else{return "port:0-65525";}
						}
					});
				
			//*************************************************************************
			var end = new Date().getTime();
			console.log("privateipdraw cost time "+(end - start));
			//$("#"+placeid+"-spinner").hide();
		}  
		function titletxt(d,k,i){
			if(dataport0ip1==1){
				if(perblock==1){
					return ipabcd[xa0b1c2d3]+":"+(i+inneripstartx)+" "+ipabcd[ya0b1c2d3]+":"+(inneripstarty+k)+" value:"+d;
				}else{return ipabcd[xa0b1c2d3]+":"+((i+1)*perblock-perblock)+"-"+((i+1)*perblock-1)+" "+ipabcd[ya0b1c2d3]+":"+((k+1)*perblock-perblock)+"-"+((k+1)*perblock-1)+" value:"+d;}
			}else{
				if(perblock==1){
					if(xdiv0mod1==1){return "port:"+(k*totalnum+i+innerportstart)+" value:"+d;}
					else{return "port:"+(i*totalnum+k+innerportstart)+" value:"+d;}
				}else{
					if(xdiv0mod1==1){return "port:"+(i*totalnum*Math.sqrt(perblock)+perblock*k)+"-"+(i*totalnum*Math.sqrt(perblock)+perblock*(k+1)-1)+" value:"+d;}
					else{return "port:"+(k*totalnum*Math.sqrt(perblock)+perblock*i)+"-"+(k*totalnum*Math.sqrt(perblock)+perblock*(i+1)-1)+" value:"+d;}
				}
			}
		}
		function innerinit(){
			if(dataport0ip1==1){perblock=parseInt(perblocksaveip);$(".ipslider").show();}
			else{perblock=parseInt(perblocksaveport);$(".portslider").show();}
			dblinner=0;
			innerportstart=0;
			innerportend=0;
			inneripstartx=0;
			inneripendx=0;
			inneripstarty=0;
			inneripendy=0;
			$("#returnctrl").hide();
		}
		function brushtext(a,b,y){
			brushtxt.data([a,b]).text(d=>d).attr("transform",(d,i)=>("translate("+0+","+y[i]+")"));
		}
	    function brushed() {
			xScale.domain(brush.empty() ?xScalecopy.domain() : brush.extent());
			//console.log(brush.extent());
			var numofgap;
			var brushrange;
			if(dataport0ip1==0){numofgap=totalnum/Math.sqrt(perblock);}
			else{numofgap=totalnum/perblock;}
			if(brush.empty()){
				$(".brushtxt").hide();
				for(var k=0;k<numofgap;k++){
					rects[k].attr("fill",function(d,i){
						var tmpid=d3.select(this).attr("id").split(":");
						var m=parseInt(tmpid[1]);
						var n=parseInt(tmpid[2]);
						d3.select(this).attr("opacity",1);
						if(selectarr[m][n]==2){selectarr[m][n]=0;}
						if(selectarr[m][n]==3){selectarr[m][n]=1;}
						if(d==0){return nonecolor.colorRgb();}
						else{
							return colorcompute(colorliner(Math.log(d)));
						}
					});
				}
			}else{
				$(".brushtxt").show();
				brushrange=brush.extent();
				brushrange[0]=xScalecopy(brushrange[0]);
				brushrange[1]=xScalecopy(brushrange[1]);
				brushtext("e^"+(brush.extent()[0]).toFixed(1),"e^"+(brush.extent()[1]).toFixed(1),brushrange);

				var low=_.min(brush.extent());
				var high=_.max(brush.extent());
				var width=placeW-25;
				var height=placeH-65;
				for(var k=0;k<numofgap;k++){
					rects[k].attr("fill",function(d,i){
						var tmpid=d3.select(this).attr("id").split(":");
						var m=parseInt(tmpid[1]);
						var n=parseInt(tmpid[2]);
						if(Math.log(d)>=low&&Math.log(d)<=high){
							d3.select(this).attr("opacity",1);
							if(selectarr[m][n]==0){
								selectarr[m][n]=2;
								}
							if(selectarr[m][n]==1){selectarr[m][n]=3;}
							return hlcolor.colorRgb();
						}
						else{
								d3.select(this).attr("opacity",0.2);
								if(selectarr[m][n]==2){selectarr[m][n]=0;}
								if(selectarr[m][n]==3){selectarr[m][n]=1;}
								if(d==0){return nonecolor.colorRgb();}
								else{
									return colorcompute(colorliner(Math.log(d)));
								}
							}
						});
				}
			}
			
		}
　　　　return matrix;
　　}
};  
