const names=["Anwar","Yasin","Yahya"]
const event='birthday'
function writeCards(names,event){
    let thankyou=[]
    for(let i=0;i<names.length;i++){
        let messages=`Thank you, ${names[i]}, for the wonderful ${event} gift!`
        thankyou.push(messages);
    }
    return thankyou

}
function countDown(n){
    let i=n
    while (i>=0){
        console.log(i)
        i--
    }
}
countDown(10)