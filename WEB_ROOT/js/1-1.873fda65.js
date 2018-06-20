webpackJsonp([1],{408:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,o,c,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(0),d=i(u),h=n(47),f=n(46);n(422);var g=n(87),m=n(413),b=i(m),x=n(406),w=(s=(0,g.inject)("store"))(o=(0,g.observer)((c=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={flag:!1,email:"",pwd:"",chkpwd:"",hideFlag:!0,hideFlagChk:!0,emailHelp:"",pwdHelp:"",chkpwdHelp:"",redirect:!1},n.handleChange=n.handleChange.bind(n),n.handlePwdChange=n.handlePwdChange.bind(n),n.handlechkPwdChange=n.handlechkPwdChange.bind(n),n.registerSubmit=n.registerSubmit.bind(n),n}return l(t,e),p(t,[{key:"handlepwd",value:function(){this.setState({hideFlag:!this.state.hideFlag})}},{key:"handlepwdChk",value:function(){this.setState({hideFlagChk:!this.state.hideFlagChk})}},{key:"handleChange",value:function(){this.setState({flag:!this.state.flag})}},{key:"handleEmailChange",value:function(e){var t=e.target.value.replace(/\s/,"");this.setState({email:t})}},{key:"handlePwdChange",value:function(e){var t=e.target.value.replace(/\s/,"");this.setState({pwd:t})}},{key:"handlechkPwdChange",value:function(e){var t=e.target.value.replace(/\s/,"");this.setState({chkpwd:t});this.state.pwd}},{key:"registerSubmit",value:function(){var e=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,t=/^(?!\s)((?=.*[a-zA-Z])(?=.*[a-z])(?=.*[A-Z])(?=.*[\d]).\S{7,})$/;if(""==this.state.email||null===this.state.email)return this.setState({emailHelp:"电子邮箱地址不能为空"}),!1;if(!e.test(this.state.email))return this.setState({emailHelp:"请输入正确的电子邮件地址"}),!1;if(this.setState({emailHelp:""}),""===this.state.pwd||null===this.state.pwd)return this.setState({pwdHelp:"密码不能为空"}),!1;if(!t.test(this.state.pwd))return this.setState({pwdHelp:"最少需要8位密码，包括大写字母和数字"}),!1;if(this.setState({pwdHelp:""}),""===this.state.chkpwd||null==this.state.chkpwd)return this.setState({chkpwdHelp:"确认您的密码不能为空"}),!1;if(this.state.chkpwd!==this.state.pwd)return this.setState({chkpwdHelp:"两次密码输入不一致"}),!1;var n={email:this.state.email,pwd:this.state.pwd};this.register(n)}},{key:"register",value:function(e){var t=e;this.props.store.userStore.setUserInfo({email:e.email,name:e.email}),console.log(t),(0,b.default)({client:x.biss.api.v1.account.AccountClient,req:x.biss.api.v1.account.RegisterReq,mothod:"register",param:{email:e.email},callback:function(e,t){console.log(e,8848),console.log(t,8847),this.setState({redirect:!0,chkpwdHelp:""})}})}},{key:"render",value:function(){var e=this;return this.state.redirect?d.default.createElement(f.Redirect,{push:!0,to:"/registerEmail"}):d.default.createElement("div",{className:"register"},d.default.createElement("div",{className:"register_content"},d.default.createElement("span",{className:"rigister_logo"},"LOGO"),d.default.createElement("span",{className:"register_title"},"注册"),d.default.createElement("div",{className:"register_title_label"},d.default.createElement("i",{className:"register_whiffletree"}),d.default.createElement("span",{className:"register_title_label_info"},"开启全新数字货币交易之旅"),d.default.createElement("i",{className:"register_whiffletree"})),d.default.createElement("ul",{className:"register_inputs"},d.default.createElement("li",{className:""!==this.state.email?"activeColor":"nomalColor"},d.default.createElement("input",{type:"text",name:"email",placeholder:"输入您的电子邮件",onChange:function(t){return e.handleEmailChange(t)}})),d.default.createElement("span",{className:"help-block"},this.state.emailHelp),d.default.createElement("li",{className:""!==this.state.pwd?"activeColor registerInput":"nomalColor registerInput"},d.default.createElement("input",{type:this.state.hideFlag?"password":"text",name:"pwd",placeholder:"输入您的密码",onChange:function(t){return e.handlePwdChange(t)}}),d.default.createElement("i",{className:""==this.state.pwd?"icon-e90e pwdShow":"pwdHide icon-e90e",onClick:function(){e.handlepwd()}})),d.default.createElement("span",{className:"help-block"},this.state.pwdHelp),d.default.createElement("li",{className:""!==this.state.chkpwd?"activeColor registerInput":"nomalColor registerInput"},d.default.createElement("input",{type:this.state.hideFlagChk?"password":"text",name:"checkpwd",placeholder:"确认您的密码",onChange:function(t){return e.handlechkPwdChange(t)}}),"      ",d.default.createElement("i",{className:""==this.state.chkpwd?"icon-e90e pwdShow":"pwdHide icon-e90e",onClick:function(){e.handlepwdChk()}})),d.default.createElement("span",{className:"help-block"},this.state.chkpwdHelp)),d.default.createElement("div",{className:"register_checkbox"},d.default.createElement("i",{className:this.state.flag?"icon-e902":" noCheckbox ",onClick:function(){e.handleChange()}}),d.default.createElement("span",null,"我已阅读并同意"),d.default.createElement("a",null,"《用户协议》")),d.default.createElement("button",{className:this.state.flag?"register_button register_submit":"register_button",onClick:function(){e.registerSubmit()},disabled:!this.state.flag},"立即注册"),d.default.createElement("div",{className:"register_jump"},d.default.createElement("span",null,"已有账号？"),d.default.createElement(f.Link,{to:"/login"},"去登录"))))}}]),t}(u.Component),function(e,t,n,i,a){var r={};return Object.keys(i).forEach(function(e){r[e]=i[e]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=n.slice().reverse().reduce(function(n,i){return i(e,t,n)||n},r),a&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(a):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}(c.prototype,"register",[h.action],Object.getOwnPropertyDescriptor(c.prototype,"register"),c.prototype),o=c))||o)||o;t.default=w},413:function(e,t,n){"use strict";function i(e){return new e("http://10.2.0.5:80","h2",{})}function a(e,t){var n=new e;console.log(n);var i="";for(var a in t)i="set"+l(a),console.log("modNamer",i),n[i](t[a]);return n}function r(e){var t=e,n=i(e.client),r=a(t.req,t.param),l=Object.assign(s,t.meta?t.meta:{});n[t.mothod](r,l,t.callback)}function l(e){return e.toLowerCase().replace(/( |^)[a-z]/g,function(e){return e.toUpperCase()})}Object.defineProperty(t,"__esModule",{value:!0});var s={};t.default=r},422:function(e,t,n){var i=n(423);"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0};a.transform=void 0,a.insertInto=void 0;n(405)(i,a);i.locals&&(e.exports=i.locals)},423:function(e,t,n){t=e.exports=n(404)(!1),t.push([e.i,".register {\n  width: 100%;\n  height: 769px;\n  background: #F5F7FC;\n  overflow: hidden;\n}\n.register_content {\n  width: 400px;\n  height: 520px;\n  background: #FFFFFF;\n  border: 1px solid #E5EFF6;\n  border-radius: 6px;\n  margin: 120px auto 0;\n  overflow: hidden;\n}\n.rigister_logo {\n  opacity: 0.4;\n  font-family: PingFangSC-Regular;\n  font-size: 20px;\n  color: #A8B7C7;\n  line-height: 36px;\n  display: block;\n  margin: 26px 0 0 23px;\n}\n.register_title {\n  display: block;\n  width: 40px;\n  height: 30px;\n  font-size: 20px;\n  color: #061C3F;\n  line-height: 30px;\n  margin: -18px auto 0;\n}\n.register_title_label {\n  width: 246px;\n  height: 18px;\n  /*background:red;*/\n  margin-top: 10px;\n  padding: 0 77px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.register_title_label_info {\n  font-size: 12px;\n  color: #54698D;\n  line-height: 18px;\n}\n.register_whiffletree {\n  width: 40px;\n  height: 1px;\n  background: #E0E5EE;\n}\n.register_inputs {\n  width: 300px;\n  height: 180px;\n  /*background:red;*/\n  margin: 30px auto 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.register_inputs li {\n  width: 290px;\n  height: 20px;\n  padding: 12px 0 12px 10px;\n  border-bottom: 1px solid #E0E5EE;\n}\n.register_inputs li input {\n  width: 280px;\n  height: 20px;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  color: #A8B7C7;\n  line-height: 20px;\n}\n.register_checkbox {\n  width: 300px;\n  height: 18px;\n  margin: 36px auto 40px;\n  /*background:red;*/\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.register_checkbox .noCheckbox {\n  width: 14px;\n  height: 14px;\n  border: 1px solid #3865FF;\n  border-radius: 2px;\n  margin-right: 6px;\n  cursor: pointer;\n}\n.register_checkbox span {\n  font-size: 12px;\n  color: #7785A0;\n  line-height: 18px;\n}\n.register_checkbox a {\n  font-size: 12px;\n  color: #5F82F6 ;\n  line-height: 18px;\n  cursor: pointer;\n}\n.register_button {\n  display: block;\n  width: 300px;\n  height: 42px;\n  background: #D8DDE6;\n  border-radius: 2px;\n  border: none;\n  outline: none;\n  margin: 0 auto;\n  font-size: 14px;\n  color: #FFFFFF;\n}\n.register_jump {\n  width: 112px;\n  height: 20px;\n  margin: 20px auto 0;\n}\n.register_jump span {\n  font-size: 14px;\n  color: #7785A0;\n}\n.register_jump a {\n  font-size: 14px;\n  color: #5F82F6;\n  line-height: 20px;\n  cursor: pointer;\n}\n.register_submit {\n  cursor: pointer;\n  background: #3865FF ;\n}\n.registerInput {\n  position: relative;\n}\n.registerInput .icon-e90e {\n  position: absolute;\n  right: 10px;\n  cursor: pointer;\n}\n",""])}});