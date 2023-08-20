
const buttonBotao = document.getElementById('botao');
console.log(buttonBotao);

const buttonDisfarce = document.getElementById('disfarce');

const buttonCadastro = document.getElementById('cadastro');

const register = document.getElementById('register');

const innerDescription = document.getElementById('inner-description');


buttonCadastro.addEventListener('click', () => {
    buttonCadastro.classList.add('selected');

    document.getElementById('register-screen').src = './images/cadastro.png';
    register.innerText = 'Cadastro'
    innerDescription.innerText = 'O aplicativo contará com um sistema de cadastro para usuários novos. Neles serão fornecidos algumas informações pessoais que serão essenciais para o mapeamento do usuário vítima de violência. Os dados sensíveis serão todos protegidos e armazenados em um banco de dados.'

    buttonDisfarce.classList.remove('selected'); 
    buttonBotao.classList.remove('selected'); 

})

buttonBotao.addEventListener('click', () => {

    buttonBotao.classList.add('selected');
    document.getElementById('register-screen').src = './images/botao.png';
    register.innerText = 'Botão'
    innerDescription.innerText = 'Em caso de situação de perigo o usuário poderá apertar o botão e assim, uma mensagem de alerta será enviada para os contatos registrados desse usuário. Após pressionado o botão, o aplicativo fechará, e a mensagem será enviada automaticamente.'

    buttonCadastro.classList.remove('selected');
    buttonDisfarce.classList.remove('selected');

});

buttonDisfarce.addEventListener('click', () => {
    buttonDisfarce.classList.add('selected');
    document.getElementById('register-screen').src = './images/final.png'
    register.innerText = 'Disfarce';
    innerDescription.innerText = 'O aplicativo contará com um disfarce, se camuflando como outro aplicativo.  Em situações aonde o agressor estiver sob posse do celular da vítima, o aplicativo não estará visível. O aplicativo virá com algumas opções de disfarce padrão, podendo ser ajustado ao que melhor se adapte as condições do usuário.';

    buttonCadastro.classList.remove('selected');
    buttonBotao.classList.remove('selected');
})