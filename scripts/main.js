
const aphorisms = ['Better safe than sorry.', 'An apple a day keeps the doctor away.', 'A chain is only as strong as its weakest link.', 'A dog is a man\'s best friend.', 'A little learning is a dangerous thing.', 'A man\'s home is his castle.', 'A penny saved is a penny earned.', 'Absense makes the heart grow fonder.', 'Actions speak louder than words.', 'All for one and one for all.', 'Carpe Diem - Sieze the day.', 'All that glitters is not gold.', 'All the world\'s a stage.', 'Good things come to those who wait.', 'All is fair in love and war.', 'All is well that ends well.', 'Out of the frying pan and into the fryer.', 'Beauty is in the eye of the beholder.', 'Better late than never.'];
const warnings = ['Be prepared for trying experiences today.', 'Today could be a strange day where money is concerned.', 'Give special attention to your relationships today; they need it.', 'Be wary of new experiences, as it is a dangerous day to try new things.', 'Your career may be in turmoil today.'];
const blessings = ['A well-deserved reward is heading your way.', 'Today could be a prosperous day for you if you make the right choices.', 'Give yourself some time to relax, you deserve it.', 'Reach out to an old friend and something good will come of it.'];

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    const data = Object.fromEntries(new FormData(e.target).entries());
    generateOutput(data);
});

generateOutput = (data) => {
    document.getElementById('output-container').style.display = 'block';

    const welcome = document.createElement('p');
    const horoscopeSign = document.createElement('div');
    const horoscope = document.createElement('p');

    welcome.id = 'welcome';
    horoscope.id = 'horoscope';
    horoscopeSign.id = 'horoscopeSign';

    welcome.className = 'output-elements';
    horoscope.className = 'output-elements';
    horoscopeSign.className = 'output-elements';

    const output = document.getElementById('output');

    if(output.children.length === 0) {
        output.appendChild(welcome);
        output.appendChild(horoscopeSign);
        output.appendChild(horoscope);
    }
    

    generateWelcome(data.firstName);
    findHoroscopeSign(data.birthday);
    generateHoroscope();

}

generateWelcome = (name) => {
    document.getElementById('welcome').innerHTML = `Hello, ${name}!`;
}

generateHoroscope = () => {
    let randomAphorism = aphorisms[Math.floor(Math.random() * aphorisms.length)];
    let randomWarning = warnings[Math.floor(Math.random() * warnings.length)];
    let randomBlessing = blessings[Math.floor(Math.random() * blessings.length)];

    let horoscope = `${randomAphorism} ${randomWarning} ${randomBlessing}`;

    document.getElementById('horoscope').innerHTML = horoscope;
}

findHoroscopeSign = (birthday) => {
    date = new Date(birthday);
    month = date.getUTCMonth() + 1;
    day = date.getUTCDate();
    let sign = '';
    
    switch(month) {
        case 1:
            if(day < 20) {
                sign = 'Capricorn';
            }
            else {
                sign = 'Aquarius';
            }
            break;
        case 2:
            if(day < 19) {
                sign = 'Aquarius';
            }
            else {
                sign = 'Pisces';
            }
            break;
        case 3:
            if(day < 21) {
                sign = 'Pisces';
            }
            else {
                sign = 'Aries';
            }
            break;
        case 4:
            if(day < 20) {
                sign = 'Aries';
            }
            else {
                sign = 'Taurus';
            }
            break;
        case 5:
            if(day < 21) {
                sign = 'Taurus';
            }
            else {
                sign = 'Gemini';
            }
            break;
        case 6:
            if(day < 21) {
                sign = 'Gemini';
            }
            else {
                sign = 'Cancer';
            }
            break;
        case 7:
            if(day < 23) {
                sign = 'Cancer';
            }
            else {
                sign = 'Leo';
            }
            break;
        case 8:
            if(day < 23) {
                sign = 'Leo';
            }
            else {
                sign = 'Virgo';
            }
            break;
        case 9:
            if(day < 23) {
                sign = 'Virgo';
            }
            else {
                sign = 'Libra';
            }
            break;
        case 10:
            if(day < 23) {
                sign = 'Libra';
            }
            else {
                sign = 'Scorpio';
            }
            break;
        case 11:
            if(day < 22) {
                sign = 'Scorpio';
            }
            else {
                sign = 'Sagittarius';
            }
            break;
        case 12:
            if(day < 22) {
                sign = 'Sagittarius';
            }
            else {
                sign = 'Capricorn';
            }
            break;
        default:
            window.alert('Please enter a valid birthday');
            break;
    }

    document.getElementById('horoscopeSign').innerHTML = `Your horoscope sign is ${sign}.`;
}


// const formData = new FormData(document.getElementById('form'));
// document.getElementById('title').innerHTML = 'Hi there';

// const formEntries = Object.fromEntries(formData.entries());
// console.log(formEntries);