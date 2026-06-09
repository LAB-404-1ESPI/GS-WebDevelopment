const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('rolado');
    } else {
        header.classList.remove('rolado');
    }
});
 
 

 const perguntas = [

  { q: "Qual porcentagem de astronautas apresenta sintomas de ansiedade segundo a NASA?", ops: ["60%","72%","85%","91%"], c: 2 },

  { q: "O que o AstraSync AI utiliza para monitorar astronautas em tempo real?", ops: ["Câmeras de vídeo","Sensores biométricos e neurofisiológicos","Entrevistas periódicas","Relatórios manuais"], c: 1 },

  { q: "Qual é o principal risco operacional causado pela exaustão mental em missões?", ops: ["Consumo excessivo de energia","Falha humana em decisões críticas","Perda de comunicação","Problemas com alimentação"], c: 1 },

  { q: "Missões para qual planeta exigirão maior atenção à saúde mental no futuro?", ops: ["Júpiter","Vênus","Marte","Saturno"], c: 2 },

  { q: "Quanto o AstraSync AI estima reduzir a fadiga dos astronautas?", ops: ["10%","25%","40%","60%"], c: 2 },

  { q: "Qual condição afeta os ciclos de sono dos astronautas e compromete memória e foco?", ops: ["Radiação cósmica","Privação de sono","Temperatura extrema","Falta de oxigênio"], c: 1 },

  { q: "Quantos jogos cognitivos o AstraSync AI oferece?", ops: ["2","3","4","6"], c: 2 },

  { q: "O AstraSync AI consegue operar sem sinal da Terra?", ops: ["Não, precisa de conexão constante","Sim, de forma autônoma","Apenas por 24 horas","Somente para dados básicos"], c: 1 },

  { q: "Qual grupo tem o maior impacto estimado pelo AstraSync AI?", ops: ["Agências espaciais (86%)","Pesquisadores (70%)","Astronautas (97%)","Engenheiros (80%)"], c: 2 },

  { q: "Quantos astronautas do experimento Mars-500 apresentaram problemas psicológicos?", ops: ["2 de 6","3 de 6","4 de 6","6 de 6"], c: 2 }

];

let atual = 0, pontos = 0, respondeu = false;

function carregarPergunta() {

  respondeu = false;

  const p = perguntas[atual];

  document.getElementById('num-pergunta').textContent = `Pergunta ${atual + 1} de ${perguntas.length}`;

  document.getElementById('texto-pergunta').textContent = p.q;

  document.getElementById('feedback-quiz').textContent = '';

  document.getElementById('btn-proxima').style.display = 'none';

  const div = document.getElementById('opcoes-quiz');

  div.innerHTML = '';

  p.ops.forEach((op, i) => {

    const btn = document.createElement('button');

    btn.textContent = op;

    btn.classList.add('opcao-btn');

    btn.addEventListener('click', () => checar(i, btn));

    div.appendChild(btn);

  });

}

function checar(escolha, btn) {

  if (respondeu) return;

  respondeu = true;

  const correta = perguntas[atual].c;

  document.querySelectorAll('.opcao-btn').forEach(b => b.disabled = true);

  document.querySelectorAll('.opcao-btn')[correta].classList.add('correta');

  if (escolha === correta) {

    pontos++;

    document.getElementById('feedback-quiz').textContent = '✅ Correto!';

    document.getElementById('feedback-quiz').style.color = '#00ff88';

  } else {

    btn.classList.add('errada');

    document.getElementById('feedback-quiz').textContent = '❌ Errado!';

    document.getElementById('feedback-quiz').style.color = '#ff8888';

  }

  document.getElementById('btn-proxima').style.display = 'inline-block';

}

document.getElementById('btn-proxima').addEventListener('click', () => {

  atual++;

  atual < perguntas.length ? carregarPergunta() : mostrarResultado();

});

function mostrarResultado() {

  document.getElementById('quiz-ativo').style.display = 'none';

  document.getElementById('quiz-resultado').style.display = 'block';

  const pct = Math.round((pontos / perguntas.length) * 100);

  const emoji = pct >= 80 ? '🏆 Excelente!' : pct >= 50 ? '👍 Bom trabalho!' : '📚 Continue estudando!';

  document.getElementById('texto-resultado').innerHTML =

    `Você acertou <strong style="color:var(--span)">${pontos} de ${perguntas.length}</strong> perguntas (${pct}%)<br>${emoji}`;

}

document.getElementById('btn-reiniciar').addEventListener('click', () => {

  atual = 0; pontos = 0;

  document.getElementById('quiz-ativo').style.display = 'block';

  document.getElementById('quiz-resultado').style.display = 'none';

  carregarPergunta();

});


  carregarPergunta();


function trocar(cor){
    document.body.style.background = cor;
}
document.querySelectorAll(".menu-item").forEach(link => {
 
    link.addEventListener("click", function(e){
 
        e.preventDefault();
 
        const alvo = document.querySelector(
            this.getAttribute("href")
        );
 
        window.scrollTo({
            top: alvo.offsetTop - 100,
            behavior: "smooth"
        });
 
        menuOverlay.classList.remove("ativo");
    });
 
});

const btnMissao = document.getElementById("btnMissao");
 
btnMissao.addEventListener("click", function(event) {
 
    event.preventDefault();
 
    const elemento = document.getElementById("cor1");
 
    window.scrollTo({
        top: elemento.offsetTop - 100,
        behavior: "smooth"
    });
 
});



const menuIcone = document.getElementById("menu-icone");
const menuOverlay = document.getElementById("menuOverlay");
const fecharMenu = document.getElementById("fecharMenu");
 
menuIcone.addEventListener("click", () => {
    menuOverlay.classList.add("ativo");
});
 
fecharMenu.addEventListener("click", () => {
    menuOverlay.classList.remove("ativo");
});
 
/* links */
 
document.querySelectorAll(".menu-item").forEach(link => {
 
    link.addEventListener("click", function(e){
 
        e.preventDefault();
 
        const alvo = document.querySelector(
            this.getAttribute("href")
        );
 
        window.scrollTo({
            top: alvo.offsetTop - 100,
            behavior: "smooth"
        });
 
        menuOverlay.classList.remove("ativo");
    });
 
});

const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.opacity = "0";
    });

    slides[index].style.opacity = "1";
}

// mostra o primeiro
showSlide(current);

// troca automática
setInterval(() => {
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide(current);
}, 5000);


// partículas
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
    particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        vx: Math.random(),
        vy: Math.random()
    });
}

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if(p.x > canvas.width) p.x = 0;
        if(p.y > canvas.height) p.y = 0;

        ctx.fillStyle = "#00f7ff";
        ctx.fillRect(p.x,p.y,2,2);
    });

    requestAnimationFrame(animate);
}
animate();


const form = document.getElementById("form");
const resposta = document.getElementById("resposta");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("msg").value.trim();

    if(nome === "" || email === "" || msg === ""){
        alert("Preencha todos os campos!");
        return;
    }

    if(!email.includes("@")){
        alert("Email inválido!");
        return;
    }

    resposta.style.display = "block";
    form.reset();
});