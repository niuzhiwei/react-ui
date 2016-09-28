webpackJsonp_name_([23],{3:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var d=n(1),o=l(d),p=n(5),i=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return u(t,e),t.prototype.componentDidMount=function(){window.prettyPrint(null,(0,p.findDOMNode)(this.code))},t.prototype.render=function(){var e=this.props.children.split("\n").filter(function(e){return e.length>0}),t=e[0]?/^(\s*)/.exec(e[0])[1].length:0,n=new RegExp("^(\\s{"+t+"})");return e=e.map(function(e){return e.replace(n,"")}),o.default.createElement("div",{className:"code"},o.default.createElement("pre",{className:"prettyprint"},e.join("\n")))},t}(d.Component);i.propTypes={children:d.PropTypes.string},i.defaultProps={children:""},t.default=i},4:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var a=n(1),r=l(a),u=n(2),d=l(u),o=function(e){return r.default.createElement("div",{className:(0,d.default)("docs-example",e.className)},e.children)};o.propTypes={children:a.PropTypes.any,className:a.PropTypes.string},e.exports=o},151:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var a=n(1),r=l(a),u=n(3),d=l(u),o=n(4),p=l(o),i=n(10),c=n(9);e.exports=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:"header"},r.default.createElement("h1",null,"Input"),r.default.createElement(i.Cn,{tag:"h2"},"输入框")),r.default.createElement("div",{className:"content"},r.default.createElement(d.default,null,"<Input\n  id={string}\n  type={string}        // text, email, alpha, alphanum, password, url, number, integer\n  placeholder={string}\n  readOnly={bool}      // default is false\n  trigger={string}     // 'blur|change|keyDown|keyUp', default is 'change'\n  onChange={func}      // callback on trigger\n  size=\"string\"        // 'large|middle|small', default value is 'middle'\n  value={string}       // initial value\n  grid={{width, offset, responsive}} // see Grid \n/>"),r.default.createElement(i.Cn,null,"0.6 textarea 不再包含在Input中"),r.default.createElement("h2",{className:"subhead"},"onChange(value, event)"),r.default.createElement(i.Cn,null,"onChagne的回调参数，第一个参数是value，第二参数是event"),r.default.createElement(i.En,null,"first argument is value, second is event."),r.default.createElement("h2",{className:"subhead"},"Example"),r.default.createElement(p.default,null,r.default.createElement(c.Input,{grid:.25,placeholder:"text"}),r.default.createElement("br",null),r.default.createElement(c.Input,{type:"integer",grid:1/6,placeholder:"integer"}),r.default.createElement("br",null),r.default.createElement(c.Input,{readOnly:!0,grid:.25,placeholder:"readOnly"}),r.default.createElement("br",null),r.default.createElement(c.Input,{value:"init value",grid:.25,onChange:function(e){return console.log(e)},placeholder:"none"}),r.default.createElement("br",null),r.default.createElement(c.Input,{value:"change trigger",trigger:"change",onChange:function(e){return console.log(e)},grid:1/3})),r.default.createElement(d.default,null,'<Input grid={1 / 4} placeholder="text" /><br />\n<Input type="integer" grid={1 / 6} placeholder="integer" /><br />\n<Input readOnly grid={1 / 4} placeholder="readOnly" /><br />\n<Input value="init value" grid={1 / 4} onChange={(value) => console.log(value)} placeholder="none" /><br />\n<Input value="change trigger" trigger="change" onChange={(value) => console.log(value)} grid={1 / 3} />'),r.default.createElement("h2",{className:"subhead"},"Size"),r.default.createElement(p.default,null,r.default.createElement(c.Input,{grid:.25,size:"small",placeholder:"small"}),r.default.createElement(c.Input,{grid:.25,placeholder:"middle"}),r.default.createElement(c.Input,{grid:.25,size:"large",placeholder:"large"})),r.default.createElement(d.default,null,'<Input grid={1 / 4} size="small" placeholder="small" />\n<Input grid={1 / 4} placeholder="middle" />\n<Input grid={1 / 4} size="large" placeholder="large" />'),r.default.createElement("h2",{className:"subhead"},"InputGroup"),r.default.createElement(d.default,null,"<InputGroup\n  className=\"string\"\n  size=\"string\"        // 'large|middle|small', default value is 'middle'\n  grid={{width, offset, responsive}} // 宽度，详见Grid\n>\n  'string'             // addon text\n  <Input />            // Input Element\n  <Button />           // Button Element\n</InputGroup>"),r.default.createElement(p.default,null,r.default.createElement(c.InputGroup,{grid:.5},"text",r.default.createElement(c.Input,{placeholder:"front addon"})),r.default.createElement(c.InputGroup,{grid:.5},r.default.createElement(c.Input,{placeholder:"end addon"}),"end"),r.default.createElement(c.InputGroup,{grid:.5},"front",r.default.createElement(c.Input,null),"end"),r.default.createElement(c.InputGroup,{grid:.5},r.default.createElement(c.Icon,{icon:"email"}),r.default.createElement(c.Input,{placeholder:"email"})),r.default.createElement(c.InputGroup,{grid:.5},r.default.createElement(c.Input,{placeholder:"button"}),r.default.createElement(c.Button,{status:"primary"},"button"))),r.default.createElement(d.default,null,'<InputGroup grid={1 / 2}>\n  text\n  <Input placeholder="front addon" />\n</InputGroup>\n\n<InputGroup grid={1 / 2}>\n  <Input placeholder="end addon" />\n  end\n</InputGroup>\n\n<InputGroup grid={1 / 2}>\n  front\n  <Input />\n  end\n</InputGroup>\n\n<InputGroup grid={1 / 2}>\n  <Icon icon="email" />\n  <Input placeholder="email" />\n</InputGroup>\n\n<InputGroup grid={1 / 2}>\n  <Input placeholder="button" />\n  <Button status="primary">button</Button>\n</InputGroup>'),r.default.createElement("h2",{className:"subhead"},"InputGroup size"),r.default.createElement(p.default,null,r.default.createElement(c.InputGroup,{size:"large"},"large",r.default.createElement(c.Input,{placeholder:"large input"}),r.default.createElement(c.Button,{status:"primary"},"button")),r.default.createElement(c.InputGroup,{size:"middle",grid:.75},"middle",r.default.createElement(c.Input,{placeholder:"middle input"}),r.default.createElement(c.Button,{status:"primary"},"button")),r.default.createElement(c.InputGroup,{size:"small",grid:.5},"small",r.default.createElement(c.Input,{placeholder:"small input"}),r.default.createElement(c.Button,{status:"primary"},"button"))),r.default.createElement(d.default,null,'<InputGroup size="large">\n  large\n  <Input placeholder="large input" />\n  <Button status="primary">button</Button>\n</InputGroup>\n\n<InputGroup size="middle" grid={3 / 4}>\n  middle\n  <Input placeholder="middle input" />\n  <Button status="primary">button</Button>\n</InputGroup>\n\n<InputGroup size="small" grid={1 / 2}>\n  small\n  <Input placeholder="small input" />\n  <Button status="primary">button</Button>\n</InputGroup>'),r.default.createElement(i.Cn,null,"更多示例见 ",r.default.createElement("a",{href:"#/formControl"},"FormControl"))))}}});