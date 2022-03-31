// probblem 1

function anaToVori(ana){
    let goldVori;
    if(typeof ana != "string" && typeof ana != "object"){
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
    if (typeof singara == "string" && typeof somocha == "string" && typeof jilapi == "string") {
        return 'please enter your right input';
    } else if(typeof singara == "object" && typeof somocha == "object" && typeof jilapi == "object"){
        return 'please enter your right input';
    }
   else {
    let totalPandaCost = (singara * perSingara) + (somocha * perSomocha) + (jilapi * perJilapi);
    return totalPandaCost;
    }
    
}

const totalPrice = pandaCost(2,2,'2');

// problem 3

function picnicBuget(pepole){
    let perOneHundred = 5000;
    let perTwoHundred = 4000;
    let perTwoHundredOver = 3000;
    if (typeof pepole == "string") {
        return 'please enter your right input';
    }
    if (typeof pepole == "object") {
        return 'please enter your right input';
    }
    if(pepole <= 100){
        let moreThenOneHundred = pepole * perOneHundred;
        return moreThenOneHundred;
    }else if(pepole <= 200){
        let moreThenTwoHundred = pepole * perTwoHundred;
        return moreThenTwoHundred;
    } else{
        let moreThenthreeHundred = pepole * perTwoHundredOver;
        return moreThenthreeHundred;
    }
}

const totalPicinicCost = picnicBuget(201);
// problem 4


const friendsName = ['sani', 'manik','ali', 'rahimur']; //friends name array

function oddFriend(friendsName){
    let friendsNames = friendsName[0];
    for(let name of friendsName){
        if (name.length % 2 == 1 && friendsNames.length > name.length) {
            return name;
        }
    }

}
const smallName = oddFriend(friendsName);