/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./Control','./library'],function(q,C,l){"use strict";var a=C.extend("sap.ui.core.ComponentContainer",{metadata:{library:"sap.ui.core",properties:{name:{type:"string",defaultValue:null},url:{type:"sap.ui.core.URI",defaultValue:null},handleValidation:{type:"boolean",defaultValue:false},settings:{type:"object",defaultValue:null},propagateModel:{type:"boolean",defaultValue:false},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null}},associations:{component:{type:"sap.ui.core.UIComponent",multiple:false}}}});a.prototype.getComponentInstance=function(){var c=this.getComponent();return sap.ui.getCore().getComponent(c);};a.prototype.setComponent=function(c,s){var o=this.getComponentInstance();if(o){o.setContainer(undefined);}this.setAssociation("component",c,s);c=this.getComponentInstance();if(c){c.setContainer(this);this.propagateProperties();}};a.prototype.onBeforeRendering=function(){var c=this.getComponentInstance();if(!c){var n=this.getName();if(n){c=sap.ui.component({name:n,url:this.getUrl(),handleValidation:this.getHandleValidation(),settings:this.getSettings()});this.setComponent(c,true);}}if(c&&c.onBeforeRendering){c.onBeforeRendering();}};a.prototype.onAfterRendering=function(){var c=this.getComponentInstance();if(c&&c.onAfterRendering){c.onAfterRendering();}};a.prototype.exit=function(){var c=this.getComponentInstance();if(c){c.destroy();}};a.prototype.propagateProperties=function(n){var c=this.getComponentInstance();if(c&&this.getPropagateModel()){this._propagateProperties(n,c);C.prototype.propagateProperties.apply(this,arguments);}};a.prototype.unbindObject=function(m,_){C.prototype.unbindObject.apply(this,arguments);this.propagateProperties(m);};return a;},true);
