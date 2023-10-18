const camisaLacoste = {
    descricao: "Camisa Lacoste",
    preco:589.97,
    tamanho: "m",
    cor: "Amarela",
    presente: true
}

    const {descricao, preco} = camisaLacoste.descricao;
    const {presente} = camisaLacoste.preco;


console.log(`
   PRODUTO: 
   Descricao: ${descricao};
   Preco: ${preco};
   Presente: ${presente ? "sim" : "nao"} 
`);


