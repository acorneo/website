import{_ as f,r,c as i,a as t,n as d,p,F as c,o as a}from"./HCyoEVb4.js";const y={class:"buttons"},F={key:0},k={key:1},g={__name:"converter",setup(B){const l=r("temperature"),s=r("celsius"),m=()=>{if(s.value==="celsius"){const u=document.getElementById("numberInputFirst"),e=document.getElementById("numberInputSecond"),n=parseFloat(u.value);e.value=Math.round(n*9/5+32)}},I=()=>{if(s.value==="fahrenheit"){const u=document.getElementById("numberInputFirst"),e=document.getElementById("numberInputSecond"),n=parseFloat(e.value);u.value=Math.round((n-32)*5/9)}},o=r("kilometers"),v=()=>{if(o.value==="kilometers"){const u=document.getElementById("distanceInputFirst"),e=document.getElementById("distanceInputSecond"),n=parseFloat(u.value);e.value=Math.round(n*.621371)}},b=()=>{if(o.value==="miles"){const u=document.getElementById("distanceInputFirst"),e=document.getElementById("distanceInputSecond"),n=parseFloat(e.value);u.value=Math.round(n*1.60934)}};return(u,e)=>(a(),i(c,null,[e[14]||(e[14]=t("h1",null,"Конверация единиц измерения",-1)),e[15]||(e[15]=t("h2",null,"Выберите тип:",-1)),t("div",y,[t("button",{onClick:e[0]||(e[0]=n=>l.value="temperature"),class:d({active:l.value==="temperature"})},e[6]||(e[6]=[t("p",null,"Температура",-1)]),2),t("button",{onClick:e[1]||(e[1]=n=>l.value="distance"),class:d({active:l.value==="distance"})},e[7]||(e[7]=[t("p",null,"Расстояние",-1)]),2)]),l.value==="temperature"?(a(),i("div",F,[e[8]||(e[8]=t("label",{for:"numberInputFirst"},"Температура в градусах Цельсия:",-1)),t("input",{type:"number",id:"numberInputFirst",onInput:e[2]||(e[2]=n=>{s.value="celsius",m()})},null,32),e[9]||(e[9]=t("br",null,null,-1)),e[10]||(e[10]=t("label",{for:"numberInputSecond"},"Температура в градусах Фаренгейта:",-1)),t("input",{type:"number",id:"numberInputSecond",style:{"margin-top":"1rem"},onInput:e[3]||(e[3]=n=>{s.value="fahrenheit",I()})},null,32)])):p("",!0),l.value==="distance"?(a(),i("div",k,[e[11]||(e[11]=t("label",{for:"distanceInputFirst"},"Расстояние в километрах",-1)),t("input",{type:"number",id:"distanceInputFirst",onInput:e[4]||(e[4]=n=>{o.value="kilometers",v()})},null,32),e[12]||(e[12]=t("br",null,null,-1)),e[13]||(e[13]=t("label",{for:"distanceInputSecond"},"Расстояние в милях",-1)),t("input",{type:"number",id:"distanceInputSecond",style:{"margin-top":"1rem"},onInput:e[5]||(e[5]=n=>{o.value="miles",b()})},null,32)])):p("",!0)],64))}},S=f(g,[["__scopeId","data-v-08bc9799"]]);export{S as default};