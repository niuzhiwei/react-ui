webpackJsonp_name_([17],{3:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var d=n(1),a=o(d),u=n(5),p=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){window.prettyPrint(null,(0,u.findDOMNode)(this.code))},t.prototype.render=function(){var e=this.props.children.split("\n").filter(function(e){return e.length>0}),t=e[0]?/^(\s*)/.exec(e[0])[1].length:0,n=new RegExp("^(\\s{"+t+"})");return e=e.map(function(e){return e.replace(n,"")}),a.default.createElement("div",{className:"code"},a.default.createElement("pre",{className:"prettyprint"},e.join("\n")))},t}(d.Component);p.propTypes={children:d.PropTypes.string},p.defaultProps={children:""},t.default=p},4:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var l=n(1),r=o(l),i=n(2),d=o(i),a=function(e){return r.default.createElement("div",{className:(0,d.default)("docs-example",e.className)},e.children)};a.propTypes={children:l.PropTypes.any,className:l.PropTypes.string},e.exports=a},159:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var l=n(1),r=o(l),i=n(3),d=o(i),a=n(4),u=o(a),p=n(9);e.exports=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:"header"},r.default.createElement("h1",null,"Popover")),r.default.createElement("div",{className:"content button-docs"},r.default.createElement(d.default,null,"<Popover\n  position={string}   // one of 'top-left|top|top-right|left|right|bootom-left|bootom|bootom-right', default value is 'top'\n  background=\"string\" // background color\n  border=\"string\"     // border color\n  trigger=\"string\"    // one fo 'click|hover', default value is 'click'\n>\n[                     // children must be an array with 2 ReactElement\n  ReactElement,       // first element is handle\n  ReactElement        // second element is pop content\n]\n</Popover>"),r.default.createElement("h2",{className:"subhead"},"Example"),r.default.createElement(u.default,null,r.default.createElement(p.Popover,null,r.default.createElement(p.Button,null,"Text"),r.default.createElement("div",{style:{padding:10}},"Some text")),r.default.createElement(p.Popover,null,r.default.createElement(p.Button,null,"Width Title"),r.default.createElement("div",{style:{padding:"1rem",width:300}},r.default.createElement("h4",null,"Title"),"Some quick example text to build on the card title and make up the bulk of the card's content.")),r.default.createElement(p.Popover,null,r.default.createElement(p.Button,null,"Image"),r.default.createElement("div",{style:{padding:6}},r.default.createElement(p.Image,{type:"fill",width:200,height:120,src:"./images/image1.jpg"}))),r.default.createElement(p.Popover,{trigger:"hover"},r.default.createElement(p.Button,null,"Hover"),r.default.createElement("div",{style:{padding:6}},r.default.createElement(p.Image,{type:"fill",width:200,height:120,src:"./images/image1.jpg"})))),r.default.createElement(d.default,null,'          <Popover>\n            <Button>Text</Button>\n            <div style={{padding: 10}}>Some text</div>\n          </Popover>\n\n          <Popover>\n            <Button>Width Title</Button>\n            <div style={{padding: \'1rem\', width: 300}}>\n              <h4>Title</h4>\n              Some quick example text to build on the card title and make up the bulk of the card\'s content.\n            </div>\n          </Popover>\n\n          <Popover>\n            <Button>Image</Button>\n            <div style={{padding: 6}}>\n              <Image type="fill" width={200} height={120} src="./images/image1.jpg" />\n            </div>\n          </Popover>\n\n          <Popover trigger="hover">\n            <Button>Hover</Button>\n            <div style={{padding: 6}}>\n              <Image type="fill" width={200} height={120} src="./images/image1.jpg" />\n            </div>\n          </Popover>'),r.default.createElement("h2",{className:"subhead"},"Position"),r.default.createElement(u.default,null,r.default.createElement("div",{className:"popover-demo"},r.default.createElement(p.Popover,{position:"top-left",trigger:"hover"},r.default.createElement("div",null,"top-left"),r.default.createElement("div",{style:{padding:10}},"Some text")),r.default.createElement(p.Popover,{position:"top",trigger:"hover"},r.default.createElement("div",null,"top"),r.default.createElement("div",{style:{padding:10}},"Some text")),r.default.createElement(p.Popover,{position:"top-right",trigger:"hover"},r.default.createElement("div",null,"top-right"),r.default.createElement("div",{style:{padding:10}},"Some text")),r.default.createElement(p.Popover,{position:"left",trigger:"hover"},r.default.createElement("div",null,"left"),r.default.createElement("div",{style:{padding:10}},"Some text")),r.default.createElement("div",{style:{border:0,background:"transparent"}}," "),r.default.createElement(p.Popover,{position:"right",trigger:"hover"},r.default.createElement("div",null,"right"),r.default.createElement("div",{style:{padding:10}},"Some text")),r.default.createElement(p.Popover,{position:"bottom-left",trigger:"hover"},r.default.createElement("div",null,"bottom-left"),r.default.createElement("div",{style:{padding:10}},"Some text")),r.default.createElement(p.Popover,{position:"bottom",trigger:"hover"},r.default.createElement("div",null,"bottom"),r.default.createElement("div",{style:{padding:10}},"Some text")),r.default.createElement(p.Popover,{position:"bottom-right",trigger:"hover"},r.default.createElement("div",null,"bottom-right"),r.default.createElement("div",{style:{padding:10}},"Some text")))),r.default.createElement(d.default,null,'          <div className="popover-demo">\n            <Popover position="top-left" trigger="hover">\n              <div>top-left</div>\n              <div style={{padding: 10}}>Some text</div>\n            </Popover>\n            <Popover position="top" trigger="hover">\n              <div>top</div>\n              <div style={{padding: 10}}>Some text</div>\n            </Popover>\n            <Popover position="top-right" trigger="hover">\n              <div>top-right</div>\n              <div style={{padding: 10}}>Some text</div>\n            </Popover>\n            <Popover position="left" trigger="hover">\n              <div>left</div>\n              <div style={{padding: 10}}>Some text</div>\n            </Popover>\n            <div style={{border: 0, background: \'transparent\'}}>&nbsp;</div>\n            <Popover position="right" trigger="hover">\n              <div>right</div>\n              <div style={{padding: 10}}>Some text</div>\n            </Popover>\n            <Popover position="bottom-left" trigger="hover">\n              <div>bottom-left</div>\n              <div style={{padding: 10}}>Some text</div>\n            </Popover>\n            <Popover position="bottom" trigger="hover">\n              <div>bottom</div>\n              <div style={{padding: 10}}>Some text</div>\n            </Popover>\n            <Popover position="bottom-right" trigger="hover">\n              <div>bottom-right</div>\n              <div style={{padding: 10}}>Some text</div>\n            </Popover>\n          </div>'),r.default.createElement("h2",{className:"subhead"},"BackgroundColor & BorderColor"),r.default.createElement(u.default,null,r.default.createElement(p.Popover,{background:"#ddd",border:"#f00"},r.default.createElement(p.Button,null,"click me"),r.default.createElement("div",{style:{padding:"1rem",width:300}},r.default.createElement("h4",null,"Title"),"Some quick example text to build on the card title and make up the bulk of the card's content."))),r.default.createElement(d.default,null,'          <Popover background="#ddd" border="#f00">\n            <Button>click me</Button>\n            <div style={{padding: \'1rem\', width: 300}}>\n              <h4>Title</h4>\n              Some quick example text to build on the card title and make up the bulk of the card\'s content.\n            </div>\n          </Popover>')))}}});