// // var value = false;
// //       var values = 0;
// //       var valuess = "0";
// //       var count = 0;
// //       var num = [];
// //       var obj = {};
// //       var popup = document.querySelector(".pop");
// //       var loginBtn = document.querySelector(".navbar a");
// //       console.log('loginBtn:', loginBtn)
// //       var close = document.querySelector(".close-btn");
// //       var contentClickBtn = document.querySelector(".content_click");
// //       var signup = document.querySelector(".signup");
// //       var email = document.querySelector(".email");
// //       var otp = document.querySelector(".otp");
// //       var pass = document.querySelector(".pass");
// //       var form = document.querySelector(".LoginButton");
// //       console.log('form:', form)
// //       var none = document.querySelector(".none");
// //       var otporpass = document.querySelector(".otporpass");
// //       var passorotp = document.querySelector(".passorotp");
// //       var setPassDiv = document.querySelector(".setPass");
// //       var btns = document.querySelector(".setPassBtn");
// //       var newPass = document.getElementById("newPass");
// //       var confPass = document.getElementById("confPass");
// //       function refreshedPage() {
// //         otp.style.display = "none";
// //         pass.style.display = "none";
// //         none.style.display = "block";
// //         value = false;
// //         email.value = "";
// //         passorotp.value = "";
// //         otporpass.value = "";
// //         count = 0;
// //         num = [];
// //         console.clear();
// //         values = 0;
// //         valuess = "0";
// //       }
// //       function refresh_window() {
// //         setTimeout(() => {
// //           popup.style.display = "flex";
// //         }, 1000);
// //         email.value == "";
// //       }
// //       close.addEventListener("click", function () {
// //         popup.style.display = "none";
// //         p.innerHTML = "";
// //         setPassDiv.style.display = "none";
// //         refreshedPage();
// //       });
// //       loginBtn.addEventListener("click", function () {
// //         popup.style.display = "flex";
// //       });
// //       contentClickBtn.addEventListener("click", function () {
// //         popup.style.display = "flex";
// //       });
// //       var p = document.createElement("p");

// //       var arr = JSON.parse(localStorage.getItem("allMail")) || [];

// //       function submitForm(e) {
// //         e.preventDefault();

// //         if (count == 0) {
// //           if (email.value == "") {
// //             p.textContent = "Please enter mail id";
// //             p.style.color = "red";
// //             form.insertBefore(p, signup);
// //           } else {
// //             count++;
// //             obj = {
// //               emails: email.value,
// //             };
// //             arr.push(obj);

// //             localStorage.setItem("allMail", JSON.stringify(arr));

// //             var data = JSON.parse(localStorage.getItem("allMail"));
// //             // start, type your password 1
// //             for (var i = 0; i < data.length - 1; i++) {
// //               if (data[i].emails == email.value) {
// //                 none.style.display = "none";
// //                 pass.style.display = "block";
// //                 p.style.display = "none";
// //                 email.style.marginBottom = "50px";
// //                 value = true;
// //                 break;
// //               }
// //             }
// //             // end, type your password 1
// //             // start of type otp
// //             if (value == false) {
// //               num.push(Math.floor(Math.random() * 999999));
// //               console.log(num);
// //               none.style.display = "none";
// //               otp.style.display = "block";
// //               p.style.display = "none";
// //               email.style.marginBottom = "50px";
// //             }
// //           }
// //           // end of type otp

// //           // set password start
// //         } else {
// //           if (otporpass.value == num[0]) {
// //             valuess = "1";
// //             setPassDiv.style.display = "block";
// //             btns.addEventListener("click", function () {
// //               if (newPass.value == confPass.value && newPass.value != "") {
// //                 obj.newPass = newPass.value;
// //                 arr.push(obj);
// //                 localStorage.setItem("allMail", JSON.stringify(arr));

// //                 alert("Now you are part of Groww");
// //                 setTimeout(() => {
// //                   window.location.href =
// //                     "https://groww.in/dashboard/explore/stocks";
// //                 }, 2000);
// //               } else {
// //                 alert("Password doesn't match");
// //               }
// //             });
// //           }
// //           // set password end
// //           var allDatas = JSON.parse(localStorage.getItem("allMail"));
// //           // start to check user is Register or not
// //           for (var i = 0; i < allDatas.length; i++) {
// //             if (
// //               allDatas[i].emails == email.value &&
// //               allDatas[i].newPass == passorotp.value
// //             ) {
// //               setTimeout(() => {
// //                 window.location.href =
// //                   "https://groww.in/dashboard/explore/stocks";
// //               });
// //               values = 1;
// //               break;
// //             } else {
// //               values == 0;
// //               continue;
// //             }
// //           }
// //           if (values == 0) {
// //             if (valuess == "0" && passorotp.value == "") {
// //               alert("otp is wrong");
// //             } else if (valuess == "0" && otporpass.value !== num[0]) {
// //               alert("password is wrong");
// //             }
// //           }
// //           // end to check user is Register or not
// //         }
// //       }
//       // start ask frequent questions
//       var span1 = document.querySelector(".freq1 span");
//       var span2 = document.querySelector(".freq2 span");
//       var span3 = document.querySelector(".freq3 span");
//       var span4 = document.querySelector(".freq4 span");
//       var span5 = document.querySelector(".freq5 span");
//       var text1 = document.querySelector(".text1");
//       var text2 = document.querySelector(".text2");
//       var text3 = document.querySelector(".text3");
//       var text4 = document.querySelector(".text4");
//       var text5 = document.querySelector(".text5");

//       span1.addEventListener("click", display1);
//       function display1() {
//         text1.classList.toggle("display1");
//       }
//       span2.addEventListener("click", display2);
//       function display2() {
//         text2.classList.toggle("display2");
//       }
//       span3.addEventListener("click", display3);
//       function display3() {
//         text3.classList.toggle("display3");
//       }
//       span4.addEventListener("click", display4);
//       function display4() {
//         text4.classList.toggle("display4");
//       }
//       span5.addEventListener("click", display5);
//       function display5() {
//         text5.classList.toggle("display5");
//       }
//       // end ask frequent questions

//       // midsection search start
//       var input = document.querySelector("#mid-section-div input");
//       var list = document.querySelector("#mid-section-div .list");
//       var remove = document.querySelector("#mid-section-div .removelist");
//       input.addEventListener("focus", function () {
//         list.style.display = "block";
//       });
//       remove.addEventListener("click", function () {
//         list.style.display = "none";
//       });
//       // midsection search emd
//       // start of head search
//       var main_list = document.querySelector("#searchLists");
//       var main_search = document.querySelector(".main_search");
//       var sectionDiv = document.querySelector(".section");
//       var allbtn = document.querySelector(".allHead");
//       var stockbtn = document.querySelector(".stockHead");
//       var MFbtn = document.querySelector(".MFHead");
//       var FDsbtn = document.querySelector(".FDsHead");
//       var USbtn = document.querySelector(".USHead");
//       var FObtn = document.querySelector(".FOHead");
//       var MFDiv = document.querySelectorAll(".MF");
//       var stockDiv = document.querySelectorAll(".stock");
//       var USstockDiv = document.querySelector(".USstock");
//       var FDDiv = document.querySelector(".FD");
//       var callOptionDiv = document.querySelector(".callOption");

//       allbtn.addEventListener("click", function () {
//         for (var i = 0; i < stockDiv.length; i++) {
//           stockDiv[i].style.display = "flex";
//         }
//         for (var i = 0; i < MFDiv.length; i++) {
//           MFDiv[i].style.display = "flex";
//         }
//         FDDiv.style.display = "flex";
//         callOptionDiv.style.display = "flex";
//         USstockDiv.style.display = "flex";
//       });
//       stockbtn.addEventListener("click", function () {
//         for (var i = 0; i < MFDiv.length; i++) {
//           MFDiv[i].style.display = "none";
//         }
//         for (var i = 0; i < stockDiv.length; i++) {
//           stockDiv[i].style.display = "flex";
//         }
//         //
//         FDDiv.style.display = "none";
//         USstockDiv.style.display = "none";
//         callOptionDiv.style.display = "none";
//       });
//       MFbtn.addEventListener("click", function () {
//         for (var i = 0; i < stockDiv.length; i++) {
//           stockDiv[i].style.display = "none";
//         }
//         for (var i = 0; i < MFDiv.length; i++) {
//           MFDiv[i].style.display = "flex";
//         }

//         FDDiv.style.display = "none";
//         USstockDiv.style.display = "none";
//         callOptionDiv.style.display = "none";
//       });
//       FDsbtn.addEventListener("click", function () {
//         for (var i = 0; i < stockDiv.length; i++) {
//           stockDiv[i].style.display = "none";
//         }
//         for (var i = 0; i < MFDiv.length; i++) {
//           MFDiv[i].style.display = "none";
//         }
//         FDDiv.style.display = "flex";
//         USstockDiv.style.display = "none";
//         callOptionDiv.style.display = "none";
//       });
//       USbtn.addEventListener("click", function () {
//         for (var i = 0; i < stockDiv.length; i++) {
//           stockDiv[i].style.display = "none";
//         }
//         for (var i = 0; i < MFDiv.length; i++) {
//           MFDiv[i].style.display = "none";
//         }
//         USstockDiv.style.display = "flex";
//         FDDiv.style.display = "none";
//         callOptionDiv.style.display = "none";
//       });
//       FObtn.addEventListener("click", function () {
//         for (var i = 0; i < stockDiv.length; i++) {
//           stockDiv[i].style.display = "none";
//         }
//         for (var i = 0; i < MFDiv.length; i++) {
//           MFDiv[i].style.display = "none";
//         }
//         FDDiv.style.display = "none";
//         callOptionDiv.style.display = "flex";
//         USstockDiv.style.display = "none";
//       });
//       main_search.addEventListener("click", function () {
//         main_list.style.display = "block";
//       });

      

//       sectionDiv.addEventListener("click", function () {
//         main_list.style.display = "none";
//       });
//       // end of head search