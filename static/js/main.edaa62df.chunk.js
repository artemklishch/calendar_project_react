(this["webpackJsonpcalendar-project-react"]=this["webpackJsonpcalendar-project-react"]||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),s=a(4),c=a(11),l=a(12),d=a(15),m=a(13),u=a(14),D=function(){return Array(25).fill(null).map((function(e,t){return 0!==t&&24!==t&&(e="".concat(t,":00")),e})).map((function(e,t){return r.a.createElement("div",{key:t,className:"main__sidebar_timing_place"},r.a.createElement("span",{className:"main__sidebar_time"},e),r.a.createElement("div",{className:"main__sidebar_timing_place-bord"}))}))},f=a(1),p=a.n(f),v=function(e){var t=e.map((function(e){return e.startDate=new Date(e.startDate),e.endDate=new Date(e.endDate),e})),a=[];return t.forEach((function(e){e.startDate.getDate()!==e.endDate.getDate()&&e.endDate.getHours()>0?function(e){var t=new Date(e.startDate).getFullYear(),a=new Date(e.startDate).getMonth(),n=new Date(e.startDate).getDate(),r=new Date(t,a,n,24),i=new Date(e.endDate).getFullYear(),o=new Date(e.endDate).getMonth(),s=new Date(e.endDate).getDate(),c=new Date(i,o,s);return[{backgroundColor:e.backgroundColor,header:e.header,startDate:e.startDate,endDate:r,description:e.description,id:e.id,_id:e._id},{backgroundColor:e.backgroundColor,header:e.header,startDate:c,endDate:e.endDate,description:e.description,id:e.id,_id:e._id}]}(e).forEach((function(e){return a.push(e)})):a.push(e)})),a},h=function(e){var t=e.objectElem,a=e.onShowFormOnEditing,n=function(e){var t,a,n=p()(e.startDate).format("HH:mm"),r=p()(e.endDate).format("HH:mm"),i="".concat(n," - ").concat(r);15===e.startDate.getMinutes()&&(t="25%"),30===e.startDate.getMinutes()&&(t="50%"),45===e.startDate.getMinutes()&&(t="75%");var o=(e.endDate-e.startDate)/1e3/60/15;return o<4&&(a=0,i=""),{top:t,height:24.5*o+"%",padding:a,timeString:i}}(t),i=n.top,o=n.height,s=n.padding,c=n.timeString;return r.a.createElement("div",{className:"main__sidebar_day_object eventObj",style:{top:i,height:o,padding:s,backgroundColor:t.backgroundColor},"data-event-id":t._id,onClick:a},r.a.createElement("h4",{className:"eventObj","data-event-id":t._id},t.header),r.a.createElement("p",{className:"eventObj","data-event-id":t._id},c))},g=(a(22),function(e){var t=e.positionOfRedLine;return r.a.createElement("div",{className:"redline",style:{top:t}},r.a.createElement("div",{className:"redline__ball"}),r.a.createElement("div",{className:"redline__line"}))}),E=function(e){var t=e.arrDaysOfWeek,a=e.dayNumber,n=e.arrayOfEventsForRender,i=e.onShowFormOnEditing,o=e.positionOfRedLine,s=!1;return Array(24).fill(null).map((function(e,c){e=c;var l=new Date,d=t.find((function(e){return e.getDate()===l.getDate()}));return r.a.createElement("div",{key:e,className:"main__sidebar_days_hours","data-hour-number":c},n.map((function(e){return t.forEach((function(t){e.startDate.getDay()===a&&p()(e.startDate).format("l")===p()(t).format("l")&&e.startDate.getHours()===c&&(s=!0)})),s?(s=!1,r.a.createElement(h,{key:e.id,objectElem:e,onShowFormOnEditing:i})):null})),l.getDay()===a&&l.getHours()===c&&d&&r.a.createElement(g,{positionOfRedLine:o}))}))},b=(a(23),function(e){var t=e.arrDaysOfWeek,a=e.onShowForm,n=e.arrayOfEventsForRender,i=e.onShowFormOnEditing,o=e.positionOfRedLine,s=Array(7).fill(null),c=0;return r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"main__sidebar_timing"},r.a.createElement(D,null)),r.a.createElement("div",{className:"main__sidebar_days",onClick:a},s.map((function(e,a){return r.a.createElement("div",{key:c++,className:"main__sidebar_days_line","data-day-number":a},r.a.createElement(E,{arrDaysOfWeek:t,dayNumber:a,arrayOfEventsForRender:n,onShowFormOnEditing:i,positionOfRedLine:o}))}))))}),_=function(e){var t=e.onArrowBtns,a=e.dateTitle,n=e.onClickTodayWeek,i=e.onShowForm;return r.a.createElement("nav",{className:"nav"},r.a.createElement("button",{className:"nav__button",onClick:i},r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/plus-math.png",className:"plus",alt:"Plus img"}),"Create"),r.a.createElement("button",{className:"nav_day",onClick:n},"Today"),r.a.createElement("div",{className:"nav__arow",onClick:t},r.a.createElement("div",{className:"nav__arow_left"}),r.a.createElement("div",{className:"nav__arow_right"})),r.a.createElement("div",{className:"nav__dateMonEar"},r.a.createElement("h2",{className:"nav__dateMonEar-today"},a)))},O=a(7),y=a.n(O),w=function(e){var t=e.dayDate,a=p()(t).format("ddd"),n=p()(t).format("D"),i=y()("header__week-block_days",{"today__header__week-block_days":p()(t).format("ll")===p()(new Date).format("ll")});return r.a.createElement("div",{className:i},r.a.createElement("div",{className:"header__week-block_part-bord"}),r.a.createElement("p",{className:"header__week-block_dayname"},a),r.a.createElement("p",{className:"header__week-block_daydate"},n))},k=function(e){var t=e.arrDaysOfWeek;return r.a.createElement("div",{className:"header__week-block"},r.a.createElement("div",{className:"header__week-block_gmt-cell"},"gmt+02",r.a.createElement("div",{className:"header__week-block_gmt-cell_part-bord"})),r.a.createElement("div",{className:"header__week-block_line"},t.map((function(e){return r.a.createElement(w,{key:e,dayDate:e})}))))},T=(a(24),function(e){var t=e.arrDaysOfWeek,a=e.dateTitle,n=e.onArrowBtns,i=e.onClickTodayWeek,o=e.onCreateButton,s=e.onShowForm;return r.a.createElement("header",{className:"header"},r.a.createElement(_,{onArrowBtns:n,onClickTodayWeek:i,dateTitle:a,onCreateButton:o,onShowForm:s}),r.a.createElement(k,{arrDaysOfWeek:t}))}),j=function(){for(var e=new Date;0!==e.getDay();)e.setDate(e.getDate()-1);return e},N=function(e){var t=new Date(e);return Array(7).fill(null).map((function(e){return e=new Date(t),t.setDate(t.getDate()+1),e}))},S=function(e,t){var a=new Date(t);return e.target.classList.contains("nav__arow_right")?a.setDate(a.getDate()+7):a.setDate(a.getDate()-7),a},C=(a(25),function(e){var t=e.isOpen,a=e.onHideForm,n=e.tempObj,i=e.onCreateEvent,o=e.backgroundColor,s=e.isEditing,c=e.onDeleteEvent,l=e.onValidate,d=e.validateText,m=e.onLateEditing;if(!t)return null;var u=y()("event__btn-delete",{"btn-delete_block":s});return r.a.createElement("div",{className:"popup-layer"},r.a.createElement("form",{className:"popup event",onSubmit:i},r.a.createElement("span",{className:"popup__btn-close",onClick:a},r.a.createElement("img",{className:"close",src:"https://img.icons8.com/color/48/000000/close-window.png",alt:"close"})),r.a.createElement("input",{className:"event__name",name:"header",type:"text",placeholder:"Add title ",defaultValue:n.header,disabled:m}),r.a.createElement("div",{className:"popup__picker",onInput:l},r.a.createElement("img",{className:"clock",src:"https://img.icons8.com/pastel-glyph/64/000000/time.png",alt:"clock"}),r.a.createElement("input",{className:"event__date-start input",name:"startDate",required:!0,type:"date",defaultValue:n.startDate,disabled:m}),r.a.createElement("input",{type:"time",className:"startTime_place input",name:"startTimePlace",defaultValue:n.startTime,disabled:m}),r.a.createElement("span",{className:"line"}),r.a.createElement("input",{type:"time",className:"endTime_place input",name:"endTimePlace",defaultValue:n.endTime,disabled:m}),r.a.createElement("input",{className:"event__date-end input",name:"endDate",required:!0,type:"date",defaultValue:n.endDate,disabled:m})),r.a.createElement("div",{className:"centerData"},r.a.createElement("img",{className:"multiline",src:"https://img.icons8.com/windows/32/000000/multiline-text.png",alt:"mutiline"}),r.a.createElement("textarea",{type:"text",className:"multiline__text",placeholder:"add description",name:"description",defaultValue:n.description,disabled:m}),r.a.createElement("input",{type:"color",className:"pick_color",name:"backgroundColor",defaultValue:o})),r.a.createElement("div",{className:"footer-popup"},r.a.createElement("p",{className:"message_validation"},d),r.a.createElement("div",{className:"buttons"},r.a.createElement("img",{id:"delete-img",className:u,src:"https://img.icons8.com/windows/32/000000/trash.png",alt:"basket",onClick:c}),r.a.createElement("button",{type:"submit",className:"event__btn-save btn_save"},"Save")))))}),F=C;C.defaultProps={validateText:"",backgroundColor:"#0851f6"};var M=function(){var e=(new Date).getHours(),t=23===e?0:e+1,a=new Date,n=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())).toISOString().substr(0,10),r=0===t?new Date(n.setDate(n.getDate()+1)).toISOString().substr(0,10):n;return{startTime:e>9?[e,"00"].join(":"):["0".concat(e),"00"].join(":"),endTime:t>9?[t,"00"].join(":"):["0".concat(t),"00"].join(":"),startDate:n,endDate:r}},L=function(e,t){if(!e.target.classList.contains("main__sidebar_days_hours"))return null;var a=+e.target.dataset.hourNumber,n=+e.target.closest(".main__sidebar_days_line").dataset.dayNumber,r=t[n].getFullYear(),i=t[n].getMonth(),o=t[n].getDate(),s=new Date(r,i,o,a).getHours(),c=23===s?0:s+1,l=new Date(Date.UTC(r,i,o,a)).toISOString().substr(0,10),d=0===c?new Date(Date.UTC(r,i,o+1)).toISOString().substr(0,10):l;return{startTime:s>9?[s,"00"].join(":"):["0".concat(s),"00"].join(":"),endTime:c>9?[c,"00"].join(":"):["0".concat(c),"00"].join(":"),startDate:l,endDate:d}},W=function(e,t){var a=e.target.dataset.eventId,n=t.find((function(e){return e._id===a})),r=new Date(n.startDate).getHours();r=r>9?r:"0".concat(r);var i=new Date(n.startDate).getMinutes();i=i>9?i:"0".concat(i);var o=new Date(n.endDate).getHours();o=o>9?o:"0".concat(o);var s=new Date(n.endDate).getMinutes();s=s>9?s:"0".concat(s);var c=new Date(Date.UTC(n.startDate.getFullYear(),n.startDate.getMonth(),n.startDate.getDate())),l=new Date(Date.UTC(n.endDate.getFullYear(),n.endDate.getMonth(),n.endDate.getDate()));return{startTime:"".concat(r,":").concat(i),endTime:"".concat(o,":").concat(s),startDate:c.toISOString().substr(0,10),endDate:l.toISOString().substr(0,10),header:n.header,description:n.description,_id:n._id,id:n.id}},P=function(){return 100/60*(new Date).getMinutes()+"%"},x=a(3),R=a(5),A=a(8),Y=a(2),I=(document.querySelector(".message_validation"),[function(e){return 0!==e.startDate.getMinutes()&&e.startDate.getMinutes()%15!==0||0!==e.endDate.getMinutes()&&e.endDate.getMinutes()%15!==0?"Error! Minuts must be a multiple of fifteen":void 0},function(e){return 216e5<=e.endDate-e.startDate?"Error! Event can`t be more than 6 hours":void 0},function(e){return e.endDate<e.startDate?"Error! End date can`t be ealier than start date":void 0},function(e,t){for(var a=void 0,n=t.map((function(e){return e.startDate=new Date(e.startDate),e.endDate=new Date(e.endDate),e})),r=e.startDate.getTime(),i=e.endDate.getTime(),o=0;o<n.length;o++)if(n[o]._id!==e._id){var s=n[o].startDate.getTime(),c=n[o].endDate.getTime();r<c&&r<c&&i>s&&i>s&&(a="Error! Event can`t intersect")}return a}]),H=function(e,t,a){if(e.target.classList.contains("input")){var n=function(e){var t=document.querySelector(".popup"),a=Object(Y.a)(new FormData(t)).reduce((function(e,t){var a=Object(A.a)(t,2),n=a[0],r=a[1];return Object(s.a)({},e,Object(R.a)({},n,r))}),{}),n=a.startTimePlace.split(":")[0],r=a.startTimePlace.split(":")[1];a.startDate=Object(Y.a)(a.startDate.split("-")),a.startDate[1]=a.startDate[1]-1,a.startDate.push(n,r),a.startDate=Object(x.a)(Date,Object(Y.a)(a.startDate));var i=a.endTimePlace.split(":")[0],o=a.endTimePlace.split(":")[1];return a.endDate=Object(Y.a)(a.endDate.split("-")),a.endDate[1]=a.endDate[1]-1,a.endDate.push(i,o),a.endDate=Object(x.a)(Date,Object(Y.a)(a.endDate)),a._id=e||"",a}(t);return I.map((function(e){return e(n,a)})).filter((function(e){return e})).join(" ")}},B=function(e){e.startDate=e.startDate.split("-"),e.startTime=e.startTime.split(":"),e.startDate=Object(x.a)(Date,Object(Y.a)(e.startDate.concat(e.startTime))),e.startDate.setMonth(e.startDate.getMonth()-1),e.endDate=e.endDate.split("-"),e.endTime=e.endTime.split(":"),e.endDate=Object(x.a)(Date,Object(Y.a)(e.endDate.concat(e.endTime))),e.endDate.setMonth(e.endDate.getMonth()-1);var t=(e.startDate.valueOf()-Date.now())/1e3/60;return t<=15&&t>0?"You can`t change or delete event after 15 minutes to event":""},V=function(e,t){return e.startDate=e.startDate.split("-"),e.startTime=e.startTime.split(":"),e.startDate=Object(x.a)(Date,Object(Y.a)(e.startDate.concat(e.startTime))),e.startDate.setMonth(e.startDate.getMonth()-1),e.endDate=e.endDate.split("-"),e.endTime=e.endTime.split(":"),e.endDate=Object(x.a)(Date,Object(Y.a)(e.endDate.concat(e.endTime))),e.endDate.setMonth(e.endDate.getMonth()-1),I.map((function(a){return a(e,t)})).filter((function(e){return e})).join(" ")},U="https://5e517090f2c0d300147c07c9.mockapi.io/api/v1/arrayOfEvents",q=function(){return fetch(U).then((function(e){return e.json()}))},G=function(e){return fetch(U,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then((function(e){if(!e.ok)throw new Error("Internal Server Error. Can`t display events")}))},J=function(e,t){return fetch("".concat(U,"/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then((function(e){if(!e.ok)throw new Error("Internal Server Error. Can`t display events")}))},z=function(e){return fetch("".concat(U,"/").concat(e),{method:"DELETE"}).then((function(e){if(!e.ok)throw new Error("Internal Server Error. Can`t display events")}))},K=function(){var e=document.querySelector(".popup"),t=Object(Y.a)(new FormData(e)).reduce((function(e,t){var a=Object(A.a)(t,2),n=a[0],r=a[1];return Object(s.a)({},e,Object(R.a)({},n,r))}),{});return t.startDate=t.startDate.split("-"),t.startDate[1]=t.startDate[1]-1,t.startTimePlace=t.startTimePlace.split(":"),t.startDate=t.startDate.concat(t.startTimePlace),t.startDate=Object(x.a)(Date,Object(Y.a)(t.startDate)),t.endDate=t.endDate.split("-"),t.endDate[1]=t.endDate[1]-1,t.endTimePlace=t.endTimePlace.split(":"),t.endDate=t.endDate.concat(t.endTimePlace),t.endDate=Object(x.a)(Date,Object(Y.a)(t.endDate)),t.header=""===t.header?"No header":t.header,t.description=""===t.description?"":t.description,t._id=String(Math.round(1e6*Math.random())),delete t.startTimePlace,delete t.endTimePlace,t},Q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={firstDayOfWeek:j(),isOpen:!1,arrayOfEvents:[],isEditing:!1,positionOfRedLine:P(),validateText:"",onLateEditing:!1},a.onRenderAfterGetData=function(){q().then((function(e){return a.setState({arrayOfEvents:e})})).catch((function(){return alert("Internal Server Error. Can`t display events")}))},a.onTodayButton=function(){return a.setState({firstDayOfWeek:j()})},a.onArrowBtns=function(e){return a.setState({firstDayOfWeek:S(e,a.state.firstDayOfWeek)})},a.hideForm=function(){return a.setState({isOpen:!1,isEditing:!1,onLateEditing:!1,validateText:""})},a.showFormOnCreateButton=function(){a.tempObj=M(),a.setState({isOpen:!0,validateText:V(Object(s.a)({},a.tempObj),a.state.arrayOfEvents)})},a.showFormOnClickOnField=function(e){null!==L(e,N(a.state.firstDayOfWeek))&&(a.tempObj=L(e,N(a.state.firstDayOfWeek)),a.setState({isOpen:!0,validateText:V(Object(s.a)({},a.tempObj),a.state.arrayOfEvents)}))},a.showFormOnEditing=function(e){a.tempObj=W(e,a.state.arrayOfEvents),a.setState({isOpen:!0,isEditing:a.tempObj._id}),a.setState({validateText:B(Object(s.a)({},a.tempObj))});"You can`t change or delete event after 15 minutes to event"===B(Object(s.a)({},a.tempObj))&&a.setState({onLateEditing:!0})},a.onFormSubmit=function(e){if(e.preventDefault(),""===a.state.validateText){if(a.state.isEditing){var t=K();t._id=a.tempObj._id,J(t,a.tempObj.id).then((function(){return a.onRenderAfterGetData()})).catch((function(e){return alert(e.message)}))}else{var n=K();G(n).then((function(){return a.onRenderAfterGetData()})).catch((function(e){return alert(e.message)}))}a.hideForm()}},a.onDeleteEvent=function(){"You can`t change or delete event after 15 minutes to event"!==a.state.validateText&&(z(a.tempObj.id).then((function(){return a.onRenderAfterGetData()})).catch((function(e){return alert(e.message)})),a.hideForm())},a.onValidate=function(e){return a.setState({validateText:H(e,a.state.isEditing,a.state.arrayOfEvents)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.setState({positionOfRedLine:P()})}),1e3),this.onRenderAfterGetData()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=v(this.state.arrayOfEvents),t=N(this.state.firstDayOfWeek),a=function(e){var t=p()(e[0]).format("MMM"),a=p()(e[0]).format("YYYY"),n=p()(e[6]).format("MMM"),r=p()(e[6]).format("YYYY");return t===n&&a===r?"".concat(t," ").concat(a):t!==n&&a===r?"".concat(t," - ").concat(n.toLocaleLowerCase()," ").concat(a):t!==n&&a!==r?"".concat(t," ").concat(a," - ").concat(n," ").concat(r):""}(t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{arrDaysOfWeek:t,dateTitle:a,onArrowBtns:this.onArrowBtns,onClickTodayWeek:this.onTodayButton,onShowForm:this.showFormOnCreateButton}),r.a.createElement(b,{arrDaysOfWeek:t,onShowForm:this.showFormOnClickOnField,arrayOfEventsForRender:e,onShowFormOnEditing:this.showFormOnEditing,positionOfRedLine:this.state.positionOfRedLine}),r.a.createElement(F,{isOpen:this.state.isOpen,onHideForm:this.hideForm,tempObj:this.tempObj,onCreateEvent:this.onFormSubmit,isEditing:this.state.isEditing,onDeleteEvent:this.onDeleteEvent,onValidate:this.onValidate,validateText:this.state.validateText,onLateEditing:this.state.onLateEditing}))}}]),t}(n.PureComponent),X=(a(26),document.querySelector("#root"));o.a.render(r.a.createElement(Q,null),X)}},[[16,1,2]]]);
//# sourceMappingURL=main.edaa62df.chunk.js.map