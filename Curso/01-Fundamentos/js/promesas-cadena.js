
// const empleados = [
//     {
//     id:         1,
//     nombre:     `Fernando`
//     },
//     {
//     id:         2,
//     nombre:     `Linda`
//     },
//     {
//     id:         3,
//     nombre:     `Karen`
//     },
// ]

// const salarios = [
//     {
//     id:         1,
//     salario:    1000
//     },
//     {
//     id:         2,
//     salario:    1500
//     }
// ]

// const id = 2

// const getEmpleado = (id) =>{

//     return new Promise((resolve, reject) =>{
        
//         const empleado = empleados.find( e => e.id == id)
    
//         if (empleado) {
//             resolve(empleado.nombre)
//         }else{
//             reject(`No existe empleado con id ${id}`)
//         }

//     })
    
// }

// const getSalario = (id) =>{
    
//     const promesa = new Promise((resolve, reject) =>{
        
//         const salario = salarios.find( s => s.id == id)

//         if (salario) {
//             resolve(salario.salario)
//         }else{
//             reject(`No se encontro ningun salario con id ${id}`)
//         }
//     })
//     return promesa
// }

// let nombre
// getEmpleado(id)
//         .then( empleado => {
//             nombre = empleado
//             return getSalario(id)
//         })
//         .then( salario => console.log(`El empleado ${nombre}, tiene un salario de ${salario}`))
