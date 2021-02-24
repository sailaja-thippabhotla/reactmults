module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(3)()},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(1),a=n.n(i);function s(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d(e);if(t){var r=d(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,o,i=f(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={placeholder:t.props.placeholder,showDropdown:!1,selected:t.props.selected,options:[]},t}return t=a,(n=[{key:"setSelected",value:function(){}},{key:"setOptions",value:function(){var e=this;if(0!=this.props.options.length){var t=[];"object"===c(this.props.options[0])?this.props.options.map((function(n,o){var r=n[e.props.optionKey],i=n[e.props.optionLabel];t.push({key:r,label:i})})):"string"==typeof this.props.options[0]&&this.props.options.map((function(e){t.push({key:e,label:e})})),this.setState({options:t})}else console.log("React Dropdown Multiselect Error: options array is empty.")}},{key:"componentDidMount",value:function(){this.setOptions(),document.addEventListener("mousedown",this.handleClickOutside.bind(this))}},{key:"handleClickOutside",value:function(e){!1!==this.state.showDropdown&&0==this.node.contains(e.target)&&this.setState({showDropdown:!1})}},{key:"getPlaceholderValue",value:function(){if(0==this.state.selected.length)return this.props.placeholder;if(null!==this.props.placeholderMultipleChecked&&this.state.selected.length>1)return this.props.placeholderMultipleChecked;var e=s(this.state.options);if(0==e.length)return this.props.placeholder;var t=[];return this.props.optionKey,this.state.selected.map((function(n){var o=e.find((function(e){return e.key==n}));t.push(o.label)})),t.join(", ")}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside.bind(this))}},{key:"handleClick",value:function(){this.setState({showDropdown:!this.state.showDropdown})}},{key:"handleChange",value:function(e){if(void 0!==e.currentTarget){var t=s(this.state.selected),n=e.currentTarget.value;if(e.currentTarget.checked)t.push(n);else{var o=t.indexOf(n);t.splice(o,1)}this.setState({selected:t}),void 0!==this.props.handleOnChange&&this.props.handleOnChange(t)}}},{key:"handleSelectDeselectAll",value:function(){if(this.state.selected.length==this.state.options.length)this.setState({selected:[]}),void 0!==this.props.handleOnChange&&this.props.handleOnChange([]);else{var e=this.state.options,t=[];e.map((function(e){t.push(e.key.toString())})),this.setState({selected:t}),void 0!==this.props.handleOnChange&&this.props.handleOnChange(t)}}},{key:"render",value:function(){var e=this,t=1==this.state.showDropdown?"dropdown-menu show":"dropdown-menu";return r.a.createElement("div",{className:"dropdown",ref:function(t){return e.node=t}},r.a.createElement("button",{className:"btn dropdown-toggle ".concat(this.props.buttonClass),type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:function(){return e.handleClick()},style:{width:"100%",overflow:"hidden"}},r.a.createElement("span",{style:{overflow:"hidden",textOverflow:"ellipsis",width:"100%",float:"left",textAlign:"left",paddingRight:"6px",marginRight:"-6px"}},this.getPlaceholderValue())),r.a.createElement("div",{className:t,style:{padding:0,width:"100%"}},!0===this.props.showSelectToggle&&r.a.createElement("div",{className:"btn-group btn-group-sm btn-block"},r.a.createElement("button",{className:"actions-btn btn btn-light",onClick:function(){return e.handleSelectDeselectAll()}},this.props.selectDeselectLabel)),this.state.options.map((function(t,n){return r.a.createElement("div",{key:n,className:"dropdown-item"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{value:t.key,id:"multiselect-".concat(e.props.name,"-").concat(n),className:"form-check-input",type:"checkbox",name:"".concat(e.props.name,"[]"),onChange:function(t){return e.handleChange(t)},checked:e.state.selected.indexOf(t.key.toString())>-1?"checked":""}),r.a.createElement("label",{className:"form-check-label",style:{userSelect:"none",width:"100%"},htmlFor:"multiselect-".concat(e.props.name,"-").concat(n)},t.label)))}))))}}])&&u(t.prototype,n),o&&u(t,o),a}(r.a.Component);y.propTypes={buttonClass:a.a.string,selected:a.a.array,value:a.a.array,placeholder:a.a.string,selectDeselectLabel:a.a.string,placeholderMultipleChecked:a.a.string,options:a.a.array.isRequired,name:a.a.string.isRequired,showSelectToggle:a.a.bool,optionKey:a.a.string,optionLabel:a.a.string},y.defaultProps={placeholder:"Nothing selected",selectDeselectLabel:"Select/Deselect All",buttonClass:"btn-light",placeholderMultipleChecked:null,selected:[],showSelectToggle:!0,optionKey:"key",optionLabel:"label"},t.default=y},function(e,t,n){"use strict";var o=n(4);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);