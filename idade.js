
var data = new Date()
var ano = data.getFullYear()
var fAno = document.getElementById('ano')
var resultado = document.getElementById('resultado')
var sex = document.getElementsByName('sexo')


function verificar() {
      

    if (fAno.value.length == 0 || fAno.value > ano || fAno.value < 1900) {
        alert('verifique os dados e tente novamente')
    }
    else {
        var idade = ano - Number(fAno.value)
        var genero = '';
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                //baby1
                imagem.setAttribute('src', 'Homem/baby1_250px.png')
            }
            else if (idade < 9) {
                //baby2
                imagem.setAttribute('src', 'Homem/baby250px.png')
            }
            else if (idade < 14) {
                //pre-adolescente
                imagem.setAttribute('src', 'Homem/pre_adolescente250px.png')
            }
            else if (idade < 19) {
                //adolescente
                imagem.setAttribute('src', 'Homem/adolescente250px.png')
            }
            else if (idade < 30) {
                //jovem
                imagem.setAttribute('src', 'Homem/jovem250px.png')
            }
            else if (idade < 50) {
                //adulto
                imagem.setAttribute('src', 'Homem/adulto250px.png')
            }
            else if (idade  < 60) {
                //50
                imagem.setAttribute('src', 'Homem/50_250px.png')
            }
            else if (idade < 150){
                //idoso
                imagem.setAttribute('src', 'Homem/idoso250px.png')
            }
        }
        else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5 ) {
                //baby1
                imagem.setAttribute('src', 'Mulher/baby1_250px.png')
            }
            else if (idade < 9) {
                //baby2
                imagem.setAttribute('src', 'Mulher/baby2-250px.png')
            }
            else if (idade < 14) {
                //pre-adolescente
                imagem.setAttribute('src', 'Mulher/pre_adolescente250px.png')

            }
            else if (idade < 19) {
                //adolescente
                imagem.setAttribute('src', 'Mulher/adolescente250px.png')
            }
            else if (idade < 30) {
                //jovem
                imagem.setAttribute('src', 'Mulher/Jovem250px.png')
            }
            else if (idade < 50) {
                //adulta
                imagem.setAttribute('src', 'Mulher/adulto250px.png')
            }
            else if (idade  < 60) {
                //50
                imagem.setAttribute('src', 'Mulher/50_250px.png')
            }
            else if (idade < 150){
                //idosa
                imagem.setAttribute('src', 'Mulher/idoso250px.png')
            }
        }
        resultado.innerHTML = `Detetamos: ${genero} com ${idade} anos`
        resultado.appendChild(imagem)
    }

}


