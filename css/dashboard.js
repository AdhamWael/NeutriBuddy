document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  if (!user) return;

  // Load Personal Info and Macros
  document.getElementById("userName").textContent = user.name;
  document.getElementById("userAge").textContent = user.age || "--";
  document.getElementById("userWeight").textContent = user.weight || "--";
  document.getElementById("userHeight").textContent = user.height || "--";
  document.getElementById("userGender").textContent = user.gender || "--";
  document.getElementById("userActivityLevel").textContent = user.activity || "--";
  document.getElementById("calorieValue").textContent = user.calories ? `${user.calories} ` : "--";

  if (user.macros) {
    document.getElementById("carbValue").textContent = `${user.macros.carb} `;
    document.getElementById("proteinValue").textContent = `${user.macros.protein} `;
    document.getElementById("fatValue").textContent = `${user.macros.fat} `;
  }

  document.getElementById("bmiValue").textContent = user.bmi || "--";

  // Load Goal Text
  const goal = user.goal || "maintain";
  const goalText = goal.charAt(0).toUpperCase() + goal.slice(1);
  document.getElementById("goalText").textContent = goalText;

  let progress = 0;
  if (goal.toLowerCase() === "lose fat") {
    progress = 40;
  } else if (goal.toLowerCase() === "gain muscle") {
    progress = 60;
  } else {
    progress = 100;
  }

  progress = Math.max(0, Math.min(100, Math.round(progress)));

  const bar = document.getElementById("goalProgressBar");
  bar.style.width = progress + "%";
  bar.textContent = progress + "%";
});
