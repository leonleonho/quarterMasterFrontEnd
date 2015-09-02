/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/demokit/js/esprima'],function(q,e){var S=esprima.Syntax;function u(n){if(n.type==S.AssignmentExpression&&n.left.type==S.Identifier&&n.right.type==S.ObjectExpression){return n.right;}return n;}function c(n,d){var r;if(n!=null){n=u(n);if(n.type===S.Literal&&d!=null){r={};r[d]={type:S.Property,value:n};return r;}if(n.type!=S.ObjectExpression){q.sap.log.error("not an object literal:"+n.type+":"+n.value);return;}r={};for(var i=0;i<n.properties.length;i++){var p=n.properties[i];var b;if(p.key.type===S.Identifier){b=p.key.name;}else if(p.key.type===S.Literal){b=String(p.key.value);}else{b=p.key.toSource();}r[b]=p;}}return r;}var a={AssignmentExpression:['left','right'],ArrayExpression:['elements'],BlockStatement:['body'],BinaryExpression:['left','right'],BreakStatement:[],CallExpression:['callee','arguments'],CatchClause:[],ConditionalExpression:['test','consequent','alternate'],ContinueStatement:[],DoWhileStatement:['body','test'],DebuggerStatement:[],EmptyStatement:[],ExpressionStatement:['expression'],ForStatement:['init','test','update','body'],ForInStatement:['left','right','body'],FunctionDeclaration:['id','params','body'],FunctionExpression:['id','params','body'],Identifier:[],IfStatement:['test','consequent','alternate'],Literal:[],LabeledStatement:['body'],LogicalExpression:['left','right'],MemberExpression:['object','property'],NewExpression:['callee','arguments'],ObjectExpression:['properties'],Program:['body'],Property:['key','value'],ReturnStatement:['argument'],SequenceExpression:['expressions'],SwitchStatement:['discriminant','cases'],SwitchCase:['test','consequent'],ThisExpression:[],ThrowStatement:['argument'],TryStatement:[''],UnaryExpression:['argument'],UpdateExpression:['argument'],VariableDeclaration:['declarations'],VariableDeclarator:['id','init'],WhileStatement:['test','body'],WithStatement:['object','body']};function v(r,d,b){function _(n){if(d["*"]){d["*"].call(d,n,b);}if(d[n.type]){d[n.type].call(d,n,b);}var C=a[n.type];if(C){for(var i=0;i<C.length;i++){var f=n[C[i]];if(q.isArray(f)){for(var j=0;j<f.length;j++){if(f[j]){_(f[j]);}}}else if(f){_(f);}}}else{q.sap.log.warning("don't know how to handle "+n.type);}if(d["after:"+n.type]){d["after:"+n.type].call(d,n,b);}if(d["after:*"]){d["after:*"].call(d,n,b);}}_(r);}return{createPropertyMap:c,unlend:u,visit:v};},true);
