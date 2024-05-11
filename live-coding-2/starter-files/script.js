// API
const API_ENDPOINT = 'https://yesno.wtf/api';

function fetchAnswer() {
    fetch('https://yesno.wtf/api')
        .then(response => response.json())
        .then(data => {
            const answerDiv = document.getElementById('answer');
            answerDiv.textContent = data.answer;
            setTimeout(() => {
                document.getElementById('questionInput').value = '';
                answerDiv.textContent = '';
            }, 5000); // Limpiar pregunta y respuesta después de 5 segundos
        })
        .catch(error => console.error('Hubo un error al obtener la respuesta:', error));
}

document.getElementById('button').addEventListener('click', fetchAnswer);

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
