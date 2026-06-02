// Curated list of fun, safe websites
const sites = [
  'https://www.wikipedia.org',
  'https://www.reddit.com/r/random',
  'https://www.youtube.com',
  'https://www.github.com',
  'https://www.stackoverflow.com',
  'https://www.amazon.com',
  'https://www.netflix.com',
  'https://www.spotify.com',
  'https://www.twitch.tv',
  'https://www.twitter.com',
  'https://www.instagram.com',
  'https://www.tiktok.com',
  'https://www.discord.com',
  'https://www.gmail.com',
  'https://www.google.com',
  'https://www.bing.com',
  'https://www.duckduckgo.com',
  'https://www.medium.com',
  'https://www.dev.to',
  'https://www.hashnode.com',
  'https://www.codepen.io',
  'https://www.glitch.com',
  'https://www.replit.com',
  'https://www.figma.com',
  'https://www.canva.com',
  'https://www.unsplash.com',
  'https://www.pexels.com',
  'https://www.pixabay.com',
  'https://www.weather.com',
  'https://www.maps.google.com',
  'https://www.imdb.com',
  'https://www.rotten.com',
  'https://www.genius.com',
  'https://www.bandcamp.com',
  'https://www.soundcloud.com',
  'https://www.chess.com',
  'https://www.lichess.org',
  'https://www.duolingo.com',
  'https://www.codecademy.com',
  'https://www.coursera.org',
  'https://www.udemy.com',
  'https://www.skillshare.com',
  'https://www.masterclass.com',
  'https://www.freecodecamp.org',
  'https://www.w3schools.com',
  'https://www.mdn.web.dev',
  'https://www.csszzz.com',
  'https://www.dribbble.com',
  'https://www.behance.net',
  'https://www.artstation.com',
  'https://www.deviantart.com',
  'https://www.pinterest.com',
];

let clickCount = 0;
let nextSiteIndex = 0;

// Generate initial random site
function generateNextSite() {
  nextSiteIndex = Math.floor(Math.random() * sites.length);
  document.getElementById('nextSite').textContent = `Next: ${sites[nextSiteIndex]}`;
}

// Get random site
function getRandomSite() {
  const randomIndex = Math.floor(Math.random() * sites.length);
  return sites[randomIndex];
}

// Handle button click
document.getElementById('randomBtn').addEventListener('click', () => {
  const randomSite = getRandomSite();
  document.getElementById('currentSite').textContent = randomSite;
  
  clickCount++;
  document.getElementById('clickCount').textContent = clickCount;
  localStorage.setItem('siteClickCount', clickCount);
  
  // Disable button during redirect
  const btn = document.getElementById('randomBtn');
  btn.disabled = true;
  btn.textContent = 'Redirecting...';
  
  // Redirect after a short delay for visual feedback
  setTimeout(() => {
    window.open(randomSite, '_blank');
    btn.disabled = false;
    btn.textContent = 'Take Me Somewhere Random!';
    generateNextSite();
  }, 500);
});

// Reset counter
document.getElementById('resetBtn').addEventListener('click', () => {
  clickCount = 0;
  document.getElementById('clickCount').textContent = '0';
  localStorage.setItem('siteClickCount', '0');
});

// Load saved click count on page load
window.addEventListener('load', () => {
  const savedCount = localStorage.getItem('siteClickCount');
  if (savedCount) {
    clickCount = parseInt(savedCount);
    document.getElementById('clickCount').textContent = clickCount;
  }
  generateNextSite();
});
