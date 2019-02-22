/*****mobile menu*****/

function openSlideMenu() {
   console.log('open menu plz'); document.getElementById('menumobile').style.width = '250px';
    document.getElementById('contentmobile').style.marginLeft = '250px';
}

function closeSlideMenu() {
   console.log('close menu plz');  document.getElementById('menumobile').style.width = '0';
    document.getElementById('contentmobile').style.marginLeft = '0';
}

