function verificar(){
   var data = new Date();
   var ano = data.getFullYear();

   var anoDigitado = document.getElementById('idade').value

   var anoDigitado = Number(anoDigitado)

   if(anoDigitado == 0 || anoDigitado > ano){
    alert('Verifique os dados e  tente novamente')
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - anoDigitado
    

    // GÊNERO --->  [0] primeiro checkbox selecionado    [1] segundo checkbox selecionado
    var genero = ''

    var img = document.createElement('img')  //--> criando um elemento img
    img.setAttribute('id', 'foto')  // --> como se estivesse criando uma div img

    img.setAttribute('width', '150'); // Largura 300px
    img.setAttribute('height', '150'); // Altura 200px
    img.style.margin = 'auto';

    if(fsex[0].checked){
        genero = 'Homem'
        if (idade>=0 && idade<12){
            //CRIANÇA H
            img.setAttribute('src', 'hCrianca.jpg')
            

        }else if (idade <=17){
            //Jovem
            img.setAttribute('src', 'hJovem.jpg')
        }else if (idade <55){
            // ADULTO H
            img.setAttribute('src', 'hAdulto.jpg')
        }   else{
            //IDOSO
            img.setAttribute('src', 'hIdoso.png')
        } 
    }else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade>=0 && idade<12){
            //CRIANÇA M
            img.setAttribute('src', 'mCrianca')

        }else if (idade <=17){
            //Jovem
            img.setAttribute('src', 'mJovem.jpg')
        }else if (idade <55){
            // ADULTO M
            img.setAttribute('src', 'mAdulta.jpg')
        }   else{
            //IDOSO M
            img.setAttribute('src', 'mIdosa.jpg')
        } 
    }


   
    mostrar.innerHTML = `Detectamos ${genero} com ${idade} anos`
    mostrar.appendChild(img)


   }

   
  
}