
//Declearing the variables
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

        menuDiv.append(close,importFunds,watchList,orders,darkMode,logOut);

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

        function addMoney () {
            // let importFund = querySelector('.importFunds');
            console.log('importFund:')
            window.location = 'import-funds.html';
            // console.log('importFund:')

            // window.location('import-funds.html')
        }

    // userMenu.addEventListener('dblclick', dropMenuDissaper);
    importFunds.addEventListener('click', addMoney)
    userMenu.addEventListener('click', dropDownMenu);
    darkMode.addEventListener('click',darkModeToggle)