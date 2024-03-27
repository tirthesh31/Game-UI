export function teamSelection(initialPage) {

    initialPage.style.backgroundImage = 'url("../Images/menu background image.webp")';
    initialPage.style.display = "flex";
    initialPage.style.flexDirection = "column";
    initialPage.style.justifyContent = "center";
    initialPage.style.alignItems = "center";

    const menuContainer = document.createElement("div");
    menuContainer.className = "menuContainer";

    menuContainer.style.display = "flex";
    menuContainer.style.flexDirection = "column";
    menuContainer.style.height = "95%";
    menuContainer.style.width = "100%";
    menuContainer.style.justifyContent = "center";
    menuContainer.style.alignItems = "center";

    var teamDiv;
    var teamNametag;
    for (let index = 0; index < 2; index++) {
        var teamName = "team";
        var backgroundImageUrl = ""
        teamNametag = document.createElement("h1");

        teamDiv = document.createElement("div");
        teamDiv.classList.add(teamName);
        if (index == 0) {

            teamName += "CounterTerrorist";
            backgroundImageUrl += "../Images/counterTerrorist.jpeg"
        
            teamNametag.textContent = "Counter Terrorist";
            teamNametag.style.marginLeft = "1rem";
        } else {

            teamName += "Terrorist";
            backgroundImageUrl += "../Images/Terrorist.png"
            
            teamNametag.textContent = "Terrorist";
            teamNametag.style.textAlign = "right";
            teamNametag.style.marginRight = "1rem";
        }
        teamDiv.classList.add(teamName);

        teamDiv.style.backgroundImage = 'url(' + backgroundImageUrl + ')';
        teamDiv.style.width = "90%";
        teamDiv.style.height = "45%";

        teamDiv.style.border = ".5rem solid black";
        teamDiv.style.borderRadius = ".5rem"
        teamDiv.style.marginBottom = "1rem";
        teamDiv.style.backgroundSize = "cover";
        teamDiv.style.backgroundPosition = "bottom";
        
        teamNametag.style.color = "#fff";
        teamNametag.style.border = "none";
        teamNametag.style.marginTop = "2rem";
        teamNametag.style.fontSize = "4.5rem"
        teamDiv.appendChild(teamNametag);
        menuContainer.appendChild(teamDiv);
    }

    teamNametag = document.createElement("h1");
    teamNametag.textContent = "AUTO";
    teamNametag.style.textAlign = "center";
    teamNametag.style.margin = ".5rem";
    teamNametag.style.border = "none";
    teamNametag.style.fontSize = "3rem"

    //here is the div for auto select 
    teamDiv = document.createElement("div");
    teamDiv.classList.add("team");
    teamDiv.style.width = "20%";
    teamDiv.style.height = "10%";
    teamDiv.style.backgroundColor ='#fff'
    teamDiv.style.border = ".5rem solid black";
    teamDiv.style.borderBottom = "none";
    teamDiv.style.borderRadius = "1rem"
    teamDiv.style.marginBottom = "1rem";
    teamDiv.appendChild(teamNametag);

    menuContainer.appendChild(teamDiv);

    var descNametag = document.createElement("h3");
    descNametag.textContent = "In the game, you can choose your team between Counter-Terrorists and Terrorists. If you prefer not to manually select a team, simply click on the 'Auto' button to let the game randomly assign you to a team. This adds an element of surprise and allows you to experience different gameplay styles. Click 'Auto' to randomly select a team and start the game!";
    descNametag.style.textAlign = "center";
    descNametag.style.margin = ".5rem";
    descNametag.style.border = "none";
    descNametag.style.fontSize = "1.2rem";
    descNametag.style.color = "#fff";

    //here is the div for auto select 
    var descDiv = document.createElement("div");
    descDiv.classList.add("description");
    descDiv.style.width = "100%";
    descDiv.style.height = "5%";
    descDiv.style.marginBottom = "1rem";
    descDiv.appendChild(descNametag);

    menuContainer.appendChild(descDiv);

    initialPage.appendChild(menuContainer);
    
    var teams = document.getElementsByClassName("team");
    Array.from(teams).slice(0, -1).forEach(team => {
        team.addEventListener('mouseover', () => {
            team.style.backgroundPosition = "top";
            team.style.width = "92%";
            team.style.height = "47%";
        });

        team.addEventListener('mouseout', () => {
            team.style.backgroundPosition = "bottom";
            team.style.width = "90%";
            team.style.height = "45%";
        });
    });

    Array.from(teams).slice(-1).forEach(team => {
        team.addEventListener('mouseover', () => {
            team.style.backgroundPosition = "top";
            team.style.width = "22%";
            team.style.height = "12%";
            team.style.fontSize = "3.5rem"
        });

        team.addEventListener('mouseout', () => {
            team.style.backgroundPosition = "bottom";
            team.style.width = "20%";
            team.style.height = "10%";
        });
    });

    Array.from(teams).forEach(team => {

        team.addEventListener('click',() => {
            var user = {};
            user.selectedTeam = team.childNodes[0].textContent;

        });
    });
}
