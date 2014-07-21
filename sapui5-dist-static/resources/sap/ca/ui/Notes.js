/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.Notes");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.m.List");sap.m.List.extend("sap.ca.ui.Notes",{metadata:{publicMethods:["clear","reset"],library:"sap.ca.ui",properties:{"showNoteInput":{type:"boolean",group:"Misc",defaultValue:true},"textMaxLength":{type:"int",group:"Misc",defaultValue:1000}},events:{"addNote":{}}}});sap.ca.ui.Notes.M_EVENTS={'addNote':'addNote'};jQuery.sap.require("sap.m.MessageToast");jQuery.sap.require("sap.ui.core.IconPool");
sap.ca.ui.Notes.prototype.init=function(){if(sap.m.List.prototype.init){sap.m.List.prototype.init.apply(this)}var t;var f;var T;var r=2;this._oTextArea=new sap.m.TextArea(this.getId()+"-textarea",{maxLength:this.getTextMaxLength(),placeholder:sap.ca.ui.utils.resourcebundle.getText("notes.addNotePlaceHolder"),liveChange:function(e){var _=this.$().find("textarea");var o=_.get(0);if(!jQuery.device.is.phone){if(!t){t=o.scrollHeight}if(t<o.scrollHeight){o.style.overflow="hidden";_.height(o.scrollHeight)}}else{if(!t){t=o.scrollHeight}if(t==o.scrollHeight){_.height(o.scrollHeight);o.style.overflow="hidden"}if(t<o.scrollHeight&&!T){r=r+1;T=o.scrollHeight;_.height(o.scrollHeight);o.style.overflow="hidden"}if(T<o.scrollHeight&&!f&&T){r=r+1;f=o.scrollHeight;_.height(o.scrollHeight);o.style.overflow="hidden"}if(f<o.scrollHeight&&f&&T){r=r+1;_.height(f);o.style.overflow="auto"}}}});this._oTextArea.setParent(this);this._oTextArea.attachLiveChange(this.liveChangeMonitor,this);this._oButton=new sap.m.Button(this.getId()+"-add",{icon:sap.ui.core.IconPool.getIconURI("add"),type:sap.m.ButtonType.Emphasized,press:jQuery.proxy(function(e){this.fireAddNote({value:this._oTextArea.getValue()});this._oTextArea.setValue('');this._oTextArea.setHeight('auto')},this)});this._oButton.setParent(this)};
sap.ca.ui.Notes.prototype.liveChangeMonitor=function(e){if(e.mParameters.newValue.length===this._maxLength){var m=sap.ca.ui.utils.resourcebundle.getText("TextOverlimit",[this._maxLength]);sap.m.MessageToast.show(m)}};
sap.ca.ui.Notes.prototype.exit=function(){if(sap.m.List.prototype.exit){sap.m.List.prototype.exit.apply(this)}this._oTextArea.destroy();this._oButton.destroy()};
sap.ca.ui.Notes.prototype.setTextMaxLength=function(t){if(t>1000){console.error("Notes maximum length set to "+t+", which is greater than the maximum length allowed. TextMaxLength will be reset to 1000 characters");t=1000}this._maxLength=t;this._oTextArea.setProperty("maxLength",t,true);this.setProperty("textMaxLength",t)};
sap.ca.ui.Notes.prototype.clear=function(){this._oTextArea.setValue("")};
sap.ca.ui.Notes.prototype.reset=function(){this.clear();this._oGrowingDelegate&&this._oGrowingDelegate.reset()};