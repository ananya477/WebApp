document.getElementById('new-quote').addEventListener('click', function() {
    fetch('https://api.quotable.io/random?maxLength=100')
    .then(response => response.json())
    .then(data => {
        document.getElementById('quote').innerText = `"${data.content}" - ${data.author}`;
    })
    .catch(error => console.error('Error:', error));
});

