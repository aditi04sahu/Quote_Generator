// Variables

let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
    quote:`"Man often becomes what he believes himself to be. If I keep on saying to myself that I cannot do a certain thing, it is possible that I may end by really becoming incapable of doing it. On the contrary, if I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have it at the beginning."`,
    person:`Mahatma Gandhi`
},
{
    quote:`"We cannot solve our problems with the same thinking we used to create them."`,
    person:`Albert Einstein`
},
{
    quote:`"Happiness is the meaning and the purpose of life, the whole aim and end of human existence"`,
    person:`Aristotle`
},
{
    quote:`"Don’t let the noise of others’ opinions drown out your own inner voice"`,
    person:`Steve Jobs`
},

{
    quote:`"I find hope in the darkest of days, and focus in the brightest. I do not judge the universe"`,
    person:`Dalai Lama`
},

{
    quote:`"Be not afraid of greatness: some are born great, some achieve greatness and some have greatness thrust upon them"`,
    person:`William Shakespeare`
},

{
    quote:`"Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work"`,
    person:`A. P. J. Abdul Kalam`
},

{
    quote:`"Faith is the bird that feels the light when the dawn is still dark"`,
    person:`Rabindranath Tagore`
},


];

btn.addEventListener('click', function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
});
