(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(13),n(7)),s=n(1),p=n(2),l=n(4),m=n(3);n(14);var u=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e,t=1==(e=(e=this.props.id).toString()).length?"00".concat(e):2==e.length?"0".concat(e):3==e.length?"".concat(e):void 0,n="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/".concat(t,".png");return r.a.createElement("div",{className:"Pokecard"},r.a.createElement("h2",null," ",this.props.name," "),r.a.createElement("div",{className:"Pokecard-img"},r.a.createElement("img",{src:n,alt:this.props.name})),r.a.createElement("p",{className:"Pokecard-data"},"Type : ",this.props.type),r.a.createElement("span",{className:"Pokecard-data"},"EXP : ",this.props.experience," "))}}]),n}(a.Component),d=(n(15),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e;return e=this.props.isWinner?r.a.createElement("h1",{className:"Pokedex-winner"},"Winning Group !"):r.a.createElement("h1",{className:"Pokedex-loser"},"Losing Group !"),r.a.createElement("div",{className:"Pokedex"},e,r.a.createElement("h2",{className:"Pokedex-total"},"Total Experience : ",this.props.total),r.a.createElement("div",{className:"Pokedex-cards"},this.props.pokemons.map((function(e){return r.a.createElement(u,{id:e.id,name:e.name,type:e.type,experience:e.experience})}))))}}]),n}(a.Component)),h=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){for(var e=[],t=Object(i.a)(this.props.pokemons);e.length<t.length;){var n=Math.floor(Math.random()*t.length),a=t.splice(n,1)[0];e.push(a)}var o=e.reduce((function(e,t){return e+t.experience}),0),c=t.reduce((function(e,t){return e+t.experience}),0);return r.a.createElement("div",null,r.a.createElement(d,{pokemons:e,total:o,isWinner:o>c}),r.a.createElement(d,{pokemons:t,total:c,isWinner:c>o}))}}]),n}(a.Component);h.defaultProps={pokemons:[{id:4,name:"Charmander",type:"fire",experience:62},{id:7,name:"Squirtle",type:"water",experience:63},{id:11,name:"Metapod",type:"bug",experience:72},{id:12,name:"Butterfree",type:"flying",experience:178},{id:25,name:"Pikachu",type:"electric",experience:112},{id:39,name:"Jigglypuff",type:"normal",experience:95},{id:94,name:"Gengar",type:"poison",experience:225},{id:133,name:"Eevee",type:"normal",experience:65}]};var f=h;var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.b7ba14af.chunk.js.map