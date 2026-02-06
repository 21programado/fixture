fetch("fixture.json")
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById("fixture");

    data.forEach(partido => {
      const div = document.createElement("div");
      div.className = "partido";

      const fecha = document.createElement("div");
      fecha.className = "fecha";
      fecha.textContent = partido.fecha;

      const equipos = document.createElement("div");
      equipos.className = "equipos";
      equipos.textContent = `${partido.equipo1} vs ${partido.equipo2}`;

      const fase = document.createElement("div");
      fase.className = "fase";
      fase.textContent = `${partido.fase} · ${partido.subfase}`;

      const marcador = document.createElement("div");
      marcador.className = "marcador";
      marcador.textContent = partido.marcador
        ? `Resultado: ${partido.marcador}`
        : "Resultado: —";

      div.append(fecha, equipos, fase, marcador);
      contenedor.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById("fixture").textContent =
      "Error cargando el fixture";
    console.error(err);
  });
