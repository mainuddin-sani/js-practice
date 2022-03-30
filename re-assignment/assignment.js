// probblem 1

function anaToVori(ana){
    let goldVori;
    if(typeof ana != "string"){
        goldVori = ana / 16;
    }else {
        return 'please your input wrong!';
    }
    return goldVori;
}

const totalVori = anaToVori(16);

// problem 2

function pandaCost(singara, somocha, jilapi){
    let perSingara = 7;
    let perSomocha = 10;
    let perJilapi = 15;

    let totalPandaCost = (singara * perSingara) + (somocha * perSomocha) + (jilapi * perJilapi);
    return totalPandaCost;
}

const totalPrice = pandaCost(2,2,2);

// problem 3

function picnicBuget(pepole){
    let perOneHundred = 5000;
    let perTwoHundred = 4000;
    let perTwoHundredOver = 3000;
    if(pepole <= 100 && typeof pepole != "string"){
        let moreThenOneHundred = pepole * perOneHundred;
        return moreThenOneHundred;
    }else if(pepole <= 200 &&  typeof pepole != "string"){
        let moreThenTwoHundred = pepole * perTwoHundred;
        return moreThenTwoHundred;
    } else if(pepole &&  typeof pepole != "string"){
        let moreThenthreeHundred = pepole * perTwoHundredOver;
        return moreThenthreeHundred;
    }
    else {
        return 'please enter your right input';
    }
}

const totalPicinicCost = picnicBuget('201');

// problem 4


function oddFriend(names){
    let oddCharacter = [];
    for (let i = 0; i < names.length; i++) {
        let element = names[i].length;
        if (element % 2 == 1) {
            console.log(element);
            if (element > oddCharacter) {
                oddCharacter = element;
            }
        }
    }
    return oddCharacter;
}

const oddFriendName = oddFriend(['sani', 'maniw','mashuer']);
console.log(oddFriendName);