# 🛡️ Cyber Security Portfolio

Um portfólio web responsivo e dinâmico, focado na temática de **Cybersegurança** e estilo **Terminal / Cyberpunk**. Desenvolvido para apresentar habilidades, foco de atuação (Hardening, Redes, Forense), projetos e estatísticas do GitHub e HackTheBox.

![Portfolio Preview](https://img.shields.io/badge/Status-Completed-00FF41?style=for-the-badge)

---

## 🎯 Objetivo do Projeto
Este projeto foi criado para ser o portfólio principal do perfil **MarcosAosf**, destacando suas competências como Network Support Analyst (N2) e estudante de Cybersegurança. O objetivo é causar um impacto visual imediato que reflita as áreas de infraestrutura e segurança ofensiva/defensiva.

## ✨ Features e Funcionalidades

- **🖥️ Terminal Typing Effect:** Simulação de um console Linux (`root@marcos:~#`) digitando comandos e imprimindo resultados via JavaScript.
- **🎨 Glassmorphism & Neon UI:** Design system criado do zero usando Vanilla CSS com painéis translúcidos, bordas e sombras brilhantes (Neon Green, Purple, Blue).
- **📱 Totalmente Responsivo:** O layout em Grid se adapta perfeitamente em dispositivos mobile e telas grandes.
- **📊 Integração de APIs de Stats:** Busca dinâmica das linguagens mais utilizadas e estatísticas da conta do GitHub usando o *github-readme-stats*.
- **🏆 Projetos & Labs:** Sessão de cartões interativos (Hover states com imagens e botões de ação) para demonstrar scripts e laboratórios desenvolvidos.
- **🎭 Efeitos Dinâmicos de Scroll:** Elementos `fade-in` que aparecem gradualmente conforme a página é rolada.

## 💻 Tecnologias Utilizadas

Este projeto foi construído usando uma abordagem "Vanilla" para garantir máxima leveza, performance e total controle sobre os estilos, sem dependência de frameworks externos:

- **HTML5:** Estrutura semântica.
- **CSS3 (Vanilla):** Animações (`@keyframes`), variáveis CSS, CSS Grid e Flexbox.
- **JavaScript (Vanilla):** Interceptador de scroll, lógica de delay para animação de terminal e background matrix sutil.
- **Font Awesome:** Para os ícones de UI (Solid e Brands).
- **Google Fonts:** `Roboto Mono` (para a estética terminal) e `Inter` (para textos fluidos).

## 🚀 Como Executar Localmente

Não há necessidade de Node.js, NPM ou servidores complexos. É um projeto puramente Web (*Client-side*).

1. Clone o repositório:
   ```bash
   git clone https://github.com/MarcosAosf/portfolio-cyber.git
   ```
2. Acesse o diretório:
   ```bash
   cd portfolio-cyber
   ```
3. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente no seu navegador de preferência (Chrome, Firefox, Brave, etc).

## 📂 Estrutura de Arquivos

```text
├── index.html     # Marcação semântica e importação de CDNs
├── style.css      # Sistema de cores, efeitos Matrix, layouts e responsividade
├── script.js      # Lógica de Typewriter (Terminal) e ScrollReveal
└── README.md      # Documentação do projeto
```

## 🤝 Personalização
- **Projetos:** Altere o HTML na classe `.projects-grid` substituindo as imagens por referências aos seus repositórios no GitHub.
- **Stats:** Altere a variável `?username=MarcosAosf` para mudar a conta-alvo de onde as estatísticas são puxadas.

---
**Desenvolvido com 💚 por [MarcosAosf](https://github.com/MarcosAosf)**
