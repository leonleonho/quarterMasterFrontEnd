/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./TreeTable','./Table','./library'],function(q,T,a,l){"use strict";var D=T.extend("sap.ui.table.DataTable",{metadata:{deprecated:true,library:"sap.ui.table",properties:{expandedVisibleRowCount:{type:"int",defaultValue:null},expanded:{type:"boolean",defaultValue:false},hierarchical:{type:"boolean",defaultValue:false}},events:{rowSelect:{parameters:{rowIndex:{type:"int"},rowContext:{type:"object"},rowIndices:{type:"int[]"}}}}}});D.prototype.init=function(){T.prototype.init.apply(this,arguments);this._bInheritEditableToControls=true;this.setEditable(false);this.setSelectionBehavior(sap.ui.table.SelectionBehavior.Row);this.attachRowSelectionChange(function(e){this.fireRowSelect(e.mParameters);});this._iLastFixedColIndex=-1;};D.prototype.isTreeBinding=function(n){n=n||"rows";if(n==="rows"){return this.getHierarchical();}return sap.ui.core.Element.prototype.isTreeBinding.apply(this,arguments);};D.prototype.setHierarchical=function(h){this.setProperty("hierarchical",h);this._iLastFixedColIndex=h?0:-1;};D.prototype.setVisibleRowCount=function(r){this._iVisibleRowCount=r;if(!this.getExpanded()){sap.ui.table.Table.prototype.setVisibleRowCount.apply(this,arguments);}};D.prototype.setExpandedVisibleRowCount=function(r){this.setProperty("expandedVisibleRowCount",r,true);if(this.getExpanded()){sap.ui.table.Table.prototype.setVisibleRowCount.apply(this,arguments);}};D.prototype.setExpanded=function(e){this.setProperty("expanded",e,true);if(this.getExpandedVisibleRowCount()>0){var r=e?this.getExpandedVisibleRowCount():this._iVisibleRowCount;sap.ui.table.Table.prototype.setVisibleRowCount.call(this,r);}};D.prototype.getContextByIndex=function(r){return a.prototype.getContextByIndex.call(this,r);};return D;},true);
