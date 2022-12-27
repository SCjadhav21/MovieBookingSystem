// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page




let append=()=>{
    let amount2=JSON.parse(localStorage.getItem('amount'))||0;
let h1=document.getElementById('wallet');
h1.innerText='';
h1.innerText=amount2;
}
append();


let getData=()=>{
    let q=document.getElementById('search').value;
    let url=`https://www.omdbapi.com/?apikey=61738cb6&s=${q}`
    fetch(url)
    .then((res)=>{
       return res.json();
    })
    .then((res)=>{
        
        appendData(res.Search);
     })
     .catch((err)=>{
       
        console.log(err);
        
     })

}
let id;

function debounce(delay,fun){
    
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(()=>{
        fun();
    },delay);
}

let appendData=(data)=>{
   let movie=document.getElementById('movies');
   movie.innerHTML=null;
   data.forEach(el => {
    let div=document.createElement('div');
    div.setAttribute('class','movie_tab');
    div.onclick=()=>{
        localStorage.setItem('movie',JSON.stringify(el));
    }
    let img=document.createElement('img');
    img.src=el.Poster
    let Title=document.createElement('h3');
    Title.innerText=el.Title
    let button=document.createElement('button');
    button.setAttribute('class','book_now');
    button.innerText='book now'

    button.onclick=()=>{
        window.location.href='checkout.html'
    }

    div.append(img,Title,button);
    movie.append(div)
   });

}