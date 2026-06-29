let username;
document.getElementById(`sudmit_button`).onclick = function(){
    username = document.getElementById(`input_for_user`).value;
    if(!username){
        document.getElementById(`here_usernmae`).textContent =`Please write You'r Good Name`;   
    }
    else{
        document.getElementById(`here_usernmae`).textContent =`You'r Good Name is ${username}`;
    }
};

let age;
document.getElementById("sudmit_button_for_age").onclick = function(){
    age = document.getElementById("input_for_age").value;
    age = Number(age)
    if(age > 0 && age <= 120){
        document.getElementById("age").textContent = `You'r ${age} year's old`;
    }
    else {
        document.getElementById("age").textContent = `Please write 1 to 120 year's`;
    }
};

let x = "0"
let y = "0"
let z = "0"

x = String(x)
y = Number(y)
z = Boolean(z)

console.log(x, typeof(x))
console.log(y, typeof(y))
console.log(z, typeof(z))