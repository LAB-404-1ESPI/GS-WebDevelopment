# Alteração do Header com JavaScript

## Solicitação

Desejo que, a partir do JavaScript, o elemento `header` assuma as características definidas na classe `.rolado`.

### CSS

```css
header{
    position: fixed;
    background: #000000;
    height: 120px;
    width: 100%;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    transition:
        background-color 0.4s ease,
        backdrop-filter 0.4s ease,
        height 0.4s ease,
        box-shadow 0.4s ease;
}

header.rolado{
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(12px);
    height: 90px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
}
```
# Resposta da IA (ChatGPT)
## Solução

A maneira mais recomendada é adicionar e remover a classe `rolado` através do JavaScript, mantendo os estilos organizados no CSS.

```javascript
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('rolado');
    } else {
        header.classList.remove('rolado');
    }
});
```

### Funcionamento

* Quando o usuário rola a página mais de 20 pixels, a classe `rolado` é adicionada ao elemento `header`.
* O `header` passa a utilizar os estilos definidos em `header.rolado`.
* Quando o usuário retorna ao topo da página, a classe é removida.
* As transições CSS são aplicadas automaticamente, criando um efeito suave na mudança de aparência do cabeçalho.


## Solicitação

Quero que o fundo da pagina tenha particulas como se fossem estrelas animadas

# Resposta da IA (ChatGPT)
## Solução
```javascript
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
```