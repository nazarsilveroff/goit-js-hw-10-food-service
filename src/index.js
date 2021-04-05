import './styles.css';
import menu from './menu.json'
import menuTemplate from './templates/menuItems.hbs'

const ref = {
    menuUl: document.querySelector('.js-menu'),
    switcher: document.querySelector('#theme-switch-toggle'),
    body:document.querySelector('body')
}
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// -----------------------------------------------set menu
const markup = menuTemplate(menu)
ref.menuUl.insertAdjacentHTML('afterbegin', markup)
// -----------------------------------------------add theme
function themeSwitcher(event) {
    if (event.target.checked) {
        ref.body.classList.remove(Theme.LIGHT);
        ref.body.classList.add(Theme.DARK);
        localStorage.setItem('Theme', Theme.DARK);
        console.log(event.target.checked);
        
	}
	else {
		ref.body.classList.replace(Theme.DARK,Theme.LIGHT)
        localStorage.setItem('Theme', Theme.LIGHT);
        console.log(event.target.checked);
	}
}
function themeSave() {
console.log(localStorage.getItem('Theme'));
    if (localStorage.getItem('Theme') === 'dark-theme') {
        ref.body.classList.add(Theme.DARK)
        ref.switcher.checked = true
    }
}
themeSave()

ref.switcher.addEventListener('change', themeSwitcher)