const arrPessoas = [];


function calcular(e){
e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const altura = parseFloat(document.getElementById('altura').value)
    const peso = parseFloat(document.getElementById('peso').value)

    if (isNaN(altura) || isNaN(peso) || nome.length == 0) {
        alert("É necessário preencher os números corretamente!")
        return;
    }
    //calcular o imc
    const imc = calcularImc(altura, peso);
    // gera o texto da situacao
    const txtSituacao = retornaSituacao(imc)

    //gera o objeto com os dados da pessoa
    const pessoa = {
        nome, altura, peso, imc, situacao: txtSituacao
    };
    //adiciona a pessoa na losta
    arrPessoas.push(pessoa);
    
    //lista as pessoas
    listarPessoas();




    console.log(pessoa);


    // console.log(nome);
    // console.log(altura);
    // console.log(peso);
    // console.log(imc);
    // console.log(situacao);
}
//calcula o imc
function calcularImc(altura, peso){

    return peso / Math.pow(altura, 2)
    return peso / (altura * altura);

   
}

//gera o texto da situacao
function retornaSituacao(imc) {
    if (imc < 18.5) {
        return "Magreza severa"
    }
    else if ( imc <= 24.99) {
        return "Peso normal"
    }
    else if (imc <= 29.99) {
        return "Acima do peso"
    }
    else if (imc <= 34.99) {
        return "Obesidade I"
    }
    else if(imc <= 39.99){
        return "Obesidade II"
    }
    else {
        return "Cuidado!"
    }



    // return 'situação'
}
//gera o objeto com os dados da pessoa
const pessoa = {nome, altura, peso, imc, situacao: txtSituacao};

//retorna um objeto data
const dt = new Date();

//retorna a data de 1 a 31
const dia = dt.getDate() < 10? `0${dt.getDate()}` : dt.getDate();

//retorna de 0 a 11
const mes = dt.getMonth() + 1;

//returna o mes com 4 digitos yyyy
const ano = dt.getFullYear();

const dtCadastro = dia + mes + ano;

pessoa.dt = dtCadastro;
//adiciona a pessoa na lista
arrPessoas.push(pessoa);

//listar pessoas
function listarPessoas(){
    console.log(arrPessoas)

    let template = "";
    let tabela = document.getElementById("corpo-tabela")
    arrPessoas.forEach(p =>{
     template += `
    <tr>
    <th>${p.nome}</th>
    <th>${p.altura}</th>
    <th>${p.peso}</th>
    <th>${p.imc}</th>
    <th>${p.situacao}</th>
    </tr>   
    `;
    })
    tabela.innerHTML = template;


    //MANEIRA DIFERENTE
    // let template = "";

    // arrPessoas.forEach((p) => {//preenche ou acumula os valorez na string
    //     template += `
    //     <tr>
    //     <th>${p.nome}</th>
    //     <th>${p.altura}</th>
    //     <th>${p.peso}</th>
    //     <th>${p.imc}</th>
    //     <th>${p.situacao}</th>
    //     </tr> `;
    // });

    // document.getElementById('corpo-tabela').innerHTML = template;
}
