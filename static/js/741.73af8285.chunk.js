"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[741],{3741:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var s=r(885),i=r(501),n=r(6871),a=r(2791),c=r(7238),o="CardFilms_thumb__aT42F",l="CardFilms_container__BKjoQ",d="CardFilms_content__CnPPd",h="CardFilms_text__5Y+a9",u=r(183),m=r(184);var p=function(e){var t=e.cardFilm;return(0,m.jsx)(m.Fragment,{children:t&&(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("div",{className:o,children:(0,m.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w200/".concat(t.poster_path):"".concat(u),alt:"".concat(t.title)})}),(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)("h1",{children:t.title}),(0,m.jsxs)("p",{className:h,children:["User Score : ",Math.round(t.popularity)]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{className:h,children:t.overview}),(0,m.jsx)("h4",{children:"Genres"}),(0,m.jsx)("p",{className:h,children:t.genres.map((function(e){return e.name})).join(" ")})]})]})})})};function j(){var e,t,r=(0,n.UO)().movieId,o=(0,a.useState)(null),l=(0,s.Z)(o,2),d=l[0],h=l[1],u=(0,n.TH)(),j=null!==(e=null===u||void 0===u||null===(t=u.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",v=(0,n.s0)();return(0,a.useEffect)((function(){(0,c.NC)(r).then((function(e){var t=e.popularity,r=e.id,s=e.genres,i=e.title,n=e.poster_path,a=e.overview;h({popularity:t,id:r,genres:s,title:i,poster_path:n,overview:a})})).catch((function(e){v("/")}))}),[r,v]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.rU,{to:"".concat(j),children:"Go back"}),d&&(0,m.jsx)(p,{cardFilm:d}),(0,m.jsx)("p",{children:(0,m.jsx)(i.rU,{to:"cast",state:{from:j},children:"Cast"})}),(0,m.jsx)("p",{children:(0,m.jsx)(i.rU,{to:"reviews",state:{from:j},children:"Reviews"})}),(0,m.jsx)("hr",{color:"#321616"}),(0,m.jsx)(n.j3,{})]})}},183:function(e,t,r){e.exports=r.p+"static/media/defaultFoto.e7b01f9bae7f5d2cac8f.jpg"}}]);
//# sourceMappingURL=741.73af8285.chunk.js.map