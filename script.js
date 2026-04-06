document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const craftsmanship = document.getElementById("craftsmanship");
    const note = document.getElementById("note");
    const contactButton = document.getElementById("contact-button");
    const btnEn = document.getElementById("btn-en");
    const btnFr = document.getElementById("btn-fr");

    function setLanguage(lang) {
        if (lang === "fr") {
            document.documentElement.lang = "fr";

            title.textContent = "Guitares Chenonceau";

            description.textContent =
                "Guitares Chenonceau offre un service de conception et de fabrication de guitares entièrement sur mesure. Les clients peuvent choisir la forme du corps, du manche et de la tête, ainsi que les composantes telles que les micros, le chevalet, le sillet, les mécaniques, la longueur du diapason, le nombre de frettes, le circuit électronique et bien plus encore. Chaque guitare est d’abord modélisée en CAO afin que le client puisse visualiser le résultat final avant le début de la fabrication.";

            craftsmanship.textContent =
                "Outilleur-ajusteur de métier, j’apporte à la fabrication de mes guitares la même précision, la même rigueur et le même souci du détail que dans ma profession.";

            note.textContent =
                "😊 Veuillez noter que la fabrication de guitares est un projet passion réalisé en parallèle de mon emploi principal, donc les délais peuvent être un peu plus longs.";

            contactButton.textContent = "Me contacter";
        } else {
            document.documentElement.lang = "en";

            title.textContent = "Guitares Chenonceau";

            description.textContent =
                "Guitares Chenonceau offers a fully custom guitar design and fabrication service. Customers can choose the guitar’s body, neck, and headstock shapes, as well as components such as pickups, bridge, nut, tuning machines, scale length, fret count, pickup circuitry, and more. Each guitar is first modeled in CAD software, allowing the customer to visualize the final design before fabrication begins.";

            craftsmanship.textContent =
                "As a tool and die maker by trade, I bring the same precision, care, and attention to detail from my profession into every guitar I build.";

            note.textContent =
                "😊 Please note that guitar building is a passion project alongside my day job, so lead times may be longer.";

            contactButton.textContent = "Contact Me";
        }
    }

    btnEn.addEventListener("click", function () {
        setLanguage("en");
    });

    btnFr.addEventListener("click", function () {
        setLanguage("fr");
    });

    setLanguage("en");
});