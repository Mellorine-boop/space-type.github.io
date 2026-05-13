const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

// toggle menu
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// close menu when clicking a link (mobile fix)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const earlyForm = document.getElementById("earlyForm");
const message = document.getElementById("message");

if (earlyForm) {
  earlyForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = earlyForm.querySelector("input");

    if (emailInput.value.trim() === "") {
      message.textContent = "⚠️ Please enter a valid email.";
      message.style.color = "red";
      return;
    }

    message.textContent = "✅ Confirmation link has been sent to your email. Please check your inbox.";
    message.style.color = "#4fd1ff";

    earlyForm.reset();
  });
}