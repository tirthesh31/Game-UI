export function finalScreen(initialPage,playerData){

    const teamReadyDiv = document.createElement("div");
    teamReadyDiv.textContent = "Team " + playerData.teamName + " is ready";
    teamReadyDiv.style.textAlign = "center";
    teamReadyDiv.style.fontSize = "2rem";
    teamReadyDiv.style.fontStyle = "knight";
    teamReadyDiv.style.color = "#FFD700";
    teamReadyDiv.style.marginTop = "2rem";

    initialPage.appendChild(teamReadyDiv);

    const finalScreenDiv = document.createElement("div");
    finalScreenDiv.className=  "finalScreen";
    finalScreenDiv.style.display = "flex";
    finalScreenDiv.style.flexDirection = "column";
    finalScreenDiv.style.flexWrap = "wrap";
    finalScreenDiv.style.width = "90%";
    finalScreenDiv.style.height = "44rem";
    finalScreenDiv.style.marginTop = "1rem";
    finalScreenDiv.style.alignSelf = "center";
    finalScreenDiv.style.padding = "1rem";
    finalScreenDiv.style.borderRadius = "1rem";
    finalScreenDiv.style.overflow = "auto";
    
    playerData.agents.forEach((agent,i) => {
        
        const card = document.createElement("div");
        card.className = "agentCard";

        card.style.backgroundColor = "#000";
        card.style.color = "#fff";
        card.style.width = "45%";
        card.style.height = "38rem";
        card.style.borderRadius = "1rem";
        card.style.padding = "1rem";
        card.style.margin = "1rem";
        card.style.marginTop = "3rem";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.justifyContent = "flex-start";
        card.style.borderRadius = "1rem";

        const agentDetail = document.createElement("div");
        agentDetail.className = "agentDetail";

        agentDetail.style.backgroundColor = "#000";
        agentDetail.style.color = "#fff";
        agentDetail.style.width = "20%";
        agentDetail.style.height = "14rem";
        agentDetail.style.borderRadius = "1rem";
        agentDetail.style.padding = "1rem";
        agentDetail.style.display = "flex";
        agentDetail.style.flexDirection = "column";
        agentDetail.style.justifyContent = "center";    
        agentDetail.style.alignSelf = "center";    

        const image = document.createElement("img");
        image.src = agent.image;
        image.style.width = "14rem";
        image.style.height = "10rem";
        image.style.alignSelf = "center";
        image.style.objectFit = "cover";
        agentDetail.appendChild(image);

        const name = document.createElement("div");
        name.textContent = agent.name + " (" + agent.playerName + ")";
        name.style.marginTop = "0.5rem";
        name.style.textAlign = "center";
        agentDetail.appendChild(name);

        const rarity = document.createElement("div");
        rarity.textContent = agent.rarity.name;
        rarity.style.marginTop = "0.5rem";
        rarity.style.color = agent.rarity.color;
        rarity.style.textAlign = "center";
        agentDetail.appendChild(rarity);

        const weaponDetails = document.createElement("div");
        weaponDetails.className = "weaponsDetail";

        weaponDetails.style.backgroundColor = "#000";
        weaponDetails.style.color = "#fff";
        weaponDetails.style.width = "97%";
        weaponDetails.style.height = "18rem";
        weaponDetails.style.borderRadius = "1rem";
        weaponDetails.style.padding = "1rem";
        weaponDetails.style.display = "flex";
        weaponDetails.style.flexWrap = "wrap";
        weaponDetails.style.alignItems = "center";
        
        agent.weapons.forEach(weapon => {

            const weaponDetail = document.createElement("div");
            weaponDetail.className = "weaponDetail";
            weaponDetail.style.backgroundColor = "#000";
            weaponDetail.style.color = "#fff";
            weaponDetail.style.width = "22.5%";
            weaponDetail.style.margin = "2.5%";
            weaponDetail.style.height = "6rem";
            weaponDetail.style.borderRadius = "1rem";
            weaponDetail.style.padding = "1rem";
            weaponDetail.style.display = "flex";
            weaponDetail.style.flexDirection = "column";
            weaponDetail.style.alignItems = "center";

            const weaponImage = document.createElement("img");
            weaponImage.src = weapon.image;
            weaponImage.style.width = "7rem";
            weaponImage.style.height = "10rem";
            weaponImage.style.objectFit = "cover";
            weaponImage.addEventListener("mouseover",()=>{
                weaponName.style.display = "block";
                
            });
            weaponImage.addEventListener("mouseout",()=>{
                
                weaponName.style.display = "none";
            });
            weaponDetail.appendChild(weaponImage);
    
            const weaponName = document.createElement("div");
            weaponName.textContent = weapon.name;
            weaponName.style.marginTop = "0.5rem";
            weaponName.style.textAlign = "center";
            weaponName.style.display = "none";
            weaponDetail.appendChild(weaponName);
            weaponDetails.appendChild(weaponDetail);
        });

        card.appendChild(agentDetail);
        card.appendChild(weaponDetails);

        finalScreenDiv.appendChild(card);
    });

    initialPage.appendChild(finalScreenDiv);

    const startDiv = document.createElement("div");
    startDiv.textContent = "Let's Go!!";
    startDiv.style.textAlign = "center";
    startDiv.style.fontSize = "4.5rem";
    startDiv.style.fontStyle = "knight";
    startDiv.style.padding = "1rem";
    startDiv.style.color = "#000";
    startDiv.style.backgroundColor = "#FFD700";
    startDiv.style.marginTop = "2rem";
    startDiv.style.borderRadius = "1rem";

    initialPage.appendChild(startDiv);

    const footerDiv = document.createElement("div");
    footerDiv.textContent = "Welcome to the CS:GO Game! Your team and weapons are ready. Choose your strategies wisely to dominate the battlefield!";
    footerDiv.style.textAlign = "center";
    footerDiv.style.fontSize = "1.5rem";
    footerDiv.style.fontWeight = "bold";
    footerDiv.style.color = "#FFF";
    footerDiv.style.backgroundColor = "#333";
    footerDiv.style.padding = "1rem";
    footerDiv.style.marginTop = "2rem";
    footerDiv.style.borderRadius = "0.5rem";

    initialPage.appendChild(footerDiv);

}