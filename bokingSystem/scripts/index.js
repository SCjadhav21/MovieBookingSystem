// Store the wallet amount to your local storage with key "amount"




let addamount=()=>{
    
    let amount=document.getElementById('amount').value;
    amount=+amount;

    let amount2=JSON.parse(localStorage.getItem('amount'))||0;
    amount2=+amount2;
    localStorage.setItem('amount',(amount+amount2))
   append()
   

}
let append=()=>{
    let amount2=JSON.parse(localStorage.getItem('amount'))||0;
let h1=document.getElementById('wallet');
h1.innerText='';
h1.innerText=amount2;
}
append();

let shiftpage=()=>{
    window.location.href="movies.html"
}
