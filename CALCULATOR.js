const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const total = document.querySelector('#total')


const add =()=>{
    let sum=0
    sum=Number(num1.value)+Number(num2.value)
    total.value=sum
}
const sub = () =>{
    let sub = 0
    sub=Number(num1.value)-Number(num2.value)
    total.value=sub
}
const mult = () =>{
    let mult = 0
    mult=Number(num1.value)*Number(num2.value)
    total.value=mult
}
const div = ()=>{
    let div = 0
    div=Number(num1.value)/Number(num2.value)
    total.value=div
}
const clr = ()=>{
    num1.value=""
    num2.value=""
    total.value=""
}
const mode =()=>{
    const body = document.body
    body.classList.toggle("light-mode")  
    var click = document.getElementById("sun");
    if(click.classList.contains('fa-sun')){
        click.classList.remove('fa-sun');
        click.classList.add('fa-moon');
    }else{
        click.classList.remove('fa-moon');
        click.classList.add('fa-sun');   
    }

    
}

