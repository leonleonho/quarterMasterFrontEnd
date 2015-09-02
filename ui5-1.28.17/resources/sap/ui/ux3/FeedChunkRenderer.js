/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var F={};F.render=function(r,c){var a=r;var C=c;if(C.getParent()instanceof sap.ui.ux3.FeedChunk){C.bComment=true;}else{C.bComment=false;}var m=C.getId();a.write('<ARTICLE');a.writeControlData(C);a.addClass('sapUiFeedChunk');if(C.bComment){a.addClass('sapUiFeedChunkComment');}a.writeClasses();a.write('>');a.write('<img id='+m+'-thumb');var t=C.getThumbnailSrc();if(!t){t=q.sap.getModulePath("sap.ui.ux3",'/')+"themes/"+sap.ui.getCore().getConfiguration().getTheme()+sap.ui.core.theming.Parameters.get('sapUiFeedPersonPlaceholder');}a.writeAttributeEscaped('src',t);a.writeAttributeEscaped('alt',C.getSender());a.writeClasses();a.write('>');a.write('<DIV class= "sapUiFeedChunkText" >');a.write('<a id='+m+'-sender ');a.writeAttribute('href','javascript:void(0);');a.write('>');a.writeEscaped(C.getSender());a.write('</a> ');if(C.oHCMMenuButton){a.renderControl(C.oHCMMenuButton);}this.renderText(a,C);a.write('</DIV>');if(!C.bComment){a.write('<UL class= "sapUiFeedChunkStatusIcons" >');if(C.getFlagged()){a.write('<LI class= "sapUiFeedChunkFlagged" title="'+C.rb.getText('FEED_FLAGGED')+'" >&#9873</LI>');}if(C.getFavorite()){a.write('<LI class= "sapUiFeedChunkFavorite" title="'+C.rb.getText('FEED_FAVORITE')+'" >&#9733</LI>');}if(C.getShared()){a.write('<LI class= "sapUiFeedChunkShared" title="'+C.rb.getText('FEED_SHARED')+'" >&#8635</LI>');}a.write('</UL>');}a.write('<SPAN class= "sapUiFeedChunkByline" >');a.writeEscaped(C.getTimestamp());a.write('</SPAN>');if(!C.bComment){if(C.oToolsButton){a.renderControl(C.oToolsButton);}if(C.getEnableShare()){a.write('<BUTTON type = "button" id='+m+'-ActShare class= "sapUiFeedChunkAct sapUiFeedChunkActShare" title="'+C.rb.getText('FEED_ACT_SHARE')+'" >&#8635</BUTTON>');}if(C.getEnableInspect()){a.write('<BUTTON type = "button" id='+m+'-ActInspect class= "sapUiFeedChunkAct sapUiFeedChunkActInspect" title="'+C.rb.getText('FEED_ACT_INSPECT')+'" >i</BUTTON>');}if(C.getEnableFavorite()){a.write('<BUTTON type = "button" id='+m+'-ActFavorite class= "sapUiFeedChunkAct sapUiFeedChunkActFavorite" title="'+C.rb.getText('FEED_ACT_FAVORITE')+'" >&#9733</BUTTON>');}if(C.getEnableFlag()){a.write('<BUTTON type = "button" id='+m+'-ActFlag class= "sapUiFeedChunkAct sapUiFeedChunkActFlag" title="'+C.rb.getText('FEED_ACT_FLAG')+'" >&#9873</BUTTON>');}if(C.getEnableComment()){a.write('<BUTTON type = "button" id='+m+'-ActComment class= "sapUiFeedChunkAct sapUiFeedChunkActComment" title="'+C.rb.getText('FEED_ACT_COMMENT')+'" >C</BUTTON>');}}if(C.getDeletionAllowed()&&C.bComment){a.write('<BUTTON type = "button" id='+m+'-delete class= "sapUiFeedChunkDel" title="'+C.rb.getText('FEED_DELETE')+'" >X</BUTTON>');}if(C.getComments().length>0||C.showCommentFeeder){a.write("<SECTION>");this.renderComments(a,C);a.write("</SECTION>");}a.write('</ARTICLE>');};F.renderText=function(r,c){var t=c.getText();var i=0;var p=0;do{p=t.search(/\s/);var s="",w="";if(p<0){w=t;}else{w=t.slice(0,p);s=t.slice(p,p+1);t=t.slice(p+1);}if(/^@/.test(w)){r.write('<a id='+c.getId()+'-Ref'+i);r.writeAttribute('href','javascript:void(0);');r.write('>');r.writeEscaped(w,true);r.write('</a>',s);i++;}else if(/^(https?|ftp):\/\//i.test(w)&&q.sap.validateUrl(w)){r.write('<a');r.writeAttribute('href',q.sap.encodeHTML(w));r.write('>');r.writeEscaped(w,true);r.write('</a>',s);}else if(/^(www\.)/i.test(w)&&q.sap.validateUrl("http://"+w)){r.write('<a');r.writeAttribute('href',q.sap.encodeHTML("http://"+w));r.write('>');r.writeEscaped(w,true);r.write('</a>',s);}else if(/^[\w\.=-]+@[\w\.-]+\.[\w]{2,5}$/.test(w)){r.write('<a');r.writeAttribute('href',"mailto:"+q.sap.encodeHTML(w));r.write('>');r.writeEscaped(w,true);r.write('</a>',s);}else{r.writeEscaped(w+s,true);}}while(p>=0);};F.renderComments=function(r,c){var C=c.getComments();var l=C.length;r.write('<HEADER class= "sapUiFeedChunkComments" >');if(c.rb){r.write(c.rb.getText('FEED_NO_COMMENTS',[l]));if(l>c.maxComments){r.write('<a id='+c.getId()+'-all ');r.writeAttribute('href','javascript:void(0);');r.write('>');if(!c.allComments){r.write(c.rb.getText('FEED_ALL_COMMENTS'));}else{r.write(c.rb.getText('FEED_MAX_COMMENTS'));}r.write('</a>');}}r.write("</HEADER>");var n=l;if(!c.allComments&&c.maxComments<n){n=c.maxComments;}for(var i=0;i<n;i++){r.renderControl(C[l-n+i]);}if(c.oCommentFeeder){r.renderControl(c.oCommentFeeder);}};F.renderExpander=function(c){if(c.expanded){return"<button id= '"+c.getId()+"-exp' class='sapUiFeedChunkCollapse' title='"+c.rb.getText("FEED_COLLAPS")+"'>&#9660</button>";}else{return"<button id= '"+c.getId()+"-exp' class='sapUiFeedChunkExpand' title='"+c.rb.getText("FEED_EXPAND")+"'>&#9660</button>";}};return F;},true);
