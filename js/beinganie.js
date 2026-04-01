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
  const searchableItems = document.querySelectorAll(".searchable");
  const aiNotesUrl = "https://drive.google.com/file/d/1L4JoGFUpEHVP1RVwZkXtDQOJHEBvqM-Z/view?usp=drivesdk";
  const iotNotesUrl = "https://drive.google.com/file/d/1za0AEI5Vb89kaoIFBaT87QVxQ-nEM6dM/view?usp=drivesdk";

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

  function createNotes(type) {
    if (type === "ai") {
      window.open(aiNotesUrl, "_blank", "noopener,noreferrer");
      return;
    }

    if (type === "iot") {
      window.open(iotNotesUrl, "_blank", "noopener,noreferrer");
      return;
    }

    const contentMap = {
      ai: [
        "Beinganie AI Notes",
        "",
        "Beginner: AI, ML, DL, neural networks, computer vision, NLP, and daily use cases.",
        "Intermediate: supervised learning, unsupervised learning, reinforcement learning, model workflow, metrics, and mini projects.",
        "Advanced: backpropagation, CNNs, transformers, LLM pipeline, MLOps, responsible AI, and future trends.",
        "",
        "Free tools: Python, Jupyter, scikit-learn, PyTorch, TensorFlow, OpenCV, spaCy, Hugging Face."
      ],
      robotics: [
        "Beinganie Robotics Notes",
        "",
        "Beginner: components, motors, sensors, controllers, robot types, and applications.",
        "Intermediate: kinematics, dynamics, feedback control, PID, localization, path planning.",
        "Advanced: ROS 2, manipulation, SLAM, autonomy, planning, safety, human-robot interaction.",
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
    button.addEventListener("click", function () {
      createNotes(button.dataset.download);
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
