webpackJsonp_name_([30],{3:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=n(1),u=l(o),c=n(5),s=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){window.prettyPrint(null,(0,c.findDOMNode)(this.code))},t.prototype.render=function(){var e=this.props.children.split("\n").filter(function(e){return e.length>0}),t=e[0]?/^(\s*)/.exec(e[0])[1].length:0,n=new RegExp("^(\\s{"+t+"})");return e=e.map(function(e){return e.replace(n,"")}),u.default.createElement("div",{className:"code"},u.default.createElement("pre",{className:"prettyprint"},e.join("\n")))},t}(o.Component);s.propTypes={children:o.PropTypes.string},s.defaultProps={children:""},t.default=s},4:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var a=n(1),r=l(a),i=n(2),o=l(i),u=function(e){return r.default.createElement("div",{className:(0,o.default)("docs-example",e.className)},e.children)};u.propTypes={children:a.PropTypes.any,className:a.PropTypes.string},e.exports=u},142:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(1),u=l(o),c=n(3),s=l(c),f=n(4),m=l(f),d=n(10),p=n(9);e.exports=function(e){function t(n){a(this,t);var l=r(this,e.call(this,n));return l.state={filterText:""},l}return i(t,e),t.prototype.render=function(){var e=this;return u.default.createElement("div",null,u.default.createElement("div",{className:"header"},u.default.createElement("h1",null,"Filter")),u.default.createElement("div",{className:"content"},u.default.createElement(d.Cn,null,u.default.createElement(s.default,null,"<Filter\n    columns={number}              // 如果填写，filter选项会按指定的列数排列，否则无序排列\n    labelWidth={number|string}    // label 宽度，未设定columns，不要填写\n    className={string}\n    style={object}\n    onFilter={func(data)}         // 外部回调事件，返回当前filter表单值，如果是内部筛选，不要传入\n    items={[{                     // filter选项列表，数组\n      label: 'string'             // 显示label文字\n      column: {integer}           // 分列后，如果某项比较长，可以手动指定column\n      name: 'string'              // required，获取数据的key，component不需要写name\n      componenent: {ReactElement} // Input, Datepicker, Select 等Form 元素\n      filter: func(               // 如果使用内部筛选，需要传入筛选方法，返回值是array\n        value,                    // 第一个参数，component的value\n        data                      // 第二个参数，筛选的源数据\n      )   \n    }]}\n  />")),u.default.createElement(d.En,null,u.default.createElement(s.default,null,"<Filter\n    columns={number}              // default is undefined\n    labelWidth={number|string}    // if columns not set, ignore\n    className={string}\n    style={object}\n    onFilter={function(\n      data                        // object, callback data\n    )}\n    items={[{                     // array, item list\n      label: 'string'             // text\n      column: {integer}           // use if item's width over 1 column, default value is 1\n      name: 'string'              // required\n      componenent: {ReactElement} // Form Component, like Input, Datepicker, Select\n      filter: func(               // array result\n        value,                    // item value\n        data                      // origin data\n      )   \n    }]}\n  />")),u.default.createElement(d.Cn,null,"0.7 彻底重写了Filter组件，原来的组件有点过于理想化，并且稍微有点复杂，改为一个比较常用的实现。"),u.default.createElement("h2",{className:"subhead"},"Example"),u.default.createElement(m.default,null,u.default.createElement(p.Filter,{columns:3,labelWidth:"5rem",onFilter:function(t){return e.setState({filterText:JSON.stringify(t)})},items:[{label:"Name:",name:"name",component:u.default.createElement(p.Input,null),filter:function(e,t){return t.filter(function(t){return t.name.indexOf(e)>-1})}},{label:"Birthday:",name:"birthday",column:2,component:u.default.createElement(p.DatepickerRange,{type:"date"})},{label:"Email:",name:"email",component:u.default.createElement(p.Input,null)},{label:"Nationality:",name:"nationality",component:u.default.createElement(p.Select,{data:["Chinese","English","American","Spanish"]})}]}),u.default.createElement("div",null,this.state.filterText)),u.default.createElement(s.default,null,"<Filter\n  columns={3}\n  labelWidth=\"5rem\"\n  onFilter={fs => this.setState({ filterText: JSON.stringify(fs) })}\n  items={[\n    {\n      label: 'Name:',\n      name: 'name',\n      component: <Input />,\n      filter: (value, data) => data.filter((d) => d.name.indexOf(value) > -1)\n    }, {\n      label: 'Birthday:',\n      name: 'birthday',\n      column: 2,\n      component: <DatepickerRange type=\"date\" />\n    }, {\n      label: 'Email:',\n      name: 'email',\n      component: <Input />\n    }, {\n      label: 'Nationality:',\n      name: 'nationality',\n      component: <Select data={['Chinese', 'English', 'American', 'Spanish']} />\n    }\n  ]} />\n<div>{this.state.filterText}</div>"),u.default.createElement("h2",{className:"subhead"},"Inner Filter"),u.default.createElement(d.Cn,null,"内部过滤示例见",u.default.createElement("a",{href:"#table"},"Table")),u.default.createElement(d.En,null,"Example see ",u.default.createElement("a",{href:"#table"},"Table"))))},t}(u.default.Component)}});