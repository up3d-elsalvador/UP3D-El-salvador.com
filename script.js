const productos = [
    {
        titulo: "Producto Premium",
        descripcion: "Calidad superior diseñada para quienes buscan lo mejor. Materiales premium y rendimiento garantizado.",
        textoCompra: "Hola, estoy interesado en el Producto Premium."
    },
    {
        titulo: "Producto Avanzado",
        descripcion: "Equilibrio perfecto entre potencia, diseño y precio. Ideal para uso profesional.",
        textoCompra: "Hola, quiero comprar el Producto Avanzado."
    },
    {
        titulo: "Producto Especial",
        descripcion: "Edición especial con características únicas y acabados exclusivos.",
        textoCompra: "Hola, me interesa el Producto Especial."
    }
];

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const comprar = document.getElementById("comprar");

function abrirProducto(index) {
    titulo.textContent = productos[index].titulo;
    descripcion.textContent = productos[index].descripcion;

    const mensaje = encodeURIComponent(productos[index].textoCompra);
    comprar.href = `https://wa.me/50377451582?text=${mensaje}`;

    modal.classList.add("activo");
    overlay.classList.add("activo");
}

function cerrarProducto() {
    modal.classList.remove("activo");
    overlay.classList.remove("activo");
}
