(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a178472"],{"5df8":function(t,e,i){"use strict";var s=i("b5bb"),a=i.n(s);a.a},"63cf":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"loading-bg"}},[s("div",{staticClass:"loading-logo"},[s("img",{attrs:{src:i("a4ef"),alt:"Logo"}})]),s("div",{staticClass:"loading"},[s("div",{staticClass:"effect-1 effects"}),s("div",{staticClass:"effect-2 effects"}),s("div",{staticClass:"effect-3 effects"})])])}],n=(i("57e7"),i("673e"),i("7f7f"),i("551c"),{methods:{handleLoginEvent:function(t){this.$store.dispatch("auth/updateAuthenticatedUser",{displayName:t.profile.name,email:t.profile.email,photoURL:t.profile.picture,providerId:t.profile.sub.substr(0,t.profile.sub.indexOf("|")),uid:t.profile.sub}),this.$router.push(t.state.target||"/")}},created:function(){this.$auth.handleAuthentication(),this.$auth.isAuthenticated()&&this.$router.push("/")}}),c=n,f=(i("5df8"),i("2877")),o=Object(f["a"])(c,s,a,!1,null,null,null);e["default"]=o.exports},a4ef:function(t,e,i){t.exports=i.p+"img/logo.a5d6fa57.png"},b5bb:function(t,e,i){}}]);
//# sourceMappingURL=chunk-5a178472.babef88c.js.map