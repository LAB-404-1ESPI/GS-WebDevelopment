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
