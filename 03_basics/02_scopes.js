let a = 300
if(true) {
    let a = 10
    const b = 40
    // console.log("INNER: ", a)
}
// console.log(a)

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if(true){
    const username = "Ayush"
    if(username === "Ayush"){
        // const website = " youtube"
        // console.log(username + website)
    }
// console.log(username)
}
//++++++++++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(7))

function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}
console.log(addTwo(7))
