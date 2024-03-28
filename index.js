// code your solution here

function saturdayFun(activity = 'roller-skate'){
 return`This Saturday, I want to ${activity}!`
  
};
saturdayFun();
saturdayFun('bathe my dog');


function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(string = "*"){
    return function (adjective = "a hard worker"){
        return `You are ${string}${adjective}${string}!`
}
}