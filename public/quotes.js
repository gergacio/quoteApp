document.querySelector('.request-quote').addEventListener('click', () => {
    fetch("/quote")
    .then(res => res.json())
    .then(
      data => document.querySelector('.quotes').innerHTML = data.quote
              
    )
    .catch(err => console.log(err));
    
})