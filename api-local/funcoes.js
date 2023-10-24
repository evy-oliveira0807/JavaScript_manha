const ulrViaCep = "https://viacep.com.br/ws"
const urlCepProfessor = "http://172.16.35.155:300/myceps";

async function cadastrar(e) {
    e.preventDefault();
    //pega os valores dos campos de formulario
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cap").value;
    const endereco = document.getElementById("endereco").value;
    const numero = document.getElementById("numero").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;

    //extra - fazer a validacao (dica - crie uma funcao : bool)
    //  if (! validacaoForma(nome,endereco,cep)) {// tem campo vazio

    //     alert("Preencher todos os campos") 
    //     return;
    //    }
    //    alert("tudo ok!")

    objCadastro = {
        nome,
        email,
        cep,
        endereco,
        numero,
        cidade,
        estado
    }

    try {
        const promise = await fetch('http://172.16.35.155:300/myceps', {
            body: JSON.stringify(objCadastro),
            method: "post",
            headers: { "Content-type": "application/json" }
        });
        const dados = await promise.json()
        console.log(dados)


    } catch (error) {
        console.log("Deu ruim!");
        console.log(error);
    }

}

// function validacaoForma(nome,endereco,cep){
//     if(
//         nome.length == 0 || nome === undefined ||
//         endereco.length == 0 || endereco === undefined ||
//         cep.length < 8  || cep === undefined
//     ){//algum campo estiver sem preencher
//         return false
//     }
//     return true;
// }


async function buscarEndereco(cep) {

    //complemento do endereco do api
    // const resource = `/${cep}/json/`;
    // console.log("cep: " + cep);
    try {
        //const promise = await fetch(ulrViaCep + resource);

        // console.log(resource);
        const promise = await fetch(`{urlCepProfessor}/${cep}`);

        //transformo o json retonado em um objeto ou array
        const endereco = await promise.json();
        console.log(endereco);


        //preencher o formulario

        preencherCampos({
            logradouro: endereco.logradouro,
            localidade: endereco.localidade,
            uf: endereco.uf
        });

        //resetar o span do cep invalido
        document.getElementById("not-found").innerText = ""
    } catch (error) {

        console.log(error);
        document.getElementById("not-found").innerText = "cep invalido"
    }

    function preencherCampos(endereco) {
        //preencher o formulario
        document.getElementById("endereco").value = endereco.logradouro;
        document.getElementById("cidade").value = endereco.localidade;
        document.getElementById("estado").value = endereco.uf;
    };

};


