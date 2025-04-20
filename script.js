document.addEventListener("DOMContentLoaded", function () {
    // Tab switch logic
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
  
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(tab => tab.classList.remove("active"));
  
        button.classList.add("active");
        document.getElementById(targetId).classList.add("active");
      });
    });
  
    // Time update
    function updateTime() {
      const timeEl = document.getElementById("current-time");
      if (timeEl) timeEl.innerText = new Date().toLocaleString();
    }
    setInterval(updateTime, 1000);
    updateTime();
  
    // Contact form
    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Message sent successfully!");
      });
    }
  
    // Dummy projects
    const mobileProjects = [
      { title: "Mobile App 1", description: "A great app for productivity.", link: "#" },
      { title: "Mobile App 2", description: "A fun game developed in Flutter.", link: "#" }
    ];
    const webProjects = [
      { title: "Web App 1", description: "A full-stack MERN application.", link: "#" },
      { title: "Web App 2", description: "Responsive portfolio website.", link: "#" }
    ];
  
    function loadProjects(containerId, projects) {
      const container = document.getElementById(containerId);
      projects.forEach(project => {
        const div = document.createElement("div");
        div.classList.add("project");
        div.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>`;
        container.appendChild(div);
      });
    }
  
    loadProjects("mobile-projects-container", mobileProjects);
    loadProjects("web-projects-container", webProjects);
  
    // Dark mode toggle
    const toggleBtn = document.getElementById("toggle-theme");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
      });
    }
  });
  