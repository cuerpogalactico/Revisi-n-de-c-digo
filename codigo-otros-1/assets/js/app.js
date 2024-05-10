const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Selecciona el elemento con la clase 'name' para mostrar el nombre del usuario
const $b = document.querySelector('.blog'); // Selecciona el elemento con la clase 'blog' para mostrar el blog del usuario
const $l = document.querySelector('.location'); // Selecciona el elemento con la clase 'location' para mostrar la ubicación del usuario

async function displayUser(username) {
  $n.textContent = 'Cargando...'; // Muestra un mensaje de carga mientras se obtiene la información del usuario
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    if (!response.ok) {
      throw new Error('Usuario no encontrado'); // Lanza un error si no se encuentra el usuario
    }
    const data = await response.json(); // Convierte la respuesta en formato JSON
    console.log(data); // Muestra los datos del usuario en la consola (útil para depuración)
    $n.textContent = data.name || 'Nombre no disponible'; // Muestra el nombre del usuario si está disponible, de lo contrario, muestra un mensaje predeterminado
    $b.textContent = data.blog || 'Blog no disponible'; // Muestra el blog del usuario si está disponible, de lo contrario, muestra un mensaje predeterminado
    $l.textContent = data.location || 'Ubicación no disponible'; // Muestra la ubicación del usuario si está disponible, de lo contrario, muestra un mensaje predeterminado
  } catch (err) {
    handleError(err); // Maneja cualquier error que ocurra durante la obtención de la información del usuario
  }
}

function handleError(err) {
  console.log('¡OH NO!'); // Muestra un mensaje de error en la consola
  console.log(err); // Muestra el error en la consola (útil para depuración)
  // n.textContent = `Algo salió mal: ${err}`; // No se puede acceder a 'n' aquí, ya que está fuera del ámbito de esta función
}

displayUser('stolinski').catch(handleError); // Llama a la función para mostrar la información del usuario y manejar cualquier error que ocurra