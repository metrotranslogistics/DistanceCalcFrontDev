"use strict";(self.webpackChunkDistanceCalcFront=self.webpackChunkDistanceCalcFront||[]).push([[579],{4579:(Q,u,o)=>{o.r(u),o.d(u,{RepsModule:()=>Y});var d=o(4719),Z=o(6895),a=o(5146),t=o(5062);let v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-1"],[1,"container"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[a.lC],encapsulation:2}),n})();var l=o(7224),p=o(805),g=o(9429),c=o(793);const f=["dt"];function h(n,i){1&n&&(t.TgZ(0,"tr")(1,"th",5)(2,"table")(3,"tr"),t._uU(4,"iam"),t.qZA(),t.TgZ(5,"tr"),t._uU(6,"firstName"),t.qZA(),t.TgZ(7,"tr"),t._uU(8,"lastName"),t.qZA(),t.TgZ(9,"tr"),t._uU(10,"email"),t.qZA()()(),t.TgZ(11,"th",6)(12,"table")(13,"tr"),t._uU(14,"phone"),t.qZA(),t.TgZ(15,"tr"),t._uU(16,"companyName"),t.qZA(),t.TgZ(17,"tr"),t._uU(18,"location"),t.qZA()()(),t.TgZ(19,"th",6)(20,"table")(21,"tr"),t._uU(22,"mcdot"),t.qZA(),t.TgZ(23,"tr"),t._uU(24,"comment"),t.qZA()()(),t.TgZ(25,"th",5)(26,"table")(27,"tr"),t._uU(28,"Actions"),t.qZA()()()())}function T(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr",7)(1,"td")(2,"table")(3,"tr",8),t._uU(4),t.qZA(),t.TgZ(5,"tr",8),t._uU(6),t.qZA(),t.TgZ(7,"tr",8),t._uU(8),t.qZA(),t.TgZ(9,"tr",8),t._uU(10),t.qZA()()(),t.TgZ(11,"td")(12,"table")(13,"tr",8),t._uU(14),t.qZA(),t.TgZ(15,"tr",8),t._uU(16),t.qZA(),t.TgZ(17,"tr",8),t._uU(18),t.qZA()()(),t.TgZ(19,"td")(20,"table")(21,"tr",8),t._uU(22),t.qZA(),t.TgZ(23,"tr",8),t._uU(24),t.qZA()()(),t.TgZ(25,"td",9)(26,"button",10),t.NdJ("click",function(){const m=t.CHM(e).$implicit,j=t.oxw();return t.KtG(j.updateRepId(m.id))}),t._uU(27,"Backup"),t.qZA()()()}if(2&n){const e=i.$implicit;t.Q6J("pSelectableRow",e),t.xp6(4),t.Oqu(e.iam),t.xp6(2),t.Oqu(e.firstName),t.xp6(2),t.Oqu(e.lastName),t.xp6(2),t.Oqu(e.email),t.xp6(4),t.Oqu(e.phone),t.xp6(2),t.Oqu(e.companyName),t.xp6(2),t.Oqu(e.location),t.xp6(4),t.Oqu(e.mcdot),t.xp6(2),t.Oqu(e.comment)}}const A=[{path:"",component:v,children:[{path:"",component:(()=>{class n{constructor(e,s,r){this.repService=e,this.messageService=s,this.accountService=r,this.userName="",this.userRole=""}ngOnInit(){this.accountService.getById(this.accountService.userValue.id).pipe((0,l.P)()).subscribe(e=>{this.userRole=e.role,this.userName=e.firstName,this.repService.getAll().pipe((0,l.P)()).subscribe(s=>this.reps=s.filter(r=>"0"!=r.repId))})}updateRepId(e){const s=this.reps.find(r=>r.id===e);s.repId="0",this.repService.update(e,s).pipe((0,l.P)()).subscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.ik),t.Y36(p.ez),t.Y36(g.BR))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],viewQuery:function(e,s){if(1&e&&t.Gf(f,5),2&e){let r;t.iGM(r=t.CRH())&&(s.table=r.first)}},features:[t._Bn([p.ez])],decls:5,vars:2,consts:[[1,"card"],["selectionMode","single","dataKey","id",1,"table","table-striped","table-hover",3,"value","selection","selectionChange"],["dt",""],["pTemplate","header"],["pTemplate","body"],[2,"width","25%"],[2,"width","30%"],[3,"pSelectableRow"],[2,"color","green"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-info","mr-1",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"p-table",1,2),t.NdJ("selectionChange",function(m){return s.selectedRep=m}),t.YNc(3,h,29,0,"ng-template",3),t.YNc(4,T,28,10,"ng-template",4),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("value",s.reps)("selection",s.selectedRep))},dependencies:[c.iA,p.jx,c.Ei],encapsulation:2}),n})()}]}];let C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.Bz.forChild(A),a.Bz]}),n})();var U=o(9483),R=o(9549),y=o(4144),x=o(3238),L=o(6308),N=o(5415),S=o(666),M=o(2453),O=o(585),J=o(8177),b=o(5722),B=o(4076),F=o(1493),q=o(5593),I=o(8235),z=o(1740),X=o(1383);let Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[Z.ez,d.UX,C,U.FA,R.lN,y.c,x.XK,L.JX,N.T,c.U$,S.kW,M.EV,O._8,J.JH,b.q4,B.vI,F.S,q.hJ,I.q,z.j,d.u5,X.V]}),n})()}}]);