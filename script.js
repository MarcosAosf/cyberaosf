document.addEventListener('DOMContentLoaded', () => {
    // Terminal Typing Effect
    const terminalOutput = document.getElementById('terminal-output');
    
    const terminalLines = [
        { type: 'command', text: './run_portfolio.sh' },
        { type: 'output', text: 'Initializing secure connection...', wait: true },
        { type: 'command', text: 'whoami' },
        { type: 'output', text: 'MarcosAosf - Network Support Analyst & Cybersecurity Student' },
        { type: 'command', text: 'cat skills.txt' },
        { type: 'output', text: '[OK] Redes | Hardening | Python | Bash | Forense' }
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
            // Add blinking cursor at the end
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
            
            // Output lines appear instantly or after a short delay
            setTimeout(() => {
                textSpan.innerHTML = line.text;
                if(line.wait) {
                     textSpan.style.color = '#00ff41'; // Green for initialization success
                }
                currentLineIndex++;
                setTimeout(renderTerminal, line.wait ? 800 : 200);
            }, 200);
        }
        
        // Auto scroll terminal
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    // Start terminal animation after a slight delay
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
    // Trigger once on load
    checkVisibility();

    // Matrix Rain Effect on Background (Optional subtle enhancement)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const matrixBg = document.getElementById('matrix-bg');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.opacity = '0.05';
    
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
            // Hide button, show terminal
            btnHack.style.display = 'none';
            miniTerminal.style.display = 'block';

            const hackLines = [
                "Bypassing perimeter firewall...",
                "Injecting payloads into portal...",
                "Escalating privileges to ROOT...",
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
                    // Changed speed from 30ms to 5ms for rapid typing
                    typeText(span, hackLines[lineIdx], 5, () => {
                        lineIdx++;
                        // Changed line delay from 400ms to 80ms
                        setTimeout(simulateHacking, 80); 
                    });
                } else {
                    // Final success message
                    const successLine = document.createElement('div');
                    successLine.className = 'hack-success';
                    successLine.innerText = "[ ACCESS GRANTED ]";
                    miniTerminal.appendChild(successLine);

                    // Unlock the projects
                    // Changed unlock delay from 1500ms to 600ms
                    setTimeout(() => {
                        hackInterface.style.display = 'none';
                        projectsContent.classList.remove('locked-content');
                        projectsContent.classList.add('unlocked');
                        
                        // Re-trigger scroll visibility for newly shown items
                        checkVisibility();
                    }, 600);
                }
            }

            // Start the sequence
            simulateHacking();
        });
    }
});
