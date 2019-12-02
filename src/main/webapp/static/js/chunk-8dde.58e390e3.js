(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8dde"],{"7HRL":function(e,t,a){"use strict";var r=a("hjaF");a.n(r).a},NoVw:function(e,t,a){"use strict";a.r(t);var r=a("ViDN"),i=a("utuE"),o=a("d8QR"),n=a("7Qib"),s={components:{CreateView:r.a,membersDep:i.a},data:function(){var e=this,t=function(t,a,r){"startTime"==t.field&&!e.formData.startTime&&e.formData.endTime||"endTime"==t.field&&!e.formData.endTime&&e.formData.startTime?r(new Error("请完善时间")):e.formData.startTime&&e.formData.endTime&&Object(n.d)(e.formData.startTime)>=Object(n.d)(e.formData.endTime)&&r(new Error("开始时间必须小于结束时间")),r()};return{formList:[{label:"公告标题",field:"title"},{label:"通知部门",field:"dep",type:"plus"},{label:"开始时间",field:"startTime",type:"date"},{label:"结束时间",field:"endTime",type:"date"},{label:"公告正文",field:"content",type:"textarea"}],formData:{dep:{staff:[],dep:[]}},rules:{title:[{required:!0,message:"公告标题不能为空",trigger:"blur"},{max:50,message:"公告标题长度最多为50个字符",trigger:"blur"}],content:[{required:!0,message:"公告正文不能为空",trigger:"blur"}],startTime:[{required:!0,message:"不能为空",trigger:"blur"},{validator:t,trigger:"blur"}],endTime:[{required:!0,message:"不能为空",trigger:"blur"},{validator:t,trigger:"blur"}]},loading:!1}},methods:{onSubmit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.loading=!0,Object(o.a)({title:e.formData.title,content:e.formData.content,startTime:e.formData.startTime,endTime:e.formData.endTime,deptIds:e.formData.dep.dep.map(function(e){return e.id}).join(","),ownerUserIds:e.formData.dep.staff.map(function(e){return e.userId}).join(",")}).then(function(t){e.$message.success("新建公告成功"),1==e.$route.query.routerKey?e.$router.push("notice"):e.$emit("onSubmit"),e.loading=!1}).catch(function(){e.$message.error("新建公告失败"),e.loading=!1})})},close:function(){1==this.$route.query.routerKey?this.$router.go(-1):this.$emit("close")},popoverSubmit:function(e,t){this.$set(this.formData,"dep",{staff:e,dep:t})},deleteuser:function(e){this.formData.dep.staff.splice(e,1)},deleteDepuser:function(e){this.formData.dep.dep.splice(e,1)}}},l=(a("7HRL"),a("ZrdR")),d=Object(l.a)(s,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("create-view",{attrs:{"body-style":{height:"100%"}}},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"details-box"},[r("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[r("span",{staticClass:"text"},[e._v("新建公告")]),e._v(" "),r("img",{staticClass:"el-icon-close rt",attrs:{src:a("cjwK"),alt:""},on:{click:e.close}})]),e._v(" "),r("div",{staticClass:"content"},[r("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},e._l(e.formList,function(t,a){return r("el-form-item",{key:a,class:"el-form-item"+t.field,attrs:{label:t.label,prop:t.field}},["date"==t.type?[r("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.formData[t.field],callback:function(a){e.$set(e.formData,t.field,a)},expression:"formData[item.field]"}})]:"textarea"==t.type?[r("el-input",{attrs:{autosize:{minRows:6},type:"textarea",placeholder:"请输入内容"},model:{value:e.formData[t.field],callback:function(a){e.$set(e.formData,t.field,a)},expression:"formData[item.field]"}})]:"plus"==t.type?[r("members-dep",{attrs:{"popover-display":"block",title:"通知部门","user-checked-data":e.formData[t.field].staff,"dep-checked-data":e.formData[t.field].dep},on:{popoverSubmit:e.popoverSubmit}},[r("flexbox",{staticClass:"user-container",attrs:{slot:"membersDep",wrap:"wrap"},slot:"membersDep"},[e._l(e.formData[t.field].staff,function(t,a){return r("div",{key:"user"+a,staticClass:"user-item",on:{click:function(t){t.stopPropagation(),e.deleteuser(a)}}},[e._v(e._s(t.realname)+"\n                  "),r("i",{staticClass:"delete-icon el-icon-close"})])}),e._v(" "),e._l(e.formData[t.field].dep,function(t,a){return r("div",{key:"dep"+a,staticClass:"user-item",on:{click:function(t){t.stopPropagation(),e.deleteDepuser(a)}}},[e._v(e._s(t.name)+"\n                  "),r("i",{staticClass:"delete-icon el-icon-close"})])}),e._v(" "),r("div",{staticClass:"add-item"},[e._v("+添加")])],2)],1)]:r("el-input",{model:{value:e.formData[t.field],callback:function(a){e.$set(e.formData,t.field,a)},expression:"formData[item.field]"}})],2)}))],1),e._v(" "),r("div",{staticClass:"btn-box"},[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:e.close}},[e._v("取消")])],1)])])},[],!1,null,"5711e75e",null);d.options.__file="newDialog.vue";t.default=d.exports},d8QR:function(e,t,a){"use strict";a.d(t,"d",function(){return i}),a.d(t,"a",function(){return o}),a.d(t,"b",function(){return n}),a.d(t,"c",function(){return s});var r=a("t3Un");function i(e){return Object(r.a)({url:"OaAnnouncement/queryList",method:"post",data:e})}function o(e){return Object(r.a)({url:"OaAnnouncement/saveAndUpdate",method:"post",data:e})}function n(e){return Object(r.a)({url:"OaAnnouncement/delete",method:"post",data:e})}function s(e){return Object(r.a)({url:"OaAnnouncement/readAnnouncement",method:"post",data:e})}},hjaF:function(e,t,a){}}]);