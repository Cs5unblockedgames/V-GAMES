document.addEventListener('DOMContentLoaded', () => {
  const unblockedGamesLink = document.querySelector('nav ul li:nth-child(5) a');

  unblockedGamesLink.addEventListener('click', () => {
    unblockedGamesLink.style.color = 'red';
  });
});
