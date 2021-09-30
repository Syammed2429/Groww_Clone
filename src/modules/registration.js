// Login/Registrattion  Start
var value = false;
var values = 0;
var valuess = "0";
var count = 0;
var num = [];
var obj = {};
var popup = document.querySelector(".pop");
var loginBtn = document.querySelector(".btn-color");
var close = document.querySelector(".close-btn");
var contentClickBtn = document.querySelector(".content_click");
var signup = document.querySelector(".signup");
var email = document.querySelector(".email");
var otp = document.querySelector(".otp");
var pass = document.querySelector(".pass");
var form = document.querySelector(".LoginButton");
var none = document.querySelector(".none");
var otporpass = document.querySelector(".otporpass");
var passorotp = document.querySelector(".passorotp");
var setPassDiv = document.querySelector(".setPass");
var btns = document.querySelector(".setPassBtn");
var newPass = document.getElementById("newPass");
var confPass = document.getElementById("confPass");
function refreshedPage() {
  otp.style.display = "none";
  pass.style.display = "none";
  none.style.display = "block";
  value = false;
  email.value = "";
  passorotp.value = "";
  otporpass.value = "";
  count = 0;
  num = [];
  console.clear();
  values = 0;
  valuess = "0";
}
function refresh_window() {
  setTimeout(() => {
    popup.style.display = "flex";
  }, 1000);
  email.value == "";
}
close.addEventListener("click", function () {
  popup.style.display = "none";
  p.innerHTML = "";
  setPassDiv.style.display = "none";
  refreshedPage();
});
//error
loginBtn.addEventListener("click", function () {
  popup.style.display = "flex";
});
//error
contentClickBtn.addEventListener("click", function () {
  popup.style.display = "flex";
});
var p = document.createElement("p");

var arr = JSON.parse(localStorage.getItem("allMail")) || [];

function submitForm(e) {
  e.preventDefault();

  if (count == 0) {
    if (email.value == "") {
      p.textContent = "Please enter mail id";
      p.style.color = "red";
      form.insertBefore(p, signup);
    } else {
      count++;
      obj = {
        emails: email.value,
      };
      arr.push(obj);

      localStorage.setItem("allMail", JSON.stringify(arr));

      var data = JSON.parse(localStorage.getItem("allMail"));
      // start, type your password 1
      for (var i = 0; i < data.length - 1; i++) {
        if (data[i].emails == email.value) {
          none.style.display = "none";
          pass.style.display = "block";
          p.style.display = "none";
          email.style.marginBottom = "50px";
          value = true;
          break;
        }
      }
      // end, type your password 1
      // start of type otp
      if (value == false) {
        num.push(Math.floor(Math.random() * 999999));
        console.log(num);
        none.style.display = "none";
        otp.style.display = "block";
        p.style.display = "none";
        email.style.marginBottom = "50px";
      }
    }
    // end of type otp

    // set password start
  } else {
    if (otporpass.value == num[0]) {
      valuess = "1";
      setPassDiv.style.display = "block";
      btns.addEventListener("click", function () {
        if (newPass.value == confPass.value && newPass.value != "") {
          obj.newPass = newPass.value;
          arr.push(obj);
          localStorage.setItem("allMail", JSON.stringify(arr));
          let amount = 0;
          let balance = JSON.stringify(localStorage.setItem("balance", amount))
          // console.log('balance:', balance)

          alert("Now you are part of Groww");
          setTimeout(() => {
            window.location.assign('dashboard.html');
          }, 2000);
        } else {
          alert("Password doesn't match");
        }
      });
    }
    // set password end
    var allDatas = JSON.parse(localStorage.getItem("allMail"));
    // start to check user is Register or not
    for (var i = 0; i < allDatas.length; i++) {
      if (
        allDatas[i].emails == email.value &&
        allDatas[i].newPass == passorotp.value
      ) {
        setTimeout(() => {
          // window.location.href = "../../dashboard.html";
          window.location.assign('dashboard.html');

        });
        values = 1;
        break;
      } else {
        values == 0;
        continue;
      }
    }
    if (values == 0) {
      if (valuess == "0" && passorotp.value == "") {
        alert("otp is wrong");
      } else if (valuess == "0" && otporpass.value !== num[0]) {
        alert("password is wrong");
      }
    }
    // end to check user is Register or not
  }
}
// Login/loginRegiste End



