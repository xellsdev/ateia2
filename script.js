const companies = [
  { name: "Noatum", activity: "Operador portuario", type: "logistica" },
  { name: "Tránsito 2000", activity: "Agencia de aduanas", type: "aduanas" },
  { name: "Transbull", activity: "Transporte internacional", type: "logistica" },
  { name: "Totallogistic", activity: "Logística integral", type: "logistica" },
  { name: "Servimensa", activity: "Servicios marítimos", type: "logistica" },
  { name: "ProEx", activity: "Representación aduanera", type: "aduanas" },
  { name: "Paublete", activity: "Agencia de aduanas", type: "aduanas" },
  { name: "Agencia de Aduanas", activity: "Despacho aduanero", type: "aduanas" },
  { name: "Marítima del Estrecho Aduanas", activity: "Aduanas y servicios", type: "aduanas" },
  { name: "On Logistics", activity: "Logística y transporte", type: "logistica" },
  { name: "Logika Distribution", activity: "Distribución logística", type: "logistica" },
  { name: "Intercargo Andalucía", activity: "Consignación", type: "logistica" },
  { name: "Hispamaroc", activity: "Operaciones internacionales", type: "aduanas" },
  { name: "Mertramar", activity: "Transporte marítimo", type: "logistica" },
  { name: "González G.", activity: "Agencia de aduanas", type: "aduanas" },
  { name: "AyF Transit Levante", activity: "Tránsito internacional", type: "logistica" },
  { name: "Nieves Operador Logístico", activity: "Operador logístico", type: "logistica" }
];

const grid = document.querySelector("#company-grid");
const search = document.querySelector("#company-search");

function renderCompanies(filter = "all", query = "") {
  const normalized = query.trim().toLowerCase();
  const visible = companies.filter(company =>
    (filter === "all" || company.type === filter) &&
    (!normalized || `${company.name} ${company.activity}`.toLowerCase().includes(normalized))
  );
  grid.innerHTML = visible.map(company => `
    <article class="company-card">
      <div class="company-logo ${company.type}" role="img" aria-label="Logotipo de ${company.name}">
        <span>${company.name}</span>
      </div>
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

const dashboardView = document.querySelector("#dashboard-view");
const dashboardTitle = document.querySelector("#dashboard-title");
const dashboardSummary = dashboardView.innerHTML;
const dashboardSections = {
  resumen: { title: "Gestión general", content: dashboardSummary },
  asociados: {
    title: "Gestión de asociados",
    content: `
      <div class="dashboard-panel report-panel">
        <div class="dashboard-panel-heading"><h3>Censo de empresas</h3><div class="report-actions">
          <button type="button" data-dashboard-action="report" data-value="asociados">Descargar censo CSV</button>
          <button type="button" data-dashboard-action="report" data-value="recibos">Descargar recibos CSV</button>
        </div></div>
        <p class="dashboard-hint">Datos de muestra · 5 empresas representadas</p>
        <div class="dashboard-table-wrap"><table class="dashboard-table">
          <thead><tr><th>Empresa</th><th>CIF</th><th>Contacto</th><th>Estado</th></tr></thead>
          <tbody>
            <tr><td>Noatum S.A.U.</td><td>A28016175</td><td>operaciones@noatum.example</td><td><em class="status approved">Activa</em></td></tr>
            <tr><td>Tránsito 2000 S.L.</td><td>B11223344</td><td>info@transito2000.example</td><td><em class="status approved">Activa</em></td></tr>
            <tr><td>Totallogistic S.L.</td><td>B55667788</td><td>trafico@totallogistic.example</td><td><em class="status pending">Pendiente</em></td></tr>
            <tr><td>Hispamaroc S.L.</td><td>B99887766</td><td>aduanas@hispamaroc.example</td><td><em class="status approved">Activa</em></td></tr>
            <tr><td>Logística Estrecho S.L.</td><td>B44332211</td><td>secretaria@logisticaestrecho.example</td><td><em class="status review">Alta en revisión</em></td></tr>
          </tbody>
        </table></div>
      </div>`
  },
  formacion: {
    title: "Formación y matrículas",
    content: `
      <div class="dashboard-panel">
        <div class="dashboard-panel-heading"><h3>Cursos activos · 84 matrículas</h3><button type="button" data-dashboard-action="detail" data-value="Listado de matrículas">Ver matrículas</button></div>
        <div class="dashboard-table-wrap"><table class="dashboard-table">
          <thead><tr><th>Curso</th><th>Fechas</th><th>Matrículas</th><th>Estado</th></tr></thead>
          <tbody>
            <tr><td>Operativa avanzada de despacho aduanero</td><td>18–21 mar 2026</td><td>24</td><td><em class="status approved">Activo</em></td></tr>
            <tr><td>Nuevas normativas de transporte y logística</td><td>24–25 abr 2026</td><td>36</td><td><em class="status approved">Activo</em></td></tr>
            <tr><td>Seguridad en la cadena logística</td><td>12–13 may 2026</td><td>24</td><td><em class="status pending">Inscripción abierta</em></td></tr>
          </tbody>
        </table></div>
      </div>`
  },
  empleo: {
    title: "Gestión de empleo",
    content: `
      <div class="dashboard-panel">
        <div class="dashboard-panel-heading"><h3>Solicitudes y ofertas pendientes</h3><button type="button" data-dashboard-action="detail" data-value="Bandeja de empleo">Ver bandeja completa</button></div>
        <div class="dashboard-table-wrap"><table class="dashboard-table">
          <thead><tr><th>Elemento</th><th>Empresa / candidato</th><th>Fecha</th><th>Estado</th><th></th></tr></thead>
          <tbody>
            <tr><td>CV · Técnico/a de tráfico</td><td>Candidato de muestra</td><td>20 nov 2026</td><td><em class="status pending">Por revisar</em></td><td><button type="button" data-dashboard-action="detail" data-value="CV de muestra">Revisar</button></td></tr>
            <tr><td>Oferta · Operaciones aduaneras</td><td>Noatum</td><td>19 nov 2026</td><td><em class="status review">Pendiente</em></td><td><button type="button" data-dashboard-action="detail" data-value="Oferta de Noatum">Revisar</button></td></tr>
            <tr><td>CV · Administrativo/a</td><td>Candidato de muestra</td><td>18 nov 2026</td><td><em class="status approved">Validado</em></td><td><button type="button" data-dashboard-action="detail" data-value="CV validado">Abrir</button></td></tr>
          </tbody>
        </table></div>
      </div>`
  },
  documentos: {
    title: "Repositorio documental",
    content: `
      <div class="dashboard-panel">
        <div class="dashboard-panel-heading"><h3>Documentos para asociados</h3><button type="button" data-dashboard-action="publish-document">+ Publicar documento</button></div>
        <p class="dashboard-hint">Documentos de muestra disponibles para descarga.</p>
        <ul class="dashboard-list">
          <li><div><strong>Circular operativa · Noviembre 2026</strong><small>Publicado el 03 nov 2026 · Circular</small></div><button type="button" data-dashboard-action="document" data-value="Circular operativa de noviembre 2026">Descargar</button></li>
          <li><div><strong>Calendario de formación 2026</strong><small>Publicado el 15 oct 2026 · Formación</small></div><button type="button" data-dashboard-action="document" data-value="Calendario de formación 2026">Descargar</button></li>
          <li><div><strong>Acta de Asamblea General</strong><small>Publicado el 30 jun 2026 · Acta</small></div><button type="button" data-dashboard-action="document" data-value="Acta de Asamblea General">Descargar</button></li>
        </ul>
      </div>`
  },
  calendario: {
    title: "Calendario maestro",
    content: `
      <div class="dashboard-panel">
        <div class="dashboard-panel-heading"><h3>Agenda de Secretaría</h3><button type="button" data-dashboard-action="new-event">+ Nuevo evento</button></div>
        <div class="calendar-month"><button type="button" data-dashboard-action="previous-month" aria-label="Mes anterior">‹</button><strong data-calendar-month>Marzo 2026</strong><button type="button" data-dashboard-action="next-month" aria-label="Mes siguiente">›</button></div>
        <div class="master-events">
          <div class="master-event"><time><b>18</b><span>MAR</span></time><div><strong>Comisión de Aduanas</strong><small>10:00 · Cámara de Comercio · 12 asistentes</small></div></div>
          <div class="master-event"><time><b>20</b><span>MAR</span></time><div><strong>Comité Ejecutivo</strong><small>18:30 · Salón de juntas</small></div></div>
          <div class="master-event"><time><b>24</b><span>MAR</span></time><div><strong>Curso: Novedades Aduaneras</strong><small>09:30 · Aula virtual · 24 inscritos</small></div></div>
        </div>
      </div>`
  },
  comunicaciones: {
    title: "Comunicaciones",
    content: `
      <div class="dashboard-panel">
        <div class="dashboard-panel-heading"><h3>Envíos recientes</h3><button type="button" data-dashboard-action="new-message">+ Nueva comunicación</button></div>
        <ul class="dashboard-list">
          <li><div><strong>Alerta: cambios en operativa aduanera</strong><small>Enviada el 23 nov 2026 · 18 empresas</small></div><button type="button" data-dashboard-action="detail" data-value="Alerta de operativa aduanera">Ver</button></li>
          <li><div><strong>Convocatoria Comisión de Aduanas</strong><small>Enviada el 20 nov 2026 · 12 destinatarios</small></div><button type="button" data-dashboard-action="detail" data-value="Convocatoria de Aduanas">Ver</button></li>
          <li><div><strong>Boletín formativo de diciembre</strong><small>Programada para el 28 nov 2026</small></div><button type="button" data-dashboard-action="detail" data-value="Boletín formativo">Ver</button></li>
        </ul>
      </div>`
  }
};

const dashboardMonths = ["Enero 2026", "Febrero 2026", "Marzo 2026", "Abril 2026", "Mayo 2026", "Junio 2026"];
let dashboardMonth = 2;

function openDashboardSection(section) {
  const selected = dashboardSections[section];
  if (!selected) return;
  dashboardTitle.textContent = selected.title;
  dashboardView.innerHTML = selected.content;
  dashboardView.querySelectorAll("[data-calendar-month]").forEach(month => {
    month.textContent = dashboardMonths[dashboardMonth];
  });
  document.querySelectorAll(".dash-nav").forEach(item => {
    item.classList.toggle("active", item.dataset.dashboardSection === section);
  });
}

function downloadCsv(filename, rows) {
  const csv = rows.map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(";")).join("\r\n");
  const blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function downloadText(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function handleDashboardAction(action, value) {
  if (action === "report" && value === "asociados") {
    downloadCsv("censo-asociados-muestra.csv", [
      ["Empresa", "CIF", "Contacto", "Estado"],
      ["Noatum S.A.U.", "A28016175", "operaciones@noatum.example", "Activa"],
      ["Tránsito 2000 S.L.", "B11223344", "info@transito2000.example", "Activa"],
      ["Totallogistic S.L.", "B55667788", "trafico@totallogistic.example", "Pendiente"],
      ["Hispamaroc S.L.", "B99887766", "aduanas@hispamaroc.example", "Activa"],
      ["Logística Estrecho S.L.", "B44332211", "secretaria@logisticaestrecho.example", "Alta en revisión"]
    ]);
  } else if (action === "report" && value === "recibos") {
    downloadCsv("recibos-asociados-muestra.csv", [
      ["Empresa", "Concepto", "Periodo", "Importe EUR", "Estado"],
      ["Noatum S.A.U.", "Cuota ordinaria", "2026", "1200.00", "Pagado"],
      ["Tránsito 2000 S.L.", "Cuota ordinaria", "2026", "1200.00", "Pagado"],
      ["Totallogistic S.L.", "Cuota ordinaria", "2026", "1200.00", "Pendiente"],
      ["Hispamaroc S.L.", "Cuota ordinaria", "2026", "1200.00", "Pagado"],
      ["Logística Estrecho S.L.", "Cuota de alta", "2026", "650.00", "Pendiente"]
    ]);
  } else if (action === "document") {
    downloadText(`${value.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}.txt`,
      `ATEIA-OLTRA · Documento de muestra\n${value}\nContenido de ejemplo para el prototipo del portal.`);
  } else if (action === "previous-month" || action === "next-month") {
    dashboardMonth = (dashboardMonth + (action === "next-month" ? 1 : -1) + dashboardMonths.length) % dashboardMonths.length;
    document.querySelectorAll("[data-calendar-month]").forEach(month => {
      month.textContent = dashboardMonths[dashboardMonth];
    });
  } else if (action === "detail") {
    showToast(`Ficha de muestra: ${value}`);
  } else if (action === "new-event") {
    showToast("Formulario de nuevo evento disponible en la versión completa");
  } else if (action === "publish-document") {
    showToast("Publicación documental disponible en la versión completa");
  } else if (action === "new-message") {
    showToast("Formulario de comunicación disponible en la versión completa");
  }
}

document.querySelector(".dashboard-sidebar nav").addEventListener("click", event => {
  const button = event.target.closest("[data-dashboard-section]");
  if (button) openDashboardSection(button.dataset.dashboardSection);
});
dashboardView.addEventListener("click", event => {
  const sectionButton = event.target.closest("[data-dashboard-section]");
  if (sectionButton) {
    openDashboardSection(sectionButton.dataset.dashboardSection);
    return;
  }
  const actionButton = event.target.closest("[data-dashboard-action]");
  if (actionButton) handleDashboardAction(actionButton.dataset.dashboardAction, actionButton.dataset.value);
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
