const numeros = [1, 2, "200", 10, 7, 12, 15, 8]

console.log(numeros);

 const nMenor10 = numeros.filter((n) => {
     return n < 10;
});

const doisDuzdntos = numeros.filter((n) => {
    return n == 2 || n == 200;
});

console.log(doisDuzdntos);


 console.log(nMenor10);

 const comentarios = [
     {comentario: "bla bla bla", exibe:true},
     {comentario: "Evento e uma merda", exibe:false},
     {comentario: "Otimo evento", exibe:true}
 ];
 const comentariosOk = comentarios.filter((c) => { 
     return c.exibe === true;
 });

console.log(comentariosOk);

const objVendedor = {
    nome: vendedor,
    comissao,
    idade: 41
}
console.log("asdf");
console.log(objVendedor);
