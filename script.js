document.getElementById('jokeButton').addEventListener('click', fetchRandomJoke);

async function fetchRandomJoke() {
    const url = 'https://api.chucknorris.io/jokes/random';
    const loader = document.getElementById('loader');
    const jokeContainer = document.getElementById('jokeContainer');

   
    loader.classList.remove('hidden');
    jokeContainer.innerText = '';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        displayJoke(data.value);
    } catch (error) {
        console.error('Fetch error:', error);
        alert('Failed to retrieve a joke. Please try again.');
    } finally {
        
        loader.classList.add('hidden');
    }
}

function displayJoke(joke) {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.innerText = joke;
}
