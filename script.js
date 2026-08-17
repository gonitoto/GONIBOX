/* =========================================
   GONIBOX
   JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MENÚ MOBILE
    ========================================= */

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");
    const navLinks = document.querySelectorAll(".nav a");

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });


    /* Cerrar menú al seleccionar una sección */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });


    /* =========================================
       FORMULARIO DE CONSULTAS
    ========================================= */

    const consultaForm = document.getElementById("consultaForm");
    const formMessage = document.getElementById("formMessage");

    consultaForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const contacto = document.getElementById("contacto-form").value.trim();
        const producto = document.getElementById("producto").value;
        const mensaje = document.getElementById("mensaje").value.trim();


        if (
            nombre === "" ||
            contacto === "" ||
            mensaje === ""
        ) {

            formMessage.textContent =
                "Por favor completá todos los campos obligatorios.";

            formMessage.style.color = "#d71920";

            return;
        }


        /*
         * Se prepara el mensaje para WhatsApp.
         */

        const productoTexto =
            producto !== ""
                ? producto
                : "No especificado";


        const textoWhatsApp =
            `Hola GONIBOX.%0A%0A` +
            `Nombre: ${nombre}%0A` +
            `Contacto: ${contacto}%0A` +
            `Producto: ${productoTexto}%0A%0A` +
            `Consulta:%0A${mensaje}`;


        const numeroEmpresa = "542235630264";

        const whatsappURL =
            `https://wa.me/${numeroEmpresa}?text=${textoWhatsApp}`;


        formMessage.textContent =
            "¡Perfecto! Te estamos redirigiendo a WhatsApp...";

        formMessage.style.color = "#159447";


        setTimeout(() => {

            window.open(
                whatsappURL,
                "_blank"
            );

        }, 800);

    });


    /* =========================================
       ANIMACIÓN AL APARECER
    ========================================= */

    const cards = document.querySelectorAll(
        ".product-card, .contact-card, .nosotros-card"
    );


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });


    /*
     * Clase visual agregada por JavaScript.
     */

    const style = document.createElement("style");

    style.textContent = `
        .product-card.show,
        .contact-card.show,
        .nosotros-card.show {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;

    document.head.appendChild(style);

});