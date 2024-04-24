const estudantes = [{nome: 'Luis', notaPrimeiraProva: '8', notaSegundaProva: '7'}, {nome: 'Leticia', notaPrimeiraProva:'8', notaSegundaProva:'9'}];

function calcularMedia(estudantes) {
  estudantes.forEach(estudante => {
    let media = (parseFloat(estudante.notaPrimeiraProva) + parseFloat(estudante.notaSegundaProva)) / 2;
    
    if (media >= 7) {
      console.log(`${estudante.nome} obteve sucesso no concurso com a média ${media}`);
    } else {
      console.log(`${estudante.nome} não obteve sucesso no concurso. Média: ${media}`);
    }
  });
}
