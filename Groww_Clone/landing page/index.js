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
