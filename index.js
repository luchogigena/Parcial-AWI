document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Validar el login 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    // Si la validación es exitosa, redirige al usuario
    if (email === 'usuario@ejemplo.com' && password === 'contraseña') {
        //  login exitoso
        alert('Login exitoso');
        window.location.href = 'index.html'; // Redirige a la página principal de la tienda
    } else {
        //  login fallido
        alert('Credenciales incorrectas');
    }
});
document.getElementById('logoutButton').addEventListener('click', function() {
    
    alert('Sesión cerrada');
    window.location.href = 'login.html'; // Redirige al usuario a la página de login
});


document.getElementById('logoutButton').addEventListener('click', function() {
    // Limpiar la sesión
    localStorage.removeItem('isLoggedIn');
    alert('Sesión cerrada');
    window.location.href = 'login.html'; // Redirige al usuario a la página de login
});

// Verificar la sesión al cargar la página
if (!localStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html'; // Redirige al login si no hay sesión activa
}

//Cards:

// Función para aumentar la cantidad de un producto
function increaseQuantity(productId) {
    let quantityInput = document.getElementById('quantity-' + productId);
    let currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
}

// Función para disminuir la cantidad de un producto (con mínimo de 1)
function decreaseQuantity(productId) {
    let quantityInput = document.getElementById('quantity-' + productId);
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}