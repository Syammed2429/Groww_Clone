let userMenu = document.querySelector('.userIcon');
    const menuDiv = document.createElement('div');
    
    function dropDownMenu() {
        const name = document.createElement('div');
        const email = document.createElement('div');
        const importFunds = document.createElement('div');
        const watchList = document.createElement('div');
        const orders = document.createElement('div');
        const help = document.createElement('div');
        const logOut = document.createElement('div');
        let count = 0;

        importFunds.innerHTML = "Import Funds";
        watchList.innerHTML = "Watch List";
        orders.innerHTML = "Order";
        logOut.innerHTML = "Log Out";
        menuDiv.append(importFunds,watchList,orders,logOut);
        menuDiv.classList.add('content')
        userMenu.append(menuDiv);
        count++;

        if (count >= 1) {
            userMenu.removeEventListener('click', dropDownMenu);
        }
    }

    function dropMenuDissaper () {
        console.log(userMenu);
        menuDiv.innerHTML = '';
    }

    
    function darkMode() {
        let darkMode = document.body;
        darkMode.classList.toggle('dark-mode')
        

    }


    userMenu.addEventListener('dblclick', dropMenuDissaper);
    userMenu.addEventListener('click', dropDownMenu);