/* https://drive.google.com/file/d/0B9eZlIWAs3-sN3NRbktQNVFUN3l2cTBBcXN4Y3FaUQ/view?resourcekey=0-ZafqCRtyIP8Zw0CKviW5Gw */

const alunos = 
[
 'ALUNO'   
,'AGHATA'   
,'ANGELO'   
,'CAIQUE'   
,'DIEGO'   
,'EDUARDO'  
,'FABRICIO' 
,'FELIPE' 
,'GABRIEL_SANTOS'
,'GABRIEL_ALMEIDA'
,'GABRIEL_MENDES'
,'GABRIEL_ISCHIAVOLINI'
,'GIANLUCA'
,'GUILHERME_AZEVEDO'
,'GUILHERME_LIMA'
,'GUSTAVO_FERREIRA'
,'GUSTAVO_NEVES'
,'GUSTAVO_PEREIRA'
,'GUSTAVO_TORELLI'
,'JUAN'
,'KAUE'
,'LEONARDO'
,'LUIS'
,'PEDRO_VIEIRA'
,'PEDRO_NUNES'
,'RAFAEL'
,'RAFFAELA'
,'RONALDO'
,'VICTOR'
]

// alunos.sort()

let text = '<table id="t01"> ';

alunos.forEach( (element, index) => {
    seq = index+1
    text += "<tr><td>" + seq + "</td>";
    text += "<td>" + element + "</td>"
    text += '<td><img class="img_al" src="' + element + '.gif" alt="' + element + '"' + "</td>";
    text += '<td id="' + element + '" onClick="+ ' + element + '()"  >' + element + " </td>"
    text += "</tr>";
});

text += "</table>";
document.getElementById("lista").innerHTML = text;


// let qtdealunos = alunos.length;

let btn = document.querySelector("#btnSortear")
btn.addEventListener('click', sortear)

let sorteados = [];

function numero_aleatorio() {
    let qtdealunos = alunos.length;
    //let aleatorio = Math.floor(Math.random() * qtdealunos);

    for (i=0;i<qtdealunos;i++){
        let aleatorio = Math.floor(Math.random() * qtdealunos);
        if (sorteados.indexOf(aleatorio) == -1) {
            sorteados.push(aleatorio);
            return aleatorio
        }
    }
}

function sortear() {
    let sorteado = numero_aleatorio();

    let text = '<table id="t02"> ';

    sorteados.forEach( element  => {
        seq = element+1
        text += "<tr><td>" + seq + "</td>";
        text += "<td>" + alunos[element] + "</td>";
        text += '<td><img class="img_al" src="' + alunos[element] + '.gif" alt="' + element + '"';
        text += "</tr>";
    });
    
    text += "</table>";
    document.getElementById("sorteados").innerHTML = text;

    text = '<table id="t01"> ';

    alunos.forEach( (element, index) => {
        seq = index+1
        text += "<tr><td>" + seq + "</td>";
        text += "<td>" + element + "</td>";
        text += '<td><img class="img_al" src="' + element + '.gif" alt="' + element + '"' + " </td>";
        text += '<td id="' + element + '" onClick="+ ' + element + '()"  >' + element + " </td>"
        text += "</tr>";
    });
    
    text += "</table>";
    document.getElementById("lista").innerHTML = text;

    mostrarSorteado(sorteado)


}

function mostrarSorteado(sorteado) {
    let x = document.getElementById("snackbar");
    x.innerHTML = alunos[sorteado]
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}    



