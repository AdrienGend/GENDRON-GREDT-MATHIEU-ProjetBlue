class Events {
    constructor(id, title, description, choice1,choice2,effect1,effect2, personnage) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.choice1 = choice1;
        this.choice2 = choice2;
        this.effect1 = effect1;
        this.effect2 = effect2;
        this.personnage = personnage;
    }


}


event1 = new Events("L'Epidémi Mortelle", "Une épidémie mortelle sévit dans le village.", "Le Pape bénit le village pour guérir la maladie", "Le Conseiller organise une quarantaine stricte",() => {player.changeFaith(20),player.changePopulation(-10)},() => {player.changeArmy(20),player.changePopulation(-10)} , "Pape");








const events = [
    {
        title: "L'Épidémie Mortelle",
        description: "Une épidémie mortelle sévit dans le village.",
        choices: [
            {
                text: "Le Pape bénit le village pour guérir la maladie",
                effect: { Bonheur: -10, Religieux: 20 }
            },
            {
                text: "Le Conseiller organise une quarantaine stricte",
                effect: { Bonheur: -20, Militaires: 10 }
            }
        ]
    },
    {
        title: "La Révolte des Paysans",
        description: "Les paysans se révoltent contre les conditions de vie difficiles.",
        choices: [
            {
                text: "Le Capitaine des soldats réprime violemment la révolte",
                effect: { Bonheur: -30, Militaires: 20 }
            },
            {
                text: "Le Mage utilise des sorts pour calmer les paysans",
                effect: { Religieux: -10, Bonheur: 20 }
            }
        ]
    },
    {
        title: "Le Mariage Royal",
        description: "Un mariage royal est prévu dans le royaume.",
        choices: [
            {
                text: "Le Chevalier organise un somptueux mariage",
                effect: { Or: -50, Bonheur: 30 }
            },
            {
                text: "Le Bouffon anime la fête avec humour",
                effect: { Or: -20, Bonheur: 40 }
            }
        ]
    },
    {
        title: "La Quête du Graal",
        description: "Le Graal est recherché pour apporter la gloire au royaume.",
        choices: [
            {
                text: "Le Chevalier part à la recherche du Graal",
                effect: { Or: -30, Religieux: 20 }
            },
            {
                text: "Le Conseiller investit dans la recherche du Graal",
                effect: { Or: -40, Bonheur: 20 }
            }
        ]
    },
    {
        title: "La Peste Noire",
        description: "La peste noire menace le royaume.",
        choices: [
            {
                text: "Le Pape organise des processions religieuses pour lutter contre la peste",
                effect: { Bonheur: -20, Religieux: 30 }
            },
            {
                text: "Le Mage concocte un remède coûteux",
                effect: { Or: -50, Bonheur: 20 }
            }
        ]
    },
    {
        title: "La Révolte des Soldats",
        description: "Les soldats se révoltent pour de meilleures conditions.",
        choices: [
            {
                text: "Le Capitaine des soldats apaise les soldats en leur offrant des primes",
                effect: { Or: -40, Militaires: 20 }
            },
            {
                text: "Le Conseiller négocie avec les soldats pour éviter la révolte",
                effect: { Or: -30, Bonheur: 20 }
            }
        ]
    },
    {
        title: "L'Invasion Barbare",
        description: "Le royaume est menacé par une invasion barbare.",
        choices: [
            {
                text: "Le Capitaine des soldats mobilise l'armée pour défendre le royaume",
                effect: { Militaires: -20, Or: 40 }
            },
            {
                text: "Le Marchand vend des armes aux envahisseurs en échange de trésors",
                effect: { Or: 30, Militaires: -20 }
            }
        ]
    },
    {
        title: "La Quête du Saint Graal (suite)",
        description: "La quête du Saint Graal continue.",
        choices: [
            {
                text: "Le Chevalier trouve le Graal et apporte la gloire au royaume",
                effect: { Religieux: 20, Bonheur: 30 }
            },
            {
                text: "Le Mage échoue dans sa quête, ce qui attriste le peuple",
                effect: { Bonheur: -20, Religieux: 20 }
            }
        ]
    },
    {
        title: "La Famine",
        description: "Le royaume souffre de la famine.",
        choices: [
            {
                text: "Le Chasseur fournit de la viande pour nourrir le peuple affamé",
                effect: { Or: -30, Bonheur: 20 }
            },
            {
                text: "Le Capitaine des soldats réquisitionne les réserves pour l'armée",
                effect: { Or: -20, Militaires: 20 }
            }
        ]
    },
    {
        title: "Le Schisme Religieux",
        description: "Le royaume est en proie à un schisme religieux.",
        choices: [
            {
                text: "Le Pape travaille à réconcilier les factions religieuses",
                effect: { Religieux: -20, Bonheur: 20 }
            },
            {
                text: "Le Mage profite du schisme pour gagner en influence",
                effect: { Bonheur: -20, Religieux: 30 }
            }
        ]
    },
    {
        title: "La Guerre avec le Royaume Voisin",
        description: "Le royaume est en guerre avec un royaume voisin.",
        choices: [
            {
                text: "Le Capitaine des soldats prépare l'armée à la guerre",
                effect: { Militaires: 20, Or: -30 }
            },
            {
                text: "Le Marchand vend des fournitures aux deux côtés",
                effect: { Or: 30, Militaires: -20 }
            }
        ]
    },
    {
        title: "La Révolte des Réfugiés",
        description: "Les réfugiés cherchent refuge dans le royaume.",
        choices: [
            {
                text: "Le Conseiller accueille les réfugiés et les intègre dans la société",
                effect: { Bonheur: 20, Militaires: -20 }
            },
            {
                text: "Le Capitaine des soldats chasse les réfugiés pour préserver la sécurité",
                effect: { Militaires: 20, Bonheur: -20 }
            }
        ]
    },
    {
        title: "Le Duel du Chevalier",
        description: "Le Chevalier se lance dans un duel pour gagner en renommée.",
        choices: [
            {
                text: "Le Chevalier remporte un duel et gagne en renommée",
                effect: { Or: -20, Militaires: 20 }
            },
            {
                text: "Le Chevalier perd le duel, ce qui diminue sa réputation",
                effect: { Militaires: -20, Bonheur: 20 }
            }
        ]
    },
    {
        title: "La Quête du Savoir",
        description: "Le Mage entreprend une quête pour obtenir des connaissances magiques.",
        choices: [
            {
                text: "Le Mage entreprend une quête pour obtenir des connaissances magiques",
                effect: { Or: -30, Religieux: 20 }
            },
            {
                text: "Le Conseiller investit dans l'éducation du peuple",
                effect: { Bonheur: 20, Religieux: -20 }
            }
        ]
    },
    {
        title: "La Conquête des Terres Lointaines",
        description: "Le royaume cherche à conquérir de nouvelles terres lointaines.",
        choices: [
            {
                text: "Le Capitaine des soldats lance une expédition pour conquérir de nouvelles terres",
                effect: { Militaires: 20, Or: -40 }
            },
            {
                text: "Le Marchand investit dans le commerce avec des terres éloignées",
                effect: { Or: 40, Bonheur: -20 }
            }
        ]
    }
];

// Exemple d'accès aux informations d'un événement
const eventIndex = 15; // Remplacez par l'indice de l'événement que vous souhaitez gérer
const event = events[eventIndex];

console.log("Titre de l'événement :", event.title);
console.log("Description de l'événement :", event.description);
console.log("Choix possibles :");
event.choices.forEach((choice, index) => {
    console.log(`${index + 1}. ${choice.text}`);
});
