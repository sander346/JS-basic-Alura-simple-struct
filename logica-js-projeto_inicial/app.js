
let dia_da_semana = prompt('Olá, informe o dia da semana');
let fim_de_semana = 'sábado';
let fim_de_semana02 = 'domingo';

if (dia_da_semana === fim_de_semana) {
    alert('Bom fim de semana!');

} if (dia_da_semana === fim_de_semana02) {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!')
}


let numero_user = prompt('Informe um número');
if (numero_user > 0) {
    alert('Número positivo.');
} else {
    alert('Numero negativo.');
}

let pontuacao = prompt('Informe a pontuação');
if (pontuacao >= 100) {
    alert('Parabéns!, você venceu');
} else {
    alert('Tente novamente para ganhar.');
}


let nome_user = prompt('Informe seu nome');
alert('Boas vindas \n' + nome_user); 