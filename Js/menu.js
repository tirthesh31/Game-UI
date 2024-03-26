export function teamSelection(initialPage){

    initialPage.style.backgroundImage = 'url("../Images/menu background image.webp")';
    initialPage.style.display = "flex";
    initialPage.style.flexDirection = "column";
    initialPage.style.justifyContent = "center";
    initialPage.style.alignItem = "center";

    const menuContainer = document.createElement("div");
    menuContainer.className = "menuContainer";

    menuContainer.style.display = "flex";
    menuContainer.style.flexDirection = "column";
    menuContainer.style.height = "95%";
    menuContainer.style.width = "100%";
    menuContainer.style.justifyContent = "center";
    menuContainer.style.alignItems = "center";

    for (let index = 0; index < 2; index++) {
        var teamName = "Team";
        var backgroundImageUrl = ""
        
        if (index == 0) {
            
            teamName =+ "counterTerrorist";    
            backgroundImageUrl += "../Images/counterTerrorist.jpeg"
        } else {
            
            teamName =+ "terrorist";
            backgroundImageUrl += "../Images/Terrorist.png"
        }
        var teamDiv = document.createElement("div");
        teamDiv.className = teamName;
        
        teamDiv.style.backgroundImage = 'url('+backgroundImageUrl+')';
        teamDiv.style.width = "95%";
        teamDiv.style.height = "45%";
        teamDiv.style.border = ".5rem solid black";
        teamDiv.style.marginBottom = "1rem";
        teamDiv.style.backgroundSize = "cover";
        teamDiv.style.backgroundPosition = "center";

        menuContainer.appendChild(teamDiv);
    }
    initialPage.appendChild(menuContainer);
}