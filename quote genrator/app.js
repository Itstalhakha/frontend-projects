let btn_genrator=document.getElementById('new-quote');
let quote_display=document.getElementById('quote-display');
let author_display=document.getElementById('author');


btn_genrator.addEventListener('click',genrate_quote);

function genrate_quote(){
  fetch('https://dummyjson.com/quotes/random')
.then(res => res.json() 
)
.then(data => {
    quote_display.innerText=`"${data.quote}"`
    author_display.innerText=`${data.author}`; } )

.catch(err => alert('Error fetching quote:', err));
}
