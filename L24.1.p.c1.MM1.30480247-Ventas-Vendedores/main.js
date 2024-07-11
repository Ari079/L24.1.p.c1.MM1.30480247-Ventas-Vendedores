class Vendedores{
    constructor(nombre, monto_venta){
        this.nombre = nombre,
        this.monto_venta = monto_venta
    }
}

class Ventas{
    constructor(){
        this.ventas_mayores_a_100 = 0,
        this.ventas_menores_a_100 = 0,
        this.ventas_totales = 0
    }
    procesarVentas(v){
        if(v.monto_venta >= 100){
            this.ventas_mayores_a_100++
        }else{
            this.ventas_menores_a_100++
        }
        this.ventas_totales += v.monto_venta
    }
}

let vendedor1 = new Vendedores('Mary', 150)
let vendedor2 = new Vendedores('José', 135)
let vendedor3 = new Vendedores('Carlos', 160)
let vendedor4 = new Vendedores('Pedro', 75)

let ventas = new Ventas()

ventas.procesarVentas(vendedor1)
ventas.procesarVentas(vendedor2)
ventas.procesarVentas(vendedor3)
ventas.procesarVentas(vendedor4)

let salida = document.getElementById('app')
salida.innerHTML = `

Cantidad de ventas que fueron por 100$ o menos: ${ventas.ventas_menores_a_100}<br>
Cantidad de ventas mayores a 100$: ${ventas.ventas_mayores_a_100}<br>
Monto total de las ventas: ${ventas.ventas_totales}$

`