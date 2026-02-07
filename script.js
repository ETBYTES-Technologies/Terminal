// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'particles.json', function() {
            console.log('Particles.js loaded');
        });
    }

    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }

    // Terminal functionality for ALL pages
    initializeTerminal();
});

// Terminal System
function initializeTerminal() {
    const terminalInput = document.getElementById('input');
    const terminalOutput = document.getElementById('output');
    
    if (!terminalInput || !terminalOutput) {
        console.log('Terminal elements not found on this page');
        return;
    }

    // Terminal commands database
    const commands = {
        help: {
            description: "Show all available commands",
            execute: () => {
                return `
<strong>Available commands:</strong>
<span class="info">├── help</span>            - Show this help message
<span class="info">├── clear</span>           - Clear the terminal
<span class="info">├── neofetch</span>        - Display system information
<span class="info">├── about</span>           - About E.TBYTES
<span class="info">├── projects</span>        - List of projects
<span class="info">├── quests</span>          - Tech quizzes
<span class="info">├── contact</span>         - Contact information
<span class="info">├── skills</span>          - Display skills
<span class="info">├── education</span>       - Educational background
<span class="info">├── experience</span>      - Work experience
<span class="info">├── social</span>          - Social media links
<span class="info">├── theme light/dark</span> - Change theme
<span class="info">├── date</span>            - Show current date and time
<span class="info">├── echo [text]</span>     - Echo back text
<span class="info">├── calc [expression]</span> - Simple calculator
<span class="info">├── ls</span>              - List directory (fun)
<span class="info">├── cd [dir]</span>        - Change directory (fun)
<span class="info">├── pwd</span>             - Print working directory
<span class="info">├── whoami</span>          - Display current user
<span class="info">├── weather</span>         - Weather information
<span class="info">├── joke</span>            - Tell a tech joke
<span class="info">├── quote</span>           - Random inspirational quote
<span class="info">├── music</span>           - Music recommendations
<span class="info">├── games</span>           - Mini games
<span class="info">└── reboot</span>          - Refresh the page

Type <span class="highlight">help [command]</span> for more info on a specific command.`;
            }
        },
        clear: {
            description: "Clear terminal screen",
            execute: () => {
                terminalOutput.innerHTML = '';
                return '';
            }
        },
        neofetch: {
            description: "Display system information",
            execute: () => {
                return `
<span class="ascii-art">
 ███████╗    ████████╗██████╗ ██╗   ██╗████████╗███████╗███████╗
██╔════╝    ╚══██╔══╝██╔══██╗╚██╗ ██╔╝╚══██╔══╝██╔════╝██╔════╝
█████╗         ██║   ██████╔╝ ╚████╔╝    ██║   ███████╗███████╗
██╔══╝         ██║   ██╔══██╗  ╚██╔╝     ██║   ╚════██║╚════██║
███████╗██╗    ██║   ██║  ██║   ██║      ██║   ███████║███████║
╚══════╝╚═╝    ╚═╝   ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝
</span>
<span class="info">E.TBYTES PORTFOLIO v2.0</span>
───────────────────────────────────────────────
<span class="highlight">OS:</span> E.TBYTES Portfolio
<span class="highlight">Host:</span> Elvis Teddy @ Digital Realm  
<span class="highlight">Kernel:</span> JavaScript ES6+
<span class="highlight">Shell:</span> Interactive Web Terminal
<span class="highlight">Theme:</span> Cyberpunk Green
<span class="highlight">Terminal:</span> v1.3.3
───────────────────────────────────────────────`;
            }
        },
        about: {
            description: "About E.TBYTES",
            execute: () => {
                return `
<strong>Elvis Teddy (E.TBYTES)</strong>
<span class="info">───────────────────────</span>
💻 Full-Stack Developer
🚀 Tech Enthusiast  
🎨 UI/UX Designer
🤖 AI Explorer
📚 Lifelong Learner

<strong>Bio:</strong>
Passionate developer creating innovative digital 
solutions and exploring cutting-edge technologies.

Type <span class="highlight">skills</span> to see my technical skills.
Type <span class="highlight">experience</span> to see my work history.`;
            }
        },
        projects: {
            description: "List of projects",
            execute: () => {
                return `
<strong>E.TBYTES Projects:</strong>
<span class="info">───────────────────────</span>
<span class="highlight">1. Portfolio Terminal</span>
   Interactive web terminal with 25+ commands
   
<span class="highlight">2. Quantum Calculator</span>
   Advanced calculator with quantum computing simulation
   
<span class="highlight">3. AI Code Assistant</span>
   Machine learning-based code completion tool
   
<span class="highlight">4. Cyberpunk Dashboard</span>
   Real-time system monitoring dashboard
   
<span class="highlight">5. Blockchain Explorer</span>
   Cryptocurrency transaction visualization tool

Visit <a href="projects.html" style="color:#00ff00;">Projects Page</a> for more details.`;
            }
        },
        quests: {
            description: "Tech quizzes and challenges",
            execute: () => {
                return `
<strong>Tech Quests & Challenges:</strong>
<span class="info">───────────────────────</span>
🎯 <span class="highlight">HTML/CSS Quiz</span> - Test your web fundamentals
⚡ <span class="highlight">JavaScript Challenges</span> - Coding problems
🔐 <span class="highlight">Security CTF</span> - Capture The Flag challenges
🧠 <span class="highlight">Algorithm Puzzles</span> - Data structure problems
🎮 <span class="highlight">Coding Games</span> - Learn by playing

Visit <a href="quests.html" style="color:#00ff00;">Quests Page</a> to start quizzing!`;
            }
        },
        contact: {
            description: "Contact information",
            execute: () => {
                return `
<strong>Contact Information:</strong>
<span class="info">───────────────────────</span>
📧 <span class="highlight">Email:</span> elvis.teddy@etbytes.dev
📱 <span class="highlight">Phone:</span> [+1 (555) ETBYTES]
💼 <span class="highlight">LinkedIn:</span> linkedin.com/in/etbytes
🐙 <span class="highlight">GitHub:</span> github.com/etbytes
🐦 <span class="highlight">Twitter:</span> @etbytes_dev
🌐 <span class="highlight">Website:</span> etbytes.dev`;
            }
        },
        skills: {
            description: "Technical skills",
            execute: () => {
                return `
<strong>Technical Skills:</strong>
<span class="info">───────────────────────</span>
<span class="highlight">Frontend:</strong>
   HTML5, CSS3, JavaScript (ES6+), React, Vue.js, TypeScript
   
<span class="highlight">Backend:</strong>
   Node.js, Python, Express, Django, PostgreSQL, MongoDB
   
<span class="highlight">DevOps:</strong>
   Docker, AWS, CI/CD, Linux, Nginx, Git
   
<span class="highlight">Tools:</strong>
   VS Code, Git, Figma, Postman, Webpack, Jest`;
            }
        },
        date: {
            description: "Show current date and time",
            execute: () => {
                const now = new Date();
                return `<span class="info">Current date and time:</span> ${now.toLocaleString()}`;
            }
        },
        echo: {
            description: "Echo back text",
            execute: (args) => {
                return args.join(' ') || 'Usage: echo [text]';
            }
        },
        whoami: {
            description: "Display current user",
            execute: () => {
                return "guest@etbytes";
            }
        },
        joke: {
            description: "Tell a tech joke",
            execute: () => {
                const jokes = [
                    "Why do Java developers wear glasses? Because they can't C#!",
                    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
                    "What's a programmer's favorite hangout place? Foo Bar.",
                    "Why do programmers prefer dark mode? Because light attracts bugs!",
                    "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
                    "Why did the developer go broke? Because he used up all his cache!",
                    "What's a programmer's favorite season? Syntax Winter!"
                ];
                const joke = jokes[Math.floor(Math.random() * jokes.length)];
                return `<span class="info">🤖 Tech Joke:</span> ${joke}`;
            }
        },
        quote: {
            description: "Random inspirational quote",
            execute: () => {
                const quotes = [
                    "The only way to do great work is to love what you do. - Steve Jobs",
                    "Code is like humor. When you have to explain it, it's bad. - Cory House",
                    "First, solve the problem. Then, write the code. - John Johnson",
                    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
                    "Programming isn't about what you know; it's about what you can figure out. - Chris Pine",
                    "The best error message is the one that never shows up. - Thomas Fuchs"
                ];
                const quote = quotes[Math.floor(Math.random() * quotes.length)];
                return `<span class="info">💡 Quote:</span> ${quote}`;
            }
        },
        reboot: {
            description: "Refresh the page",
            execute: () => {
                setTimeout(() => location.reload(), 1000);
                return "<span class='warning'>Rebooting system...</span>";
            }
        },
        ls: {
            description: "List directory contents",
            execute: () => {
                return `
<span class="info">Directory: ~/</span>
<span class="success">📁 about</span>      - About me information
<span class="success">📁 projects</span>   - Project files
<span class="success">📁 quests</span>     - Quiz challenges
<span class="success">📁 terminal</span>   - Terminal settings
<span class="success">📁 skills</span>     - Skills database
<span class="success">📁 contact</span>    - Contact details
<span class="success">📁 media</span>      - Media files
<span class="success">📁 logs</span>       - System logs
<span class="success">📄 README.md</span>  - Documentation`;
            }
        },
        pwd: {
            description: "Print working directory",
            execute: () => {
                return "/home/guest/etbytes-portfolio";
            }
        },
        weather: {
            description: "Get weather information",
            execute: () => {
                const weather = [
                    "☀️  Sunny: 24°C in Digital Realm",
                    "⛈️  Stormy: Debugging thunder in progress",
                    "❄️  Cool: Code compilation breeze",
                    "🌤️  Partly Cloudy: Some bugs in the forecast",
                    "🌈  Rainbow: Successful deployment!"
                ];
                return `<span class="info">Weather Report:</span> ${weather[Math.floor(Math.random() * weather.length)]}`;
            }
        },
        theme: {
            description: "Change theme (light/dark)",
            execute: (args) => {
                if (args[0] === 'light') {
                    document.body.style.background = '#ffffff';
                    document.body.style.color = '#000000';
                    return "<span class='success'>Theme changed to Light Mode</span>";
                } else if (args[0] === 'dark') {
                    document.body.style.background = '#0a0a0a';
                    document.body.style.color = '#00ff00';
                    return "<span class='success'>Theme changed to Dark Mode</span>";
                }
                return "Usage: theme [light|dark]";
            }
        },
        calc: {
            description: "Simple calculator",
            execute: (args) => {
                try {
                    const expression = args.join(' ');
                    // Safe evaluation
                    const result = Function('"use strict"; return (' + expression + ')')();
                    return `<span class="info">${expression} =</span> <span class="success">${result}</span>`;
                } catch (e) {
                    return `<span class="error">Calculation error. Example: calc 2 + 2</span>`;
                }
            }
        }
    };

    // Terminal history
    let commandHistory = [];
    let historyIndex = -1;

    // Focus input on terminal click
    if (terminalOutput) {
        terminalOutput.addEventListener('click', () => {
            terminalInput.focus();
        });
    }

    // Handle command input
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const command = terminalInput.value.trim();
            terminalInput.value = '';
            
            if (command) {
                // Add command to history
                commandHistory.push(command);
                historyIndex = commandHistory.length;
                
                // Display command
                const commandLine = document.createElement('div');
                commandLine.className = 'command-line';
                commandLine.innerHTML = `<span class="prompt">guest@etbytes:~$</span> ${command}`;
                terminalOutput.appendChild(commandLine);
                
                // Process command
                const args = command.split(' ');
                const cmd = args[0].toLowerCase();
                const commandArgs = args.slice(1);
                
                let output = '';
                
                if (commands[cmd]) {
                    output = commands[cmd].execute(commandArgs);
                } else {
                    output = `<span class="error">Command not found: ${cmd}</span><br>Type <span class="highlight">'help'</span> for available commands.`;
                }
                
                // Display output
                if (output) {
                    const outputLine = document.createElement('div');
                    outputLine.innerHTML = output;
                    terminalOutput.appendChild(outputLine);
                }
                
                // Add separator
                const separator = document.createElement('div');
                separator.innerHTML = '─'.repeat(50);
                terminalOutput.appendChild(separator);
                
                // Scroll to bottom
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                if (historyIndex > 0) historyIndex--;
                terminalInput.value = commandHistory[historyIndex] || '';
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                terminalInput.value = commandHistory[historyIndex] || '';
            } else {
                historyIndex = commandHistory.length;
                terminalInput.value = '';
            }
        }
    });

    // Auto-focus input
    setTimeout(() => {
        terminalInput.focus();
    }, 500);
}