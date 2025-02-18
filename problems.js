
function cashOut( money ) {
    if(typeof money !== 'number' || money < 0){
        return "Invalid";
    }
    else{
        const cashoutCharg = money * 1.75 / 100;
        return cashoutCharg;
    }
}

function  validEmail(email) {
    if(typeof email !== 'string'){
        return "Invalid";
    }
    else if(email[0] === '.' || 
        email[0] === '-' || 
        email[0] === '_' || 
        email[0] === '+' || 
        email[0] === '@' || 
        email.includes(" ")){
        return false;
    }
    else if(email.includes('@') && email.endsWith(".com")){
        return true;
    }
    else{
        return false;
    }
}

function  electionResult( votes ) {
    if(!Array.isArray(votes)){
        return "Invalid";
    }
    else{
    mangoCount = 0;
    bananaCount = 0;
    for(const element of votes){
        if(typeof element !== 'string'){
            return "Invalid";
        }
        else if(element === 'mango'){
            mangoCount ++;
        }
        else if(element === 'banana'){
            bananaCount ++;
        }
    }
    if(mangoCount > bananaCount){
        return "Mango";
    }
    else if(bananaCount > mangoCount){
        return "Banana";
    }
    else if(mangoCount === bananaCount){
        return "Draw";
    }
    }
}

function  isBestFriend( f1 , f2 ) {
    if(typeof f1 !== 'object' || 
        typeof f2 !== 'object' || 
        Array.isArray(f1) || 
        Array.isArray(f2)){
        return "Invalid";
    }
    else if(!f1.name || !f1.roll || 
        !f1.bestFriend || !f2.name || 
        !f2.roll || !f2.bestFriend){
        return "Invalid";
    }
    else if(typeof f1.name!== 'string' || 
        typeof f1.roll !== 'number' || 
        typeof f1.bestFriend !== 'number' || 
        typeof f2.name !== 'string' ||
        typeof f2.roll !== 'number' || 
        typeof f2.bestFriend !== 'number'){
        return "Invalid";
    }
    else{
        if(f1.bestFriend === f2.roll && 
            f2.bestFriend === f1.roll){
            return true;
        }
        return false;
    }
}

function  calculateWatchTime( times ) {
    if(!Array.isArray(times)){
        return "Invalid"
    }
    else{
        let totalSeconds = 0;
    for(const time of times){
        if(typeof time !== 'number'){
            return "Invalid";
        }
        totalSeconds += time;
    }
    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.round((totalSeconds % 3600) / 60);
    const second = Math.round(totalSeconds % 60);

    return {hour, minute, second};
    }
}