const superbowlWin = (record) => {
    let winObj = record.find(element => element.result === 'W')
    if (!winObj){
        return undefined;
    } else{
        return winObj.year;
    }
}
