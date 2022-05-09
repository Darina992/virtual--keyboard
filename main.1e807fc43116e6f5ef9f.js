(()=>{"use strict";const e=document.querySelector("body"),t=document.createElement("div"),s=document.createElement("div");t.classList.add("conteiner"),s.classList.add("wrapper");const a=document.createElement("textarea");a.setAttribute("autofocus","autofocus"),e.prepend(t),t.prepend(s);const o=document.createElement("div");o.classList.add("buttons"),s.prepend(a,o);const n=document.createElement("p");n.classList.add("language-hint"),n.innerHTML="P.S. To switch language press Shift+Ctrl. <br> The keyboard was created in the Windows OS",t.append(n);const r=document.createElement("h1");r.textContent="Virtual keyboard",t.prepend(r);const c={en:{1:["`","~"],2:["1","!"],3:["2","@"],4:["3","#"],5:["4","$"],6:["5","%"],7:["6","^"],8:["7","&"],9:["8","*"],10:["9","("],11:["0",")"],12:["-","_"],13:["=","+"],14:["Backspace"],15:["Tab"],16:["q"],17:["w"],18:["e"],19:["r"],20:["t"],21:["y"],22:["u"],23:["i"],24:["o"],25:["p"],26:["[","{"],27:["]","}"],28:["\\","|"],29:["CapsLock"],30:["a"],31:["s"],32:["d"],33:["f"],34:["g"],35:["h"],36:["j"],37:["k"],38:["l"],39:[";",":"],40:["'",'"'],41:["Enter"],42:["Shift"],43:["z"],44:["x"],45:["c"],46:["v"],47:["b"],48:["n"],49:["m"],50:[",","<"],51:[".",">"],52:["/","?"],53:["↑"],54:["Shift"],55:["Ctrl"],56:["Win"],57:["Alt"],58:[""],59:["Alt"],60:["Ctrl"],61:["←"],62:["↓"],63:["→"]},ru:{1:["ё"],2:["1","!"],3:["2",'"'],4:["3","№"],5:["4",";"],6:["5","%"],7:["6",":"],8:["7","?"],9:["8","*"],10:["9","("],11:["0",")"],12:["-","_"],13:["=","+"],14:["Backspace"],15:["Tab"],16:["й"],17:["ц"],18:["у"],19:["к"],20:["е"],21:["н"],22:["г"],23:["ш"],24:["щ"],25:["з"],26:["х"],27:["ъ"],28:["\\","/"],29:["CapsLock"],30:["ф"],31:["ы"],32:["в"],33:["а"],34:["п"],35:["р"],36:["о"],37:["л"],38:["д"],39:["ж"],40:["э"],41:["Enter"],42:["Shift"],43:["я"],44:["ч"],45:["с"],46:["м"],47:["и"],48:["т"],49:["ь"],50:["б"],51:["ю"],52:[".",","],53:["↑"],54:["Shift"],55:["Ctrl"],56:["Win"],57:["Alt"],58:[""],59:["Alt"],60:["Ctrl"],61:["←"],62:["↓"],63:["→"]}};let i=localStorage.getItem("keyboard$lng")?localStorage.getItem("keyboard$lng"):"en";for(let e=0;e<5;e+=1){const e=document.createElement("div");e.classList.add("row"),o.append(e)}const l=Array.from(document.querySelectorAll(".row"));!function(e="en"){for(let t=1;t<64;t+=1){const s=document.createElement("div");s.classList.add("button");const[a,o]=c[e][t];o?(s.classList.add("two-item-key"),s.innerHTML=`<span class="add-button">${o}</span><span class="main-button">${a}</span>`):(s.classList.add("one-item-key"),s.innerHTML=`<span class="main-button">${a}</span>`),t>=1&&t<15&&(14===t&&s.classList.add("backspace-key"),l[0].append(s)),t>=15&&t<29&&(15===t&&s.classList.add("tab-key"),l[1].append(s)),t>=29&&t<42&&(29===t&&s.classList.add("capslk-key"),41===t&&s.classList.add("enter-key"),l[2].append(s)),t>=42&&t<55&&(42===t&&s.classList.add("shift-key","shift-left-key"),53===t&&s.classList.add("arrow-up-key"),54===t&&s.classList.add("shift-key","shift-right-key"),l[3].append(s)),t>=55&&t<64&&(55===t&&s.classList.add("ctrl-key","ctrl-left-key"),56===t&&s.classList.add("win-key"),57===t&&s.classList.add("alt-key","alt-left-key"),58===t&&s.classList.add("space-key"),59===t&&s.classList.add("alt-key","alt-right-key"),60===t&&s.classList.add("ctrl-key","ctrl-right-key"),61===t&&s.classList.add("arrow-right-key"),62===t&&s.classList.add("arrow-down-key"),63===t&&s.classList.add("arrow-left-key"),l[4].append(s))}}(i);const d=Array.from(document.querySelectorAll(".button")),u=document.querySelector(".ctrl-left-key"),v=document.querySelector(".ctrl-right-key"),m=document.querySelector(".shift-left-key"),L=document.querySelector(".shift-right-key"),p=document.querySelector(".alt-left-key"),y=document.querySelector(".alt-right-key"),f=document.querySelector(".space-key"),g=document.querySelector(".capslk-key"),k=document.querySelector(".win-key"),h=document.querySelector(".arrow-up-key"),C=document.querySelector(".arrow-left-key"),w=document.querySelector(".arrow-down-key"),S=document.querySelector(".arrow-right-key");for(let e=0;e<d.length;e+=1){const t=d[e].querySelector(".main-button");d[e].setAttribute("keyname",t.textContent),d[e].setAttribute("uppercasename",t.textContent.toUpperCase()),d[e].setAttribute("lowercasename",t.textContent.toLowerCase())}let b=[],x=!1;function A(e){d.forEach(((t,s)=>{c[`${i}`][s+1][1]?(t.innerHTML=`<span class="add-button">${c[`${i}`][s+1][1]}</span><span class="main-button">${c[`${i}`][s+1][0]}</span>`,t.classList.remove("one-item-key"),t.classList.add("two-item-key")):(t.classList.add("one-item-key"),t.classList.remove("two-item-key"),t.innerHTML=`<span class="main-button">${c[`${i}`][s+1][0]}</span>`);const a=t.querySelector(".main-button");"upper"===e&&(s>=15&&s<=26||s>=29&&s<=39||s>=42&&s<=50)&&(a.textContent=a.textContent.toUpperCase()),"lower"===e&&(s>=15&&s<=26||s>=29&&s<=39||s>=42&&s<=50)&&(a.textContent=a.textContent.toLowerCase()),t.setAttribute("keyname",a.textContent),t.setAttribute("uppercasename",a.textContent.toUpperCase()),t.setAttribute("lowercasename",a.textContent.toLowerCase())}))}function E(){i="en"===i?"ru":"en",localStorage.setItem("keyboard$lng",i),A()}window.addEventListener("keydown",(e=>{function t(){document.querySelectorAll(".two-item-key").forEach((e=>{e.querySelector(".add-button").classList.add("light"),e.querySelector(".main-button").classList.add("not-light")}))}b.push(e.key),2===b.length&&b.includes("Control")&&b.includes("Shift")&&E();for(let s=0;s<d.length;s+=1)if(e.key!==d[s].getAttribute("keyname")&&e.key!==d[s].getAttribute("uppercasename")||d[s].classList.add("active"),"ShiftLeft"===e.code&&b.includes("Control")&&L.classList.remove("active"),"ShiftRight"===e.code&&b.includes("Control")&&m.classList.remove("active"),"ShiftLeft"!==e.code||b.includes("Control")||(L.classList.remove("active"),A("upper"),t()),"ShiftRight"!==e.code||b.includes("Control")||(m.classList.remove("active"),A("upper"),t()),"ControlLeft"===e.code&&u.classList.add("active"),"ControlRight"===e.code&&v.classList.add("active"),"AltLeft"===e.code&&(e.preventDefault(),y.classList.remove("active")),"AltRight"===e.code&&(e.preventDefault(),p.classList.remove("active")),"Space"===e.code&&f.classList.add("active"),"ArrowUp"===e.code&&h.classList.add("active"),"ArrowRight"===e.code&&C.classList.add("active"),"ArrowDown"===e.code&&w.classList.add("active"),"ArrowLeft"===e.code&&S.classList.add("active"),"MetaLeft"===e.code&&k.classList.add("active"),"CapsLock"===e.code&&(x?(g.classList.remove("active"),x=!1,A("lower")):(g.classList.add("active"),A("upper"),x=!0)),"Tab"===e.code)return e.preventDefault(),void(a.value+="    ")})),window.addEventListener("keyup",(e=>{function t(){document.querySelectorAll(".two-item-key").forEach((e=>{e.querySelector(".add-button").classList.remove("light"),e.querySelector(".main-button").classList.remove("not-light")}))}b=[];for(let s=0;s<d.length;s+=1)e.key!==d[s].getAttribute("keyname")&&e.key!==d[s].getAttribute("lowercasename")||(d[s].classList.remove("active"),d[s].classList.add("remove")),"ShiftLeft"===e.code&&(L.classList.remove("active"),L.classList.remove("remove"),A(x?"upper":"lower"),t()),"ShiftRight"===e.code&&(m.classList.remove("active"),m.classList.remove("remove"),A(x?"upper":"lower"),t()),"ControlLeft"===e.code&&u.classList.remove("active"),"ControlRight"===e.code&&v.classList.remove("active"),"AltLeft"===e.code&&(y.classList.remove("active"),y.classList.remove("remove")),"AltRight"===e.code&&(p.classList.remove("active"),p.classList.remove("remove")),"Space"===e.code&&(f.classList.remove("active"),f.classList.remove("remove")),"ArrowUp"===e.code&&h.classList.remove("active"),"ArrowRight"===e.code&&C.classList.remove("active"),"ArrowDown"===e.code&&w.classList.remove("active"),"ArrowLeft"===e.code&&S.classList.remove("active"),"MetaLeft"===e.code&&k.classList.remove("active"),"CapsLock"===e.code&&(x?(g.classList.add("active"),x=!0):(g.classList.remove("active"),x=!1)),setTimeout((()=>d[s].classList.remove("remove")),200)})),o.addEventListener("click",(e=>{if(e.target.closest(".button")){if(a.focus(),1===b.length&&b.includes("Control")&&"Shift"===e.target.textContent)return void E();if(1===b.length&&b.includes("Shift")&&"Ctrl"===e.target.textContent)return void E();if(1===b.length&&b.includes("Shift"))return void(e.target.classList.contains("item-one-key")?a.value+=e.target.textContent:e.target.closest(".main-button")?a.value+=e.target.parentElement.firstChild.textContent:a.value+=e.target.firstChild.textContent);if("Backspace"===e.target.textContent)return void(a.value=a.value.substring(0,a.value.length-1));if("Tab"===e.target.textContent)return void(a.value+="    ");if("CapsLock"===e.target.textContent)return void(x?(g.classList.remove("active"),A("lower"),x=!1):(g.classList.add("active"),A("upper"),x=!0));if("Enter"===e.target.textContent)return void(a.value=`${a.value.substring(0,a.selectionStart)}\n${a.value.substring(a.selectionEnd,a.value.length)}`);if("Alt"===e.target.textContent||"Ctrl"===e.target.textContent||"Shift"===e.target.textContent)return;if(""===e.target.textContent){if(a.value.length<=a.selectionEnd)a.value+=" ";else{const e=a.value.split(""),t=a.selectionEnd;e.splice(a.selectionEnd,0," "),a.value=e.join(""),a.selectionEnd=t+1}return}if("←"===e.target.textContent)return void(a.selectionEnd-=1);if("→"===e.target.textContent)return void(a.selectionStart+=1);if("↑"===e.target.textContent){return void(1===a.value.split("\n").length?a.selectionEnd=0:a.value+=e.target.textContent)}if("↓"===e.target.textContent){return void(1===a.value.split("\n").length?a.selectionStart=a.value.length:a.value+=e.target.textContent)}e.target.classList.contains("two-item-key")?a.value+=e.target.lastElementChild.textContent:e.target.classList.contains("add-button")?a.value+=e.target.parentElement.lastElementChild.textContent.toLowerCase():a.value+=e.target.textContent}}))})();