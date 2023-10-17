const numeros = [1, 2, 5, 10, 300];

const arrDobro = numeros.map((n) => {
    return n * 2;
})

console.log(numeros);
console.log(arrDobro);


//crie 2 arrays nomes e sobrenemoes 

//crie um terceiro array de nomesCompletos no console com o foreach
//ao final exiba os nomes completos no console co  foreach
//e nescessario conter pelo menos 5 nomes
//utilize arrow funcitions como calback functions
const Nome = [
    "evelyn ",
   "Emily ",
   "fabiana",
   "cristiano ",
   "viviane "
];

const Sobrenomes = [
    " Oliveira ",
   " Victoria",
   " nascimento",
   " vieira",
   " souza"
];

const nomeCompleto = Nome.map((nome,indice)=>{

return `${nome} ${Sobrenomes[indice]}`;
});


 nomeCompleto.forEach( (nc) => {
    console.log(nc);
 });





 

//const mesa = ["Coral", "Anna", "Demetrio", "Vinicios", "Lacerda", "Evelyn", "Luis"];

// //calback funcitons
// mesa.forEach(
//     function carlos(cadaPessoa) {
//         console.log('Bom dia' + cadaPessoa);
//     }
// );


// //funcao anonima
// mesa.forEach(
//     function (cadaPessoa) {
//         console.log('Bom dia' + cadaPessoa);
//     }
// );


// //arrow funtions
//  mesa.forEach( (cadaPessoa) => {
//       console.log('Bom dia' + cadaPessoa);
//   }
// );


// const dobro = (x) => {
//     return x * 2;
// }
// console.log(dobro(5));


// //forma simplificada com return implicito
// const dobro = x => x * 2;//retorna o dobro
// console.log(dobro(10));


// const bomDia = () => "Bom dia";//retorna o texto bom dia
// console.log( bomDia());

