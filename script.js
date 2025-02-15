// Function to get a setting from localStorage
function getSetting(key, defaultValue) {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) {
        return defaultValue;
    }
    try {
        return JSON.parse(storedValue);
    } catch (e) {
        // Handle parsing errors (e.g., if the stored value isn't valid JSON)
        console.error(`Error parsing setting ${key} from localStorage:`, e);
        return defaultValue;
    }
}

// Function to set a setting in localStorage
function setSetting(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

const games = [
    {
        url: 'https://bitlife-use-simplicity.vercel.app/',
        image: 'https://www.escapistmagazine.com/wp-content/uploads/2024/04/BitLife-Logo.jpg?fit=1200%2C675',
        title: 'BitLife',
        genres: 'Simulation, Life, Game'
    },
    {
        url: 'https://vigglesbeens.vercel.app/',
        image: 'https://art.pixilart.com/3253d436c2cf5e0.gif',
        title: 'Plasma Unblocker',
        genres: 'Unblocker, Games, Apps'
    },
    {
        url: 'https://sigmaticity.vercel.app/',
        image: 'https://media1.giphy.com/media/SVCSsoKU5v6ZJLk07n/giphy.gif?cid=6c09b952ifosvwna6qj7z6gcu769z2ecmuwt6l2ue82gdu66&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        title: 'Interstellar',
        genres: 'Unblocker, Proxy, Games, Apps'
    },
    {
        url: 'https://freekydeeki.onrender.com',
        image: 'https://cdn.dribbble.com/users/88529/screenshots/4852160/media/6939fd77e92a6168629f6711e65d558e.png',
        title: 'Movies (freek.to)',
        genres: 'Movies, Tv, Anime, Manga'
    },
    {
        url: 'https://snowrider-3d.vercel.app/',
        image: 'https://cdn.now.gg/apps-content/com.nowgg.h5.pub483.app51067/ogimage/snow-rider-3d.jpg',
        title: 'Snow Rider 3D',
        genres: 'Game'
    },
    {
        url: 'https://iask.ai',
        image: 'https://archive.org/download/1712685806715/1712685806715.png',
        title: 'Ask Ai',
        genres: 'Ai'
    },
    {
        url: 'https://simplicty-est-super-cool.vercel.app/',
        image: 'https://www.numuki.com/game/img/house-of-hazards-3418.jpg',
        title: 'House of Hazards',
        genres: 'Game'
    },
    {
        url: 'https://simplicity-awesome.vercel.app/',
        image: 'https://github.com/Greys2121/Simplicity-beta-release/blob/main/retro-bowl-college.png?raw=true',
        title: 'Retro Bowl',
        genres: 'Game'
    },
    {
        url: 'https://simplicity-so-friggin-cool.vercel.app/',
        image: 'https://i.ytimg.com/vi/SN7yOZARWB0/maxresdefault.jpg',
        title: 'Territorial',
        genres: 'Game'
    },
    {
        url: 'https://simplic-space-ity.vercel.app',
        image: 'https://insights.som.yale.edu/sites/default/files/styles/max_1300x1300/public/2022-10/space.jpeg?itok=ee8bV8ok',
        title: 'Space-Proxy',
        genres: 'Unblocker, Proxy, Games, Apps'
    },
    {
        url: 'https://prolly-simplicitys-website.vercel.app/',
        image: 'https://media.licdn.com/dms/image/v2/C5612AQEbp1oYRPgCHg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1618575564534?e=2147483647&v=beta&t=Cm6HxJgblnjMpNvZo8HuWkpDR3ytNcTIBHifMkeDWHE',
        title: 'Card Games/Board Games',
        genres: 'Games, Board Games'
    },
    {
        url: 'https://simplicity-tetris.vercel.app/',
        image: 'https://play-lh.googleusercontent.com/OWGN9-qhyQMwPdwUVciUaWwNB8-OLTdp4wtiC4imY_suZrIGV8Nb98OTZPCh7FjiaVG_sXA9gdY=w1296-h2160-rw',
        title: 'Tetris',
        genres: 'Game'
    },
    {
        url: 'https://eggycar-simplicity.vercel.app/',
        image: 'https://i.ytimg.com/vi/lgFhzhRM29M/maxresdefault.jpg',
        title: 'Eggy Car',
        genres: 'Game'
    },
    {
        url: 'https://bloxd-simplicity.vercel.app/',
        image: 'https://i.ytimg.com/vi/FoqKB4ogm4k/maxresdefault.jpg',
        title: 'Bloxd.io',
        genres: 'Game, Minecraft'
    },
    {
        url: 'https://fnaf-simplicity.vercel.app/',
        image: 'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2023/12/Five-Nights-At-Freddys-Generic-Art.jpg',
        title: 'Fnaf',
        genres: 'Game, Horror'
    },
    {
        url: 'https://simplcity-skribbl.vercel.app/',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU0Bdy7yc6tV2mdGEBDvOHPHaq9QwqGL-WqA&s',
        title: 'Skribbl.io',
        genres: 'Game, Art'
    },
    {
        url: 'https://minecraft-simplicity.vercel.app/',
        image: 'https://staticg.sportskeeda.com/editor/2025/01/8827f-17376979472538-1920.jpg?w=640',
        title: 'Eaglercraft',
        genres: 'Game'
    },
    {
        url: 'https://pakohighway-simplicity.vercel.app/',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWIdsXaqWOs_0GRPakOfFuhhPNrXwwobw95g&s',
        title: 'PakoHighway',
        genres: 'Game'
    },
    {
        url: 'https://simplicity-hunters.vercel.app/',
        image: 'https://w8.snokido.com/img/large/drift-hunters.jpg?080124',
        title: 'Drift Hunters',
        genres: 'Game'
    },
    {
        url: 'https://burrito-simplicity.vercel.app/',
        image: 'https://i.ytimg.com/vi/GvlrAwlpZyk/maxresdefault.jpg',
        title: 'Burrito Bison',
        genres: 'Game'
    },
    {
        url: 'https://roomsintheback.vercel.app/',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Backrooms_model.jpg/1200px-Backrooms_model.jpg',
        title: 'Backrooms',
        genres: 'Game'
    }
];

const gameGrid = document.getElementById('gameGrid');
const contentBox = document.getElementById('contentBox');
const contentBoxText = document.getElementById('contentBoxText');
const settingsModal = document.getElementById('settingsModal');
const backgroundImageUrlInput = document.getElementById('backgroundImageUrl');
const contentBoxWidthInput = document.getElementById('contentBoxWidth'); // Get the width input.
const contentBoxHeightInput = document.getElementById('contentBoxHeight'); // Get the height input.

// Load settings from localStorage with defaults
window.backgroundImageUrl = getSetting('backgroundImageUrl', '');
window.contentBoxTextVisible = getSetting('contentBoxTextVisible', true);
window.contentBoxWidth = getSetting('contentBoxWidth', 100); // Load width setting (default 100%)
window.contentBoxHeight = getSetting('contentBoxHeight', 50); // Load height setting (default 50%)

// Apply saved settings on page load *before* setting up event listeners
function applySettings() {
    contentBox.style.backgroundImage = window.backgroundImageUrl ? `url(${window.backgroundImageUrl})` : '';
    contentBoxText.style.display = window.contentBoxTextVisible ? 'block' : 'none';
    contentBox.style.width = `${window.contentBoxWidth}%`;  // Apply the width setting.
    contentBox.style.height = `${window.contentBoxHeight}%`; // Apply the height setting.
    backgroundImageUrlInput.value = window.backgroundImageUrl;
    contentBoxWidthInput.value = window.contentBoxWidth; // Update the input field.
    contentBoxHeightInput.value = window.contentBoxHeight; // Update the height input field

    // Update the checkbox state.
    document.getElementById('contentBoxTextToggle').checked = window.contentBoxTextVisible;
}

applySettings();

games.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="background" style="background-image: url(${game.image});"></div>
        <div class="info">
            <h3>${game.title}</h3>
            <p class="genres">${game.genres}</p>
            <a href="#" onclick="openGameModal('${game.url}')">Use</a>
        </div>
    `;
    gameGrid.appendChild(card);
});

function openGameModal(url) {
    document.getElementById('gameModal').classList.add('show');
    document.getElementById('modalTitle');
    document.getElementById('modalIframe').src = url;
}

function closeModal() {
    document.getElementById('gameModal').classList.remove('show');
}

function openInNewTab() {
    window.open(document.getElementById('modalIframe').src, '_blank');
