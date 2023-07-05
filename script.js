// const images = [
//     'https://images.wallpaperscraft.com/image/single/landscape_art_road_127350_1600x900.jpg',
//     'https://images.hdqwalls.com/download/nature-scenery-wallpaper-1600x900.jpg',
//     'https://images.wallpaperscraft.com/image/single/beautiful_scenery_mountains_lake_93318_1600x900.jpg',
//     'https://free4kwallpapers.com/uploads/wallpaper/anime-landscape-for-desktop-scenery-clouds-stars-buildings-wallpaper-1600x900-wallpaper.jpg',
//     'https://wallpapersmug.com/download/1600x900/f80e73/minimal-landscape-sunset-4k.jpg'
// ];

const images = [
    'https://wallpapersmug.com/download/1600x900/fbd663/mohamed-salah-sports-football.jpg',
    'https://www.hindustantimes.com/ht-img/img/2023/06/30/1600x900/Soccer-Germany-Schedule-0_1688135902643_1688135975554.jpg',
    'https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2022/12/07094041/Ronaldo-at-the-World-Cup.jpg',
    'https://www.hindustantimes.com/ht-img/img/2023/06/29/1600x900/PTI06-21-2023-000462A-0_1688037529907_1688037558646.jpg',
    'https://www.hindustantimes.com/ht-img/img/2023/07/02/1600x900/SOCCER-SAUDI-ANA-SHB-REPORT-8_1686913491038_1688321018405.JPG',
    'https://www.livemint.com/lm-img/img/2023/06/29/1600x900/PTI06-24-2023-000260A-0_1688037524213_1688037549038.jpg',
];

const dotsContainer = document.getElementById('dots-container');

const carouselImage = document.getElementById('carousel-image');

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let index;
let buttons = images.length;

const init = () => {
    index = Math.floor(Math.random()*5);
    carouselImage.src = images[index];
    addDots();

    for(let i = 0; i < buttons; i++) {
        document.querySelectorAll('.dot-button')[i]?.addEventListener('click', (event) => {
            index = Number(event.target.parentNode.value);
            event.target.parentNode.classList.add('active');

            updateImage();
            updateDots();
        });
    }

    updateDots();
}

const hoverSlideshow = () => {
    console.log('Slideshow starts');
}

const prev = () => {
    if(index === 0) {
        index = images.length-1;
    }
    else {
        index--;
    }
    updateImage();
}

const next = () => {
    if(index === images.length-1) {
        index = 0;
    }
    else {
        index++;
    }
    updateImage();
}

const updateImage = () => {
    carouselImage.src = images[index];
}

const createDots = () => {
    let dotBox = document.createElement('button');
    dotBox.className = 'dot-button';

    let icon = document.createElement('img');
    icon.src = './media/icons/round.png';
    icon.alt = 'dot icon';
    icon.className = 'dot-icon';

    dotBox.appendChild(icon);
    return dotBox;
}

const addDots = () => {
    for(let i = 0; i < images.length; i++) {
        let newDot = createDots();
        newDot.value = i;
        dotsContainer.appendChild(newDot);
    }
}

const updateDots = () => {
    for(let i = 0; i < buttons; i++) {
        if(Number(document.querySelectorAll('.dot-button')[i].value) !== index) {
            document.querySelectorAll('.dot-button')[i].classList.remove('active');
        }
        else {
            document.querySelectorAll('.dot-button')[i].classList.add('active');
        }
    }
}

prevButton.addEventListener('click', () => {
    prev();
    updateDots();
});

nextButton.addEventListener('click', () => {
    next();
    updateDots();
});

carouselImage.addEventListener('mouseover', () => {
    hoverSlideshow();
});

init();
