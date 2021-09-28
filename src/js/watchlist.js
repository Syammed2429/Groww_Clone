// var rannum = localStorage.getItem("numbers");
    // document.getElementById("randomNum").innerHTML = rannum;

    var rannum = setInterval(changeNum,3000);
       
       function changeNum(){
           document.getElementById("randomNum").innerHTML= Math.floor(Math.random()*1000)
           var val= document.getElementById("randomNum").innerHTML;
          
   
           //  document.getElementById("num1").style.color = "#00d09c";
            if(val > 400){
               document.getElementById("randomNum").style.color = "#00d09c"; 
            }else{
               document.getElementById("randomNum").style.color = "red";
            }
       }


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
    let darkModeButton = document.querySelector('.darkModeOn');
    menuDiv.style.color = "black";
    darkModeButton = document.body;
    darkModeButton.classList.toggle('dark-mode');

}

function logOutBtn () {
    setTimeout(function () {
        window.location = '/Groww/Groww_Clone/index.html';
        alert("Sucessfully logged out")

    },2000)
};
logOut.addEventListener('click', logOutBtn);


function watchListOpen() {
    window.location = 'watchlist.html'
}
watchList.addEventListener('click', watchListOpen)

userMenu.addEventListener('click', dropDownMenu);
darkMode.addEventListener('click',darkModeToggle)
