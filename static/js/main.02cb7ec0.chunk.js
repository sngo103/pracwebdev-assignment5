(this["webpackJsonppracwebdev-assignment5"]=this["webpackJsonppracwebdev-assignment5"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),i=(n(8),n(2)),l=n(3),o=n(6),d=n(5),h=n(4),b=n(0),j=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={zipcode:"",invalid:!0,myData:[]},a.handleInputChange=a.handleInputChange.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(){var e=this;fetch("https://ctp-zip-api.herokuapp.com/zip/"+this.state.zipcode).then((function(e){return e.json()})).then((function(t){e.setState({myData:t})})).catch((function(e){console.log("Error:",e)}))}},{key:"handleInputChange",value:function(e){5===e.length?this.setState({zipcode:e,invalid:!1}):this.setState({zipcode:e,invalid:!0})}},{key:"render",value:function(){var e=this,t=Object(b.jsx)("div",{className:"inline-block",children:this.state.myData.map((function(e){return Object(b.jsx)("div",{className:"p-3",children:Object(b.jsxs)("table",{className:"border-black border",children:[Object(b.jsx)("tr",{children:Object(b.jsx)("td",{className:"border-black border px-10 font-bold bg-gray-200",children:e.LocationText})}),Object(b.jsx)("tr",{children:Object(b.jsxs)("td",{className:"border-black border px-10",children:["State: ",e.State]})}),Object(b.jsx)("tr",{children:Object(b.jsxs)("td",{className:"border-black border px-10",children:["Location: (",e.Lat,", ",e.Long,")"," "]})}),Object(b.jsx)("tr",{children:Object(b.jsxs)("td",{className:"border-black border px-10",children:["Population (estimated): ",e.EstimatedPopulation]})}),Object(b.jsxs)("tr",{children:[" ",Object(b.jsxs)("td",{className:"border-black border px-10",children:["Total Wages: ",e.TotalWages]})]})]})})}))}),n=Object(b.jsx)("div",{children:"No Results. "});return Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{className:"form-inline my-4",children:[Object(b.jsxs)("label",{children:["Enter Zip Code: ",Object(b.jsx)("br",{})]}),Object(b.jsx)("input",{type:"text",placeholder:"10065",defaultValue:this.state.zipcode,onChange:function(t){return e.handleInputChange(t.target.value)},className:"border-2 border-black rounded-md px-2 text-center m-2"})]}),this.state.invalid?n:t]})}}]),n}(a.Component),u=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={city:"",resData:[]},a.handleInputChange=a.handleInputChange.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(){var e=this;fetch("https://ctp-zip-api.herokuapp.com/city/"+this.state.city).then((function(e){return e.json()})).then((function(t){e.setState({resData:t})})).catch((function(e){console.log("Error:",e)}))}},{key:"handleInputChange",value:function(e){var t=e.trim().toUpperCase();this.setState({resData:[],city:t})}},{key:"render",value:function(){var e=this,t=Object(b.jsx)("div",{className:"grid grid-cols-5 gap-4",children:this.state.resData.map((function(e){return Object(b.jsxs)("div",{className:"border-2",children:[" ",e," "]})}))}),n=Object(b.jsx)("div",{children:"No Results. "});return Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{className:"form-inline my-4",children:[Object(b.jsxs)("label",{children:["Enter City Name: ",Object(b.jsx)("br",{})]}),Object(b.jsx)("input",{type:"text",placeholder:"Sushi City",defaultValue:this.state.city,onChange:function(t){return e.handleInputChange(t.target.value)},className:"border-2 border-black rounded-md px-2 text-center m-2"})]}),0===this.state.resData.length?n:t]})}}]),n}(a.Component),p=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"container bg-black text-white text-center",children:[Object(b.jsx)("h1",{className:"text-3xl p-2 m-0",children:"Zip Code Search"}),Object(b.jsx)("h3",{className:"p-2 m-0",children:" by Team Foodies "})]}),Object(b.jsxs)("div",{className:"container text-center",children:[Object(b.jsx)(j,{}),Object(b.jsx)(u,{})]})]})}}]),n}(a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),x()},8:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.02cb7ec0.chunk.js.map