(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+LfX":function(n,l,t){"use strict";t.r(l);var a=t("CcnG"),u=function(){return function(){}}(),i=t("pMnS"),e=t("6UMx"),r=t("0/Q6"),o=t("Wf4p"),c=t("bujt"),b=t("UodH"),s=t("dWZg"),m=t("lLAP"),p=t("wFw1"),f=t("Mr+X"),d=t("SMsm"),g=t("NvT6"),C=t("Blfk"),h=t("Ip0R"),v=t("wd/R"),x=function(){function n(){}return n.prototype.transform=function(n,l){var t=new Date(1e3*n);return v(t).fromNow()},n}(),M=t("lzlj"),A=t("FVSy"),_=t("f0Fw"),k=function(){function n(n,l){this.data=n,this.dialog=l}return n.prototype.ngOnInit=function(){},n}(),w=function(){function n(n,l){this.dialog=n,this.firestoreService=l,this.isLoading=!0}return n.prototype.ngOnInit=function(){var n=this;this.firestoreService.getOnlinePatient().subscribe(function(l){void 0!==l&&(n.doctorsRemarks=n.firestoreService.getDoctorsRemarks(l.fullname),n.doctorsRemarks.subscribe(function(){return n.isLoading=!1}))})},n.prototype.expandRemarks=function(n){this.dialogRef=this.dialog.open(k,{data:n})},n}(),O=t("o3x0"),P=a.qb({encapsulation:0,styles:[[".mat-card[_ngcontent-%COMP%]{margin-top:30px;padding:5px 12px}.mat-card[_ngcontent-%COMP%]   #spinner[_ngcontent-%COMP%]{width:100%;display:flex}.mat-card[_ngcontent-%COMP%]   #spinner[_ngcontent-%COMP%]   .mat-progress-spinner[_ngcontent-%COMP%]{margin:auto}.mat-card[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]{padding:0}.mat-card[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]   #time[_ngcontent-%COMP%]{color:#b3b3b3}.mat-card[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:2em;-webkit-transform:translateX(-2px);transform:translateX(-2px)}"]],data:{}});function y(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,16,"mat-list-item",[["class","mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"focus"],[null,"blur"]],function(n,l,t){var u=!0;return"focus"===l&&(u=!1!==a.Cb(n,1)._handleFocus()&&u),"blur"===l&&(u=!1!==a.Cb(n,1)._handleBlur()&&u),u},e.c,e.a)),a.rb(1,1097728,null,3,r.b,[a.k,[2,r.e]],null,null),a.Ib(603979776,1,{_lines:1}),a.Ib(335544320,2,{_avatar:0}),a.Ib(335544320,3,{_icon:0}),(n()(),a.sb(5,0,null,1,2,"span",[["class","mat-line"],["id","message"],["mat-line",""]],null,null,null,null,null)),a.rb(6,16384,[[1,4]],0,o.m,[],null,null),(n()(),a.Kb(7,null,["",""])),(n()(),a.sb(8,0,null,1,3,"span",[["class","mat-line"],["id","time"],["mat-line",""]],null,null,null,null,null)),a.rb(9,16384,[[1,4]],0,o.m,[],null,null),(n()(),a.Kb(10,null,[""," \xa0\xa0|\xa0\xa0 ",""])),a.Gb(11,1),(n()(),a.sb(12,0,null,2,4,"button",[["mat-icon-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==n.component.expandRemarks(n.context.$implicit)&&a),a},c.b,c.a)),a.rb(13,180224,null,0,b.b,[a.k,s.a,m.f,[2,p.a]],null,null),(n()(),a.sb(14,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,f.b,f.a)),a.rb(15,638976,null,0,d.a,[a.k,d.c,[8,null]],null,null),(n()(),a.Kb(-1,0,["fullscreen"]))],function(n,l){n(l,15,0)},function(n,l){n(l,0,0,a.Cb(l,1)._avatar||a.Cb(l,1)._icon,a.Cb(l,1)._avatar||a.Cb(l,1)._icon),n(l,7,0,null==l.context.$implicit?null:l.context.$implicit.message);var t=a.Lb(l,10,0,n(l,11,0,a.Cb(l.parent,0),null==l.context.$implicit?null:l.context.$implicit.timestamp));n(l,10,0,t,null==l.context.$implicit?null:l.context.$implicit.from),n(l,12,0,a.Cb(l,13).disabled||null,"NoopAnimations"===a.Cb(l,13)._animationMode),n(l,14,0,a.Cb(l,15).inline)})}function R(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,2,"div",[["id","spinner"]],null,null,null,null,null)),(n()(),a.sb(1,0,null,null,1,"mat-progress-spinner",[["class","mat-progress-spinner"],["color","warn"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"],[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuenow",0],[1,"mode",0]],null,null,g.b,g.a)),a.rb(2,49152,null,0,C.b,[a.k,s.a,[2,h.d],[2,p.a],C.a],{color:[0,"color"],mode:[1,"mode"]},null)],function(n,l){n(l,2,0,"warn","indeterminate")},function(n,l){n(l,1,0,a.Cb(l,2)._noopAnimations,a.Cb(l,2).diameter,a.Cb(l,2).diameter,"determinate"===a.Cb(l,2).mode?0:null,"determinate"===a.Cb(l,2).mode?100:null,a.Cb(l,2).value,a.Cb(l,2).mode)})}function j(n){return a.Mb(0,[a.Eb(0,x,[]),(n()(),a.sb(1,0,null,null,10,"mat-card",[["class","mat-card"]],null,null,null,M.b,M.a)),a.rb(2,49152,null,0,A.a,[],null,null),(n()(),a.sb(3,0,null,0,8,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),a.rb(4,16384,null,0,A.c,[],null,null),(n()(),a.sb(5,0,null,null,4,"mat-nav-list",[["class","mat-nav-list"],["role","navigation"]],null,null,null,e.d,e.b)),a.rb(6,49152,null,0,r.e,[],null,null),(n()(),a.jb(16777216,null,0,2,null,y)),a.rb(8,278528,null,0,h.j,[a.R,a.O,a.u],{ngForOf:[0,"ngForOf"]},null),a.Eb(131072,h.b,[a.h]),(n()(),a.jb(16777216,null,null,1,null,R)),a.rb(11,16384,null,0,h.k,[a.R,a.O],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,8,0,a.Lb(l,8,0,a.Cb(l,9).transform(t.doctorsRemarks))),n(l,11,0,t.isLoading)},null)}function F(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,1,"app-remarks",[],null,null,null,j,P)),a.rb(1,114688,null,0,w,[O.e,_.a],null,null)],function(n,l){n(l,1,0)},null)}var L=a.ob("app-remarks",w,F,{},{},[]),I=t("t68o"),S=a.qb({encapsulation:0,styles:[["#wrapper[_ngcontent-%COMP%]{max-width:500px}#wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:right;margin:0}#wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{text-align:left}"]],data:{}});function z(n){return a.Mb(0,[a.Eb(0,x,[]),(n()(),a.sb(1,0,null,null,8,"div",[["id","wrapper"]],null,null,null,null,null)),(n()(),a.sb(2,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Kb(3,null,["",""])),(n()(),a.sb(4,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.sb(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Kb(6,null,["",""])),(n()(),a.sb(7,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),a.Kb(8,null,["",""])),a.Gb(9,1)],null,function(n,l){var t=l.component;n(l,3,0,t.data.message),n(l,6,0,t.data.from);var u=a.Lb(l,8,0,n(l,9,0,a.Cb(l,0),t.data.timestamp));n(l,8,0,u)})}function $(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,1,"app-expand-remarks-dialog",[],null,null,null,z,S)),a.rb(1,114688,null,0,k,[O.a,O.e],null,null)],function(n,l){n(l,1,0)},null)}var q=a.ob("app-expand-remarks-dialog",k,$,{},{},[]),K=t("eDkP"),X=t("Fzqc"),B=t("ZYCi"),G=function(){return function(){}}(),N=t("LC5p"),D=t("4c35"),E=t("qAlS"),W=function(){return function(){}}();t.d(l,"RemarksModuleNgFactory",function(){return J});var J=a.pb(u,[],function(n){return a.zb([a.Ab(512,a.j,a.eb,[[8,[i.a,L,I.a,q]],[3,a.j],a.z]),a.Ab(4608,h.m,h.l,[a.w,[2,h.w]]),a.Ab(4608,K.c,K.c,[K.i,K.e,a.j,K.h,K.f,a.s,a.B,h.d,X.b]),a.Ab(5120,K.j,K.k,[K.c]),a.Ab(5120,O.c,O.d,[K.c]),a.Ab(4608,O.e,O.e,[K.c,a.s,[2,h.g],[2,O.b],O.c,[3,O.e],K.e]),a.Ab(1073742336,h.c,h.c,[]),a.Ab(1073742336,B.n,B.n,[[2,B.t],[2,B.k]]),a.Ab(1073742336,G,G,[]),a.Ab(1073742336,X.a,X.a,[]),a.Ab(1073742336,o.l,o.l,[[2,o.e]]),a.Ab(1073742336,o.n,o.n,[]),a.Ab(1073742336,s.b,s.b,[]),a.Ab(1073742336,o.x,o.x,[]),a.Ab(1073742336,o.v,o.v,[]),a.Ab(1073742336,N.b,N.b,[]),a.Ab(1073742336,r.c,r.c,[]),a.Ab(1073742336,A.e,A.e,[]),a.Ab(1073742336,d.b,d.b,[]),a.Ab(1073742336,b.c,b.c,[]),a.Ab(1073742336,D.g,D.g,[]),a.Ab(1073742336,E.b,E.b,[]),a.Ab(1073742336,K.g,K.g,[]),a.Ab(1073742336,O.h,O.h,[]),a.Ab(1073742336,C.c,C.c,[]),a.Ab(1073742336,W,W,[]),a.Ab(1073742336,u,u,[]),a.Ab(1024,B.i,function(){return[[{path:"",component:w}]]},[])])})},"Mr+X":function(n,l,t){"use strict";t.d(l,"a",function(){return u}),t.d(l,"b",function(){return i});var a=t("CcnG"),u=(t("SMsm"),t("Fzqc"),t("Wf4p"),a.qb({encapsulation:2,styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],data:{}}));function i(n){return a.Mb(2,[a.Bb(null,0)],null,null)}}}]);