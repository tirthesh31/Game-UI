import { weaponsSelection } from "./weaponsMenu.js";

export function playerInfo(initialPage,playerData){
    
    for (const iterator of initialPage.children) {
        if(iterator.nodeName == "DIV"){
            iterator.lastChild.textContent = "Insert Your Information";
        }
    }

    const agentContainer = document.createElement("div");
    agentContainer.className = "agentContainer";

    agentContainer.style.display = "flex";
    agentContainer.style.flexWrap = "wrap";
    agentContainer.style.gap = "1rem";
    agentContainer.style.alignItems = "center";
    agentContainer.style.padding = "1rem";
    agentContainer.style.backgroundColor = "#000";
    agentContainer.style.marginLeft = "1.2rem";
    agentContainer.style.width = "90%";
    agentContainer.style.opacity = ".75";
    agentContainer.style.height = "80%";
    
    const card = document.createElement("div");
    card.className = "agentCard";

    card.style.color = "#fff";
    card.style.backgroundColor = "#000";
    card.style.height = "40rem";
    card.style.width = "30rem";
    card.style.padding = "1rem";
    card.style.borderRadius = "1rem";
    card.style.flexDirection = "column";
    card.style.display = "flex";
    card.style.border = ".25rem solid #FFD700";
    card.style.alignItems = "center";
    card.style.marginTop = "2rem";

    const image = document.createElement("img");
    image.src = playerData.agents[3].image;
    image.style.height = "30rem";
    image.style.width = "100%";
    card.appendChild(image);
    image.style.objectFit = "cover";

    const name = document.createElement("div");
    name.textContent = playerData.agents[3].name;
    name.style.textAlign = "center";
    name.style.marginTop = "0.5rem";
    
    card.appendChild(name);
    const rarity = document.createElement("div");
    rarity.textContent = playerData.agents[3].rarity.name;
    rarity.style.color = playerData.agents[3].rarity.color;
    rarity.style.marginTop = "0.5rem";
    card.appendChild(rarity);

    const agentDetail = document.createElement("div");
    agentDetail.textContent = playerData.agents[3].description;
    agentDetail.style.textAlign = "center";
    agentDetail.style.marginTop = "0.5rem";
    card.appendChild(agentDetail);

    agentContainer.appendChild(card);

    var playerInfo = document.createElement("div");
    playerInfo.className = "playerInfo";
    playerInfo.style.width = "60%";
    playerInfo.style.height = "auto";
    playerInfo.style.display = "flex";
    playerInfo.style.justifyContent = "center";
    playerInfo.style.alignItems = "center";

    var playerLabel = document.createElement("div");
    playerLabel.className = "playerLabel"
    playerLabel.style.width = "45%";
    playerLabel.style.height = "100%";
    playerLabel.style.display = "flex";
    playerLabel.style.flexDirection = "column";
    playerLabel.style.justifyContent = "center";
    
    var agentNameLabel = document.createElement("h1");
    agentNameLabel.textContent = "Agent Name:";
    agentNameLabel.style.color = "#FFD700"; 
    agentNameLabel.style.fontSize = "2rem";
    agentNameLabel.style.textAlign = "left";
    agentNameLabel.style.marginTop = "1rem";
    agentNameLabel.style.marginBottom = "0";
    playerLabel.appendChild(agentNameLabel);

    var playerNameLabel = document.createElement("h1");
    playerNameLabel.textContent = "Player Name:";
    playerNameLabel.style.color = "#FFD700"; 
    playerNameLabel.style.fontSize = "2rem";
    playerNameLabel.style.textAlign = "left";
    playerNameLabel.style.marginTop = "1rem";
    playerNameLabel.style.marginBottom = "0";
    playerLabel.appendChild(playerNameLabel);
    
    var teamNameLabel = document.createElement("h1");
    teamNameLabel.textContent = "Team Name:";
    teamNameLabel.style.color = "#FFD700"; 
    teamNameLabel.style.fontSize = "2rem";
    teamNameLabel.style.textAlign = "left";
    teamNameLabel.style.marginTop = "1rem";
    teamNameLabel.style.marginBottom = "0";
    playerLabel.appendChild(teamNameLabel);

    var playerTeamNameLabel = document.createElement("h1");
    playerTeamNameLabel.textContent = "Player Team Name:";
    playerTeamNameLabel.style.color = "#FFD700"; 
    playerTeamNameLabel.style.fontSize = "2rem";
    playerTeamNameLabel.style.textAlign = "left";
    playerTeamNameLabel.style.marginTop = "1rem";
    playerTeamNameLabel.style.marginBottom = "0";
    playerLabel.appendChild(playerTeamNameLabel);

    var playerDisplayOrInput = document.createElement("div");
    playerDisplayOrInput.className = "playerDisplayOrInput"
    playerDisplayOrInput.style.width = "100%";
    playerDisplayOrInput.style.height = "100%";
    playerDisplayOrInput.style.display = "flex";
    playerDisplayOrInput.style.flexDirection = "column";
    playerDisplayOrInput.style.justifyContent = "center";
    
    var agentName = document.createElement("h1");
    agentName.textContent = playerData.agents[3].name;
    agentName.style.color = "#FFF"; 
    agentName.style.fontSize = "2rem";
    agentName.style.textAlign = "left";
    agentName.style.marginTop = "1rem";
    agentName.style.marginBottom = "0";
    agentName.style.position = "absolute";
    agentName.style.top = "21.2rem"
    playerDisplayOrInput.appendChild(agentName);

    var playerNameInput = document.createElement("input");
    playerNameInput.type = "text";
    playerNameInput.style.fontFamily = "Knight";
    playerNameInput.style.backgroundColor = "transparent";
    playerNameInput.style.paddingBottom = ".5rem";
    playerNameInput.style.color = "#FFF";
    playerNameInput.style.fontSize = "2rem";
    playerNameInput.style.textAlign = "left";
    playerNameInput.style.marginTop = "1rem";
    playerNameInput.style.border = "none";
    playerNameInput.style.borderBottom = "1px solid #fff";
    playerNameInput.style.position = "relative";
    playerNameInput.style.top = "2rem"
    playerNameInput.addEventListener("input", () => {
        if (!/^[a-zA-Z]*$/.test(playerNameInput.value)) {
            playerNameInput.style.borderBottom = "1px solid red";
        } else {
            playerNameInput.style.borderBottom = "1px solid #fff";
        }
    });
    playerDisplayOrInput.appendChild(playerNameInput);
    
    var teamName = document.createElement("h1");
    teamName.textContent = playerData.selectedTeam;
    teamName.style.color = "#FFF"; 
    teamName.style.fontSize = "2rem";
    teamName.style.textAlign = "left";
    teamName.style.marginTop = "1rem";
    teamName.style.marginBottom = "0";
    teamName.style.position = "relative";
    teamName.style.top = "3rem"
    teamName.style.right = "1.5rem"
    playerDisplayOrInput.appendChild(teamName);

    var playerTeamNameInput = document.createElement("input");
    playerTeamNameInput.type = "text";
    playerTeamNameInput.style.fontFamily = "Knight";
    playerTeamNameInput.style.backgroundColor = "transparent";
    playerTeamNameInput.style.paddingBottom = ".5rem";
    playerTeamNameInput.style.color = "#FFF";
    playerTeamNameInput.style.fontSize = "2rem";
    playerTeamNameInput.style.textAlign = "left";
    playerTeamNameInput.style.marginTop = "1rem";
    playerTeamNameInput.style.border = "none";
    playerTeamNameInput.style.borderBottom = "1px solid #fff";
    playerTeamNameInput.style.position = "relative";
    playerTeamNameInput.style.top = "4rem";
    playerTeamNameInput.addEventListener("input", () => {
        if (!/^[a-zA-Z]*$/.test(playerTeamNameInput.value)) {
            playerTeamNameInput.style.borderBottom = "1px solid red";
        } else {
            playerTeamNameInput.style.borderBottom = "1px solid #fff";
        }
    });
    playerDisplayOrInput.appendChild(playerTeamNameInput);

    var submit = document.createElement("button");
    submit.setAttribute('content', 'test content');
    submit.setAttribute('class', 'btn');
    submit.textContent = 'SUBMIT';
    submit.style.cursor = "pointer";
    submit.style.fontSize = "1.8rem";
    submit.style.borderRadius = ".5rem"
    submit.style.fontFamily = "Knight";
    submit.style.textContent = "SUBMIT";
    submit.style.position = "absolute";
    submit.style.backgroundColor = "#FFD700";
    submit.style.color = "#fff";
    submit.style.height = "4rem";
    submit.style.width = "14rem";
    submit.style.top = "48rem";
    

    submit.addEventListener("mouseout",()=>{

        submit.style.border = ".5rem solid #fff";
    });

    submit.addEventListener("mouseover",()=>{

        submit.style.border = "none";
    });

    function validateCharacterName(name) {
        const words = name.trim().split(/\s+/);
        return words.length <= 2 && name.length <= 20;
    }

    submit.addEventListener("click",() => {

        playerData.playerName = playerNameInput.value;
        playerData.teamName = playerTeamNameInput.value;

        if(!playerData.playerName == "" || !playerData.teamName == ""){

            if(!validateCharacterName(playerData.playerName) && !validateCharacterName(playerData.teamName)){
                // Display an error message in a dialog box
                alert("Invalid character name. Please enter a name with 1 or 2 words and a maximum of 20 characters.");
            } else{
    
                initialPage.removeChild(document.getElementsByClassName("agentContainer")[0]);
                weaponsSelection(initialPage,playerData);
            }
        }else{
            alert("insert your details properly!");
        }
    });
    playerDisplayOrInput.appendChild(submit);
    playerInfo.appendChild(playerLabel);
    playerInfo.appendChild(playerDisplayOrInput);
    agentContainer.appendChild(playerInfo);
    initialPage.appendChild(agentContainer);
}