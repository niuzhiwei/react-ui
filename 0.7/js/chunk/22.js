webpackJsonp_name_([22],{3:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),i=a(u),o=n(5),s=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return c(t,e),t.prototype.componentDidMount=function(){window.prettyPrint(null,(0,o.findDOMNode)(this.code))},t.prototype.render=function(){var e=this.props.children.split("\n").filter(function(e){return e.length>0}),t=e[0]?/^(\s*)/.exec(e[0])[1].length:0,n=new RegExp("^(\\s{"+t+"})");return e=e.map(function(e){return e.replace(n,"")}),i.default.createElement("div",{className:"code"},i.default.createElement("pre",{className:"prettyprint"},e.join("\n")))},t}(u.Component);s.propTypes={children:u.PropTypes.string},s.defaultProps={children:""},t.default=s},4:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var l=n(1),r=a(l),c=n(2),u=a(c),i=function(e){return r.default.createElement("div",{className:(0,u.default)("docs-example",e.className)},e.children)};i.propTypes={children:l.PropTypes.any,className:l.PropTypes.string},e.exports=i},153:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var l=n(1),r=a(l),c=n(3),u=a(c),i=n(4),o=a(i),s=n(9);e.exports=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:"header"},r.default.createElement("h1",null,"Mask")),r.default.createElement("div",{className:"content"},r.default.createElement(u.default,null,"<Mask\n  className={string}\n  active={bool}        // default value is false\n  background={string}  // background style\n  style={object}\n>\n  <Spin />\n</Mask>"),r.default.createElement("h2",{className:"subhead"},"Example"),r.default.createElement(o.default,null,r.default.createElement(s.Grid,{width:.5,style:{height:200}},r.default.createElement(s.Mask,{active:!0}))),r.default.createElement(u.default,null,"          <Grid width={1 / 2} style={{height: 200}}>\n            <Mask active />\n          </Grid>"),r.default.createElement("h2",{className:"subhead"},"Custom Content"),r.default.createElement(o.default,null,r.default.createElement(s.Grid,{width:.5,style:{height:200}},r.default.createElement(s.Mask,{active:!0,background:"#ccc"},r.default.createElement("div",{style:{textAlign:"center"}},r.default.createElement(s.Spin,{size:30,color:"green",type:"wave"}),"loading...")))),r.default.createElement(u.default,null,'          <Grid width={1 / 2} style={{height: 200}}>\n            <Mask active background="#ccc">\n              <div style={{textAlign: \'center\'}}>\n                <Spin size={30} color="green" type="wave" />\n                loading...\n              </div>\n            </Mask>\n          </Grid>')))}}});