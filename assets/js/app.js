// Sistema de Notificaciones (Toast)
function showToast(message, type = 'info') {
    // Crear contenedor si no existe
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    // Iconos basados en tipo
    const icons = {
        info: 'ℹ️',
        success: '✅',
        warning: '⚠️'
    };

    // Crear elemento toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Animar entrada
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // Eliminar después de 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
}

// Lógica de Compra (Simulada)
function simularCompra(producto) {
    // Aquí es donde iría la redirección real a Stripe:
    // window.location.href = 'https://buy.stripe.com/TU_ENLACE_REAL';

    showToast(`Añadido a la cesta: ${producto}`, 'success');
    // alert('🛍️ ESTO ES UNA DEMO\n\nEn la versión real, al hacer clic aquí, el usuario sería redirigido automáticamente a la pasarela de pago segura de Stripe para comprar: ' + producto);
}

// Lógica de Modales
function abrirModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.showModal();
        // Resetear clases por si acaso
        modal.classList.remove('closing');
    }
}

function cerrarModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('closing');
        // Esperar a que termine la animación (0.3s según CSS)
        modal.addEventListener('transitionend', () => {
            modal.close();
            modal.classList.remove('closing');
        }, { once: true });
    }
}

// Cerrar modal si se hace clic fuera
const dialogs = document.querySelectorAll('dialog');
dialogs.forEach(dialog => {
    dialog.addEventListener('click', (e) => {
        const dialogDimensions = dialog.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            // Usar la función de cerrar para tener animación
            cerrarModal(dialog.id);
        }
    })
});
