/// EJERCICIO 1 ///

const user = {
    firstName: "Milena", 
    lastName: "Cofnas",
    email: "milecofnas@gmail.com",
    age: 25
}

console.log(user)
console.log(`Hola mi nombre es ${user.firstName} y tengo ${user.age} años`)

/// EJERCICIO 2 ///

const usuario1 = {
    id: 1,
    email: "ada@gmail.com", 
    nombre: "Ada Lovelace",
    telefono: 1234567890 
}

const usuario2 = {
    id: 2,
    email: "grace@hotmail.com", 
    nombre: "Grace Hopper",
    telefono:  0987654321 
}

const usuario3 = {
    id: 3,
    email: "hedy@gmail.com",  
    nombre: "Hedy Lamarr",
    telefono: 6789054321
}

const usuario4 = {
    id: 4,
    email: "radia@yahoo.com", 
    nombre: "Radia Perlman", 
    telefono: 1234509876 
}

const usuario5 = {
    id: 5,
    email: "sheryl@facebook.com",  
    nombre: "Sheryl Sandberg",
    telefono: 5432167890 
}

console.log(usuario1, usuario2, usuario3, usuario4, usuario5)

/// EJERCICIO 3 /// 

console.log(`El nombre de Ada: ${usuario1.nombre}`)

console.log(`El ID de Grace: ${usuario2.id}`)

console.log(`El email de Hedy: ${usuario3.email}`)

console.log(`El ID y nombre de Radia: ${usuario4.id} y ${usuario4.nombre}`)

console.log(`El telefono de Sheryl: ${usuario5.telefono}`)

/// EJERCICIO 4 ///

const disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
      nombre: 'Foo Fighters',
      anioFormacion: 1994
    }
  };

console.log(`El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento}`)

/// EJERCICIO 5 ///

const user = {
    firstName: "Milena", 
    lastName: "Cofnas",
    email: "milecofnas@gmail.com",
    age: 25
}

user.tecnologiasConocidas = ["html", "css", "react", "node", "javascript"]
user.sabeProgramar = true 

console.log(user)