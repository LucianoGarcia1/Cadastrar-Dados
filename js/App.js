
// Array vazia
let dados = [];


// Função para add dados
const Salvar = (e) =>{
    const name = document.querySelector(".name");
    const idade = document.querySelector(".idade");
    const cpf = document.querySelector(".cpf");
    const genero = document.querySelector("#sexo");

    if(name.value === "" || idade.value === "" || cpf.value === "" || genero.value === "Gênero"){
        alert("Preencha os campos!!!")
    }else{
        // Objeto com os dados
        const objD = {
            nome: name.value,
            idade: idade.value,
            cpf: cpf.value,
            genero: genero.value,
        }

        // Add o Obj com os dados na array
        dados.push(objD);
        // Criando e add a array com os dados no localStorage e transformando em string
        const localDados = localStorage.setItem("Dados", JSON.stringify(dados));
    }
    // Irá recarregar a página após o click
    location.reload();
}

// READ
const ReadDados = () =>{
    return localStorage.getItem("Dados");
}
// Função pra pegar os dados do localStorage e criar tags para cada dado
const Dados = () =>{
    // Div Resultado
    const res = document.querySelector(".dados");

    // Função para criar as tags e armazenar os dados 
    const createTag = (Tag, Conteudo)=>{
        const CTag = document.createElement(Tag);
        CTag.innerText = Conteudo;

        return CTag;
    }
    // Criar button
    const createBtn = (c) =>{
        const button = document.createElement("button");
        button.innerHTML = c;

        return button;
    }
    // Div Mãe
    const createDiv = (tag, btn, nome, age, cpf, genero)=>{
        const div = document.createElement(tag);
        div.appendChild(btn);
        div.appendChild(nome);
        div.appendChild(age);
        div.appendChild(cpf);
        div.appendChild(genero);

        return div;
    }
    // Se exitir os Dados no localStorage, 
    if(localStorage.Dados){
        dados = JSON.parse(localStorage.getItem("Dados"));
    }
    dados.forEach((i, index)=>{
        let tagN = createTag("h3", `Nome: ${i.nome}`);
        let tagI = createTag("p", `Idade: ${i.idade}anos`);
        let tagC = createTag("p", `Cpf: ${i.cpf}`);
        let tagG = createTag("p", `Gênero: ${i.genero}`);

        const img = `<img src="../img/lixeira.svg" />`
        let btnRemove = createBtn(img);

        let divBox = createDiv("div", btnRemove, tagN, tagI, tagC, tagG);
    
        res.appendChild(divBox);

        // Remover Dados
        btnRemove.addEventListener("click", () =>{
            alert("Em breve")
        })
    })
}
Dados();

const RemoveAll = () =>{
    localStorage.removeItem("Dados");
    location.reload();
}