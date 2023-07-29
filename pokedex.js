let pesquisar = document.getElementById('pesquisar');
let botao =document.getElementById('botao');
let apresentacao = document.querySelector('.apresentacao');

botao.addEventListener('click', () => {
  let busca = pesquisar.value.toLowerCase();
  apresentacao.innerHTML = '';
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`)
    .then(response => response.json())
    .then(dados => {
      let info = informacao(dados);
      apresentacao.appendChild(info);
    })
    .catch(error => {
      console.error(error);
    });
});

function informacao(pokemonDados) {
  let info = document.createElement('div');
  info.classList.add('info');

  let nome = document.createElement('h2');
  nome.innerText = pokemonDados.name;

  let imagem = document.createElement('img');
  imagem.src = pokemonDados.sprites.front_default;
  imagem.alt = `${pokemonDados.name} sprite`;

  let habilidade = document.createElement('p');
  habilidade.innerText = `Habilidades: ${pokemonDados.abilities.map(a => a.ability.name)}`;

  let forma = document.createElement('p');
  forma.innerText = `Formas: ${pokemonDados.forms.map(f => f.name)}`;

  let especie = document.createElement('p');
  especie.innerText = `Espécie: ${pokemonDados.species.name}`;

  let tipo = document.createElement('p');
  tipo.innerText = `Tipos: ${pokemonDados.types.map(t => t.type.name)}`;

  let experiencia = document.createElement('p');
  experiencia.innerText = `Experiência: ${pokemonDados.base_experience}`;

  let altura = document.createElement('p');
  altura.innerText = `Altura: ${pokemonDados.height}`;

  info.appendChild(nome);
  info.appendChild(imagem);
  info.appendChild(habilidade);
  info.appendChild(forma);
  info.appendChild(especie);
  info.appendChild(tipo);
  info.appendChild(experiencia);
  info.appendChild(altura);

  return info;
}
