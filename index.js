import ancientsData from "./data/ancients.js";

import brownCards from './data/mythicCards/brown/index.js';
import blueCards from './data/mythicCards/blue/index.js';
import greenCards from './data/mythicCards/green/index.js';


const preloader = document.querySelector('.preloader');
const ancientsBox = document.querySelector('.ancients-box');
const ancientsList = document.querySelector('.ancients-list');
const dificultyBox = document.querySelector('.dificulty-box');
const stagesBox = document.querySelector('.stages-box');
const mithicCardBox = document.querySelector('.mithic-card-box');
const monsterName = document.querySelector('.game-monster');
const dificultyLevel = document.querySelector('.game-dificulty');
const mithicCard = document.querySelector('.mithic-card');
const currentCard = document.querySelector('.current-card');

let stage1 = document.querySelector('.stage_1');
let stage2 = document.querySelector('.stage_2');
let stage3 = document.querySelector('.stage_3');

const stageName1 = document.querySelector('.stage-name_1');
const stageName2 = document.querySelector('.stage-name_2');
const stageName3 = document.querySelector('.stage-name_3');

let ancientNum;
let greenStack;
let brownStack;
let blueStack;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function setStages() {

    stage1.children[0].textContent = ancientsData[ancientNum].firstStage.greenCards;

    if (!ancientsData[ancientNum].firstStage.greenCards) {
        stage1.children[0].classList.add('green-done');
    }

    stage1.children[1].textContent = ancientsData[ancientNum].firstStage.brownCards;

    if (!ancientsData[ancientNum].firstStage.brownCards) {
        stage1.children[1].classList.add('brown-done');
    }

    stage1.children[2].textContent = ancientsData[ancientNum].firstStage.blueCards;

    if (!ancientsData[ancientNum].firstStage.blueCards) {
        stage1.children[2].classList.add('blue-done');
    }

    stage2.children[0].textContent = ancientsData[ancientNum].secondStage.greenCards;

    if (!ancientsData[ancientNum].secondStage.greenCards) {
        stage2.children[0].classList.add('green-done');
    }

    stage2.children[1].textContent = ancientsData[ancientNum].secondStage.brownCards;

    if (!ancientsData[ancientNum].secondStage.brownCards) {
        stage2.children[1].classList.add('brown-done');
    }

    stage2.children[2].textContent = ancientsData[ancientNum].secondStage.blueCards;

    if (!ancientsData[ancientNum].secondStage.blueCards) {
        stage2.children[2].classList.add('blue-done');
    }

    stage3.children[0].textContent = ancientsData[ancientNum].thirdStage.greenCards;

    if (!ancientsData[ancientNum].thirdStage.greenCards) {
        stage3.children[0].classList.add('green-done');
    }

    stage3.children[1].textContent = ancientsData[ancientNum].thirdStage.brownCards;

    if (!ancientsData[ancientNum].thirdStage.brownCards) {
        stage3.children[1].classList.add('brown-done');
    }

    stage3.children[2].textContent = ancientsData[ancientNum].thirdStage.blueCards;

    if (!ancientsData[ancientNum].thirdStage.blueCards) {
        stage3.children[2].classList.add('blue-done');
    }

}

function getGameStack(greenStack, brownStack, blueStack) {
    let fistStageStack = [];
    
    for (let i = 0; i < ancientsData[ancientNum].firstStage.greenCards; i++) {
        let random = getRandomInt(0, greenStack.length);
        fistStageStack.push(greenStack[random]);
        greenStack.splice(random, 1);
    }
    
    for (let i = 0; i < ancientsData[ancientNum].firstStage.brownCards; i++) {
        let random = getRandomInt(0, brownStack.length);
        fistStageStack.push(brownStack[random]);
        brownStack.splice(random, 1);
    }
    
    for (let i = 0; i < ancientsData[ancientNum].firstStage.blueCards; i++) {
        let random = getRandomInt(0, blueStack.length);
        fistStageStack.push(blueStack[random]);
        blueStack.splice(random, 1);
    }

    let secondStageStack = [];
    
    for (let i = 0; i < ancientsData[ancientNum].secondStage.greenCards; i++) {
        let random = getRandomInt(0, greenStack.length);
        secondStageStack.push(greenStack[random]);
        greenStack.splice(random, 1);
    }
    
    for (let i = 0; i < ancientsData[ancientNum].secondStage.brownCards; i++) {
        let random = getRandomInt(0, brownStack.length);
        secondStageStack.push(brownStack[random]);
        brownStack.splice(random, 1);
    }
    
    for (let i = 0; i < ancientsData[ancientNum].secondStage.blueCards; i++) {
        let random = getRandomInt(0, blueStack.length);
        secondStageStack.push(blueStack[random]);
        blueStack.splice(random, 1);
    }

    let thirdStageStack = [];
    
    for (let i = 0; i < ancientsData[ancientNum].thirdStage.greenCards; i++) {
        let random = getRandomInt(0, greenStack.length);
        thirdStageStack.push(greenStack[random]);
        greenStack.splice(random, 1);
    }
    
    for (let i = 0; i < ancientsData[ancientNum].thirdStage.brownCards; i++) {
        let random = getRandomInt(0, brownStack.length);
        thirdStageStack.push(brownStack[random]);
        brownStack.splice(random, 1);
    }
    
    for (let i = 0; i < ancientsData[ancientNum].thirdStage.blueCards; i++) {
        let random = getRandomInt(0, blueStack.length);
        thirdStageStack.push(blueStack[random]);
        blueStack.splice(random, 1);
    }

    return [shuffle(fistStageStack), shuffle(secondStageStack), shuffle(thirdStageStack)];
}

function preloaderHide() {
    preloader.classList.add('preloader-hidden');
    preloader.addEventListener('animationend', () => {
        preloader.classList.add('non-displayed');
        preloader.classList.remove('preloader-hidden');
    });
}

function preloaderShow() {
    preloader.classList.add('preloader-shown');
    preloader.classList.remove('non-displayed');
    preloader.addEventListener('animationend', () => {
        preloader.classList.remove('preloader-shown');
    });
}

function cardHide() {
    currentCard.classList.add('card-hidden');
    currentCard.addEventListener('animationend', () => {
        currentCard.classList.remove('card-hidden');
    });
}

setTimeout(preloaderHide, 1000);

ancientsList.addEventListener('click', (el) => {

    if (el.target.classList.contains('ancient_1')) {
        ancientNum = 0;
    } else if (el.target.classList.contains('ancient_2')) {
        ancientNum = 1;
    } else if (el.target.classList.contains('ancient_3')) {
        ancientNum = 2;
    } else if (el.target.classList.contains('ancient_4')) {
        ancientNum = 3;
    }

    preloaderShow();
    setTimeout(() => {
        ancientsBox.classList.toggle('non-displayed');
        dificultyBox.classList.toggle('non-displayed');
    }, 1000);
    setTimeout(preloaderHide, 1000);

    let greenAmount1 = ancientsData[ancientNum].firstStage.greenCards;
    let brownAmount1 = ancientsData[ancientNum].firstStage.brownCards;
    let blueAmount1 = ancientsData[ancientNum].firstStage.blueCards;

    let greenAmount2 = ancientsData[ancientNum].secondStage.greenCards;
    let brownAmount2 = ancientsData[ancientNum].secondStage.brownCards;
    let blueAmount2 = ancientsData[ancientNum].secondStage.blueCards;

    let greenAmount3 = ancientsData[ancientNum].thirdStage.greenCards;
    let brownAmount3 = ancientsData[ancientNum].thirdStage.brownCards;
    let blueAmount3 = ancientsData[ancientNum].thirdStage.blueCards;



    dificultyBox.addEventListener('click', (el) => {

        setStages();

        let target = el.target.closest('.dificulty-level');

        if (target.classList.contains('very-easy')) {

            dificultyLevel.textContent = 'Очень легко';

            greenStack = shuffle(greenCards.filter(item => item.difficulty === 'easy'));
            brownStack = shuffle(brownCards.filter(item => item.difficulty === 'easy'));
            blueStack = shuffle(blueCards.filter(item => item.difficulty === 'easy'));

            if (greenStack.length < greenAmount1 + greenAmount2 + greenAmount3) {
                let greenPlusStack = shuffle(greenCards.filter(item => item.difficulty === 'normal'));
                greenStack = shuffle(greenStack.concat(greenPlusStack.slice(0, greenAmount1 + greenAmount2 + greenAmount3 - greenStack.length)));
            }

            if (brownStack.length < brownAmount1 + brownAmount2 + brownAmount3) {
                let brownPlusStack = shuffle(brownCards.filter(item => item.difficulty === 'normal'));
                brownStack = shuffle(brownStack.concat(brownPlusStack.slice(0, brownAmount1 + brownAmount2 + brownAmount3 - brownStack.length)));
            }

        } else if (target.classList.contains('easy')) {

            dificultyLevel.textContent = 'Легко';

            greenStack = shuffle(greenCards.filter(item => item.difficulty !== 'hard'));
            brownStack = shuffle(brownCards.filter(item => item.difficulty !== 'hard'));
            blueStack = shuffle(blueCards.filter(item => item.difficulty !== 'hard'));

        }  else if (target.classList.contains('normal')) {

            dificultyLevel.textContent = 'Норма';

            greenStack = shuffle(greenCards);
            brownStack = shuffle(brownCards);
            blueStack = shuffle(blueCards);

        } else if (target.classList.contains('hard')) {

            dificultyLevel.textContent = 'Сложно';

            greenStack = shuffle(greenCards.filter(item => item.difficulty !== 'easy'));
            brownStack = shuffle(brownCards.filter(item => item.difficulty !== 'easy'));
            blueStack = shuffle(blueCards.filter(item => item.difficulty !== 'easy'));

        } else if (target.classList.contains('very-hard')) {

            dificultyLevel.textContent = 'Очень сложно';

            greenStack = shuffle(greenCards.filter(item => item.difficulty === 'hard'));
            brownStack = shuffle(brownCards.filter(item => item.difficulty === 'hard'));
            blueStack = shuffle(blueCards.filter(item => item.difficulty === 'hard'));

            if (greenStack.length < greenAmount1 + greenAmount2 + greenAmount3) {
                let greenPlusStack = shuffle(greenCards.filter(item => item.difficulty === 'normal'));
                greenStack = shuffle(greenStack.concat(greenPlusStack.slice(0, greenAmount1 + greenAmount2 + greenAmount3 - greenStack.length)));
            }

            if (brownStack.length < brownAmount1 + brownAmount2 + brownAmount3) {
                let brownPlusStack = shuffle(brownCards.filter(item => item.difficulty === 'normal'));
                brownStack = shuffle(brownStack.concat(brownPlusStack.slice(0, brownAmount1 + brownAmount2 + brownAmount3 - brownStack.length)));
            }

        }


        monsterName.textContent = ancientsData[ancientNum].name;
        let gameStack = getGameStack(greenStack, brownStack, blueStack);
    
        console.log(gameStack);

        preloaderShow();
        setTimeout(() => {
            dificultyBox.classList.toggle('non-displayed');
            stagesBox.classList.toggle('non-displayed');
            mithicCardBox.classList.toggle('non-displayed');
        }, 1000);
        setTimeout(preloaderHide, 1000);

        mithicCard.addEventListener('click', () => {

            let cardImage;
            let loggedCard;
            
            if (gameStack[0].length) {

                cardImage = gameStack[0][0].image;
                
                cardHide();
                setTimeout(() => {
                    currentCard.style.backgroundImage = cardImage;
                }, 300);

                if (gameStack[0][0].color === 'blue') {
                    blueAmount1--;
                    stage1.children[2].textContent = blueAmount1;

                    if (!blueAmount1) {
                        stage1.children[2].classList.add('green-done');
                    }

                } else if (gameStack[0][0].color === 'green') {
                    greenAmount1--;
                    stage1.children[0].textContent = greenAmount1;

                    if (!greenAmount1) {
                        stage1.children[0].classList.add('green-done');
                    }

                } else if (gameStack[0][0].color === 'brown') {
                    brownAmount1--;
                    stage1.children[1].textContent = brownAmount1;

                    if (!brownAmount1) {
                        stage1.children[1].classList.add('green-done');
                    }

                }

                loggedCard = {difficulty: gameStack[0][0].difficulty,
                                  id: gameStack[0][0].id};
                
                gameStack[0].splice(0, 1);
                console.log(gameStack);
                console.log(`ТЕКУЩАЯ КАРТА: Сложность: ${loggedCard.difficulty} | ID карты: ${loggedCard.id}`
                );

                if (!gameStack[0].length) {
                    stageName1.classList.add('stage-done');
                }


            } else if (gameStack[1].length) {

                cardImage = gameStack[1][0].image;
                
                cardHide();
                setTimeout(() => {
                    currentCard.style.backgroundImage = cardImage ;
                }, 300);

                if (gameStack[1][0].color === 'blue') {
                    blueAmount2--;
                    stage2.children[2].textContent = blueAmount2;

                    if (!blueAmount2) {
                        stage2.children[2].classList.add('green-done');
                    }

                } else if (gameStack[1][0].color === 'green') {
                    greenAmount2--;
                    stage2.children[0].textContent = greenAmount2;

                    if (!greenAmount2) {
                        stage2.children[0].classList.add('green-done');
                    }

                } else if (gameStack[1][0].color === 'brown') {
                    brownAmount2--;
                    stage2.children[1].textContent = brownAmount2;

                    if (!brownAmount2) {
                        stage2.children[1].classList.add('green-done');
                    }

                }

                loggedCard = {difficulty: gameStack[1][0].difficulty,
                              id: gameStack[1][0].id};

                gameStack[1].splice(0, 1);
                console.log(gameStack);
                console.log(`ТЕКУЩАЯ КАРТА: Сложность: ${loggedCard.difficulty} | ID карты: ${loggedCard.id}`
                );

                if (!gameStack[1].length) {
                    stageName2.classList.add('stage-done');
                }


            } else if (gameStack[2].length) {

                cardImage = gameStack[2][0].image;
                
                cardHide();
                setTimeout(() => {
                    currentCard.style.backgroundImage = cardImage;
                }, 300);

                if (gameStack[2][0].color === 'blue') {
                    blueAmount3--;
                    stage3.children[2].textContent = blueAmount3;

                    if (!blueAmount2) {
                        stage2.children[2].classList.add('green-done');
                    }

                } else if (gameStack[2][0].color === 'green') {
                    greenAmount3--;
                    stage3.children[0].textContent = greenAmount3;

                    if (!greenAmount3) {
                        stage3.children[0].classList.add('green-done');
                    }

                } else if (gameStack[2][0].color === 'brown') {
                    brownAmount3--;
                    stage3.children[1].textContent = brownAmount3;

                    if (!brownAmount3) {
                        stage3.children[1].classList.add('green-done');
                    }

                }

                loggedCard = {difficulty: gameStack[2][0].difficulty,
                    id: gameStack[2][0].id};

                gameStack[2].splice(0, 1);
                console.log(gameStack);
                console.log(`ТЕКУЩАЯ КАРТА: Сложность: ${loggedCard.difficulty} | ID карты: ${loggedCard.id}`
                );

                if (!gameStack[2].length) {
                    stageName3.classList.add('stage-done');
                    setTimeout(() => {mithicCard.setAttribute('src', './assets/card-placeholder.png')}, 700);
                }

            }

        })


    })
    
})

