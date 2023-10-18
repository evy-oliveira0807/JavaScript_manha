const filme = [{ 
    titulo: "A Culpa e das estrelas",
    genero: "Romance,",
    descricao: "Descricao do filme",
    anoLancamento: 2014
},
{
    titulo: "Cada um em sua casa",
    genero: "Infantil,",
    descricao: "Descricao do filme",
    anoLancamento: 2015
},
{
    titulo: "A Queda",
    genero: "Suspense e Acao,",
    descricao: "Descricao do filme",
    anoLancamento: 2022
}
];


filme.forEach(({titulo,genero}, i) => {
//pode ser assim tambem
//Filme.forEach((f) => {
 //   const { titulo, genero} = f;


console.log(`
   Filme${i+1}: ${titulo.toUpperCase()}
   genero: ${genero.toString() }
`);
});