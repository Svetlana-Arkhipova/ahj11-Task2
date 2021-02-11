import setGoblin from './setgoblin';

setGoblin();

setInterval(() => {
  document.querySelector('.goblin').classList.remove('goblin');
  setGoblin();
}, 2000);
