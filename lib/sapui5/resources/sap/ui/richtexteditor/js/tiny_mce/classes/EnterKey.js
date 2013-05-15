/**
 * EnterKey.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(t){var T=t.dom.TreeWalker;t.EnterKey=function(e){var d=e.dom,s=e.selection,a=e.settings,u=e.undoManager,n=e.schema.getNonEmptyElements();function h(b){var r=s.getRng(true),c,f,g,o,p,j,k,l,m,q,v,w,x,z;function A(i){return i&&d.isBlock(i)&&!/^(TD|TH|CAPTION|FORM)$/.test(i.nodeName)&&!/^(fixed|absolute)/i.test(i.style.position)&&d.getContentEditable(i)!=="true"};function B(i){var y;if(t.isIE&&d.isBlock(i)){y=s.getRng();i.appendChild(d.create('span',null,'\u00a0'));s.select(i);i.lastChild.outerHTML='';s.setRng(y)}};function C(y){var N=y,O=[],i;while(N=N.firstChild){if(d.isBlock(N)){return}if(N.nodeType==1&&!n[N.nodeName.toLowerCase()]){O.push(N)}}i=O.length;while(i--){N=O[i];if(!N.hasChildNodes()||(N.firstChild==N.lastChild&&N.firstChild.nodeValue==='')){d.remove(N)}else{if(N.nodeName=="A"&&(N.innerText||N.textContent)===' '){d.remove(N)}}}};function D(i){var N,O,r,y,P,Q=i,R;r=d.createRng();if(i.hasChildNodes()){N=new T(i,i);while(O=N.current()){if(O.nodeType==3){r.setStart(O,0);r.setEnd(O,0);break}if(n[O.nodeName.toLowerCase()]){r.setStartBefore(O);r.setEndBefore(O);break}Q=O;O=N.next()}if(!O){r.setStart(Q,0);r.setEnd(Q,0)}}else{if(i.nodeName=='BR'){if(i.nextSibling&&d.isBlock(i.nextSibling)){if(!j||j<9){R=d.create('br');i.parentNode.insertBefore(R,i)}r.setStartBefore(i);r.setEndBefore(i)}else{r.setStartAfter(i);r.setEndAfter(i)}}else{r.setStart(i,0);r.setEnd(i,0)}}s.setRng(r);d.remove(R);P=d.getViewPort(e.getWin());y=d.getPos(i).y;if(y<P.y||y+25>P.y+P.h){e.getWin().scrollTo(0,y<P.y?y:y-P.h+25)}};function E(i){var y=g,N,O,P;N=i||v=="TABLE"?d.create(i||x):p.cloneNode(false);P=N;if(a.keep_styles!==false){do{if(/^(SPAN|STRONG|B|EM|I|FONT|STRIKE|U)$/.test(y.nodeName)){if(y.id=='_mce_caret'){continue}O=y.cloneNode(false);d.setAttrib(O,'id','');if(N.hasChildNodes()){O.appendChild(N.firstChild);N.appendChild(O)}else{P=O;N.appendChild(O)}}}while(y=y.parentNode)}if(!t.isIE){P.innerHTML='<br data-mce-bogus="1">'}return N};function F(i){var y,N,O;if(g.nodeType==3&&(i?o>0:o<g.nodeValue.length)){return false}if(g.parentNode==p&&z&&!i){return true}if(i&&g.nodeType==1&&g==p.firstChild){return true}if(g.nodeName==="TABLE"||(g.previousSibling&&g.previousSibling.nodeName=="TABLE")){return(z&&!i)||(!z&&i)}y=new T(g,p);if(g.nodeType==3){if(i&&o==0){y.prev()}else if(!i&&o==g.nodeValue.length){y.next()}}while(N=y.current()){if(N.nodeType===1){if(!N.getAttribute('data-mce-bogus')){O=N.nodeName.toLowerCase();if(n[O]&&O!=='br'){return false}}}else if(N.nodeType===3&&!/^[ \t\r\n]*$/.test(N.nodeValue)){return false}if(i){y.prev()}else{y.next()}}return true};function G(g,o){var l,p,i,y,N,O=x||'P';p=d.getParent(g,d.isBlock);if(!p||!A(p)){p=p||f;if(!p.hasChildNodes()){l=d.create(O);p.appendChild(l);r.setStart(l,0);r.setEnd(l,0);return l}y=g;while(y.parentNode!=p){y=y.parentNode}while(y&&!d.isBlock(y)){i=y;y=y.previousSibling}if(i){l=d.create(O);i.parentNode.insertBefore(l,i);y=i;while(y&&!d.isBlock(y)){N=y.nextSibling;l.appendChild(y);y=N}r.setStart(g,o);r.setEnd(g,o)}}return g};function H(){function i(y){var N=q[y?'firstChild':'lastChild'];while(N){if(N.nodeType==1){break}N=N[y?'nextSibling':'previousSibling']}return N===p};l=x?E(x):d.create('BR');if(i(true)&&i()){d.replace(l,q)}else if(i(true)){q.parentNode.insertBefore(l,q)}else if(i()){d.insertAfter(l,q);B(l)}else{c=r.cloneRange();c.setStartAfter(p);c.setEndAfter(q);m=c.extractContents();d.insertAfter(m,q);d.insertAfter(l,q)}d.remove(p);D(l);u.add()};function I(){var i=new T(g,p),y;while(y=i.current()){if(y.nodeName=='BR'){return true}y=i.next()}}function J(){var i,y,N;if(g&&g.nodeType==3&&o>=g.nodeValue.length){if(!t.isIE&&!I()){i=d.create('br');r.insertNode(i);r.setStartAfter(i);r.setEndAfter(i);y=true}}i=d.create('br');r.insertNode(i);if(t.isIE&&v=='PRE'&&(!j||j<8)){i.parentNode.insertBefore(d.doc.createTextNode('\r'),i)}N=d.create('span',{},'&nbsp;');i.parentNode.insertBefore(N,i);s.scrollIntoView(N);d.remove(N);if(!y){r.setStartAfter(i);r.setEndAfter(i)}else{r.setStartBefore(i);r.setEndBefore(i)}s.setRng(r);u.add()};function K(i){do{if(i.nodeType===3){i.nodeValue=i.nodeValue.replace(/^[\r\n]+/,'')}i=i.firstChild}while(i)};function L(i){var y=d.getRoot(),N,f;N=i;while(N!==y&&d.getContentEditable(N)!=="false"){if(d.getContentEditable(N)==="true"){f=N}N=N.parentNode}return N!==y?f:y};function M(i){var y;if(!t.isIE){i.normalize();y=i.lastChild;if(!y||(/^(left|right)$/gi.test(d.getStyle(y,'float',true)))){d.add(i,'br')}}};if(!r.collapsed){e.execCommand('Delete');return}if(b.isDefaultPrevented()){return}g=r.startContainer;o=r.startOffset;x=(a.force_p_newlines?'p':'')||a.forced_root_block;x=x?x.toUpperCase():'';j=d.doc.documentMode;k=b.shiftKey;if(g.nodeType==1&&g.hasChildNodes()){z=o>g.childNodes.length-1;g=g.childNodes[Math.min(o,g.childNodes.length-1)]||g;if(z&&g.nodeType==3){o=g.nodeValue.length}else{o=0}}f=L(g);if(!f){return}u.beforeChange();if(!d.isBlock(f)&&f!=d.getRoot()){if(!x||k){J()}return}if((x&&!k)||(!x&&k)){g=G(g,o)}p=d.getParent(g,d.isBlock);q=p?d.getParent(p.parentNode,d.isBlock):null;v=p?p.nodeName.toUpperCase():'';w=q?q.nodeName.toUpperCase():'';if(w=='LI'&&!b.ctrlKey){p=q;v=w}if(v=='LI'){if(!x&&k){J();return}if(d.isEmpty(p)){if(/^(UL|OL|LI)$/.test(q.parentNode.nodeName)){return false}H();return}}if(v=='PRE'&&a.br_in_pre!==false){if(!k){J();return}}else{if((!x&&!k&&v!='LI')||(x&&k)){J();return}}x=x||'P';if(F()){if(/^(H[1-6]|PRE)$/.test(v)&&w!='HGROUP'){l=E(x)}else{l=E()}if(a.end_container_on_empty_block&&A(q)&&d.isEmpty(p)){l=d.split(q,p)}else{d.insertAfter(l,p)}D(l)}else if(F(true)){l=p.parentNode.insertBefore(E(),p);B(l)}else{c=r.cloneRange();c.setEndAfter(p);m=c.extractContents();K(m);l=m.firstChild;d.insertAfter(m,p);C(l);M(p);D(l)}d.setAttrib(l,'id','');u.add()}e.onKeyDown.add(function(b,c){if(c.keyCode==13){if(h(c)!==false){c.preventDefault()}}})}})(tinymce);