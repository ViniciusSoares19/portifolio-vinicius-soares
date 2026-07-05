// Rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") !== "#") {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navbarHeight = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});

// Manipulador de envio do formulário (demo)
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    if (name) {
      alert(
        `Obrigado, ${name}! Sua mensagem foi enviada com sucesso. (Demonstração)`,
      );
      contactForm.reset();
    }
  });
}

// Menu mobile (alternância básica - pode ser expandido)
const mobileToggle = document.querySelector(".mobile-menu-toggle");

if (mobileToggle) {
  mobileToggle.addEventListener("click", function () {
    alert(
      "Menu mobile em desenvolvimento. Navegue pelas seções usando os links ou o scroll.",
    );
  });
}

// Acessibilidade por teclado para CTAs do hero
document.addEventListener("keydown", function (e) {
  if (
    e.key === "/" &&
    document.activeElement.tagName !== "INPUT" &&
    document.activeElement.tagName !== "TEXTAREA"
  ) {
    e.preventDefault();
    const firstProject = document.querySelector("#projetos");
    if (firstProject) {
      firstProject.scrollIntoView({ behavior: "smooth" });
    }
  }
});

// Adiciona classe ativa à navegação durante o scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Animação simples para badges ao fazer scroll
function animateOnScroll() {
  const badges = document.querySelectorAll(".badge");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.5 },
  );

  badges.forEach((badge) => {
    badge.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
    badge.style.opacity = "0";
    badge.style.transform = "translateY(20px)";
    observer.observe(badge);
  });
}

window.addEventListener("load", () => {
  animateOnScroll();
  console.log(
    "%c🚀 Portfólio de Vinícius Soares carregado com sucesso!",
    "color:#99c9d2; font-family:monospace; font-size:13px",
  );
});
