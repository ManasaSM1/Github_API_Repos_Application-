function foo(){
let input=document.getElementById("inputname").value;
console.log(input);

async function foo1(){
    try{
    let url=await fetch(`https://api.github.com/users/${input}`);
    let res=await url.json();
    console.log(res);
    
}

catch(error){
    
    console.log(error);
}
}
foo1()
}