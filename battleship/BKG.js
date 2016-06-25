(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 1536,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib._8670172RadarscreenStockVectorradarmilitarytarget = function() {
	this.spriteSheet = ss["BKG_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.SeaHD = function() {
	this.spriteSheet = ss["BKG_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.BKG = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape.setTransform(512.6,766.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","#FFAF15"],[0,1],0.7,2.6,0,0.7,2.6,16.6).s().p("AgliEIAsAjIAfDFIggAhg");
	this.shape_1.setTransform(155.6,732);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FF0000","#FFAF15"],[0,1],-2.3,2.6,0,-2.3,2.6,29.5).s().p("AjpASIG/hEIA1AbIoVBKg");
	this.shape_2.setTransform(182.9,740.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FF0000","#FFAF15"],[0,1],0.2,0.7,0,0.2,0.7,14.8).s().p("AgJByIggjGIAog4IArEZg");
	this.shape_3.setTransform(205.4,723.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FF0000","#FFAF15"],[0,1],5.2,-0.4,0,5.2,-0.4,32.1).s().p("AkKAcIIVhaIgoA4Im+BFg");
	this.shape_4.setTransform(178.4,715.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FF0000","#FFAF15"],[0,1],0,0,0,0,0,24.9).s().p("Ajvg/IG/hHIAgDGIm/BGg");
	this.shape_5.setTransform(180.4,728.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FF0000","#FFAF15"],[0,1],0.8,0.8,0,0.8,0.8,27.8).s().p("AkKgXIA1gbIG/BEIAhAhg");
	this.shape_6.setTransform(969.1,857.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FF0000","#FFAF15"],[0,1],0.8,1.8,0,0.8,1.8,15.5).s().p("AgmBkIAgjFIAsgjIgrEJg");
	this.shape_7.setTransform(996.5,849.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FF0000","#FFAF15"],[0,1],-0.2,0.7,0,-0.2,0.7,14.8).s().p("AACiMIAoA4IggDGIgzAbg");
	this.shape_8.setTransform(946.6,841);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FF0000","#FFAF15"],[0,1],0.8,0.8,0,0.8,0.8,27.8).s().p("AkKgXIA1gbIG/BEIAhAhg");
	this.shape_9.setTransform(984.2,767.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FF0000","#FFAF15"],[0,1],1,-0.1,0,1,-0.1,13.6).s().p("AglBkIAfjFIAsgjIgrEJg");
	this.shape_10.setTransform(1011.5,759);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FF0000","#FFAF15"],[0,1],0,1.3,0,0,1.3,27.8).s().p("AjigGIgog4IIVBaIgvAjg");
	this.shape_11.setTransform(988.7,742.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FF0000","#FFAF15"],[0,1],2.1,0.3,0,2.1,0.3,15.3).s().p("AACiMIAoA4IggDGIgzAbg");
	this.shape_12.setTransform(961.7,750.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FF0000","#FFAF15"],[0,1],-3.7,3.4,0,-3.7,3.4,29.4).s().p("AjvBAIAgjGIG/BHIggDFg");
	this.shape_13.setTransform(986.8,755.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FF0000","#FFAF15"],[0,1],1.2,1.2,0,1.2,1.2,26.5).s().p("AjuBAIAfjGIG+BHIgfDFg");
	this.shape_14.setTransform(971.7,846);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FF0000","#FFAF15"],[0,1],0,1.3,0,0,1.3,27.8).s().p("AjigGIgog4IIVBaIgvAjg");
	this.shape_15.setTransform(973.6,833.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FF0000","#640606"],[0,1],0.8,0.8,0,0.8,0.8,27.8).s().p("AkKgXIA1gbIG/BFIAhAgg");
	this.shape_16.setTransform(842.3,736.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FF0000","#640606"],[0,1],-0.7,2.5,0,-0.7,2.5,16.7).s().p("AACiMIAoA5IggDFIgzAbg");
	this.shape_17.setTransform(819.8,720.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FF0000","#640606"],[0,1],16.8,3.9,0,16.8,3.9,44.7).s().p("AjigGIgog4IIVBaIgvAjg");
	this.shape_18.setTransform(846.8,712.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FF0000","#640606"],[0,1],0.6,-4.3,0,0.6,-4.3,17.8).s().p("AgmBkIAgjFIAsgjIgrEJg");
	this.shape_19.setTransform(869.7,728.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FF0000","#640606"],[0,1],7.8,-0.2,0,7.8,-0.2,32.5).s().p("AjvBAIAgjFIG+BHIgfDFg");
	this.shape_20.setTransform(844.9,725.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FF0000","#640606"],[0,1],-0.9,-4.4,0,-0.9,-4.4,17.8).s().p("AgliEIAsAjIAfDFIggAhg");
	this.shape_21.setTransform(99.6,836.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FF0000","#640606"],[0,1],13.6,-2,0,13.6,-2,41).s().p("AjpATIG/hGIA1AcIoVBLg");
	this.shape_22.setTransform(126.9,844.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FF0000","#640606"],[0,1],18.1,-4,0,18.1,-4,45.4).s().p("AkKAcIIVhaIgoA4Im+BFg");
	this.shape_23.setTransform(122.4,820.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FF0000","#640606"],[0,1],0.5,-1.8,0,0.5,-1.8,16.5).s().p("AgJBxIggjEIAog5IArEZg");
	this.shape_24.setTransform(149.4,828);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FF0000","#640606"],[0,1],0,0,0,0,0,24.9).s().p("Ajvg+IG/hHIAgDEIm/BIg");
	this.shape_25.setTransform(124.3,833);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FF0000","#640606"],[0,1],0.7,-1.2,0,0.7,-1.2,14.6).s().p("AgmiEIAtAjIAgDFIgiAhg");
	this.shape_26.setTransform(238.9,690.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FF0000","#640606"],[0,1],4.5,-0.2,0,4.5,-0.2,31.7).s().p("AjpATIG/hGIA1AcIoVBLg");
	this.shape_27.setTransform(266.2,698.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FF0000","#640606"],[0,1],12.9,-2.4,0,12.9,-2.4,39.9).s().p("AkKAcIIVhaIgoA4Im+BFg");
	this.shape_28.setTransform(261.7,673.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FF0000","#640606"],[0,1],1.4,2.8,0,1.4,2.8,17).s().p("AgJBxIggjEIAog5IArEZg");
	this.shape_29.setTransform(288.7,681.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FF0000","#640606"],[0,1],9.7,1.4,0,9.7,1.4,34.6).s().p("Ajug+IG+hHIAfDEIm+BIg");
	this.shape_30.setTransform(263.7,686.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#51FF17","#28481B"],[0,1],-0.2,0.7,0,-0.2,0.7,14.8).s().p("AACiMIAoA5IggDFIgzAbg");
	this.shape_31.setTransform(804.8,810.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#51FF17","#28481B"],[0,1],-0.2,0.7,0,-0.2,0.7,14.8).s().p("AACiMIAoA4IggDFIgzAcg");
	this.shape_32.setTransform(875.9,824.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#51FF17","#28481B"],[0,1],0.1,0,0,0.1,0,24.9).s().p("AjuBAIAfjFIG+BHIgfDFg");
	this.shape_33.setTransform(829.9,815.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#51FF17","#28481B"],[0,1],0,1.3,0,0,1.3,27.8).s().p("AjigGIgog4IIVBaIgvAjg");
	this.shape_34.setTransform(831.8,802.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#51FF17","#28481B"],[0,1],0.8,0.8,0,0.8,0.8,27.8).s().p("AkKgXIA1gbIG/BFIAhAgg");
	this.shape_35.setTransform(827.3,827.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#51FF17","#28481B"],[0,1],0,1.2,0,0,1.2,15.1).s().p("AgmBkIAgjFIAtgjIgrEJg");
	this.shape_36.setTransform(854.6,819.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#51FF17","#28481B"],[0,1],0.1,0,0,0.1,0,24.9).s().p("AjuA/IAfjFIG+BHIgfDFg");
	this.shape_37.setTransform(901,829.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#51FF17","#28481B"],[0,1],0.8,0.8,0,0.8,0.8,27.8).s().p("AkKgXIA1gcIG/BFIAhAig");
	this.shape_38.setTransform(898.4,841.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#51FF17","#28481B"],[0,1],0,1.3,0,0,1.3,27.8).s().p("AjigGIgog4IIVBaIgvAjg");
	this.shape_39.setTransform(902.9,816.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#51FF17","#28481B"],[0,1],0,1.2,0,0,1.2,15.1).s().p("AgmBkIAgjFIAtgjIgrEJg");
	this.shape_40.setTransform(925.7,833.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#FFFFFF","#000000"],[0,1],4.2,0,-4.1,0).s().p("AgbAbQgNgMAAgPQAAgQANgNIAIgHIAAApIAgAAIAAgsQAJADAHAHQAMANAAAQQAAAPgMAMQgNANgQAAQgPAAgMgNg");
	this.shape_41.setTransform(981.7,801.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#FFFFFF","#000000"],[0,1],6.6,0,-6.6,0).s().p("AgtAuQgUgUAAgaQAAgbAUgTQALgLANgFIAAAOIgJAHQgMANAAARQAAAOAMAMQANANAQAAQAPAAANgNQAMgMAAgOQAAgRgMgNQgHgHgJgDIAAgNQAUADAQAPQASATABAbQgBAagSAUQgUATgbAAQgaAAgTgTg");
	this.shape_42.setTransform(981.9,802.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#FFFFFF","#000000"],[0,1],1.7,0,-1.6,0).s().p("AgPBVIAAgrIAAgNIAAhxIAfAAIAABuIAAANIAAAug");
	this.shape_43.setTransform(981.3,793.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#51FF17","#28481B"],[0,1],0.1,0,0,0.1,0,24.9).s().p("AjvA/IAgjFIG+BHIgfDFg");
	this.shape_44.setTransform(916,739.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#FFFFFF","#000000"],[0,1],4.2,0,-4.1,0).s().p("AgcAbQgMgMAAgPQAAgQAMgNIAJgHIAAApIAgAAIAAgsQAJADAHAHQAMANAAAQQAAAPgMAMQgMANgRAAQgQAAgMgNg");
	this.shape_45.setTransform(944.1,789.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#FFFFFF","#000000"],[0,1],6.6,0,-6.6,0).s().p("AgtAtQgTgSgBgbQABgaATgUQALgLANgFIAAAOIgJAHQgMANAAARQAAAOAMAMQAMANARAAQAQAAAMgNQAMgMAAgOQAAgRgMgNQgHgHgJgDIAAgNQAUADAQAPQASAUAAAaQAAAbgSASQgUAUgbAAQgaAAgTgUg");
	this.shape_46.setTransform(944.3,790.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#FFFFFF","#000000"],[0,1],1.7,0,-1.6,0).s().p("AgPBVIAAgrIAAgNIAAhxIAfAAIAABuIAAANIAAAug");
	this.shape_47.setTransform(943.7,781.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#51FF17","#28481B"],[0,1],0.8,0.8,0,0.8,0.8,27.8).s().p("AkKgXIA1gcIG/BFIAhAig");
	this.shape_48.setTransform(913.4,750.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#FFFFFF","#000000"],[0,1],4.2,0,-4.1,0).s().p("AgbAbQgNgMAAgPQAAgQANgNIAJgHIAAApIAfAAIAAgsQAJADAHAHQAMANAAAQQAAAPgMAMQgMANgRAAQgQAAgLgNg");
	this.shape_49.setTransform(911.1,780.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#FFFFFF","#000000"],[0,1],6.6,0,-6.6,0).s().p("AgtAtQgTgSAAgbQAAgaATgUQALgLAOgFIAAAOIgJAHQgNANAAARQAAAOANAMQALANASAAQAPAAAMgNQAMgMAAgOQAAgRgMgNQgHgHgJgDIAAgNQAUADAPAPQAUAUgBAaQABAbgUASQgTAUgbAAQgaAAgTgUg");
	this.shape_50.setTransform(911.3,782);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#FFFFFF","#000000"],[0,1],1.7,0,-1.6,0).s().p("AgPBVIAAgrIAAgNIAAhxIAfAAIAABuIAAANIAAAug");
	this.shape_51.setTransform(910.7,772.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#51FF17","#28481B"],[0,1],-0.2,0.7,0,-0.2,0.7,14.8).s().p("AACiMIAoA4IggDFIgzAcg");
	this.shape_52.setTransform(890.9,734.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#51FF17","#28481B"],[0,1],0,1.3,0,0,1.3,27.8).s().p("AjigGIgog4IIVBaIgvAjg");
	this.shape_53.setTransform(917.9,726.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#51FF17","#28481B"],[0,1],0,1.2,0,0,1.2,15.1).s().p("AgmBkIAgjFIAsgjIgrEJg");
	this.shape_54.setTransform(940.8,742.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#FFFFFF","#000000"],[0,1],6.6,0,-6.6,0).s().p("AgtAuQgUgUAAgaQAAgbAUgTQALgLANgEIAAANIgJAHQgMAMAAARQAAAQAMAMQANAMAQAAQAQAAAMgMQAMgMAAgQQAAgRgMgMQgHgHgJgDIAAgNQAUADAQAPQASATABAbQgBAagSAUQgUATgbAAQgaAAgTgTg");
	this.shape_55.setTransform(873.5,773.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#FFFFFF","#000000"],[0,1],4.2,0,-4.1,0).s().p("AgcAcQgMgMAAgQQAAgRAMgMIAJgHIAAApIAgAAIAAgsQAJADAHAHQAMAMAAARQAAAQgMAMQgMAMgRAAQgPAAgNgMg");
	this.shape_56.setTransform(873.3,772.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#FFFFFF","#000000"],[0,1],1.7,0,-1.6,0).s().p("AgPBVIAAgrIAAgNIAAhxIAfAAIAABuIAAANIAAAug");
	this.shape_57.setTransform(873,764.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#FFFFFF","#000000"],[0,1],4.2,0,-4.1,0).s().p("AgbAbQgNgMAAgPQAAgQANgNIAJgHIAAApIAfAAIAAgsQAJADAHAHQAMANAAAQQAAAPgMAMQgNANgQAAQgPAAgMgNg");
	this.shape_58.setTransform(838.5,769);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#FFFFFF","#000000"],[0,1],6.6,0,-6.6,0).s().p("AgtAtQgUgSAAgbQAAgaAUgUQALgLAOgFIAAAOIgJAHQgNANAAARQAAAOANAMQAMANAQAAQAPAAANgNQAMgMAAgOQAAgRgMgNQgHgHgJgDIAAgNQAUADAQAPQATAUAAAaQAAAbgTASQgUAUgbAAQgaAAgTgUg");
	this.shape_59.setTransform(838.7,770.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#FFFFFF","#000000"],[0,1],1.7,0,-1.6,0).s().p("AgPBVIAAgrIAAgNIAAhxIAfAAIAABuIAAANIAAAug");
	this.shape_60.setTransform(838.1,760.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#FFFFFF","#000000"],[0,1],-4.1,0,4.2,0).s().p("AgcAbQgMgMAAgPQAAgQAMgNQAHgHAJgDIAAAsIAgAAIAAgpIAJAHQAMANAAAQQAAAPgMAMQgMANgRAAQgQAAgMgNg");
	this.shape_61.setTransform(152,775.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#FFFFFF","#000000"],[0,1],-6.6,0,6.6,0).s().p("AgtAuQgUgUABgaQgBgbAUgTQAPgPAUgDIAAANQgJADgHAHQgMANAAAQQAAAPAMAMQAMANAPAAQASAAAMgNQAMgMAAgPQAAgQgMgNIgJgHIAAgOQANAFALALQATATAAAbQAAAagTAUQgTATgbAAQgaAAgTgTg");
	this.shape_62.setTransform(151.8,777.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.6,0,1.7,0).s().p("AgPBVIAAguIAAgNIAAhuIAfAAIAABxIAAANIAAArg");
	this.shape_63.setTransform(152.3,767.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#FFFFFF","#000000"],[0,1],-4.1,0,4.2,0).s().p("AgcAcQgMgMAAgQQAAgRAMgMQAHgHAJgDIAAAsIAfAAIAAgpIAJAHQANAMAAARQAAAQgNAMQgLAMgRAAQgQAAgMgMg");
	this.shape_64.setTransform(81.2,792.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.6,0,1.7,0).s().p("AgPBVIAAguIAAgNIAAhuIAfAAIAABxIAAANIAAArg");
	this.shape_65.setTransform(81.5,784.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#FFFFFF","#000000"],[0,1],-6.6,0,6.6,0).s().p("AgtAtQgUgSABgbQgBgaAUgUQAPgPAUgDIAAANQgJADgHAHQgMAMAAASQAAAPAMAMQAMAMAPAAQASAAALgMQANgMAAgPQAAgSgNgMIgJgHIAAgNQAOAEALALQATAUAAAaQAAAbgTASQgTAUgbAAQgaAAgTgUg");
	this.shape_66.setTransform(81,793.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#FFFFFF","#000000"],[0,1],-4.1,0,4.2,0).s().p("AgcAcQgMgMAAgQQAAgQAMgNQAHgHAJgDIAAAsIAgAAIAAgpIAJAHQAMANAAAQQAAAQgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_67.setTransform(186.8,772.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#FFFFFF","#000000"],[0,1],-6.6,0,6.6,0).s().p("AguAtQgSgSAAgbQAAgaASgUQAQgPAUgDIAAANQgJADgHAHQgMANAAAQQAAAQAMAMQAMAMAQAAQARAAAMgMQAMgMAAgQQAAgQgMgNIgJgHIAAgNQANAEALALQATAUABAaQgBAbgTASQgTAUgbAAQgaAAgUgUg");
	this.shape_68.setTransform(186.6,773.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.6,0,1.7,0).s().p("AgPBVIAAguIAAgNIAAhuIAfAAIAABxIAAANIAAArg");
	this.shape_69.setTransform(187.1,764.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#FFFFFF","#000000"],[0,1],-4.1,0,4.2,0).s().p("AgcAcQgMgMAAgQQAAgRAMgMQAHgHAJgDIAAAsIAfAAIAAgpIAJAHQANAMAAARQAAAQgNAMQgMAMgQAAQgPAAgNgMg");
	this.shape_70.setTransform(114.2,784.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#FFFFFF","#000000"],[0,1],-6.6,0,6.6,0).s().p("AguAtQgTgSAAgbQAAgaATgUQAQgPAUgDIAAANQgJADgHAHQgMAMAAASQAAAPAMAMQANAMAPAAQAQAAAMgMQANgMAAgPQAAgSgNgMIgJgHIAAgNQAOAEALALQAUAUgBAaQABAbgUASQgTAUgbAAQgaAAgUgUg");
	this.shape_71.setTransform(114,785.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.6,0,1.7,0).s().p("AgPBVIAAguIAAgNIAAhuIAfAAIAABxIAAANIAAArg");
	this.shape_72.setTransform(114.5,776);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#FFFFFF","#000000"],[0,1],-6.6,0,6.6,0).s().p("AgtAtQgTgSAAgbQAAgaATgUQAPgPAUgDIAAANQgJADgHAHQgMAMAAASQAAAOAMANQANAMAOAAQASAAAMgMQAMgNAAgOQAAgSgMgMIgJgHIAAgOQANAFALALQATAUABAaQgBAbgTASQgTAUgbAAQgaAAgTgUg");
	this.shape_73.setTransform(43.4,805.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#FFFFFF","#000000"],[0,1],-4.1,0,4.2,0).s().p("AgcAcQgMgNAAgPQAAgRAMgMQAHgHAJgDIAAAsIAgAAIAAgpIAJAHQAMAMAAARQAAAPgMANQgMAMgRAAQgPAAgNgMg");
	this.shape_74.setTransform(43.6,804.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.6,0,1.7,0).s().p("AgPBVIAAguIAAgNIAAhuIAfAAIAABxIAAANIAAArg");
	this.shape_75.setTransform(43.9,796.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.rf(["#51FF17","#28481B"],[0,1],-0.8,0.8,0,-0.8,0.8,27.8).s().p("AjpASIG/hFIA1AcIoVBLg");
	this.shape_76.setTransform(56.1,860.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.rf(["#51FF17","#28481B"],[0,1],0,0,0,0,0,24.9).s().p("Ajvg/IG/hHIAgDFIm/BHg");
	this.shape_77.setTransform(53.6,849.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.rf(["#51FF17","#28481B"],[0,1],0.1,1.2,0,0.1,1.2,15.1).s().p("AgliEIAsAjIAfDFIggAhg");
	this.shape_78.setTransform(28.8,852.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.rf(["#51FF17","#28481B"],[0,1],0,1.3,0,0,1.3,27.8).s().p("AkKAcIIVhaIgoA4Im+BFg");
	this.shape_79.setTransform(51.6,836.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.rf(["#51FF17","#28481B"],[0,1],0.2,0.7,0,0.2,0.7,14.8).s().p("AgJBxIggjFIAog4IArEZg");
	this.shape_80.setTransform(78.6,844.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.rf(["#51FF17","#28481B"],[0,1],0.1,1.2,0,0.1,1.2,15.1).s().p("AgliEIAsAjIAfDFIggAhg");
	this.shape_81.setTransform(170.7,822.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.rf(["#51FF17","#28481B"],[0,1],0,1.3,0,0,1.3,27.8).s().p("AkKAcIIVhaIgoA4Im+BFg");
	this.shape_82.setTransform(193.5,806.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.rf(["#51FF17","#28481B"],[0,1],0,0,0,0,0,24.9).s().p("Ajvg/IG/hHIAgDGIm/BGg");
	this.shape_83.setTransform(195.4,819);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.rf(["#51FF17","#28481B"],[0,1],-0.8,0.8,0,-0.8,0.8,27.8).s().p("AjpASIG/hEIA1AbIoVBKg");
	this.shape_84.setTransform(198,830.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.rf(["#51FF17","#28481B"],[0,1],0.2,0.7,0,0.2,0.7,14.8).s().p("AgJByIggjGIAog4IArEZg");
	this.shape_85.setTransform(220.5,814);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.rf(["#51FF17","#28481B"],[0,1],0,0,0,0,0,24.9).s().p("Ajvg+IG/hIIAgDFIm/BIg");
	this.shape_86.setTransform(109.3,742.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.rf(["#51FF17","#28481B"],[0,1],0.1,1.2,0,0.1,1.2,15.1).s().p("AgliEIAsAjIAfDFIggAhg");
	this.shape_87.setTransform(84.5,746);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.rf(["#51FF17","#28481B"],[0,1],-0.8,0.8,0,-0.8,0.8,27.8).s().p("AjpATIG/hGIA1AcIoVBLg");
	this.shape_88.setTransform(111.8,754.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.rf(["#51FF17","#28481B"],[0,1],0,1.3,0,0,1.3,27.8).s().p("AkKAcIIVhaIgoA4Im+BFg");
	this.shape_89.setTransform(107.3,729.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["#51FF17","#28481B"],[0,1],0.2,0.7,0,0.2,0.7,14.8).s().p("AgJBxIggjFIAog4IArEZg");
	this.shape_90.setTransform(134.3,737.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.rf(["#51FF17","#28481B"],[0,1],0.2,0.7,0,0.2,0.7,14.8).s().p("AgJBxIggjFIAog4IArEZg");
	this.shape_91.setTransform(63.6,753.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.rf(["#51FF17","#28481B"],[0,1],0,0,0,0,0,24.9).s().p("Ajvg/IG/hHIAfDFIm+BHg");
	this.shape_92.setTransform(38.5,758.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.rf(["#51FF17","#28481B"],[0,1],-0.8,0.8,0,-0.8,0.8,27.8).s().p("AjpASIG/hFIA1AcIoVBLg");
	this.shape_93.setTransform(41.1,770.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.rf(["#51FF17","#28481B"],[0,1],0.1,1.2,0,0.1,1.2,15.1).s().p("AgmiEIAtAjIAfDFIghAhg");
	this.shape_94.setTransform(13.8,762.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.rf(["#51FF17","#28481B"],[0,1],0,1.3,0,0,1.3,27.8).s().p("AkKAcIIVhaIgoA4Im+BFg");
	this.shape_95.setTransform(36.6,746);

	// frame
	this.instance = new lib._8670172RadarscreenStockVectorradarmilitarytarget();
	this.instance.setTransform(418.5,652,0.145,0.145);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,1,1).p("EAqfh+VIAAgwIEvgQIAABAEAqfh+VIEvAAMAglAAAMAAAB3nIAAEcEgwkh+VIAAgwIFsAAIAAAwMAAABv7UAq7gGHAqcAGFMAAAhv5Egwkh+VIFsAAMBVXAAAEhQqgGuMAAAh3nMAgGAAAEhQqgGuIAAEcQQMkTQHilIBGD2IGrXaIA5DIEgwkgNfIAAgEMAAAhwyEhPyABkQQMkQQHilQAHgBAHgCEhQqgGuQQFkRQBikAwLsmIA7BKIAAdcIhPBEQQKg5QEA2QJXAgJWBFQECAeEBAlQStCrSnFDAPEsqIAAAAIg2BOI9eAAAwLsmQPqg2PlAyQNvAsNsB+QBoAPBoAPIhVDkQBGAKBHALQQpCkQlEbIgCjoEgwXgJKQQIilQEg3IgUfqEBP1ABWQAbAHAbAHEBPzgGuQwQkawVinMAAAhwmEAtvgJiQRFCpQ/EnEBP/AZzQAWAGAWAGEAjsARRIhQDVEAjsARRQD1AdD2AjQBoAPBoAQQQuCkQqEfIgK4dEhQqAdXMAAABh/MChVAAAMgAshljAOOSAIBhBBAuNPnQNFgqNAAfAvQSAIdeAAIAA9cEhPyAZ/QQMkTQHilQDcgjDdgeEhQqAdXQUjlcUaitQLohhLmgpEAsagF+IouXPAPEsqIArfrEhQqgCSIAAfp");
	this.shape_96.setTransform(516.3,725.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#7B7171","#DBD3D3"],[0,1],0,0.6,0,-2.3).s().p("Au4ggIdfAAIBhA/QwGg0wJA2g");
	this.shape_97.setTransform(513.8,843.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#7B7171","#DBD3D3"],[0,1],-2.2,0,3.3,0).s().p("AgSv1IA5BLIAAdcIhNBDg");
	this.shape_98.setTransform(414.6,745.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#7B7171","#DBD3D3"],[0,1],0,-4,0.5,7.2).s().p("AusAzIg7hJQPpg2PmAzIAAAAIg2BMg");
	this.shape_99.setTransform(512.7,646.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#7B7171","#DBD3D3"],[0,1],-5.5,0.7,1.6,0.1).s().p("AgvO1IAA9cIA0hOIArfrg");
	this.shape_100.setTransform(612.2,745.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["rgba(123,113,113,0.659)","rgba(219,211,211,0.188)"],[0,1],-252,-346,258.7,355.1).s().p("Egqrg38MBVXAAAMAAABv3UgqcgGFgq7AGHg");
	this.shape_101.setTransform(515,274.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["rgba(123,113,113,0.659)","rgba(219,211,211,0.188)"],[0,1],-96.7,-361,94.7,352.7).s().p("EgQBg7yMAgDAAAMAAABwwQwAClwDEQg");
	this.shape_102.setTransform(102.7,299.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["rgba(123,113,113,0.659)","rgba(219,211,211,0.188)"],[0,1],-106.8,-194.6,20.9,11.4).s().p("EgQRA0zMAAAhwlMAgjAAAMAAAB3lQwQkawTimg");
	this.shape_103.setTransform(922.8,299.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#2C2C2C","#696969"],[0,1],3.3,303.6,-12.2,-380.7).s().p("EhQqBGAMAAAhh9QUjlcUaisIg5jJIA5DJQ0aCs0jFcIAA/rQQMkSQHilIBGD2IhGj2QQIilQDg4IgUfsQQLg5QEA3Igr/tIAAAAQNvAsNsB9IDQAfIhVDkICMAVQQqCkQkEcIALYeQwqkfwvilIjQgfQj1gjj1gdIIu3QIouXQIhQDWIBQjWQD1AdD1AjIDQAfQQvClQqEfMAArBlggEAqfgjrQStCrSnFDQynlDytirQkBgkkCgeQECAeEBAkgEgvfgmMQwIClwLESQQLkSQIilQDcgjDdgfImr3bIGrXbQjdAfjcAjgEgntgkFQLohiLlgpQrlAproBigEAicgktQpWhGpXgfQJXAfJWBGgEgvfg+nQwIClwLETQQLkTQIilIAOgCIgOACgEgomgnOgEgPQgnUIAA9dIdeAAIAAddgEgONgptIAOAAIAdgCIARgBIAAAAQHFgVHCAAIAAAAIAAAAQFGAAFEALIAdABIAGAAIAUABIgUgBIgGAAIgdgBQlEgLlGAAIAAAAIAAAAQnCAAnFAVIAAAAIgRABIgdACIgOAAgEAjsgoDIAAAAgEBP0g3+IAAAAgEAumg++IiMgVIBVjkQRFCoQ/EnIABDqQwkkcwqikg");
	this.shape_104.setTransform(516.3,1092.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#2C2C2C","#696969"],[0,1],-38.6,124.4,-136.8,-61.9).s().p("EAuLA3RIjQgeQtsh+twgsQvkgyvrA2QwDA3wIClQwHClwMETIAAkcQQFkRQBikIAAAEIAAgEMAAAhwwIAAgwIFrAAIAAAwIlrAAIFrAAMAABBv5UAq7gGHAqcAGFMAAAhv3IEvAAIkvAAIAAgwIEvgQIAABAMAAABwkQQVCnQQEaIAAEcQxAknxEipg");
	this.shape_105.setTransform(513.5,310.4);

	// Layer 5
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1,1,1).p("AhGgHIK3nGIBeBwIqVG8IiAhmIhMg8QATAWAPAYQAWAGAUAIgAnfHOIjCiWQgthKAAhcQAAiHBgheQBfhfCHAAQBUAABEAkQAqAWAlAlQAHAHAIAJIhehLAnfHOQgwhMAAhfQAAiHBhhgQBfhdCGAAQAvAAAqAMAA6BfQBCBUAABwQAABHgaA9IpBAn");
	this.shape_106.setTransform(538.1,515.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#7B7171","#DBD3D3"],[0,1],-30.2,0.5,34.9,0.5).s().p("Ag/FBIjBiXQgthKAAhcQgBiEBhhhQBfhfCEAAQBUAABEAlQArAWAkAkIAPAQQATAWAPAYQgpgLgwAAQiGAAhdBfQhhBeAACGQABBfAvBNIAAAAgAEMjRIhehKgAjNDrQgfgegUgjIDBCXQhQgWg+hAgAkACqg");
	this.shape_107.setTransform(496.4,529.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#7B7171","#DBD3D3"],[0,1],-32.6,7.7,32.6,7.7).s().p("AlFBMQAAiEBghgQBfhfCGAAQAuAAAqALQAWAHATAIQA3AXAuAuQAQAQAOATIiDhoICDBoQBCBUAABtQAABHgaA9IpBAoQgwhNAAhfg");
	this.shape_108.setTransform(517.9,537.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#7B7171","#DBD3D3"],[0,1],-2.9,-3.3,4,5.3).s().p("AkmD0Qgugug2gXIK3nEIBeBwIqTG8QgNgTgRgQg");
	this.shape_109.setTransform(570.4,497.3);

	// Canon
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(1,1,1).p("AIkBIQAHAQAAASQAAAVgKAUQgeA7h7AuQijA9jlAAQjlAAiig9Qiig7gBhVIAAgCQAAgBAAgCIAEi2QgEgMAAgOQAAhWCjg8QCig9DlAAQDlAACjA9QCjA8AABWQAAAEAAAEIgHCpIgDBLAIrhhQgFA3hIAqQgjAUgzATQijA9jlAAQjlAAiig9QgzgTgigUQg9gjgNgs");
	this.shape_110.setTransform(508.2,562.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#7B7171","#DBD3D3"],[0,1],-55.6,0,55.4,0).s().p("AmHCSQgygTgjgVQg8glgOgrQgEgNAAgNQAAhUCjg9QCjg8DkAAQDlAACjA8QCjA9AABUIAAAIQgFA2hIAsQgkAVgyATQijA8jlAAQjkAAijg8g");
	this.shape_111.setTransform(508.2,552.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#7B7171","#DBD3D3"],[0,1],-31.4,-0.6,28,0.1).s().p("AmHCRQiig8gBhUIAAgBIAAgDIAEi3QAOArA8AlQAjAVAyATQCjA8DkAAQDlAACjg8QAygTAkgVQBIgsAFg2IgHCqIgDBJQgeA8h7AuQijA8jlAAQjkAAijg8g");
	this.shape_112.setTransform(508.2,573.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#7B7171","#DBD3D3"],[0,1],-110.6,-0.3,0.4,-0.3).s().p("AgBgkQAFARAAASQAAASgHAUg");
	this.shape_113.setTransform(563.3,573.8);

	// Ship Body
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(1,1,1).p("EgBhgntQAmg2Ang1EgALgoNIAAhLQAtA7AuA8IAABLIAAAJEgCfgmYIAABXIAAAKEABQgmWQAuA8AuA9QBiCEBgCJIAAAEEACsgloIAABLIAAAREAENgjjIAABDEAENgjjQAxBDAwBFIAABLQAzBIAyBLIAAAaEAFughbQAzBJAyBKIAABLQAoA6AnA7QAwBJAwBLIAAAMEgBhgntIAABSEgCfglBQBJhnBLhlQAtA7AuA8EgCfgmYQAfgrAfgqEABQgnhQAuA8AuA9QAxBCAwBDAIi9TIAABLIAAAMAKC6/IAABLQA0BRAzBTIAAASAKC6/QA0BRAzBTIAABLQAvBMAuBOQAuBNAuBOQAAABABABQAnBDAmBEQAhA7AhA8IAAAVANG2BIAABLANG2BQAuBNAuBOQAnBEAnBGIAABKIAAAIAOizmIAABLALp4bQAvBMAuBOAPwxcQAhA6AhA8IAABLQA0BfAzBgQMUXTIMdiMhNxAAAIAxmhQJc9qPZ5rQAohEAohCQB9jLCCjHIAAAdAHT/IQAnA6AoA7QAwBJAwBLEgFAgiwIAABXQBPh1BShzEgGMghBQAmg4Amg3QArhAAthAIAABSAmL/qQAkg2Alg2QABgBABgCAmL/qIAAAREgGMghBIABBXAoE+NIABBYQA7hbA9haApa8IQArhDArhCQA8hbA8hZApa8IIAABGAqw6AIAAA8AsH3zQArhHAshGQArhEArhEAtS13IAABaIAAAMAsH3zIAFBQAtS13QAlg+Amg+ASaslIgBBJEgDogkwQAlg0Akg0AQyvmQA1BgAzBhQMTXSIMdhEgmQAhtQJf9zPf5x");
	this.shape_114.setTransform(506.5,691.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#7B7171","#DBD3D3"],[0,1],-14.9,-216.6,-5.7,77.8).s().p("Egm4AozIAxmhQJc9qPY5rIAAANIAAgNIBRiGQB9jLCBjHIAAAdIAAgdIB5i1IAAASIAAgSIBJhsIABgCQBQh1BShzIAAAJIAAgJQBJhnBLhlIBbB2IBcB6IAAAQIAAgQQBiCEBfCIIAAAFIAAgFIBmCTIAAAbIAAgbIBOB2IAAALIAAgLIBgCTQA1BSAzBTIAAARIAAgRIBdCZIBbCbIACADIBNCHIAAAHIAAgHIBCB2IAAAVIAAgVQA0BfAzBgQMUXTIMdigAKB6OIAAgMgEABQgmzIAAgJg");
	this.shape_115.setTransform(506.5,695.4);

	// Backgroud
	this.instance_1 = new lib.SeaHD();
	this.instance_1.setTransform(-184.2,-169.8,0.489,0.489);

	this.addChild(this.instance_1,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.instance,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(327.8,598.2,1408.5,1711.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;