const consultarEquipo = () => {
    const randomTeamId = Math.floor(Math.random() * 30) + 1; // Genera un ID de equipo aleatorio
    fetch(`https://www.balldontlie.io/api/v1/games/${randomTeamId}`)
        .then(response => response.json())
        .then(data => {
            mostrarEquipo(data);
        })
        .catch(error => {
            console.log(error);
        });
};

const btnGenerarEquipo = () => {
    consultarEquipo();
    document.getElementById("equipo-info").style.display = "block";
};

const mostrarEquipo = (data) => {
    const homeTeam = data.home_team;
    const visitorTeam = data.visitor_team;

    document.getElementById("equipo-nombre").innerHTML = `Equipo Local: ${homeTeam.full_name}`;
    document.getElementById("equipo-abbreviatura").innerHTML = `Nickname: ${homeTeam.abbreviation}`;
    document.getElementById("equipo-season").innerHTML = `Temporada: ${data.season}`;

    document.getElementById("equipo-home-score").innerHTML = `Puntuación : ${data.home_team_score}`;
    document.getElementById("equipo-visitor-nombre").innerHTML = `Equipo Visitante: ${visitorTeam.full_name}`;
    document.getElementById("equipo-visitor-abbreviatura").innerHTML = `Nickname: ${visitorTeam.abbreviation}`;
    document.getElementById("equipo-visitor-score").innerHTML = `Puntuación: ${data.visitor_team_score}`;

    
};
