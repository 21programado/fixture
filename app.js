fetch("fixture.json")
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById("fixture");

    data.forEach(partido => {
      const div = document.createElement("div");
      div.className = "partido";

    if (partido.marcador !== null) {
    div.classList.add("jugado");
    }

      const fecha = document.createElement("div");
      fecha.className = "fecha";
      fecha.textContent = partido.fecha;

      const equipos = document.createElement("div");
      equipos.className = "equipos";

      const e1 = document.createElement("span");
      e1.className = "equipo equipo1";
      e1.textContent = partido.equipo1;

      const vs = document.createElement("span");
      vs.textContent = " vs ";

     const e2 = document.createElement("span");
     e2.className = "equipo equipo2";
     e2.textContent = partido.equipo2;

     equipos.append(e1, vs, e2);


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
