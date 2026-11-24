const companies = [
  { name: "Noatum", activity: "Operador portuario", type: "logistica" },
  { name: "Tránsito 2000", activity: "Agencia de aduanas", type: "aduanas" },
  { name: "Transbull", activity: "Transporte internacional", type: "logistica" },
  { name: "Totallogistic", activity: "Logística integral", type: "logistica" },
  { name: "Servimensa", activity: "Servicios marítimos", type: "logistica" },
  { name: "ProEx", activity: "Representación aduanera", type: "aduanas" },
  { name: "On Logistics", activity: "Logística y transporte", type: "logistica" },
  { name: "Marítima del Estrecho", activity: "Aduanas y servicios", type: "aduanas" },
  { name: "Intercargo Andalucía", activity: "Consignación", type: "logistica" },
  { name: "Hispamaroc", activity: "Operaciones internacionales", type: "aduanas" },
  { name: "González G.", activity: "Agencia de aduanas", type: "aduanas" },
  { name: "Nieves Operador", activity: "Operador logístico", type: "logistica" }
];

const grid = document.querySelector("#company-grid");
const search = document.querySelector("#company-search");

function initials(name) {
  return name.split(" ").map(word => word[0]).join("").slice(0, 2).toUpperCase();
}

function renderCompanies(filter = "all", query = "") {
  const normalized = query.trim().toLowerCase();
  const visible = companies.filter(company =>
    (filter === "all" || company.type === filter) &&
    (!normalized || `${company.name} ${company.activity}`.toLowerCase().includes(normalized))
  );
  grid.innerHTML = visible.map(company => `
    <article class="company-card">
      <div class="company-mark">${initials(company.name)}</div>
      <div>
        <h3>${company.name}</h3>
        <p>${company.activity}</p>
      </div>
    </article>
  `).join("");
}

renderCompanies();
search.addEventListener("input", () => {
  const active = document.querySelector(".filter-chip.active");
  renderCompanies(active.dataset.filter, search.value);
});
document.querySelectorAll(".filter-chip").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderCompanies(button.dataset.filter, search.value);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const loginModal = document.querySelector("#login-modal");
document.querySelector("[data-open-login]").addEventListener("click", () => loginModal.showModal());
document.querySelector("#demo-access").addEventListener("click", () => {
  loginModal.close();
  document.querySelector("#demo-modal").showModal();
});

document.querySelectorAll(".dash-nav").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".dash-nav").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
  });
});

document.querySelectorAll(".commission-row").forEach(row => {
  row.addEventListener("click", () => {
    document.querySelectorAll(".commission-row").forEach(item => item.classList.remove("active"));
    row.classList.add("active");
  });
});

const courseModal = document.querySelector("#course-modal");
document.querySelectorAll("[data-course]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector("#course-title").textContent = button.dataset.course;
    courseModal.showModal();
  });
});
document.querySelector("[data-close]").addEventListener("click", () => courseModal.close());
document.querySelector("#course-form").addEventListener("submit", event => {
  event.preventDefault();
  courseModal.close();
  showToast("Solicitud enviada correctamente");
  event.currentTarget.reset();
});

document.querySelector("[data-open-cv]").addEventListener("click", () => showToast("Prototipo: el registro de CV estará disponible en la versión completa"));

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".main-nav a")];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, { rootMargin: "-35% 0px -55%", threshold: 0 });
sections.forEach(section => observer.observe(section));
