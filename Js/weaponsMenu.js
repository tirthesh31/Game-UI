import { finalScreen } from "./final.js";
export function weaponsSelection(initialPage, playerData){
    initialPage.style.alignItems = "center";
    initialPage.style.height = "auto";

    // Create container for heading and buttons
    const headerContainer = document.getElementsByClassName("playerInstruction")[0];
    headerContainer.style.display = "flex";
    headerContainer.style.justifyContent = "space-between";
    headerContainer.style.width = "90%";
    headerContainer.style.height = "5rem";
    headerContainer.style.marginBottom = "1rem";
    headerContainer.style.marginTop = "4rem";

    const h1Elements = document.querySelectorAll('.playerInstruction h1');
    h1Elements.forEach(element => element.remove());

    // Create back button
    const backButton = document.getElementsByTagName("Button")[0];
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
    heading.className = "weaponInstruction"
    heading.textContent = "Choose Your Weapon";
    heading.style.color = "#FFD700"; // Gold color
    heading.style.fontSize = "2rem";
    heading.style.textAlign = "right";
    heading.style.border = "none";
    headerContainer.appendChild(heading);

    
    // Create heading
    var budget = 9000;
    const weaponBudget = document.createElement("h1");
    weaponBudget.className = "budget";
    weaponBudget.textContent = "Budget $"+budget;
    weaponBudget.style.color = "#FFD700"; // Gold color
    weaponBudget.style.fontSize = "2rem";
    weaponBudget.style.textAlign = "right";
    weaponBudget.style.border = "none";
    headerContainer.appendChild(weaponBudget);

    function filterWeapon(jsonData, agents) {
        return new Promise((resolve, reject) => {
            var categories = {};
            var categoriesForOtherMember = {};
            var filteredData = jsonData.filter(item => {
                const teamName = playerData.selectedTeam.replace(" ", "-").toUpperCase();
                return item.team.name.toUpperCase() === "BOTH TEAMS" || item.team.name.toUpperCase() === teamName;
            });
    
            filteredData.forEach(item => {
                if (!categories[item.category.name] && item.category.name != null) {
                    categories[item.category.name] = item;
                    categoriesForOtherMember[item.category.name] = [];
                    categoriesForOtherMember[item.category.name].push(item);
                }else if(item.category.name != null){
                    categoriesForOtherMember[item.category.name].push(item);
                }
            });
    
            // Randomly select weapons for the first three agents
            agents.slice(0, 3).forEach(agent => {
                const weapons = [];
                Object.keys(categoriesForOtherMember).forEach(category => {
                    const randomIndex = Math.floor(Math.random() * categoriesForOtherMember[category].length);
                    weapons.push(categoriesForOtherMember[category][randomIndex]);
                });
                agent.weapons = weapons;
            });

            resolve(categories);
        });
    }
    

    // Function to filter JSON data and get unique patterns per category
    function getUniquePatterns(jsonData, category) {
        return new Promise((resolve, reject) => {
            const patterns = jsonData.filter(item => item.category.name === category)
                .map(item => item.weapon.name) // Extract weapon names
                .filter((value, index, self) => self.indexOf(value) === index); // Filter out duplicates
            resolve(patterns);
        });
    }



    // Function to filter JSON data based on category and pattern
    function filterDataByPattern(jsonData, category, pattern) {
        return new Promise((resolve, reject) => {
            if (category === null || category === undefined) {
                reject("Category is null or undefined");
                return;
            }
    
            const filteredData = jsonData.filter(item => item.weapon.name === pattern && item.category.name === category);
            resolve(filteredData);
        });
    }
    
    function getPriceRange(category) {
        switch (category.toLowerCase()) {
            case "pistols":
                return `$${Math.floor(Math.random() * (700 - 200 + 1)) + 200}`;
            case "smgs":
                return `$${Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000}`;
            case "rifles":
                return `$${Math.floor(Math.random() * (3500 - 1500 + 1)) + 1500}`;
            case "heavy":
                return `$${Math.floor(Math.random() * (4500 - 2500 + 1)) + 2500}`;
            case "knives":
                return `$${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`;
            case "gloves":
                return `$${Math.floor(Math.random() * (500 - 100 + 1)) + 100}`;
            default:
                return "Unknown";
        }
    }
    

    fetch("https://bymykel.github.io/CSGO-API/api/en/skins.json")
    .then(response => response.json())
    .then(data => {
    
    var chooseWeaponMain = document.createElement("div");
    chooseWeaponMain.className = "chooseWeaponMain";
    chooseWeaponMain.style.backgroundColor = "#000"
    chooseWeaponMain.style.opacity = ".75";
    chooseWeaponMain.style.width = "90%";
    chooseWeaponMain.style.height = "50rem"
    chooseWeaponMain.style.display = "flex";

    var weaponListDiv = document.createElement("div");
    weaponListDiv.className = "weaponListDiv";
    weaponListDiv.style.width = "18%";
    weaponListDiv.style.marginLeft = "2.5%";
    weaponListDiv.style.marginTop = "10%";
    weaponListDiv.style.height = "88%";
    weaponListDiv.style.display = "flex";
    weaponListDiv.style.flexDirection = "column";
    weaponListDiv.style.justifyContent = "center";
    weaponListDiv.style.alignItems = "center";
    weaponListDiv.style.overflowY = "auto";
    chooseWeaponMain.appendChild(weaponListDiv);

    var selectedWeapon = [];
    filterWeapon(data,playerData.agents)
    .then(filteredData => {
        for (let key in filteredData) {
            if (Object.prototype.hasOwnProperty.call(filteredData, key)) {
                let element = filteredData[key];

                var weaponOfEachType = document.createElement("div");
                weaponOfEachType.className = "weaponOfEachType";
                weaponOfEachType.style.width = "80%";
                weaponOfEachType.style.height = "10rem";
                weaponOfEachType.style.backgroundImage = `url(${element.image})`;
                weaponOfEachType.style.backgroundSize = "contain"; 
                weaponOfEachType.style.backgroundPosition = "right center"; 
                weaponOfEachType.style.backgroundRepeat = "no-repeat"; 
                weaponOfEachType.style.objectFit = "cover";
                weaponOfEachType.style.cursor = "pointer";

                var weaponName = document.createElement("div");
                weaponName.textContent = element.category.name;
                weaponName.style.marginTop = "0.5rem";
                weaponName.style.display = "flex"; 
                weaponName.style.alignItems = "center"; 
                weaponName.style.textAlign = "left"; 
                weaponName.style.color = "#FFD700";
                weaponName.style.fontSize = "3rem";
                weaponName.style.height = "100%";
                weaponOfEachType.appendChild(weaponName);

        
                weaponOfEachType.addEventListener("click",() => {
                    getUniquePatterns(data,element.category.name)
                    .then( patternData => {
                        var patternList = document.getElementsByClassName("patternList")[0];

                        // Remove all children of patternList
                        while (patternList.firstChild) {
                            patternList.removeChild(patternList.firstChild);
                        }

                        patternData.forEach(e => {
                            
                            var patterDiv = document.createElement("div");
                            patterDiv.className = "patternDiv";
                            patterDiv.style.cursor = "pointer";
                            patterDiv.style.height = "100%";
                            patterDiv.style.width = "10rem";
                            patterDiv.style.marginRight = "1rem";
                            patterDiv.style.borderRadius = "1rem";
                            patterDiv.style.fontSize = "2rem"
                            patterDiv.textContent = e;
                            patterDiv.style.backgroundColor = "#FFD700";
                            patterDiv.style.color = "#000";
                            patterDiv.style.textAlign = "center";
                            patterDiv.style.justifyContent = "center";
                            patterDiv.style.padding = ".5rem"

                            patterDiv.addEventListener("click",() => {
                                filterDataByPattern(data,element.category.name,e)
                                .then(filterDataByPattern => {

                                    var weaponList = document.querySelector(".weaponList");
                                        // Remove all children of weaponList
                                        while (weaponList.firstChild) {
                                            weaponList.removeChild(weaponList.firstChild);
                                        }
                                    

                                    filterDataByPattern.forEach(element => {
                                        var weaponPrice = getPriceRange(element.category.name);
                                        const card = document.createElement("div");
                                        card.className = "agentCard";

                                        card.style.backgroundColor = "#000";
                                        card.style.color = "#fff";
                                        card.style.width = "12rem";
                                        card.style.height = "15rem";
                                        card.style.borderRadius = "1rem";
                                        card.style.padding = "1rem";
                                        card.style.display = "flex";
                                        card.style.flexDirection = "column";
                                        card.style.alignItems = "center";
                                        card.style.border = ".25rem solid #FFD700";
                                        card.style.marginBottom = "1.4rem";
                                        card.style.marginRight = ".5rem";

                                        const image = document.createElement("img");
                                        image.src = element.image;
                                        image.style.width = "100%";
                                        image.style.height = "auto";
                                        image.style.objectFit = "cover";
                                        card.appendChild(image);

                                        const name = document.createElement("div");
                                        name.textContent = element.pattern.name;
                                        name.style.marginTop = "0.5rem";
                                        name.style.textAlign = "center";
                                        card.appendChild(name);

                                        const rarity = document.createElement("div");
                                        rarity.textContent = element.rarity.name;
                                        rarity.style.marginTop = "0.5rem";
                                        rarity.style.color = element.rarity.color;
                                        card.appendChild(rarity);

                                        const priceRange = document.createElement("div");
                                        if(element.price){
                                            priceRange.textContent = element.price;
                                        }else{
                                            element.price = weaponPrice;
                                            priceRange.textContent = element.price;
                                        }
                                        priceRange.style.marginTop = "0.5rem";
                                        priceRange.style.textAlign = "center";
                                        card.appendChild(priceRange);

                                        const selectButton = document.createElement("button");
                                        if (selectedWeapon.includes(element)) {
                                            selectButton.textContent = "Selected";
                                        } else {
                                            selectButton.textContent = "Select";
                                        }                                        
                                        selectButton.style.cursor = "pointer";
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
                                        selectButton.addEventListener("click", () => {
                                            if(selectButton.textContent == "Select"){
                                                budget -= parseInt(priceRange.textContent.replace("$",""));
                                                
                                                if(budget <= 0){

                                                    budget += parseInt(priceRange.textContent.replace("$",""));
                                                    alert("My friend!! you dont have enough money.");
                                                }else{

                                                    selectButton.textContent = "Selected";
                                                    selectedWeapon.push(element);
                                                }
                                            }else{
                                                selectButton.textContent = "Select";
                                                budget += parseInt(priceRange.textContent.replace("$",""));
                                                var index = selectedWeapon.findIndex(item => item === element);
                                                if (index !== -1) {
                                                    selectedWeapon.splice(index, 1);
                                                }
                                            }
                                            weaponBudget.textContent = "Budget $"+budget;
                                        });
                                        card.appendChild(selectButton);
                                        
                                        var weaponList = document.querySelector(".weaponList");
                                        weaponList.appendChild(card);
                                    });
                                })

                            });
                            patternList.appendChild(patterDiv);
                        });
                    });
                });
                weaponListDiv.appendChild(weaponOfEachType);

            }
        }

        
        // Use selected weapons for the last agent
        playerData.agents[3].weapons = selectedWeapon;
        var patternAndWeaponDiv = document.createElement("div");
        patternAndWeaponDiv.className = "patternAndWeaponDiv";
        patternAndWeaponDiv.style.height = "100%";
        patternAndWeaponDiv.style.width = "82%";
        patternAndWeaponDiv.style.display = "flex";
        patternAndWeaponDiv.style.flexDirection = "column";

        var patternList = document.createElement("div");
        patternList.className = "patternList";
        patternList.style.height = "6rem";
        patternList.style.width = "100%";
        patternList.style.marginTop = "2rem";
        patternList.style.marginBottom = "2rem";
        patternList.style.display = "flex";
        patternList.style.overflowX = "auto";
        patternAndWeaponDiv.appendChild(patternList);

        var weaponList = document.createElement("div");
        weaponList.className = "weaponList";
        weaponList.style.height = "100%";
        weaponList.style.width = "100%";
        weaponList.style.display = "flex";
        weaponList.style.flexWrap = "wrap";
        weaponList.style.overflow = "auto";
        patternAndWeaponDiv.appendChild(weaponList);
        chooseWeaponMain.appendChild(patternAndWeaponDiv);

    })
    .catch(error => {
        console.error(error);
    });

    initialPage.appendChild(chooseWeaponMain);
    const finalSelectButton = document.createElement("button");
        finalSelectButton.textContent = "Select";
        finalSelectButton.style.cursor = "pointer";
        finalSelectButton.style.backgroundColor = "#FFD700";
        finalSelectButton.style.fontFamily = "knight";
        finalSelectButton.style.width = "10rem";
        finalSelectButton.style.height = "5rem";
        finalSelectButton.style.fontSize = "2rem";
        finalSelectButton.style.color = "#000";
        finalSelectButton.style.border = "none";
        finalSelectButton.style.borderRadius = "0.5rem";
        finalSelectButton.style.padding = "0.5rem 1rem";
        finalSelectButton.style.marginTop = "1rem";
        finalSelectButton.addEventListener("mouseover", () => {
            finalSelectButton.style.border = ".25rem solid #fff";
            finalSelectButton.style.padding = "calc(0.5rem - 1px) calc(1rem - 1px)";
        });
        finalSelectButton.addEventListener("mouseout", () => {
            finalSelectButton.style.border = "none";
            finalSelectButton.style.padding = "0.5rem 1rem";
        });
        finalSelectButton.addEventListener("click", () => {
            if(budget == 9000){
                alert("No weapon is selected");
            }else{

                const children = Array.from(initialPage.children); // Convert NodeList to Array for iteration
                children.forEach(child => {
                    if (child.tagName.toLowerCase() !== 'audio') {
                        initialPage.removeChild(child);
                    }
                });                
                finalScreen(initialPage,playerData);
            }
        });
    initialPage.appendChild(finalSelectButton);


    });
}