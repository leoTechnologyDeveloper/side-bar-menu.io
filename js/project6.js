const hamburguer = document.querySelector('.hamburguer');
const xClose = document.querySelector('.xClose');
const sideBar = document.querySelector('.sideBar');

hamburguer.addEventListener('click', () =>  sideBar.classList.toggle('hide') );

xClose.addEventListener('click', ()=> sideBar.classList.add('hide'));