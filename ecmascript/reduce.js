const numeros = [10, 12, 20];

const somatorio = numeros.reduce((total,n) => {
  return total + n
}, 0);

const produtos = [
    {produto:"Camiseta", preco: 129.90},
    {produto:"Tenis", preco: 350.97},
    {produto:"Jaqueta de Couro", preco: 700.01},
];

const vendedor = "Eduardo Costa";

let totalProduto = produtos.reduce((vlInicial, oP)=>
{
    return vlInicial + (oP.preco * 1.05);
}, 0);

console.log(`Comissao de ${vendedor} esse mes: R$${totalProduto}`);