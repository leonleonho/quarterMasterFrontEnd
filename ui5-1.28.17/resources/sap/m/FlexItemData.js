/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./FlexBoxStylingHelper','./library','sap/ui/core/LayoutData'],function(q,F,l,L){"use strict";var a=L.extend("sap.m.FlexItemData",{metadata:{library:"sap.m",properties:{alignSelf:{type:"sap.m.FlexAlignSelf",group:"Misc",defaultValue:sap.m.FlexAlignSelf.Auto},order:{type:"int",group:"Misc",defaultValue:0},growFactor:{type:"float",group:"Misc",defaultValue:0},shrinkFactor:{type:"float",group:"Misc",defaultValue:1},styleClass:{type:"string",group:"Misc",defaultValue:'',deprecated:true}}}});a.prototype.setAlignSelf=function(v){this.setProperty("alignSelf",v);F.setStyle(null,this,"align-self",v);return this;};a.prototype.setOrder=function(v){this.setProperty("order",v);F.setStyle(null,this,"order",v);return this;};a.prototype.setGrowFactor=function(v){this.setProperty("growFactor",v);F.setStyle(null,this,"flex-grow",v);return this;};a.prototype.setShrinkFactor=function(v){this.setProperty("shrinkFactor",v,true);F.setStyle(null,this,"flex-shrink",v);return this;};return a;},true);
