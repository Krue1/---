document.getElementById('cn').onclick = () => {
    document.title = '笑话生成器';
    document.getElementById('lbl-customname').textContent = '请输入自定义的名字：';
    document.getElementById('lbl-cn').textContent = '中国';
    document.getElementById('lbl-us').textContent = '美国';
    document.getElementById('lbl-uk').textContent = '英国';
    document.getElementById('customname').placeholder = '李雷';
    document.querySelector('.randomize').textContent = '随机生成笑话';
};

document.getElementById('us').onclick = document.getElementById('uk').onclick = () => {
    document.title = 'Silly story generator';
    document.getElementById('lbl-customname').textContent = 'Enter custom name:';
    document.getElementById('lbl-cn').textContent = 'CN';
    document.getElementById('lbl-us').textContent = 'US';
    document.getElementById('lbl-uk').textContent = 'UK';
    document.getElementById('customname').placeholder = 'Bob';
    document.querySelector('.randomize').textContent = 'Generate random story';
};

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let storyText = "It was 94 fahrenheit outside, so :\
insertx: went for a walk. When they got to :inserty:, \
they stared in horror for a few moments, then :insertz:. \
Bob saw the whole thing, but was not surprised — :insertx: weight 300 pounds, and it was a hot day.";

let insertX = ["Willy the Goblin", "Big DaddyFather", "Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
    let newStory, xItem, yItem, zItem, name;
    if (document.getElementById("cn").checked) {

    } else {
        newStory = storyText;
        xItem = randomValueFromArray(insertX);
        yItem = randomValueFromArray(insertY);
        zItem = randomValueFromArray(insertZ);
        newStory = newStory.replace(/:insertx:/g, xItem);
        newStory = newStory.replace(/:inserty:/g, yItem);
        newStory = newStory.replace(/:insertz:/g, zItem);
        if (customName.value !== '') {
            name = customName.value;
            newStory = newStory.replace(/Bob/g, name);
        }
        if (document.getElementById("uk").checked) {
            var weight = Math.round(21.4285714);
            var temperature = Math.round(34.4444);
            newStory = newStory.replace(/300 pounds/g, weight + " stones");
            newStory = newStory.replace(/94 fahrenheit/g, temperature + " centigrade");
        }
    }
    story.textContent = newStory;
    story.style.visibility = 'visible';
}