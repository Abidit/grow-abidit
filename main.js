const achievements = [
  {
    title: "Builder-First Ecosystem & Guided Projects (Co-Owner)",
    what: "Co-owned and built a builder-first learning ecosystem enabling learners to create real, portfolio-ready projects.",
    how: "Collaborated across product, design, and platform teams to implement task-check infrastructure and ecosystem features in Programiz PRO.",
    impact: "Shifted users from passive learners to hands-on project builders, driving platform-wide engagement."
  },
  {
    title: "User Interviews & Listening Cycles",
    what: "Led structured user-listening initiatives to uncover learner pain points.",
    how: "Coordinated interviews via email, Discord, and US professor connections, ran user surveys and usability testing.",
    impact: "Influenced product roadmap decisions and reduced guesswork in future releases."
  },
  {
    title: "Code Visualization Platform (DSA)",
    what: "Built real-time interactive visualizers for Stack and Queue data structures.",
    how: "Designed and developed using Python, React, and Node.js to showcase algorithm execution in real-time.",
    impact: "Enabled interactive learning for beginners and career switchers, with proven user engagement."
  },
  {
    title: "Knapsack Algorithm Visualizer",
    what: "Created a detailed visualization of the Knapsack algorithm for dynamic programming.",
    how: "Designed a step-by-step animation to explain DP concepts interactively.",
    impact: "Used in university classrooms, helping students grasp advanced dynamic programming concepts."
  },
  {
    title: "Willingness-to-Pay Experiment",
    what: "Ran a willingness-to-pay experiment targeting churn-risk users.",
    how: "Offered discounted annual plans to churn-risk users based on behavior analytics.",
    impact: "Converted ~1.36% (4/295) of churn-risk users to annual plans, improving customer lifetime value."
  }
];

function createAchievementCard(achievement) {
  return `
    <div class="achievement-card">
      <h3 class="achievement-title">${achievement.title}</h3>
      <div class="achievement-detail">
        <span class="label">What</span>
        <p>${achievement.what}</p>
      </div>
      <div class="achievement-detail">
        <span class="label">How</span>
        <p>${achievement.how}</p>
      </div>
      <div class="achievement-detail">
        <span class="label">Impact</span>
        <p>${achievement.impact}</p>
      </div>
    </div>
  `;
}

function renderAchievements() {
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;
  
  grid.innerHTML = achievements.map(createAchievementCard).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderAchievements();
  
  // Basic scroll reveal for cards
  const observerOptions = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.achievement-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
  });
});
