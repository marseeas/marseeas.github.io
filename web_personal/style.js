function aplicarZoom(idCaja) {
  const caja = document.getElementById(idCaja);
  caja.classList.add("zoom");
  setTimeout(() => {
    caja.classList.remove("zoom");
  }, 400);
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("zoom-cajaizquierda")
    .addEventListener("click", function (e) {
      e.preventDefault();
      aplicarZoom("caja-izquierda");
    });

  document
    .getElementById("zoom-cajaderecha")
    .addEventListener("click", function (e) {
      e.preventDefault();
      aplicarZoom("caja-derecha");
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const appsBtn = document.getElementById("apps-click");
  const appsList = document.getElementById("apps-list-click");

  if (appsBtn && appsList) {
    appsBtn.addEventListener("click", function (event) {
      appsList.style.display =
        appsList.style.display === "block" ? "none" : "block";

      const rect = appsBtn.getBoundingClientRect();
      appsList.style.top = `${rect.bottom + window.scrollY + 5}px`;
      appsList.style.left = `${rect.left + window.scrollX}px`;

      event.stopPropagation();
    });

    document.addEventListener("click", function () {
      appsList.style.display = "none";
    });

    appsList.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }
});

function mostrarImagen(app) {
  const figmaDiv = document.getElementById("figma-img");
  const ibisDiv = document.getElementById("ibis-img");

  figmaDiv.innerHTML = "";
  ibisDiv.innerHTML = "";

  if (app === "figma") {
    figmaDiv.innerHTML =
      '<img src="img/figma_gato.png" alt="Figma" style="margin-top:1rem; max-width:100%; border-radius:12px;">';
  } else if (app === "ibis") {
    ibisDiv.innerHTML =
      '<img src="img/ibis.jpg" alt="IbisPaintX" style="margin-top:1rem; max-width:100%; border-radius:12px;">';
  }
}

document.addEventListener("click", function (event) {
  const figmaDiv = document.getElementById("figma-img");
  const ibisDiv = document.getElementById("ibis-img");

  const isFigmaClick = event.target.closest(".figma");
  const isIbisClick = event.target.closest(".ibis");
  const isImageClick =
    event.target.closest("#figma-img") || event.target.closest("#ibis-img");

  if (!isFigmaClick && !isIbisClick && !isImageClick) {
    figmaDiv.innerHTML = "";
    ibisDiv.innerHTML = "";
  }
});

//gracias tutoriales de YouTube, Tiktok y amigos.
