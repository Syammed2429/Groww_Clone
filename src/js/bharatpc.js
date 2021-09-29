
  var num = setInterval(changeNum, 3000);
  var inputval = document.querySelectorAll("#box2 .box2");
  function changeNum() {
    document.getElementById("num1").innerHTML = Math.round(
      Math.random() * 1000
    );
    var val = document.getElementById("num1").innerHTML;
    //  random value into inputbox
    inputval[1].value = Number(val) + 15;
    if (value == false) {
      inputval[1].value = Number(val) - 15;
    }
    //  document.getElementById("num1").style.color = "#00d09c";
    if (val > 400) {
      document.getElementById("num1").style.color = "#00d09c";
    } else {
      document.getElementById("num1").style.color = "red";
    }
  }

  //  var fd1 = document.getElementById("xx1").style.color = "#00d09c";

  function ch1() {
    document.getElementById("xx1").style.color = "#00d09c";
  }
  function ch12() {
    document.getElementById("xx1").style.color = "#44475b";
  }
  function ch2() {
    document.getElementById("xx12").style.color = "#00d09c";
  }
  function ch22() {
    document.getElementById("xx12").style.color = "#44475b";
  }
  function ch3() {
    document.getElementById("xx13").style.color = "#00d09c";
  }
  function ch32() {
    document.getElementById("xx13").style.color = "#44475b";
  }
  function ch4() {
    document.getElementById("xx14").style.color = "#00d09c";
  }
  function ch42() {
    document.getElementById("xx14").style.color = "#44475b";
  }

  //graph images
  function graph1() {
    document.getElementById("gp1").innerHTML = "BSE";
    document.getElementById("img1").src = "images/year3.png";
  }
  function graph11() {
    document.getElementById("gp1").innerHTML = "NSE";
    document.getElementById("img1").src = "images/doyear3.png";
  }

  function gpc1() {
    document.getElementById("img1").src = "images/day1.png";
  }
  function gpc2() {
    document.getElementById("img1").src = "images/week1.png";
  }
  function gpc3() {
    document.getElementById("img1").src = "images/month1.png";
  }
  function gpc4() {
    document.getElementById("img1").src = "images/year1.png";
  }
  function gpc5() {
    document.getElementById("img1").src = "images/year3.png";
  }
  function gpc6() {
    document.getElementById("img1").src = "images/year4.png";
  }

  function gpc11() {
    document.getElementById("img1").src = "images/doday1.png";
  }
  function gpc12() {
    document.getElementById("img1").src = "images/doweek1.png";
  }
  function gpc13() {
    document.getElementById("img1").src = "images/domon1.png";
  }
  function gpc14() {
    document.getElementById("img1").src = "images/doyear1.png";
  }
  function gpc15() {
    document.getElementById("img1").src = "images/doyear3.png";
  }
  function gpc16() {
    document.getElementById("img1").src = "images/donse1.png";
  }

  function pch1() {
    document.getElementById("p3").innerHTML = "50.00%";
    document.getElementById("p4").innerHTML = "47.50%";
    document.getElementById("p5").innerHTML = "39.50%";
  }
  function pch2() {
    // document.getElementById("p4").innerHTML = 52.25;
    document.getElementById("p3").innerHTML = "50.00%";
    document.getElementById("p4").innerHTML = "49.50%";
    document.getElementById("p5").innerHTML = "37.50%";
  }

  function pch3() {
    document.getElementById("p3").innerHTML = "56.00%";
    document.getElementById("p4").innerHTML = "37.20%";
    document.getElementById("p5").innerHTML = "29.70%";
  }
  //   buy sell start
  var value = true;
  var values = false;
  let amount = JSON.parse(localStorage.getItem("balance"));
//   console.log('amount:', amount)
  var balance = document.querySelector(".availBal");
  var buybtn = document.querySelector(".clickbuybtn");
  var sellbtn = document.querySelector(".clicksellbtn");
  var btnDiv = document.querySelector(".buysellBtn");
  var buysellDiv = document.querySelector(".buysellBtn");
  var shareAvail = document.querySelector(".shareAvail");
  var sell_p = document.createElement("p");
  sell_p.textContent = "Shares Available 0";
  var clickbtn = document.querySelector(".buysellBtn");
  var wallet = document.querySelector(".wallet");
  balance.textContent = amount;

  buybtn.addEventListener("click", function () {
    value = true;
    this.style.color = "#00d09c";
    sellbtn.style.color = "black";
    clickbtn.textContent = "BUY";
    //  if (value == true) {
    //    shareAvail.removeChild(sell_p);
    //  }
  });
  sellbtn.addEventListener("click", function () {
    value = false;
    this.style.color = "#00d09c";
    this.style.fontWeight = "bold";
    buybtn.style.color = "black";
    clickbtn.textContent = "SELL";
    clickbtn.style.border = "1px solid #00d09c";
    //  if (value == false) {
    //    shareAvail.appendChild(sell_p);
    //  }
  });

  btnDiv.addEventListener("click", function () {
    if (inputval[0].value == "" || inputval[1].value == "") {
      alert("Need input in both field");
    } else {
      if (inputval[0].value * inputval[1].value > amount) {
        alert("You have Insufficient amount");
      } else {
        values = true;
      }
    }
    if (values == true) {
      alert("thanks to purchase");
      var bal = amount - inputval[0].value * inputval[1].value;
      localStorage.setItem("balance", JSON.stringify(bal));
      var remamount = JSON.parse(localStorage.getItem("balance"));
    }
    balance.textContent = remamount;
  });

  //   buy sell end


//dropdowm start
//Declearing the variables for the dropDownMenu
let userMenu = document.querySelector('.userIcon');
const menuDiv = document.createElement('div');
let darkMode = document.createElement('div');
const name = document.createElement('div');
const email = document.createElement('div');
const importFunds = document.createElement('div');
const watchList = document.createElement('div');
const orders = document.createElement('div');
const help = document.createElement('div');
const logOut = document.createElement('div');
const close = document.createElement('span');
const userName = JSON.parse(localStorage.getItem('allMail'));
var a ;
userName.forEach(function(name) {
    a = name.emails;
})

//creting classes for the above variables
menuDiv.classList.add('menu')
darkMode.classList.add('darkModeOn')
importFunds.classList.add('importFunds')



function dropDownMenu() {

let count = 0;
importFunds.innerHTML = "Import Funds";
watchList.innerHTML = "Watch List";
orders.innerHTML = "Order";
darkMode.innerHTML = "Dark Mode";
logOut.innerHTML = "Log Out";
close.innerHTML = "close&times;";

//Cretaing a class for menuDiv

menuDiv.classList.add('content');

//appending all the items to the menuDiv

// menuDiv.append(close,importFunds,watchList,orders,darkMode,logOut);
menuDiv.append(close,importFunds,a,watchList,orders,darkMode,logOut);


//appending the items of the menuDiv to the userMenu
userMenu.append(menuDiv);

close.onclick = function() {
    menuDiv.style.display = "none";
  }

count++;

if (count >= 1) {
    userMenu.removeEventListener('click', dropDownMenu);
}

}
// c.classList.add('baby')



function darkModeToggle() {
    let balaceText = document.querySelector('.balance-box');
    let darkModeButton = document.querySelector('.darkModeOn');
    menuDiv.style.color = "black";
    balaceText.style.color = "black";
    darkModeButton = document.body;
    darkModeButton.classList.toggle('dark-mode');

}

function logOutBtn () {
    setTimeout(function () {
        window.location = '../index.html';
        alert("Successfully logged out")

    },2000)
};
logOut.addEventListener('click', logOutBtn);


function watchListOpen() {
    window.location.href = '../watchlist.html'
}
watchList.addEventListener('click', watchListOpen)

userMenu.addEventListener('click', dropDownMenu);
darkMode.addEventListener('click',darkModeToggle);

function watchlistadd(){
         alert("This is added to Watch list");
      }
