//declaring login and register variables
let loginRegisterBtn = document.getElementById("reg_login");
let getStartedBtn = document.getElementById("getStarted");
// let stocksBox = document.getElementById('stocksBox');

//login and register function
function loginregister() {
}
//stocks box data variables
let stockData = document.getElementById("stockboxdata");
let mfData = document.getElementById("mfboxdata");
let goldData = document.getElementById("golddata");
let usStocksData = document.getElementById("usstocksdata");
let fdData = document.getElementById("fddata");
let button = document.createElement("button");

button.setAttribute("class", "btn-color");
button.innerHTML = `Create Account For Free`;

//all stcoks data functions
function stocksbox() {
  stockData.innerHTML = "";
  mfData.innerHTML = "";
  goldData.innerHTML = "";
  usStocksData.innerHTML = "";
  fdData.innerHTML = "";

  let zero = document.createElement("p");
  let p = document.createElement("div");
  let img = document.createElement("img");
  img.src ="Images/stockbanner.png";
  p.innerHTML = `You don’t have to pay a single rupee for opening a stocks account or account maintenance.`;
  p.setAttribute("class", "fsize");
  zero.innerHTML = `<strong><span class="bigfont">Zero</span>account charges</strong>`;

  stockData.append(img, zero, p, button);
}

function mfbox() {
  stockData.innerHTML = "";
  mfData.innerHTML = "";
  goldData.innerHTML = "";
  usStocksData.innerHTML = "";
  fdData.innerHTML = "";

  let p = document.createElement("div");
  let img = document.createElement("img");
  img.src = `Images/mfbanner.png`;
  let head = document.createElement("p");

  p.innerHTML = `Select from 5000+ direct mutual funds and get higher return than regular funds.`;
  head.innerHTML = `<strong><span class="bigfont">0%</span>commission</strong>`;

  mfData.append(img, head, p, button);
}

function goldbox() {
  stockData.innerHTML = "";
  mfData.innerHTML = "";
  goldData.innerHTML = "";
  usStocksData.innerHTML = "";
  fdData.innerHTML = "";

  let zero = document.createElement("p");
  let p = document.createElement("div");
  let img = document.createElement("img");

  img.src = `Images/goldbanner.png`;
  zero.innerHTML = `<strong><span class="bigfont">99.9%</span> purity</strong>`;
  p.innerHTML = `Invest in digital gold as low as ₹10 without any extra commission or making charges.`;
  goldData.append(img, zero, p, button);
}
function usstocksbox() {
  stockData.innerHTML = "";
  mfData.innerHTML = "";
  goldData.innerHTML = "";
  usStocksData.innerHTML = "";
  fdData.innerHTML = "";

  const p = document.createElement("div");
  const img = document.createElement("img");
  const pHead = document.createElement("p");

  img.src = `Images/usbanner.png`;
  p.innerHTML = `Invest in Apple, Google, Netflix and many more US companies that you love without any brokerage fee.`;
  pHead.innerHTML = `<strong><span class="bigfont">Free</span> account opening</strong>`;
  usStocksData.append(img, pHead, p, button);
}
function fdbox() {
  stockData.innerHTML = "";
  mfData.innerHTML = "";
  goldData.innerHTML = "";
  usStocksData.innerHTML = "";
  fdData.innerHTML = "";

  const p = document.createElement("div");
  const img = document.createElement("img");
  const pHead = document.createElement("p");

  img.src = `Images/fdsbanner.png`;
  pHead.innerHTML = `<strong><span class="bigfont">Free</span> account opening</strong>`;
  p.innerHTML = `Open fixed deposits in any bank with higher interest rates without opening a bank account.`;
  fdData.append(img, pHead, p, button);
}

loginRegisterBtn.addEventListener("click", loginregister);
getStartedBtn.addEventListener("click", loginregister);
stocksbox();

var header = document.getElementById("tabs");
var btns = header.getElementsByClassName("red");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}




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
          // window.location.href = "../../http://localhost:6334/companies";
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