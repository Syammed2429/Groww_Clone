
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



//dropdown menu starr
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

        // logOut.window.replace

        //appending all the items to the menuDiv
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
        let a = document.querySelector('.stock-name')
        let b = document.querySelector('.menu')
        a.style.color = 'white'
        b.style.color = 'black'
        darkModeButton = document.body;
         darkModeButton.classList.toggle('dark-mode');

        }

        function logOutBtn () {
            setTimeout(function () {
                window.location = 'index.html';
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
        

    logOut.addEventListener('click', logOutBtn);


    // function hover () {
    //     console.log('hai from hover');
    //     let plus = document.createElement('div');
    //     let dataBox = document.querySelector('.stock-box__data');

    //     plus.innerHTML = '+'
    //     dataBox.append(plus)
    // }

    // // hover ()