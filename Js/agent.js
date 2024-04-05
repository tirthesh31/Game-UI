import { playerInfo } from "./player.js";

export function agentSelection(initialPage, playerData) {
    initialPage.style.alignItems = "center";
    initialPage.style.height = "auto";

    // Create container for heading and buttons
    const headerContainer = document.createElement("div");
    headerContainer.className = "playerInstruction";
    headerContainer.style.display = "flex";
    headerContainer.style.justifyContent = "space-between";
    headerContainer.style.width = "90%";
    headerContainer.style.height = "5rem";
    headerContainer.style.marginBottom = "1rem";
    headerContainer.style.marginTop = "4rem";
    initialPage.appendChild(headerContainer);

    // Create back button
    const backButton = document.createElement("button");
    backButton.textContent = "Back";
    backButton.style.backgroundColor = "#FFD700";
    backButton.style.color = "#000";
    backButton.style.border = "none";
    backButton.style.borderRadius = "0.5rem";
    backButton.style.padding = "0.5rem 1rem";
    backButton.style.height = "4rem";
    backButton.style.width = "7rem";
    backButton.addEventListener("click", () => {
        // Handle back button click
        console.log("Back button clicked");
    });
    headerContainer.appendChild(backButton);

    // Create heading
    const heading = document.createElement("h1");
    heading.textContent = "Choose Your Agent";
    heading.style.color = "#FFD700"; // Gold color
    heading.style.fontSize = "2rem";
    heading.style.textAlign = "right";
    headerContainer.appendChild(heading);

    fetch('https://bymykel.github.io/CSGO-API/api/en/agents.json')
        .then(response => response.json())
        .then(data => {
            let agents;
            var selectedTeam = playerData["selectedTeam"].replace(" ", "-");
            if (selectedTeam === "AUTO") {
                const randomIndex = Math.floor(Math.random() * 2); // 0 or 1
                const teams = ["Terrorist", "Counter-Terrorist"];
                selectedTeam = teams[randomIndex];
                agents = data.filter(agent => agent.team.name === selectedTeam);
            } else {
                agents = data.filter(agent => agent.team.name === selectedTeam);
            }

            const agentContainer = document.createElement("div");
            agentContainer.className = "agentContainer";

            agentContainer.style.display = "flex";
            agentContainer.style.flexWrap = "wrap";
            agentContainer.style.gap = "1rem";
            agentContainer.style.padding = "1rem";
            agentContainer.style.alignItems = "center";
            agentContainer.style.justifyContent = "center";
            agentContainer.style.backgroundColor = "#000";
            agentContainer.style.opacity = ".75";
            agentContainer.style.width = "90%";
            agentContainer.style.height = "80%";

            agents.forEach(agent => {
                const card = document.createElement("div");
                card.className = "agentCard";

                card.style.backgroundColor = "#000";
                card.style.color = "#fff";
                card.style.width = "14rem";
                card.style.height = "18rem";
                card.style.borderRadius = "1rem";
                card.style.padding = "1rem";
                card.style.display = "flex";
                card.style.flexDirection = "column";
                card.style.alignItems = "center";
                card.style.border = ".25rem solid #FFD700";

                const image = document.createElement("img");
                image.src = agent.image;
                image.style.width = "100%";
                image.style.height = "auto";
                image.style.objectFit = "cover";
                card.appendChild(image);

                const name = document.createElement("div");
                name.textContent = agent.name;
                name.style.marginTop = "0.5rem";
                name.style.textAlign = "center";
                card.appendChild(name);

                const rarity = document.createElement("div");
                rarity.textContent = agent.rarity.name;
                rarity.style.marginTop = "0.5rem";
                rarity.style.color = agent.rarity.color;
                card.appendChild(rarity);

                const selectButton = document.createElement("button");
                selectButton.textContent = "Select";
                selectButton.style.backgroundColor = "#FFD700";
                selectButton.style.color = "#000";
                selectButton.style.border = "none";
                selectButton.style.borderRadius = "0.5rem";
                selectButton.style.padding = "0.5rem 1rem";
                selectButton.style.marginTop = "1rem";
                selectButton.addEventListener("mouseover", () => {
                    selectButton.style.border = ".25rem solid #fff";
                    selectButton.style.padding = "calc(0.5rem - 1px) calc(1rem - 1px)";
                });
                selectButton.addEventListener("mouseout", () => {
                    selectButton.style.border = "none";
                    selectButton.style.padding = "0.5rem 1rem";
                });
                card.appendChild(selectButton);

                selectButton.addEventListener("click", () => {
                    // Shuffle the agents array
                    for (let i = agents.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [agents[i], agents[j]] = [agents[j], agents[i]];
                    }

                    // Get the first three agents from the shuffled array
                    var selectedAgents = agents.slice(0, 3);
                    selectedAgents.push(agent);
                    // Handle selection logic here
                    playerData.agents = selectedAgents;
                    initialPage.removeChild(document.getElementsByClassName("agentContainer")[0]);
                    playerInfo(initialPage,playerData);
                });

                agentContainer.appendChild(card);
            });

            initialPage.appendChild(agentContainer);
        })
        .catch(error => console.error('Error fetching data:', error));
}