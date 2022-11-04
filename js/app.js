const ticket = 200;

function calculoEntradas(){
    var cantidad = document.getElementById('cantidad').value;
    var descuento = document.getElementById('categoria').value;
    var precio = cantidad * (ticket - ((ticket * descuento) / 100));
    document.getElementById('compra').value = 'Total a pagar: $' + precio;
}