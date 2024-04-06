/////////////////////////////////HEADER////////////////////////////////////
var clickflag = 0;
function MenuClick() {
    if (clickflag === 0) {
        //document.getElementById("menuItems").style.display = "block";
        document.getElementById("menuItems").style.visibility = "visible";
        document.getElementById("menuItems").style.opacity = 1;
        //document.getElementById("menuLinks").style.visibility = "visible";
        //document.getElementById("menuLinks").style.opacity = 1;
        clickflag = 1;
    }
    else if (clickflag === 1) {
        //document.getElementById("menuItems").style.display = "none";
        document.getElementById("menuItems").style.visibility = "hidden";
        document.getElementById("menuItems").style.opacity = 0;
        //document.getElementById("menuLinks").style.visibility = "hidden";
        //document.getElementById("menuLinks").style.opacity = 0;
        clickflag = 0;
    }
}

var isIOS = (function () {
    var iosQuirkPresent = function () {
        var audio = new Audio();
        audio.volume = 0.5;
        return audio.volume === 1;   // volume cannot be changed from "1" on iOS 12 and below
    };
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    var isAppleDevice = navigator.userAgent.includes('Macintosh');
    var isTouchScreen = navigator.maxTouchPoints >= 1;   // true for iOS 13 (and hopefully beyond)
    return isIOS || (isAppleDevice && (isTouchScreen || iosQuirkPresent()));
})();

function setCookie(c_name,value){
    var c_value=escape(value);
    document.cookie=c_name + "=" + c_value;
}
function getCookie(c_name){
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1){
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1){
        c_value = null;
    }else{
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1){c_end = c_value.length;}
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}
checkSession();

function checkSession() {
    var c = getCookie("visited");
    console.log(website);
    if (c !== "yes") {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Not a mobile device
            setCookie("visited", "yes");
        }
    }
}

// function checkSession(){
//    var c = getCookie("visited");
//    console.log(website);
//    if (c === "yes") {
//         //alert("Welcome back!");
//    } else {
//         if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
//             // true for mobile device
//             if (isIOS === true){
//                 //alert("IPHONE");
//                 let div = document.createElement("div");
//                 div.style.position = "absolute";
//                 div.style.fontWeight = "bolder";
//                 div.style.right = "0";
//                 div.style.top = "0";
//                 div.style.width = "100vw";
//                 div.style.height = "100vh";
//                 div.style.background = "black";
//                 document.body.appendChild(div);

//                 div.addEventListener('click', function (event) {
//                     if (website == "sinebender") {
//                         div.style.opacity = 0;
//                         div.style.visibility = "hidden";
//                         clicked();
//                     } else {
//                         div.style.opacity = 0;
//                         div.style.visibility = "hidden";
//                         setCookie("visited", "yes");
//                     }
//                 });
                    
//                 let ialert = document.createElement("div");
//                 ialert.style.position = "absolute";
//                 ialert.style.top = "30vh";
//                 ialert.style.right = "10vw";
//                 ialert.style.width = "80vw";
//                 ialert.style.height = "auto";
//                 ialert.style.backgroundColor = "white";
//                 ialert.style.borderRadius = "5px";
//                 ialert.style.zIndex = 1;
//                 div.appendChild(ialert);

//                 let text1 = document.createElement("h1");
//                 text1.style.fontWeight = "bolder";
//                 text1.innerHTML = "welcome";
//                 text1.style.color = "black";
//                 text1.style.textAlign = "center";
//                 text1.style.lineHeight = "1";
//                 text1.style.padding = "0";
//                 ialert.appendChild(text1);

//                 let text2 = document.createElement("p");
//                 text2.style.fontWeight = "bolder";
//                 text2.innerHTML = "please turn your ringer volume on by setting the switch on the side of your phone to UP";
//                 text2.style.color = "black";
//                 text2.style.textAlign = "center";
//                 text2.style.padding = "5vw";
//                 text2.style.lineHeight = "1.5";
//                 ialert.appendChild(text2);

//                 let text3 = document.createElement("p");
//                 text3.style.fontWeight = "bolder";
//                 text3.innerHTML = "press anywhere to continue";
//                 text3.style.color = "blue";
//                 text3.style.textAlign = "center";
//                 text3.style.padding = "5vw";
//                 text3.style.lineHeight = "1.5";
//                 ialert.appendChild(text3);
//             } else {
//                 //alert("ANDROID");
//                 let div = document.createElement("div");
//                 div.style.position = "absolute";
//                 div.style.fontWeight = "bolder";
//                 div.style.right = "0";
//                 div.style.top = "0";
//                 div.style.width = "100vw";
//                 div.style.height = "100vh";
//                 div.style.background = "black";
//                 document.body.appendChild(div);

//                 div.addEventListener('click', function (event) {
//                     if (website == "sinebender") {
//                         div.style.opacity = 0;
//                         div.style.visibility = "hidden";
//                         clicked();
//                     } else {
//                         div.style.opacity = 0;
//                         div.style.visibility = "hidden";
//                         setCookie("visited", "yes");
//                     }
//                 });

//                 let ialert = document.createElement("div");
//                 ialert.style.position = "absolute";
//                 ialert.style.top = "30vh";
//                 ialert.style.right = "10vw";
//                 ialert.style.width = "80vw";
//                 ialert.style.height = "auto";
//                 ialert.style.backgroundColor = "white";
//                 ialert.style.borderRadius = "5px";
//                 ialert.style.zIndex = 20;
//                 div.appendChild(ialert);

//                 let text1 = document.createElement("h1");
//                 text1.style.fontWeight = "bolder";
//                 text1.innerHTML = "welcome";
//                 text1.style.color = "black";
//                 text1.style.textAlign = "center";
//                 text1.style.lineHeight = "1";
//                 text1.style.padding = "0";
//                 ialert.appendChild(text1);

//                 let text2 = document.createElement("p");
//                 text2.style.fontWeight = "bolder";
//                 text2.innerHTML = "please make sure your phone volume is up";
//                 text2.style.color = "black";
//                 text2.style.textAlign = "center";
//                 text2.style.padding = "5vw";
//                 text2.style.lineHeight = "1.5";
//                 ialert.appendChild(text2);

//                 let text3 = document.createElement("p");
//                 text3.style.fontWeight = "bolder";
//                 text3.innerHTML = "press anywhere to continue";
//                 text3.style.color = "blue";
//                 text3.style.textAlign = "center";
//                 text3.style.padding = "5vw";
//                 text3.style.lineHeight = "1.5";
//                 ialert.appendChild(text3);
//             }
//         } else {
//             //alert("COMPUTER");
//             let div = document.createElement("div");
//             div.style.position = "absolute";
//             div.style.fontWeight = "bolder";
//             div.style.right = "0";
//             div.style.top = "0";
//             div.style.width = "100vw";
//             div.style.height = "100vh";
//             div.style.background = "black";
//             div.style.zIndex = 20;
//             document.body.appendChild(div);

//             let qr = document.createElement("img");
//             qr.src = "/files/qr/" + String(website) +".png";
//             qr.style.marginTop = "15vh";
//             qr.style.marginLeft = "auto";
//             qr.style.marginRight = "auto";
//             qr.style.display = "block";
//             qr.style.width = "60vmin";
//             div.appendChild(qr);

//             let text = document.createElement("h1");
//             text.innerHTML = "scan on mobile to play " + String(website);
//             text.style.color = "white";
//             text.style.paddingTop = "2vh";
//             text.style.textAlign = "center";
//             div.appendChild(text);

//             /*
//             div.addEventListener('click', function (event) {
//                 div.style.opacity = 0;
//                 div.style.visibility = "hidden";
//             });
//             */
//         }
       
//    }
// }

/////////////////////////////////HEADER////////////////////////////////////