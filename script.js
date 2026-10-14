/**
 * Ashwini Mali Portfolio - Interactive Script
 * Terminal Engine, Typing Effect, Speech Audio, Simulator, Tabs & Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Typing Effect in Hero
  initTypingEffect();

  // 2. Interactive Terminal Console & Easter Eggs
  initTerminal();

  // 3. Email Copy Interaction
  initCopyEmail();

  // 4. Mobile Navigation Toggle
  initMobileNav();

  // 5. Update Current Date Display in Terminal
  initCurrentDate();

  // 6. Project View Tabs
  initProjectTabs();

  // 7. Hand Landmark SOS Simulation
  initSimulation();

  // 8. F.R.I.D.A.Y. Voice Assistant Speech Synthesis
  initVoiceDemo();

  // 9. 1-Minute Recruiter Mode Modal
  initRecruiterModal();

  // 10. F.R.I.D.A.Y. Floating Voice Assistant Engine
  initFridayVoiceAssistant();

  // 11. Interactive Inline Chatbot Lab
  initInlineChatbot();
});

/* ---------------- 1. Hero Dynamic Typing Effect ---------------- */
function initTypingEffect() {
  const target = document.getElementById('typingRole');
  if (!target) return;

  const roles = [
    'AI & Data Science Engineer',
    'Computer Vision Builder',
    'Python & C Developer',
    'Women\'s Safety Tech Innovator'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentText = roles[roleIdx];

    if (isDeleting) {
      target.textContent = currentText.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 50;
    } else {
      target.textContent = currentText.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIdx === currentText.length) {
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ---------------- 2. Interactive Terminal Engine & Easter Eggs ---------------- */
function initTerminal() {
  const terminalInput = document.getElementById('terminalInput');
  const terminalSubmit = document.getElementById('terminalSubmit');
  const terminalOutput = document.getElementById('terminalOutput');
  const quickChips = document.querySelectorAll('.chip-btn');

  if (!terminalInput || !terminalOutput) return;

  const commandDatabase = {
    help: () => `
<div class="text-accent">Available CLI Commands:</div>
  • <strong>about</strong>        - Read personal bio & engineering focus
  • <strong>skills</strong>       - List core technical proficiencies
  • <strong>contact</strong>      - Contact channels & social links (GitHub, CodeChef)
  • <strong>codechef</strong>     - View CodeChef profile & DSA progress
  • <strong>why_hire_me</strong>  - 3 reasons why Ashwini adds value to your team
  • <strong>theme &lt;name&gt;</strong>  - Try 'theme matrix', 'theme cyber', or 'theme default'
  • <strong>quiz</strong>         - Test your AI knowledge in a mini quiz
  • <strong>clear</strong>        - Clear the terminal screen
  • <strong>whoami</strong>       - Developer identity snapshot
    `,
    whoami: () => `
<div><strong>Ashwini Aaba Mali</strong> | B.Tech AI & Data Science (2nd Year)</div>
<div class="text-muted">Passionate about applied Computer Vision, Speech AI, and real-world software solutions.</div>
    `,
    about: () => `
<div><strong>Profile Summary:</strong></div>
<div>Second-year B.Tech student in Artificial Intelligence and Data Science at R. C. Patel Institute of Technology, Shirpur. Driven by building practical AI that makes a direct social and safety impact.</div>
    `,
    skills: () => `
<div><strong>Technical Skills:</strong></div>
  • <span class="text-accent">AI & Vision:</span> Computer Vision, OpenCV, MediaPipe, SpeechRecognition, pyttsx3, NumPy
  • <span class="text-accent">Languages:</span> Python, C Programming, HTML5, CSS3
  • <span class="text-accent">Databases:</span> MySQL (learning)
  • <span class="text-accent">Tools & APIs:</span> Git, GitHub, VS Code, Twilio API
  • <span class="text-accent">Competitive Programming:</span> CodeChef (DSA & Problem Solving)
    `,
    projects: () => `
<div><strong>Featured Projects:</strong></div>
  1. <strong>AI-Based Women's Safety System</strong>
     - Real-time gesture recognition (OpenCV + MediaPipe) triggering emergency Twilio SOS alerts.
  2. <strong>F.R.I.D.A.Y. – Voice Assistant</strong>
     - Voice command interpreter with speech-to-text and offline speech synthesis (pyttsx3).
  3. <strong>Airplane Reservation System</strong>
     - Robust flight booking and record management system in Python and C.
    `,
    education: () => `
<div><strong>Education:</strong></div>
  • <strong>Degree:</strong> B.Tech in Artificial Intelligence & Data Science (2024–2028)
  • <strong>Institute:</strong> R. C. Patel Institute of Technology (RCPIT), Shirpur, Maharashtra
  • <strong>Focus:</strong> AI Algorithms, Computer Vision, DSA, Python & C
    `,
    contact: () => `
<div><strong>Get In Touch & Coding Profiles:</strong></div>
  • <strong>Email:</strong> ashwinimali.work@gmail.com
  • <strong>GitHub:</strong> <a href="https://github.com/ashwinimali4753-cell" target="_blank" style="color:#38bdf8;text-decoration:underline;">github.com/ashwinimali4753-cell</a>
  • <strong>CodeChef:</strong> <a href="https://www.codechef.com/users/ashwinimali4753" target="_blank" style="color:#fbbf24;text-decoration:underline;">codechef.com/users/ashwinimali4753</a>
  • <strong>Location:</strong> Maharashtra, India
    `,
    codechef: () => `
<div class="text-accent"><strong>CodeChef Competitive Programming Profile:</strong></div>
<div>• <strong>Handle:</strong> <a href="https://www.codechef.com/users/ashwinimali4753" target="_blank" style="color:#fbbf24;text-decoration:underline;">codechef.com/users/ashwinimali4753</a></div>
<div>• <strong>Focus:</strong> Algorithmic Logic, C Programming, Python, and Data Structures.</div>
    `,
    why_hire_me: () => `
<div class="text-accent"><strong>★ Why Hire Ashwini Mali? ★</strong></div>
  1. <strong>Impact-Driven Project Execution:</strong> Designed an end-to-end Women's Safety System with MediaPipe 21-point tracking and Twilio API.
  2. <strong>Strong Foundational Rigor:</strong> Core mastery of C and Python algorithms alongside modern AI frameworks.
  3. <strong>High Adaptability & Ownership:</strong> Active GitHub user, rapid self-learner, and eager to contribute to production software.
    `,
    quiz: () => `
<div><strong>AI Quick Quiz:</strong></div>
<div class="text-accent">Q: In MediaPipe Hand landmark tracking, how many 3D keypoints are tracked per hand?</div>
<div>Type <strong>answer 21</strong> or <strong>answer 15</strong> in terminal to check!</div>
    `,
    'answer 21': () => `<div style="color:#34d399;"><strong>Correct!</strong> MediaPipe tracks 21 3D hand landmarks (wrist, metacarpals, and phalanges).</div>`,
    'answer 15': () => `<div style="color:#f87171;"><strong>Incorrect!</strong> MediaPipe models calculate exactly 21 coordinates per hand.</div>`,
    sudo: () => `<div class="text-accent">Permission granted: You are already exploring with full access!</div>`,
    date: () => `<div>${new Date().toString()}</div>`
  };

  function executeCommand(rawInput) {
    const cmd = rawInput.trim();
    const lowerCmd = cmd.toLowerCase();
    if (!cmd) return;

    // Append Command Line
    const cmdLine = document.createElement('div');
    cmdLine.className = 'term-line cmd-line';
    cmdLine.innerHTML = `<span class="term-prompt">ashwini@rcpit:~$</span> <span class="term-cmd">${escapeHtml(cmd)}</span>`;
    terminalOutput.appendChild(cmdLine);

    // Process Command
    if (lowerCmd === 'clear') {
      terminalOutput.innerHTML = '';
    } else if (lowerCmd.startsWith('theme ')) {
      const themeName = lowerCmd.split(' ')[1];
      document.body.classList.remove('theme-matrix', 'theme-cyber');
      let msg = '';
      if (themeName === 'matrix') {
        document.body.classList.add('theme-matrix');
        msg = '<div style="color:#22c55e;">Matrix theme activated! Enjoy the hacker aesthetic.</div>';
      } else if (themeName === 'cyber') {
        document.body.classList.add('theme-cyber');
        msg = '<div style="color:#06b6d4;">Cyberpunk theme activated! Neon cyan and magenta enabled.</div>';
      } else if (themeName === 'default') {
        msg = '<div class="text-accent">Default terminal theme restored.</div>';
      } else {
        msg = `<div class="text-muted">Unknown theme: '${themeName}'. Options: <strong>theme matrix</strong>, <strong>theme cyber</strong>, <strong>theme default</strong></div>`;
      }
      const resultLine = document.createElement('div');
      resultLine.className = 'term-line output-line';
      resultLine.innerHTML = msg;
      terminalOutput.appendChild(resultLine);
    } else if (commandDatabase[lowerCmd]) {
      const resultLine = document.createElement('div');
      resultLine.className = 'term-line output-line';
      resultLine.innerHTML = commandDatabase[lowerCmd]();
      terminalOutput.appendChild(resultLine);
    } else {
      const errorLine = document.createElement('div');
      errorLine.className = 'term-line output-line text-muted';
      errorLine.innerHTML = `command not found: <code>${escapeHtml(cmd)}</code>. Type <strong class="text-accent">help</strong> for a list of available commands.`;
      terminalOutput.appendChild(errorLine);
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    terminalInput.value = '';
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput.value);
    }
  });

  if (terminalSubmit) {
    terminalSubmit.addEventListener('click', () => {
      executeCommand(terminalInput.value);
    });
  }

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        executeCommand(cmd);
      }
    });
  });
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

/* ---------------- 3. Email Copy Interaction ---------------- */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('emailText');
  const copyBtnLabel = document.getElementById('copyBtnLabel');

  if (!copyBtn || !emailText) return;

  copyBtn.addEventListener('click', async () => {
    const textToCopy = emailText.textContent.trim();
    try {
      await navigator.clipboard.writeText(textToCopy);
      copyBtn.classList.add('copied');
      if (copyBtnLabel) copyBtnLabel.textContent = 'Copied!';
      setTimeout(() => {
        if (copyBtnLabel) copyBtnLabel.textContent = 'Copy';
        copyBtn.classList.remove('copied');
      }, 2200);
    } catch (err) {
      prompt("Copy email manually:", textToCopy);
    }
  });
}

/* ---------------- 4. Mobile Navigation ---------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

/* ---------------- 5. Terminal Date Initialization ---------------- */
function initCurrentDate() {
  const dateDisplay = document.getElementById('currentDateDisplay');
  if (dateDisplay) {
    const now = new Date();
    dateDisplay.textContent = now.toDateString();
  }
}

/* ---------------- 6. Project View Tabs ---------------- */
function initProjectTabs() {
  const tabs = document.querySelectorAll('.view-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.getAttribute('data-target');
      document.querySelectorAll('#projects .tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });

      const activePane = document.getElementById(targetId);
      if (activePane) {
        activePane.classList.add('active');
      }
    });
  });
}

/* ---------------- 7. Hand Landmark SOS Simulation ---------------- */
function initSimulation() {
  const simBtn = document.getElementById('runSimBtn');
  const simBadge = document.getElementById('simBadge');
  const simLog = document.getElementById('simLog');
  const landmarkDots = document.querySelectorAll('.lm-dot');

  if (!simBtn || !simLog || !simBadge) return;

  let isSimulating = false;

  simBtn.addEventListener('click', () => {
    if (isSimulating) return;
    isSimulating = true;
    simBtn.disabled = true;

    // Step 1: Capture
    simBadge.textContent = "Scanning Camera (30 FPS)...";
    simBadge.style.color = "#38bdf8";
    simLog.innerHTML = `<span style="color:#38bdf8;">[1/4] Initializing OpenCV stream... Capturing RGB frames.</span>`;

    // Step 2: Landmarks
    setTimeout(() => {
      simBadge.textContent = "MediaPipe Tracking";
      simBadge.style.color = "#a855f7";
      landmarkDots.forEach(dot => {
        dot.style.background = "#a855f7";
        dot.style.transform = "scale(1.4)";
      });
      simLog.innerHTML = `<span style="color:#a855f7;">[2/4] Hand detected. 21 3D landmarks plotted with MediaPipe.</span>`;
    }, 900);

    // Step 3: Classification
    setTimeout(() => {
      simBadge.textContent = "SOS Gesture Confirmed";
      simBadge.style.color = "#fbbf24";
      landmarkDots.forEach(dot => {
        dot.style.background = "#fbbf24";
        dot.style.transform = "scale(1.6)";
      });
      simLog.innerHTML = `<span style="color:#fbbf24;">[3/4] Emergency gesture matched (Confidence: 98.4%). Threshold hold verified.</span>`;
    }, 2000);

    // Step 4: Alert dispatched
    setTimeout(() => {
      simBadge.textContent = "ALERT DISPATCHED!";
      simBadge.style.color = "#ef4444";
      landmarkDots.forEach(dot => {
        dot.style.background = "#ef4444";
      });
      simLog.innerHTML = `<strong style="color:#34d399;">[4/4] Twilio API Triggered: SMS + GPS coordinates successfully sent to emergency contacts!</strong>`;

      setTimeout(() => {
        simBadge.textContent = "Camera Standby";
        simBadge.style.color = "var(--accent-cyan)";
        landmarkDots.forEach(dot => {
          dot.style.background = "var(--accent-emerald)";
          dot.style.transform = "scale(1)";
        });
        simBtn.disabled = false;
        isSimulating = false;
      }, 3500);
    }, 3100);
  });
}

/* ---------------- 8. F.R.I.D.A.Y. Voice Assistant Speech Synthesis ---------------- */
function initVoiceDemo() {
  const voiceBtn = document.getElementById('voiceDemoBtn');
  const voiceIndicator = document.getElementById('voiceIndicator');
  const voiceSubtext = document.getElementById('voiceSubtext');

  if (!voiceBtn) return;

  voiceBtn.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) {
      alert("Speech synthesis is not supported on this browser.");
      return;
    }

    window.speechSynthesis.cancel(); // Stop any pending speech

    const phrase = "Hello! I am F.R.I.D.A.Y., Ashwini's voice assistant prototype. I recognize spoken voice commands and execute automated system tasks. Thank you for considering Ashwini for your engineering team!";
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.rate = 1.0;
    utterance.pitch = 1.05;

    if (voiceIndicator) voiceIndicator.classList.add('speaking');
    if (voiceSubtext) voiceSubtext.textContent = "Speaking: \"Hello! I am F.R.I.D.A.Y...\"";
    voiceBtn.classList.add('btn-primary');

    utterance.onend = () => {
      if (voiceIndicator) voiceIndicator.classList.remove('speaking');
      if (voiceSubtext) voiceSubtext.textContent = "Speech completed successfully!";
      voiceBtn.classList.remove('btn-primary');
      setTimeout(() => {
        if (voiceSubtext) voiceSubtext.textContent = "Speech Synthesis Online";
      }, 2500);
    };

    utterance.onerror = () => {
      if (voiceIndicator) voiceIndicator.classList.remove('speaking');
      if (voiceSubtext) voiceSubtext.textContent = "Speech Synthesis ready";
    };

    window.speechSynthesis.speak(utterance);
  });
}

/* ---------------- 9. 1-Minute Recruiter Mode Modal ---------------- */
function initRecruiterModal() {
  const openBtn = document.getElementById('openRecruiterBtn');
  const modal = document.getElementById('recruiterModal');
  const closeBtn = document.getElementById('closeRecruiterBtn');
  const modalCopyBtn = document.getElementById('modalCopyEmail');

  if (!openBtn || !modal) return;

  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Modal Email Copy
  if (modalCopyBtn) {
    modalCopyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('ashwinimali.work@gmail.com');
        const origText = modalCopyBtn.innerHTML;
        modalCopyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Email Copied to Clipboard!';
        setTimeout(() => {
          modalCopyBtn.innerHTML = origText;
        }, 2200);
      } catch (err) {
        prompt("Copy email manually:", "ashwinimali.work@gmail.com");
      }
    });
  }
}

/* ---------------- 10. F.R.I.D.A.Y. Interactive Voice Assistant ---------------- */
function initFridayVoiceAssistant() {
  const launcher = document.getElementById('fridayLauncher');
  const panel = document.getElementById('fridayPanel');
  const closeBtn = document.getElementById('fridayCloseBtn');
  const muteBtn = document.getElementById('fridayMuteBtn');
  const muteIcon = document.getElementById('muteIcon');
  const micBtn = document.getElementById('fridayMicBtn');
  const sendBtn = document.getElementById('fridaySendBtn');
  const textInput = document.getElementById('fridayTextInput');
  const feed = document.getElementById('fridayFeed');
  const visualizer = document.getElementById('audioVisualizer');
  const statusText = document.getElementById('fridayStatusText');
  const chips = document.querySelectorAll('.voice-chip');

  if (!launcher || !panel) return;

  let isMuted = false;
  let isListening = false;
  let isSpeaking = false;
  let recognition = null;

  // 1. Toggle Panel Visibility
  launcher.addEventListener('click', () => {
    panel.classList.toggle('active');
    if (panel.classList.contains('active')) {
      if (textInput) textInput.focus();
    } else {
      stopVoice();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      panel.classList.remove('active');
      stopVoice();
    });
  }

  // 2. Mute Toggle
  if (muteBtn && muteIcon) {
    muteBtn.addEventListener('click', () => {
      isMuted = !isMuted;
      if (isMuted) {
        muteIcon.className = 'fa-solid fa-volume-xmark';
        stopVoice();
        if (statusText) statusText.textContent = 'Voice audio muted.';
      } else {
        muteIcon.className = 'fa-solid fa-volume-high';
        if (statusText) statusText.textContent = 'Voice audio enabled.';
      }
    });
  }

  function stopVoice() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (visualizer) visualizer.classList.remove('active');
    isSpeaking = false;
  }

  // 3. Speech Synthesis Vocal Response
  function speakResponse(text, callback) {
    stopVoice();

    if (isMuted || !('speechSynthesis' in window)) {
      if (callback) callback();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 1.05;

    isSpeaking = true;
    if (visualizer) visualizer.classList.add('active');
    if (statusText) statusText.textContent = "F.R.I.D.A.Y. is speaking...";

    utterance.onend = () => {
      isSpeaking = false;
      if (visualizer) visualizer.classList.remove('active');
      if (statusText) statusText.textContent = "Ready. Click mic or choose a question below.";
      if (callback) callback();
    };

    utterance.onerror = () => {
      isSpeaking = false;
      if (visualizer) visualizer.classList.remove('active');
      if (statusText) statusText.textContent = "Ready for voice command or query.";
      if (callback) callback();
    };

    window.speechSynthesis.speak(utterance);
  }

  // 4. Append message to chat feed
  function appendMessage(sender, text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `fmsg ${isUser ? 'user-msg' : 'bot-msg'}`;

    if (!isUser) {
      msgDiv.innerHTML = `
        <div class="msg-author"><i class="fa-solid fa-robot"></i> ${sender}</div>
        <div class="msg-content">${escapeHtml(text)}</div>
      `;
    } else {
      msgDiv.textContent = text;
    }

    if (feed) {
      feed.appendChild(msgDiv);
      feed.scrollTop = feed.scrollHeight;
    }
  }

  // 5. Intelligent Query Parser & Navigation Engine
  function processQuery(query) {
    const q = query.toLowerCase().trim();
    if (!q) return;

    appendMessage('You', query, true);

    let answer = "";
    let targetSection = null;

    if (q.includes('who') || q.includes('about') || q.includes('bio') || q.includes('ashwini')) {
      answer = "Ashwini Aaba Mali is a 2nd year B.Tech student in Artificial Intelligence and Data Science at R. C. Patel Institute of Technology. She builds practical AI and Computer Vision applications.";
      targetSection = '#about';
    } else if (q.includes('skill') || q.includes('stack') || q.includes('tech') || q.includes('language') || q.includes('python') || q.includes('c')) {
      answer = "Ashwini specializes in Python, C Programming, Computer Vision with MediaPipe and OpenCV, Speech AI, and Git version control.";
      targetSection = '#skills';
    } else if (q.includes('project') || q.includes('women') || q.includes('safety') || q.includes('gesture') || q.includes('work')) {
      answer = "Ashwini has built 3 key projects: an AI-Based Women's Safety Hand Gesture System, the F.R.I.D.A.Y. Voice Assistant, and an Airplane Reservation System. Let's look at them!";
      targetSection = '#projects';
    } else if (q.includes('hire') || q.includes('why') || q.includes('reason') || q.includes('interview')) {
      answer = "Ashwini combines rigorous foundational problem-solving in C and Python with practical computer vision prototypes, rapid learning agility, and genuine engineering passion.";
      targetSection = '#about';
    } else if (q.includes('codechef') || q.includes('competitive') || q.includes('dsa') || q.includes('coding profile')) {
      answer = "Ashwini actively solves data structures and algorithmic problems on CodeChef in C and Python. Check her profile at codechef.com/users/ashwinimali4753.";
      targetSection = '#contact';
    } else if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('github') || q.includes('linkedin')) {
      answer = "You can email Ashwini directly at ashwinimali.work@gmail.com, or check her profiles on GitHub and CodeChef.";
      targetSection = '#contact';
    } else if (q.includes('education') || q.includes('college') || q.includes('institute') || q.includes('degree')) {
      answer = "Ashwini is pursuing her B.Tech degree in Artificial Intelligence & Data Science at R. C. Patel Institute of Technology, Shirpur.";
      targetSection = '#education';
    } else {
      answer = `I processed "${query}". Ashwini is an AI & Data Science undergraduate ready for internships. Explore her skills, featured projects, or contact channels!`;
      targetSection = '#projects';
    }

    appendMessage('F.R.I.D.A.Y.', answer, false);

    speakResponse(answer, () => {
      if (targetSection) {
        const el = document.querySelector(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    if (textInput) textInput.value = '';
  }

  // 6. Speech Recognition (Microphone Input)
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      isListening = true;
      if (micBtn) micBtn.classList.add('recording');
      if (visualizer) visualizer.classList.add('active');
      if (statusText) statusText.textContent = "Listening... Speak now!";
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (statusText) statusText.textContent = `Heard: "${transcript}"`;
      processQuery(transcript);
    };

    recognition.onerror = () => {
      isListening = false;
      if (micBtn) micBtn.classList.remove('recording');
      if (visualizer) visualizer.classList.remove('active');
      if (statusText) statusText.textContent = "Voice input error. You can type or tap a question.";
    };

    recognition.onend = () => {
      isListening = false;
      if (micBtn) micBtn.classList.remove('recording');
      if (!isSpeaking && visualizer) visualizer.classList.remove('active');
    };
  }

  if (micBtn) {
    micBtn.addEventListener('click', () => {
      if (!SpeechRecognition) {
        alert("Speech Recognition is not supported on this browser. Try Chrome or Edge, or type your query below!");
        return;
      }

      if (isListening) {
        recognition.stop();
      } else {
        stopVoice();
        try {
          recognition.start();
        } catch (err) {
          recognition.stop();
        }
      }
    });
  }

  // 7. Text Input & Send Button
  if (sendBtn && textInput) {
    sendBtn.addEventListener('click', () => {
      processQuery(textInput.value);
    });

    textInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        processQuery(textInput.value);
      }
    });
  }

  // 8. Quick Chips
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-query');
      if (q) {
        processQuery(q);
      }
    });
  });
}

/* ---------------- 11. Interactive Inline Chatbot Lab ---------------- */
function initInlineChatbot() {
  const chatBody = document.getElementById('cbChatBody');
  const input = document.getElementById('cbInput');
  const sendBtn = document.getElementById('cbSendBtn');
  const micBtn = document.getElementById('cbMicBtn');
  const visualizer = document.getElementById('cbVisualizer');
  const statusText = document.getElementById('cbStatusText');
  const voiceToggle = document.getElementById('inlineVoiceToggle');
  const voiceIcon = document.getElementById('inlineVoiceIcon');
  const voiceLabel = document.getElementById('inlineVoiceLabel');
  const clearBtn = document.getElementById('clearChatBtn');
  const promptBtns = document.querySelectorAll('.cb-prompt-btn');

  if (!chatBody) return;

  let isVoiceEnabled = true;
  let isSpeaking = false;
  let isListening = false;
  let recognition = null;

  // Toggle vocal audio output
  if (voiceToggle) {
    voiceToggle.addEventListener('click', () => {
      isVoiceEnabled = !isVoiceEnabled;
      if (isVoiceEnabled) {
        voiceToggle.classList.add('active');
        if (voiceIcon) voiceIcon.className = 'fa-solid fa-volume-high';
        if (voiceLabel) voiceLabel.textContent = 'Voice: Enabled';
        if (statusText) statusText.textContent = 'Voice audio is enabled.';
      } else {
        voiceToggle.classList.remove('active');
        if (voiceIcon) voiceIcon.className = 'fa-solid fa-volume-xmark';
        if (voiceLabel) voiceLabel.textContent = 'Voice: Muted';
        stopVoice();
        if (statusText) statusText.textContent = 'Voice audio muted. Text chat only.';
      }
    });
  }

  // Clear chat history
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      chatBody.innerHTML = `
        <div class="cb-msg bot">
          <div class="cb-msg-header"><i class="fa-solid fa-robot"></i> F.R.I.D.A.Y.</div>
          <div class="cb-msg-bubble">
            Chat history reset. How can I help you explore Ashwini's portfolio today?
          </div>
        </div>
      `;
      stopVoice();
      if (statusText) statusText.textContent = 'Chat reset. Ready for questions.';
    });
  }

  function stopVoice() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (visualizer) visualizer.classList.remove('active');
    isSpeaking = false;
  }

  function speakText(text) {
    stopVoice();

    if (!isVoiceEnabled || !('speechSynthesis' in window)) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 1.05;

    isSpeaking = true;
    if (visualizer) visualizer.classList.add('active');
    if (statusText) statusText.textContent = 'F.R.I.D.A.Y. is speaking...';

    utterance.onend = () => {
      isSpeaking = false;
      if (visualizer) visualizer.classList.remove('active');
      if (statusText) statusText.textContent = 'Assistant ready. Ask questions below or speak via microphone.';
    };

    utterance.onerror = () => {
      isSpeaking = false;
      if (visualizer) visualizer.classList.remove('active');
      if (statusText) statusText.textContent = 'Assistant ready.';
    };

    window.speechSynthesis.speak(utterance);
  }

  function appendChat(role, message) {
    const isUser = role === 'user';
    const msgDiv = document.createElement('div');
    msgDiv.className = `cb-msg ${isUser ? 'user' : 'bot'}`;

    msgDiv.innerHTML = `
      <div class="cb-msg-header">
        ${isUser ? '<i class="fa-solid fa-user"></i> You' : '<i class="fa-solid fa-robot"></i> F.R.I.D.A.Y.'}
      </div>
      <div class="cb-msg-bubble">${escapeHtml(message)}</div>
    `;

    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function handleQuery(rawQuery) {
    const query = rawQuery.trim();
    if (!query) return;

    appendChat('user', query);

    const q = query.toLowerCase();
    let reply = "";

    if (q.includes('who') || q.includes('about') || q.includes('bio') || q.includes('ashwini')) {
      reply = "Ashwini Aaba Mali is a 2nd-year B.Tech undergraduate in Artificial Intelligence & Data Science at R. C. Patel Institute of Technology, Shirpur. She builds applied AI, computer vision applications, and automation tools with Python and C.";
    } else if (q.includes('skill') || q.includes('stack') || q.includes('python') || q.includes('c')) {
      reply = "Ashwini's primary stack includes Python and C Programming, Computer Vision (OpenCV, MediaPipe), Speech AI (SpeechRecognition, pyttsx3), NumPy, Git/GitHub, and database foundations in MySQL.";
    } else if (q.includes('women') || q.includes('safety') || q.includes('gesture')) {
      reply = "The AI-Based Women's Safety System uses MediaPipe 21-point hand tracking to recognize emergency distress/SOS gestures in real time, automatically triggering an emergency SMS via Twilio API.";
    } else if (q.includes('project') || q.includes('work')) {
      reply = "Ashwini has built 3 key featured projects: the AI Women's Safety System (Computer Vision + Twilio), the F.R.I.D.A.Y. Voice Assistant (Speech AI), and the Airplane Reservation System (C & Python).";
    } else if (q.includes('hire') || q.includes('why') || q.includes('interview')) {
      reply = "Ashwini brings strong core CS foundations in C & Python, hands-on experience building low-latency computer vision prototypes, disciplined Git workflows, and genuine eagerness to learn on production teams.";
    } else if (q.includes('codechef') || q.includes('competitive') || q.includes('dsa') || q.includes('coding profile')) {
      reply = "Ashwini actively solves data structures and algorithmic problems on CodeChef in C and Python. You can visit her profile at codechef.com/users/ashwinimali4753.";
    } else if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('github') || q.includes('linkedin')) {
      reply = "You can contact Ashwini directly via email at ashwinimali.work@gmail.com, or check her profiles on GitHub and CodeChef.";
    } else if (q.includes('college') || q.includes('institute') || q.includes('rcpit') || q.includes('education')) {
      reply = "Ashwini studies at R. C. Patel Institute of Technology (RCPIT) in Shirpur, Maharashtra, pursuing her B.Tech in Artificial Intelligence & Data Science (Batch 2024–2028).";
    } else {
      reply = `Thanks for asking about "${query}". Ashwini is actively open to AI and Software Engineering internship roles. Feel free to explore her skills, featured projects, or contact details!`;
    }

    appendChat('bot', reply);
    speakText(reply);

    if (input) input.value = '';
  }

  // Send button and Enter key
  if (sendBtn && input) {
    sendBtn.addEventListener('click', () => {
      handleQuery(input.value);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleQuery(input.value);
      }
    });
  }

  // Quick prompt buttons
  promptBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-query');
      if (q) handleQuery(q);
    });
  });

  // Microphone input
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      isListening = true;
      if (micBtn) micBtn.classList.add('recording');
      if (visualizer) visualizer.classList.add('active');
      if (statusText) statusText.textContent = 'Listening to your microphone... Speak now!';
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (statusText) statusText.textContent = `Heard: "${transcript}"`;
      handleQuery(transcript);
    };

    recognition.onerror = () => {
      isListening = false;
      if (micBtn) micBtn.classList.remove('recording');
      if (visualizer) visualizer.classList.remove('active');
      if (statusText) statusText.textContent = 'Microphone error. You can type or click popular questions.';
    };

    recognition.onend = () => {
      isListening = false;
      if (micBtn) micBtn.classList.remove('recording');
      if (!isSpeaking && visualizer) visualizer.classList.remove('active');
    };
  }

  if (micBtn) {
    micBtn.addEventListener('click', () => {
      if (!SpeechRecognition) {
        alert("Speech Recognition is not supported on this browser. Try Chrome or Edge, or type your message!");
        return;
      }

      if (isListening) {
        recognition.stop();
      } else {
        stopVoice();
        try {
          recognition.start();
        } catch (err) {
          recognition.stop();
        }
      }
    });
  }
}
