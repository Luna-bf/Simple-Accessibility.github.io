//Mes éléments
const elements = {
    darkMode: window.localStorage.getItem("dark-mode"),
    changeTheme: document.getElementById("change-theme-btn"),
    increment: document.getElementById("increment"),
    decrement: document.getElementById("decrement"),
    resetAll: document.getElementById("resetAll"),
}


/*Mode lumineux et sombre*/
const enableDarkMode = () => {

    document.body.classList.add("dark-mode");
    window.localStorage.setItem("dark-mode", "active"); //Je ne peux mettre que des strings dans le localStorage, au lieu de mettre isActive (true ou false) je met juste 'active'
};

const disableDarkMode = () => {

    document.body.classList.remove("dark-mode");
    window.localStorage.setItem("dark-mode", null);
};

//Puis je met un event listener sur le bouton, ce qui va me permettre de changer de thème
elements.changeTheme.addEventListener("click", () => {

    elements.darkMode = window.localStorage.getItem("dark-mode");
    elements.darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});


/*Accessibilité*/
elements.increment.addEventListener("click", () => {
    document.querySelector("body").style.fontSize = "24px";
});

elements.decrement.addEventListener("click", () => {
    document.querySelector("body").style.fontSize = "16px";
});

elements.resetAll.addEventListener("click", () => {
    document.querySelector("body").style.fontSize = "16px";
    elements.darkMode = disableDarkMode();
});


/*Changement de langue*/
const translations = {
    fr: {
        increment: "Augmenter le texte",
        decrement: "Diminuer le texte",
        changeTheme: "Changer le thème",
        resetAll: "Réinitialiser",
        select: "-- Sélectionnez une langue --",
        firstPar : "Undertale est un jeu vidéo de jeu de rôle et indépendant développé par Toby Fox. Le jeu propose de contrôler un enfant tombé dans l’Underground (« souterrain »), une grande région isolée sous la surface de la Terre, séparée de la surface par une barrière magique et peuplée de monstres. Le joueur interagit à plusieurs reprises avec ces monstres dans sa quête pour remonter à la surface, principalement via un système de combat mêlant tour-par-tour et shoot 'em up. Dans celui-ci, le joueur doit éviter des projectiles envoyés par les monstres rencontrés, et a ensuite la possibilité d'attaquer son adversaire pour le tuer, ou de l'épargner. Le choix de tuer ou épargner affecte le jeu, altérant les dialogues, les personnages, et la narration dépendant des choix effectués.",
        secondPar: "Le jeu a été entièrement et indépendamment développé par Toby Fox, un développeur et compositeur de nationalité américaine, que ce soit dans l'écriture du scénario ou la composition des musiques, bien que certains personnages aient été dessinés par d'autres artistes. Parmi les inspirations du jeu, sont notamment cités les jeux de rôle des séries Mother et Mario and Luigi, ainsi que les manic shooters de Touhou Project, et la série comique britannique Mr Bean. Dans la conception initiale d'Undertale, le jeu durait environ deux heures et devait sortir en milieu d'année 2014, le développement dure finalement près de trois ans du fait du rallongement considérable de la durée de la campagne, retardant la sortie.",
        thirdPar: "Le jeu est publié le 15 septembre 2015 sur Steam pour Windows et OS X et sur Linux en juillet 2016, tandis que des portages sur PlayStation 4 et PlayStation Vita sont sortis le 15 août 2017, sur Nintendo Switch durant le mois de septembre 2018 et sur les consoles Xbox One et Xbox Series le 16 mars 2021. Si les versions pour ordinateur ont été publiées par Toby Fox lui-même, les portages sur consoles ont quant à eux été assurés par l'entreprise japonaise de localisation 8-4. À sa sortie, Undertale est acclamé pour son écriture, sa thématique, son système de combat, sa musique, et son originalité ; de nombreux éloges étant également faits par rapport à l'histoire, aux dialogues, et aux personnages. Il se vend par la suite à plus d'un million d'exemplaires et est nommé pour plusieurs prix tels que celui de Game of the Year (« Jeu de l'année ») décerné par plusieurs médias ainsi qu'à des conventions.",
        fourthPar: "Un spin-off situé dans un univers alternatif à celui d'Undertale et également développé par Toby Fox, Deltarune, voit son premier chapitre sortir le 31 octobre 20182 et son deuxième le 17 septembre 2021.",
        fifthPar: "Le 16 septembre 2020, à l'occasion du cinquième anniversaire, un concert symphonique3 (filmé en mai 2019 à Tokyo) est diffusé sur la chaine officielle Youtube grâce à la collaboration de Fangamer et 8-4. De nouvelles chansons produites par Toby Fox ont également été ajoutées à la fin de la vidéo pour l'occasion.",
    },
    en: {
        increment: "Increase text",
        decrement: "Reduce text",
        changeTheme: "Change theme",
        resetAll: "Reset all",
        select: "-- Select a language --",
        firstPar : "Undertale is a role-playing and independent video game developed by Toby Fox. The game allows you to control a child who has fallen into the Underground, a large isolated region under the surface of the Earth, separated from the surface by a magical barrier and populated by monsters. The player interacts several times with these monsters in his quest to return to the surface, mainly via a combat system mixing turn-based and shoot 'em up. In it, the player must avoid projectiles sent by the monsters encountered, and then has the possibility of attacking his opponent to kill him, or to spare him. The choice to kill or spare affects the game, altering the dialogue, characters, and narration depending on the choices made.",
        secondPar: "The game was entirely and independently developed by Toby Fox, an American developer and composer, whether in writing the scenario or composing the music, although some characters were drawn by other artists. Among the game's inspirations, the role-playing games of the Mother and Mario and Luigi series are notably cited, as well as the manic shooters of Touhou Project, and the British comedy series Mr Bean. In Undertale's initial design, the game lasted around two hours and was due to be released in mid-2014; development ultimately lasted almost three years due to the considerable lengthening of the campaign length, delaying the release.",
        thirdPar: "The game was released on September 15, 2015 on Steam for Windows and OS the Xbox One and Xbox Series consoles on March 16, 2021. If the computer versions were published by Toby Fox himself, the console ports have as They were provided by the Japanese localization company 8-4. Upon its release, Undertale was acclaimed for its writing, its theme, its combat system, its music, and its originality; many praises were also given to the story, the dialogues, and the characters. It subsequently sold more than a million copies and was nominated for several awards such as Game of the Year awarded by several media outlets as well as at conventions.",
        fourthPar: "A spin-off located in an alternative universe to that of Undertale and also developed by Toby Fox, Deltarune, sees its first chapter released on October 31, 20182 and its second on September 17, 2021.",
        fifthPar: "On September 16, 2020, to mark the fifth anniversary, a symphony concert3 (filmed in May 2019 in Tokyo) was broadcast on the official YouTube channel thanks to the collaboration of Fangamer and 8-4. New songs produced by Toby Fox were also added at the end of the video for the occasion.",
    }
}

const languageSelector = document.querySelector("select");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let changeTheme = document.getElementById("change-theme-btn");
let resetAll = document.getElementById("resetAll");
let select = document.querySelector("#select-lang")
let firstPar = document.querySelector("#firstPar");
let secondPar = document.querySelector("#secondPar");
let thirdPar = document.querySelector("#thirdPar");
let fourthPar = document.querySelector("#fourthPar");
let fifthPar = document.querySelector("#fifthPar");

languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

const setLanguage = (language) => {

    if(language === "fr") {
        increment.innerText = translations.fr.increment;
        decrement.innerText = translations.fr.decrement;
        changeTheme.innerText = translations.fr.changeTheme;
        resetAll.innerText = translations.fr.resetAll;
        select.innerText = translations.fr.select;
        firstPar.innerText = translations.fr.firstPar;
        secondPar.innerText = translations.fr.secondPar;
        thirdPar.innerText = translations.fr.thirdPar;
        fourthPar.innerText = translations.fr.fourthPar;
        fifthPar.innerText = translations.fr.fifthPar;
    } else if(language === "en") {
        increment.innerText = translations.en.increment;
        decrement.innerText = translations.en.decrement;
        changeTheme.innerText = translations.en.changeTheme;
        resetAll.innerText = translations.en.resetAll;
        select.innerText = translations.en.select;
        firstPar.innerText = translations.en.firstPar;
        secondPar.innerText = translations.en.secondPar;
        thirdPar.innerText = translations.en.thirdPar;
        fourthPar.innerText = translations.en.fourthPar;
        fifthPar.innerText = translations.en.fifthPar;
    }
};
