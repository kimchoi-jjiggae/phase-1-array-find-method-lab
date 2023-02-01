// code your solution here
function superbowlWin(data){
    let matchingElement = data.find(e => e.result === "W");
    if (matchingElement){
        // console.log(matchingElement.year)
        return matchingElement.year;
    }
    else {return matchingElement};
    // console.log(year)

}