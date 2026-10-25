document.addEventListener('DOMContentLoaded', () => {
    // Terminal Typing Effect
    const terminalOutput = document.getElementById('terminal-output');

    const terminalLines = [
        { type: 'command', text: './run_portfolio.sh' },
        { type: 'output', text: 'Initializing secure connection...', wait: true },
        { type: 'command', text: 'whoami' },
        { type: 'output', text: 'MarcosAosf - Network Support Analyst & Cybersecurity Student' },
        { type: 'command', text: 'cat skills.txt' },
        { type: 'output', text: '[OK] Redes | Automação | Hardening | Python | Bash | Cisco' }
    ];

    let currentLineIndex = 0;

    function typeText(element, text, speed, callback) {
        let i = 0;
        element.innerHTML = '';
        element.classList.add('typing-text');

        const interval = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                element.classList.remove('typing-text');
                if (callback) setTimeout(callback, 200);
            }
        }, speed);
    }

    function renderTerminal() {
        if (currentLineIndex >= terminalLines.length) {
            const cursorLine = document.createElement('div');
            cursorLine.innerHTML = `<span class="terminal-prompt">root@marcos:~#</span> <span class="typing-text"></span>`;
            terminalOutput.appendChild(cursorLine);
            return;
        }

        const line = terminalLines[currentLineIndex];
        const lineElement = document.createElement('div');
        lineElement.style.marginBottom = '0.5rem';

        terminalOutput.appendChild(lineElement);

        if (line.type === 'command') {
            lineElement.innerHTML = `<span class="terminal-prompt">root@marcos:~#</span> <span class="command-text"></span>`;
            const textSpan = lineElement.querySelector('.command-text');
            typeText(textSpan, line.text, 50, () => {
                currentLineIndex++;
                setTimeout(renderTerminal, 300);
            });
        } else {
            lineElement.innerHTML = `<span class="output-text" style="color: #a1a1aa"></span>`;
            const textSpan = lineElement.querySelector('.output-text');

            setTimeout(() => {
                textSpan.innerHTML = line.text;
                if (line.wait) {
                    textSpan.style.color = '#00ff41';
                }
                currentLineIndex++;
                setTimeout(renderTerminal, line.wait ? 800 : 200);
            }, 200);
        }

        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    setTimeout(renderTerminal, 500);

    // Scroll Reveal Animation
    const fadeElements = document.querySelectorAll('.fade-in');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.85;

        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    // Matrix Rain Effect on Background
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const matrixBg = document.getElementById('matrix-bg');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.opacity = '0.15';

    matrixBg.appendChild(canvas);

    const chars = '01'.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) drops[x] = 1;

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
                drops[i] = 0;

            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // --- Hack to Unlock Logic ---
    const btnHack = document.getElementById('btn-hack');
    const miniTerminal = document.getElementById('mini-terminal');
    const hackInterface = document.getElementById('hack-interface');
    const projectsContent = document.getElementById('projects-content');

    if (btnHack && miniTerminal && hackInterface && projectsContent) {
        btnHack.addEventListener('click', () => {
            btnHack.style.display = 'none';
            miniTerminal.style.display = 'block';

            const hackLines = [
                "Connecting to switch console via SSH...",
                "Enumerating VLANs and routing protocols...",
                "Validating network topology telemetry...",
                "Decrypting project vault data..."
            ];

            let lineIdx = 0;

            function simulateHacking() {
                if (lineIdx < hackLines.length) {
                    const line = document.createElement('div');
                    line.className = 'hack-text';
                    line.innerHTML = `> <span class="typing-text"></span>`;
                    miniTerminal.appendChild(line);

                    const span = line.querySelector('.typing-text');
                    typeText(span, hackLines[lineIdx], 5, () => {
                        lineIdx++;
                        setTimeout(simulateHacking, 80);
                    });
                } else {
                    const successLine = document.createElement('div');
                    successLine.className = 'hack-success';
                    successLine.innerText = "[ ACCESS GRANTED ]";
                    miniTerminal.appendChild(successLine);

                    setTimeout(() => {
                        hackInterface.style.display = 'none';
                        projectsContent.classList.remove('locked-content');
                        projectsContent.classList.add('unlocked');
                        checkVisibility();
                    }, 600);
                }
            }

            simulateHacking();
        });
    }

    // --- Internationalization (i18n) Logic ---
    const translations = {
        pt: {
            header_about: "Sobre Mim",
            desc_role: "Atualmente trabalhando como Analista de Suporte Técnico (N2) & Estudante de Cibersegurança e Engenharia de Redes e Segurança de Dados.",
            header_focus: "Atuação & Foco",
            focus_1: "Redes, Automação de Switches/Roteadores, Hardening",
            focus_2: "Automação com Python (Netmiko, Scapy) e Bash",
            focus_3: "Estudos em Segurança de Redes, Cisco e Forense",
            header_tech: "Tecnologias",
            header_projects: "Projetos & Labs de Redes",
            btn_hack: "_DESCRIPTOGRAFAR",
            view_btn: "Ver",
            code_btn: "Código",
            desc_netops: "Framework de automação de infraestrutura de redes para roteadores e switches Cisco IOS, Mikrotik e Juniper com backup automatizado, diff SHA256 e provisionamento via Jinja2.",
            desc_cisco: "Dashboard interativo para treinamento em redes Cisco com simulador de linha de comando IOS, topologias visuais de roteadores e switches e validação de comandos em tempo real.",
            desc_netpulse: "Cockpit 3D em tempo real para observabilidade de redes cloud, topologia de roteamento e telemetria SOC com Three.js WebGL, gráficos Canvas 60 FPS e OpenTelemetry.",
            desc_zterm: "Script wrapper automatizado que recebe um IP/Range, executa um scan silencioso do Nmap e cruza os serviços com bases de dados de CVE para gerar relatórios em Markdown.",
            desc_hardening: "Ferramenta de hardening em Bash atuando na camada de infraestrutura. Realiza blindagem de servidores Linux, análise automatizada de logs para detecção de anomalias (Brute Force/Sudo) e gestão inteligente de regras de Firewall (UFW/IPTables).",
            desc_cdpr: "Ferramenta de automação desenvolvida em Bash/PowerShell voltada para infraestrutura de redes e segurança. O script automatiza a captura e análise passiva de pacotes de Camada 2 (Data Link) utilizando o utilitário cdpr e injeção de filtros de rede para mapear, de forma silenciosa e eficiente, a topologia de switches conectados à estação de trabalho.",
            header_stats: "Estatísticas do GitHub",
            header_achievements: "Conquistas",
            htb_enrolled: "Inscrito no HackTheBox",
            header_quote: "Citação Aleatória",
            footer_text: "Iniciado por MarcosAosf // Feito com <span class="neon-text">Vanilla Code</span>"
        },
        en: {
            header_about: "About Me",
            desc_role: "Currently working as a Level 2 Technical Support Analyst & Student of Cybersecurity and Network Engineering and Data Security.",
            header_focus: "Focus & Expertise",
            focus_1: "Networks, Switch/Router Automation, Hardening",
            focus_2: "Automation with Python (Netmiko, Scapy) and Bash",
            focus_3: "Network Security, Cisco & Forensics Studies",
            header_tech: "Tech Stack",
            header_projects: "Network Projects & Labs",
            btn_hack: "_DECRYPT_DATA",
            view_btn: "View",
            code_btn: "Code",
            desc_netops: "Multi-vendor network infrastructure automation framework for Cisco IOS, Mikrotik, and Juniper with automated backups, SHA256 diff, and Jinja2 batch provisioning.",
            desc_cisco: "Interactive Cisco network training dashboard featuring an IOS CLI terminal simulator, visual router/switch topologies, and real-time command validation.",
            desc_netpulse: "Real-time 3D cloud network observability cockpit, routing topology, and SOC telemetry with Three.js WebGL, 60 FPS Canvas charts, and OpenTelemetry.",
            desc_zterm: "Automated wrapper script that receives an IP/Range, executes a silent Nmap scan, and cross-references services with CVE databases to generate Markdown reports.",
            desc_hardening: "Bash hardening tool for the infrastructure layer. Performs Linux server shielding, automated log analysis for anomaly detection (Brute Force/Sudo), and intelligent Firewall rule management (UFW/IPTables).",
            desc_cdpr: "Automation tool developed in Bash/PowerShell focused on network infrastructure and security. The script automates the passive capture and analysis of Layer 2 (Data Link) packets using the cdpr utility and network filter injection to silently and efficiently map the topology of switches connected to the workstation.",
            header_stats: "GitHub Stats",
            header_achievements: "Achievements",
            htb_enrolled: "HackTheBox Enrolled",
            header_quote: "Random Dev Quote",
            footer_text: "Initiated by MarcosAosf // Built with <span class="neon-text">Vanilla Code</span>"
        }
    };

    const langToggleBtn = document.getElementById('lang-toggle');
    const langPt = document.getElementById('lang-pt');
    const langEn = document.getElementById('lang-en');

    function setLanguage(lang) {
        if (!translations[lang]) return;

        if (langPt && langEn) {
            if (lang === 'pt') {
                langPt.classList.add('active');
                langEn.classList.remove('active');
            } else {
                langEn.classList.add('active');
                langPt.classList.remove('active');
            }
        }

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        localStorage.setItem('portfolio_lang', lang);
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('portfolio_lang') || 'pt';
            const newLang = currentLang === 'pt' ? 'en' : 'pt';
            setLanguage(newLang);
        });
    }

    const savedLang = localStorage.getItem('portfolio_lang') || 'pt';
    setLanguage(savedLang);
});
