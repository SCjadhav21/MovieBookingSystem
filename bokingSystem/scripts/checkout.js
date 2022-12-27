// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";



// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount2=JSON.parse(localStorage.getItem('amount'))||0;
let append=()=>{
    
let h1=document.getElementById('wallet');
h1.innerText='';
h1.innerText=amount2;
}
append();

let data=JSON.parse(localStorage.getItem('movie'))||[]
let appendData=(el)=>{
    let movie=document.getElementById('movie');
    movie.innerHTML=null;
   
     let div=document.createElement('div');
     div.setAttribute('class','movie_tab');
     
     let img=document.createElement('img');
     img.src=el.Poster
     let Title=document.createElement('h3');
     Title.innerText=el.Title
    
     div.append(img,Title);
     movie.append(div)
   
 
 }
 appendData(data)

 let confirm=()=>{
    let name=document.getElementById('user_name').value;
    let seats=document.getElementById('number_of_seats').value;
    seats=+seats;
    
       if(name==''||seats==''){
        alert("fill all the data")
       }else{
        if(seats*100<=amount2){
            alert('Booking successful!')
            amount2=amount2-(seats*100);
            localStorage.setItem('amount',(amount2))
            append();
    
        }else{
            alert('Insufficient Balance!')
        }
       }
    
 }