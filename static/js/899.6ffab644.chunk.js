"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[899],{4899:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(885),u=r(2791),a=r(501),o=r(6871),i=r(7238),s=r(6178),c=r(577),f=r(184);function l(){var t=(0,a.lr)(),e=(0,n.Z)(t,2),r=e[0],l=e[1],h=(0,u.useState)([]),d=(0,n.Z)(h,2),m=d[0],v=d[1],g=(0,u.useState)(""),p=(0,n.Z)(g,2),_=p[0],b=p[1],x=(0,o.TH)();(0,u.useEffect)((function(){if(!r.get("query"))return l({}),void v([]);(0,i.rF)(r.toString()).then((function(t){if(!t.data.results.length)return(0,c.Am)("Movie not found"),void l({});v(t.data.results)}))}),[r,l]);return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),l({}),b("");var e=t.currentTarget.search.value.trim().toLowerCase();l({query:e})},children:[(0,f.jsx)("input",{onChange:function(t){r.get("query")&&l({}),v([]),b(t.currentTarget.value)},value:_,name:"search",type:"text",autoComplete:"off",placeholder:"Enter the title"}),(0,f.jsx)("button",{type:"submit",children:"Submit"}),m&&(0,f.jsx)(s.Z,{data:m,state:{from:x}})]})})}}}]);
//# sourceMappingURL=899.6ffab644.chunk.js.map