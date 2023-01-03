if (localStorage.getItem('theme') == 'dark' )
setDarkMode(true);

function setDarkMode(isDark) {

    if (isDark) {
        document.body.setAttribute('id', 'darkMode');
        localStorage.setItem('theme', 'dark');
        
    } else {
        document.body.setAttribute('id', '');
        localStorage.removeItem('theme');
    }
}