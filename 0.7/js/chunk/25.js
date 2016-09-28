webpackJsonp_name_([25],{3:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=a(1),m=i(r),s=a(5),g=function(e){function t(){return l(this,t),n(this,e.apply(this,arguments))}return h(t,e),t.prototype.componentDidMount=function(){window.prettyPrint(null,(0,s.findDOMNode)(this.code))},t.prototype.render=function(){var e=this.props.children.split("\n").filter(function(e){return e.length>0}),t=e[0]?/^(\s*)/.exec(e[0])[1].length:0,a=new RegExp("^(\\s{"+t+"})");return e=e.map(function(e){return e.replace(a,"")}),m.default.createElement("div",{className:"code"},m.default.createElement("pre",{className:"prettyprint"},e.join("\n")))},t}(r.Component);g.propTypes={children:r.PropTypes.string},g.defaultProps={children:""},t.default=g},4:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var l=a(1),n=i(l),h=a(2),r=i(h),m=function(e){return n.default.createElement("div",{className:(0,r.default)("docs-example",e.className)},e.children)};m.propTypes={children:l.PropTypes.any,className:l.PropTypes.string},e.exports=m},149:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e){var t=arguments.length<=1||void 0===arguments[1]?"m":arguments[1];return"https://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret+"_"+t+".jpg"}var m=a(1),s=i(m),g=a(24),u=i(g),c=a(3),d=i(c),p=a(4),f=i(p),o=a(9);e.exports=function(e){function t(a){l(this,t);var i=n(this,e.call(this,a));return i.state={photos:[]},i}return h(t,e),t.prototype.componentWillMount=function(){var e=this;u.default.get("./json/photos.json").then(function(e){return e.photos.photo}).then(function(t){return e.setState({photos:t})})},t.prototype.render=function(){var e=this.state.photos;return s.default.createElement("div",null,s.default.createElement("div",{className:"header"},s.default.createElement("h1",null,"Image")),s.default.createElement("div",{className:"content"},s.default.createElement(d.default,null,"<Image\n  className={string}\n  style={object}\n  shape={string}         // one of 'rounded|circle|thumbnail'\n  type={string}          // one of 'fit|center|fill|stretch'\n  width={string|number}  // style width, default is '100%'\n  height={string|number} // if height is percentage, aspect ratio of width\n  placeholder={element}  // show before image loaded\n  src={string}           // image url\n  alt={string}           // alternate image url\n  title={string}         // image load error text\n  href={string}          // large image url\n  target={string}        // one of '_modal|_self|_blank', default value is '_modal'\n  lazy={bool}            // default value is false\n/>"),s.default.createElement("h2",{className:"subhead"},"Example"),s.default.createElement(f.default,null,s.default.createElement(o.Image,{width:200,height:200,src:"./images/image1.jpg"})),s.default.createElement(d.default,null,'            <Image width={200} height={200} src="./images/image1.jpg" />'),s.default.createElement("h2",{className:"subhead"},"Shape"),s.default.createElement(f.default,null,s.default.createElement(o.Image,{shape:"rounded",width:200,height:200,title:"200 x 200"}),s.default.createElement(o.Image,{shape:"circle",width:200,height:200,title:"200 x 200"}),s.default.createElement(o.Image,{shape:"thumbnail",width:200,height:200,title:"200 x 200"})),s.default.createElement(d.default,null,'            <Image shape="rounded" width={200} height={200} title="200 x 200" />\n            <Image shape="circle" width={200} height={200} title="200 x 200" />\n            <Image shape="thumbnail" width={200} height={200} title="200 x 200" />'),s.default.createElement("h2",{className:"subhead"},"Ratio height"),s.default.createElement(f.default,null,s.default.createElement(o.Grid,{width:1/3},s.default.createElement(o.Image,{shape:"thumbnail",type:"fit",width:"100%",height:"120%",src:"./images/image1.jpg"})),s.default.createElement(o.Grid,{width:1/3},s.default.createElement(o.Image,{shape:"thumbnail",type:"fit",width:"100%",height:"100%",src:"./images/image2.jpg"})),s.default.createElement(o.Grid,{width:1/3},s.default.createElement(o.Image,{shape:"thumbnail",type:"fit",width:"100%",height:"80%",src:"./images/image3.jpg"}))),s.default.createElement(d.default,null,'            <Grid width={1 / 3}>\n              <Image shape="thumbnail" type="fit" width="100%" height="120%" src="./images/image1.jpg" />\n            </Grid>\n            <Grid width={1 / 3}>\n              <Image shape="thumbnail" type="fit" width="100%" height="100%" src="./images/image2.jpg" />\n            </Grid>\n            <Grid width={1 / 3}>\n              <Image shape="thumbnail" type="fit" width="100%" height="80%" src="./images/image3.jpg" />\n            </Grid>'),s.default.createElement("h2",{className:"subhead"},"Not found"),s.default.createElement(f.default,null,s.default.createElement(o.Image,{src:"not_exist",shape:"thumbnail",type:"fit",width:200,height:200}),s.default.createElement(o.Image,{src:"not_exist",title:"Some text",shape:"thumbnail",type:"fit",width:200,height:200})),s.default.createElement(d.default,null,'            <Image src="not_exist" shape="thumbnail" type="fit" width={200} height={200} />\n            <Image src="not_exist" title="Some text" shape="thumbnail" type="fit" width={200} height={200} />'),s.default.createElement("h2",{className:"subhead"},"Alternate"),s.default.createElement(f.default,null,s.default.createElement(o.Image,{src:"not_exist",alt:"./images/image1.jpg",shape:"thumbnail",type:"fit",width:200,height:200})),s.default.createElement(d.default,null,'            <Image src="not_exist" alt="./images/image1.jpg" shape="thumbnail" type="fit" width={200} height={200} />'),s.default.createElement("h2",{className:"subhead"},"Target"),s.default.createElement(f.default,null,s.default.createElement(o.Image,{href:"./images/image1.jpg",target:"_modal",shape:"thumbnail",type:"fit",width:200,height:200,src:"./images/image1.jpg"}),s.default.createElement(o.Image,{href:"./images/image2.jpg",target:"_blank",shape:"thumbnail",type:"fit",width:200,height:200,src:"./images/image2.jpg"}),s.default.createElement(o.Image,{href:"./images/image3.jpg",target:"_self",shape:"thumbnail",type:"fit",width:200,height:200,src:"./images/image3.jpg"})),s.default.createElement(d.default,null,'            <Image href="./images/image1.jpg" target="_modal" shape="thumbnail" type="fit" width={200} height={200} src="./images/image1.jpg" />\n            <Image href="./images/image2.jpg" target="_blank" shape="thumbnail" type="fit" width={200} height={200} src="./images/image2.jpg" />\n            <Image href="./images/image3.jpg" target="_self" shape="thumbnail" type="fit" width={200} height={200} src="./images/image3.jpg" />'),s.default.createElement("h2",{className:"subhead"},"Type Fit"),s.default.createElement(f.default,null,s.default.createElement(o.Image,{shape:"thumbnail",type:"fit",width:200,height:200,src:"./images/image1.jpg"}),s.default.createElement(o.Image,{shape:"thumbnail",type:"fit",width:200,height:200,src:"./images/image2.jpg"}),s.default.createElement(o.Image,{shape:"thumbnail",type:"fit",width:200,height:200,src:"./images/image3.jpg"})),s.default.createElement(d.default,null,'            <Image shape="thumbnail" type="fit" width={200} height={200} src="./images/image1.jpg" />\n            <Image shape="thumbnail" type="fit" width={200} height={200} src="./images/image2.jpg" />\n            <Image shape="thumbnail" type="fit" width={200} height={200} src="./images/image3.jpg" />'),s.default.createElement("h2",{className:"subhead"},"Type Center"),s.default.createElement(f.default,null,s.default.createElement(o.Image,{shape:"thumbnail",type:"center",width:200,height:200,src:"./images/image1.jpg"}),s.default.createElement(o.Image,{shape:"thumbnail",type:"center",width:200,height:200,src:"./images/image2.jpg"}),s.default.createElement(o.Image,{shape:"thumbnail",type:"center",width:200,height:200,src:"./images/image3.jpg"})),s.default.createElement(d.default,null,'            <Image shape="thumbnail" type="center" width={200} height={200} src="./images/image1.jpg" />\n            <Image shape="thumbnail" type="center" width={200} height={200} src="./images/image2.jpg" />\n            <Image shape="thumbnail" type="center" width={200} height={200} src="./images/image3.jpg" />'),s.default.createElement("h2",{className:"subhead"},"Type Stretch"),s.default.createElement(f.default,null,s.default.createElement(o.Image,{shape:"thumbnail",type:"stretch",width:200,height:200,src:"./images/image1.jpg"}),s.default.createElement(o.Image,{shape:"thumbnail",type:"stretch",width:200,height:200,src:"./images/image2.jpg"}),s.default.createElement(o.Image,{shape:"thumbnail",type:"stretch",width:200,height:200,src:"./images/image3.jpg"})),s.default.createElement(d.default,null,'            <Image shape="thumbnail" type="stretch" width={200} height={200} src="./images/image1.jpg" />\n            <Image shape="thumbnail" type="stretch" width={200} height={200} src="./images/image2.jpg" />\n            <Image shape="thumbnail" type="stretch" width={200} height={200} src="./images/image3.jpg" />'),s.default.createElement("h2",{className:"subhead"},"Type Fill"),s.default.createElement(f.default,null,s.default.createElement(o.Image,{shape:"thumbnail",type:"fill",width:200,height:200,src:"./images/image1.jpg"}),s.default.createElement(o.Image,{shape:"thumbnail",type:"fill",width:200,height:200,src:"./images/image2.jpg"}),s.default.createElement(o.Image,{shape:"thumbnail",type:"fill",width:200,height:200,src:"./images/image3.jpg"})),s.default.createElement(d.default,null,'            <Image shape="thumbnail" type="fill" width={200} height={200} src="./images/image1.jpg" />\n            <Image shape="thumbnail" type="fill" width={200} height={200} src="./images/image2.jpg" />\n            <Image shape="thumbnail" type="fill" width={200} height={200} src="./images/image3.jpg" />'),s.default.createElement("h2",{className:"subhead"},"Lazy"),s.default.createElement(f.default,null,e.map(function(e){return s.default.createElement(o.Grid,{key:e.id,width:1/3},s.default.createElement(o.Image,{lazy:!0,shape:"thumbnail",type:"fit",width:"100%",height:"100%",title:e.title,style:{margin:"0 5px 5px 0"},href:r(e,"b"),src:r(e)}))})),s.default.createElement(d.default,null,'            {\n              photos.map(d => (\n                <Grid key={d.id} width={1 / 3}>\n                  <Image lazy shape="thumbnail" type="fit"\n                    width="100%" height="100%" title={d.title}\n                    style={{margin: \'0 5px 5px 0\'}}\n                    href={getUrl(d, \'b\')}\n                    src={getUrl(d)} />\n                </Grid>\n              ))\n            }')))},t}(m.Component)}});