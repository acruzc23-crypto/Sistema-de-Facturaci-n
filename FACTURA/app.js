// Vector listado de productos.
// productos [ [producto1], [producto2], [producto3], ..N ]
const productos = [
            //cod  , precio , descripcion
            //[0]    [1]   [2]
            ["0001", 3500, "Sistema Web Personalizado"],
            ["0002", 500, "Computador Core I7"],
            ["0003", 200, "Monitor LG 20 pulgadas"],
            ["0004", 300, "Telefono Celular Samsung"],
            ["0005", 200, "Camara profesional Web."],
            ["0006", 150, "Servicio de Mantenimiento Anual"],
            ["0007", 100, "Servicio de Hosting Web (1 año)"],
            ["0008", 250, "Licencia Software Antivirus (1 año)"],
            ["0009", 400, "Impresora Multifuncional HP"],
            ["0010", 120, "Router Inalámbrico TP-Link"],
            ["0011", 180, "Teclado Mecánico RGB"],
            ["0012", 90, "Mouse Óptico USB"],
            ["0013", 75, "Audífonos con Micrófono"],
            ["0014", 60, "Disco Duro Externo 1TB"],
            ["0015", 45, "Memoria USB 64GB"],
            ["0016", 250, "Tablet Android 10 pulgadas"],
            ["0017", 300, "Smartwatch Deportivo"],
            ["0018", 400, "Proyector Multimedia HD"],
            ["0019", 150, "Cámara de Seguridad IP"],
            ["0020", 80, "Soporte para Laptop Ajustable"]
        ]
        // Vector para guardar los detalles de la factura
        const facturaDetalles =[]
        // Referencias a los controles del formulario (Select, Input, Button, Table etc.)
        const selectProducto = document.getElementById('id-select-producto')
        const txtCantidad = document.getElementById('id-txt-cantidad')
        const txtPrecio = document.getElementById('id-txt-precio')
        const txtTotal = document.getElementById('id-txt-total')
        const btnAgregar = document.getElementById('id-btn-agregar')
        const tablaDetalle = document.querySelector('#id-table-detalle tbody')
        // Referencias a las cajas de texto de totales
        const txtSubtotal = document.getElementById('id-txt-subtotal')
        const txtIva = document.getElementById('id-txt-iva')
        const txtDescuento = document.getElementById('id-txt-descuento')
        const txtTotalPagar = document.getElementById('id-txt-total-pagar')
        //Se encarga de cargar los productos en la lista desplegable select.
cargarProductos()
// Se encarga de calcular el total de la factura cuando se selecciona un producto.
selectProducto.addEventListener('change', function (e) {
    // Extraer el precio seleccionado de la lista desplegable.
    const precio = parseFloat(e.target.value)
    const cantidad = parseFloat(txtCantidad.value)
    const total = Number(cantidad * precio).toFixed(2)
    txtPrecio.value = precio
    txtTotal.value = total
    txtCantidad.focus()
})
// Se encarga de calcular el total de la factura cuando se cambia la cantidad.
txtCantidad.addEventListener('change', function (e) {
    const cantidad = parseFloat(e.target.value)
    const precio = parseFloat(txtPrecio.value)
    const total = Number(cantidad * precio).toFixed(2)
    txtTotal.value = total
})
 // Se encarga de agregar un producto a la factura y actualizar los totales.
btnAgregar.addEventListener('click', function (e){
    // Extraer los datos del producto seleccionado y la cantidad ingresada.
    const codigo = selectProducto.options[selectProducto.selectedIndex].dataset.codigo
    const cantidad = parseFloat(txtCantidad.value)
    const precio = parseFloat(txtPrecio.value)
    const total = parseFloat(txtTotal.value)
    // Agregar el producto a la tabla de detalles de la factura.
    facturaDetalles.push(
        [codigo, cantidad, precio, total]
    )
    mostrarTabla();
    // Actualizar la tabla de detalles de la factura.
    const IVA = 0.15
    let subtotal = 0 
    let descuento = 0
    let valorIva = 0
    let totalPagar = 0
    for (let i in facturaDetalles){
        const totalItem = facturaDetalles[i][3]
        subtotal = subtotal + totalItem 
    }
    // Calcular el IVA, el descuento y el total a pagar.
    valorIva = subtotal * IVA
    totalPagar = subtotal + valorIva - descuento
    txtSubtotal.innerHTML = subtotal.toFixed(2)
    txtIva.innerHTML = valorIva.toFixed(2)
    txtTotalPagar.innerHTML = totalPagar.toFixed(2)
    console.log(facturaDetalles)
})
// Se encarga de cargar los productos en la lista desplegable select.
function cargarProductos() {
    // Recorrer el vector de productos y crear un elemento option para cada producto.
    for (let i in productos) {
        // i = indice del arrreglo.
        const codigo = productos[i][0]
        const precio = productos[i][1]
        const descripcion = productos[i][2]
        // creamos la etiqueta (elemento) option
        const option = document.createElement('option')
        // asignamos los valores del producto al elemento option
        option.value = precio
        option.dataset.codigo = codigo
        option.textContent = descripcion
        // agregamos el elemento option a la lista desplegable select
        selectProducto.appendChild(option)
    }
}

function mostrarTabla(){
    // Limpiar la tabla de detalles de la factura antes de actualizarla.
tablaDetalle.innerHTML = ""
// Recorrer el vector de detalles de la factura y extraer los datos de cada producto.
for (let i = 0; i < facturaDetalles.length; i++){
    // Extraer los datos del producto de la factura.
    const codigo = facturaDetalles[i][0]
    const cantidad = facturaDetalles[i][1]
    const precio = facturaDetalles[i][2]
    const total = facturaDetalles[i][3]
    // Recorrer el vector de productos y buscar la descripción del producto por su código.
let descripcion = ""
// Recorrer el vector de productos para encontrar la descripción del producto por su código.
for(let j = 0; j < productos.length; j++){
    if (productos[j][0] === codigo){
        descripcion = productos[j][2]
        break
    }
}
// Agregar una fila a la tabla de detalles de la factura con los datos del producto.
tablaDetalle.innerHTML += `
    <tr>
        <td>${codigo}</td>
        <td>${descripcion}</td>
        <td>${cantidad}</td>
        <td>${precio}</td>
        <td>${total}</td>
        <td><button class="btn btn-danger btn-sm" onclick="eliminarProducto(${i})">Eliminar</button></td>
    </tr>`
}}

function eliminarProducto(index){
    // Eliminar el producto del vector de detalles de la factura.
    facturaDetalles.splice(index, 1)
    // Actualizar la tabla de detalles de la factura.
    mostrarTabla()
    const IVA = 0.15
    let subtotal = 0
    for(let i = 0; i < facturaDetalles.length; i++){
        subtotal += facturaDetalles[i][3]
    }
    txtSubtotal.innerHTML = subtotal.toFixed(2)
    txtIva.innerHTML = (subtotal * IVA).toFixed(2)
    txtTotalPagar.innerHTML = (subtotal + (subtotal * IVA)).toFixed(2)
}
