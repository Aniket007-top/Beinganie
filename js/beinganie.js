(function () {
  const storageKeys = {
    theme: "beinganie-theme",
    progress: "beinganie-progress"
  };

  const defaultProgress = { AI: 0, IoT: 0, Robotics: 0 };
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const searchInput = document.getElementById("topicSearch");
  const backToTop = document.getElementById("backToTop");
  const expandButtons = document.querySelectorAll(".expand-btn");
  const quizBlocks = document.querySelectorAll(".quiz-question");
  const progressButtons = document.querySelectorAll(".mark-complete");
  const downloadButtons = document.querySelectorAll(".notes-btn");
  const searchableItems = document.querySelectorAll(".searchable"); // Keep this, it's used by runSearch

  function loadTheme() {
    const theme = localStorage.getItem(storageKeys.theme);
    if (theme === "dark") {
      body.classList.add("theme-dark");
      if (themeToggle) themeToggle.innerHTML = '<i class="fa fa-sun"></i>';
    }
  }

  function toggleTheme() {
    body.classList.toggle("theme-dark");
    const darkMode = body.classList.contains("theme-dark");
    localStorage.setItem(storageKeys.theme, darkMode ? "dark" : "light");
    themeToggle.innerHTML = darkMode ? '<i class="fa fa-sun"></i>' : '<i class="fa fa-moon"></i>';
  }

  function getProgress() {
    try {
      return { ...defaultProgress, ...(JSON.parse(localStorage.getItem(storageKeys.progress)) || {}) };
    } catch (error) {
      return { ...defaultProgress };
    }
  }

  function setProgress(track, value) {
    const progress = getProgress();
    progress[track] = Math.max(progress[track], Number(value));
    localStorage.setItem(storageKeys.progress, JSON.stringify(progress));
    renderProgress();
  }

  function renderProgress() {
    const progress = getProgress();
    ["AI", "IoT", "Robotics"].forEach(function (track) {
      const valueEl = document.getElementById("progress" + track + "Value");
      const barEl = document.getElementById("progress" + track + "Bar");
      if (valueEl) valueEl.textContent = progress[track] + "%";
      if (barEl) barEl.style.width = progress[track] + "%";
    });
  }

  function runSearch(query) {
    const normalized = query.trim().toLowerCase();
    searchableItems.forEach(function (item) {
      const haystack = (item.dataset.search || item.textContent || "").toLowerCase();
      const isMatch = !normalized || haystack.indexOf(normalized) > -1;
      item.classList.toggle("search-hidden", !isMatch);
    });
  }

  // Function to create notes (either open URL or generate text file)
  function createNotes(type, href) {
    if (href && href !== "#") { // If a valid href is provided, open it
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    // Fallback to generating text file if no valid href
    const contentMap = {
      ai: [
        "Beinganie AI Notes",
        "",
        "Beginner: AI, ML, DL, neural networks, computer vision, NLP, and daily use cases.", // Placeholder, ideally this would come from learning-paths.ts
        "Intermediate: supervised learning, unsupervised learning, reinforcement learning, model workflow, metrics, and mini projects.", // Placeholder
        "Advanced: backpropagation, CNNs, transformers, LLM pipeline, MLOps, responsible AI, and future trends.", // Placeholder
        "",
        "Free tools: Python, Jupyter, scikit-learn, PyTorch, TensorFlow, OpenCV, spaCy, Hugging Face."
      ],
      iot: [ // Added IoT content for dynamic generation
        "Beinganie IoT Notes",
        "",
        "Beginner: sensors, actuators, microcontrollers, communication, and simple automation.",
        "Intermediate: architecture, protocols (MQTT, HTTP), dashboards, security basics, edge processing.",
        "Advanced: embedded systems, lifecycle management, edge AI, industrial IoT, observability, reliability.",
        "",
        "Free tools: Arduino IDE, PlatformIO, ESP32, MicroPython, Node-RED, Mosquitto, Grafana."
      ],
      robotics: [
        "Beinganie Robotics Notes",
        "",
        "Beginner: components, motors, sensors, controllers, robot types, and applications.", // Placeholder
        "Intermediate: kinematics, dynamics, feedback control, PID, localization, path planning.", // Placeholder
        "Advanced: ROS 2, manipulation, SLAM, autonomy, planning, safety, human-robot interaction.", // Placeholder
        "",
        "Free tools: ROS 2, Webots, Gazebo, Arduino, Raspberry Pi, FreeCAD, Blender, OpenCV."
      ]
    };

    const blob = new Blob([contentMap[type].join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "beinganie-" + type + "-notes.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  if (searchInput) searchInput.addEventListener("input", function (event) { runSearch(event.target.value); });

  expandButtons.forEach(function (button) {
    button.dataset.defaultLabel = button.textContent;
    button.addEventListener("click", function () {
      const card = button.closest(".lesson-card");
      const open = card.classList.toggle("is-open");
      button.textContent = open ? "Hide details" : button.dataset.defaultLabel;
    });
  });

  quizBlocks.forEach(function (block) {
    const result = block.querySelector(".quiz-result");
    block.querySelectorAll("button").forEach(function (button) {
      button.addEventListener("click", function () {
        const correct = button.dataset.correct === "true";
        result.textContent = correct ? "Correct. Great job." : "Not quite. Try again.";
        result.style.color = correct ? "#19a974" : "#df4c62";
      });
    });
  });

  progressButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setProgress(button.dataset.progress, button.dataset.value);
      button.textContent = "Saved";
    });
  });

  downloadButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const type = button.dataset.download;
      const href = button.getAttribute('href'); // Get href from the button/link
      createNotes(type, href);
    });
  });

  window.addEventListener("scroll", function () {
    if (!backToTop) return;
    backToTop.style.display = window.scrollY > 320 ? "grid" : "none";
  });

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  loadTheme();
  renderProgress();
})();
