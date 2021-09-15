

const affichageBd = () => {
    albums.forEach((album, key) => {
        serie = series.get(album.idSerie);
        auteur = auteurs.get(album.idAuteur);

    const affichageDesAlbums = document.getElementById("bd-container");
    const monImg = (serie.nom + "-" + album.numero + "-" + album.titre).replace(/'|!|\?|\.|"|:|\$/g, "");
    const infoSerie = "<div class='serie'>" + serie.nom + "</div>";
    const infoAlbum = "<div class='album'>" + "Album n° : " + album.numero + "</div>";
    const infoTitre = "<div class='titre'>" + "Titre : "+ album.titre + "</div>";
    const infoAuteur = "<div class='auteur'>" + "Auteur : " + auteur.nom + "</div>";
    const infoPrix = "<div class='prix'>" + album.prix  + " €" + "</div>";
    const imgClass = '<img class="miniImg" id= ' + key + ' src="./assets/albumsMini/' + monImg + ".jpg" + '"' + ">";
    const btnKey = '<input type="button" id="ajoutPanier" name=' + key + ' value="">';

    const bdInsert = "<div class=un-album>" + "<div class='info'>" + infoSerie + infoAlbum + infoTitre + infoAuteur + infoPrix + "</div>" + imgClass + btnKey + "</div>";
    //     affichageDesAlbums.innerHTML += "<div class=unAlbum>" + "<div class='serie'>" + "Série : ..."
    // InnerHtml a des performances beaucoup moins bonnes que inserAdjacentHTML ??     ///     edit: Oui !!    ///
    
    affichageDesAlbums.insertAdjacentHTML("beforeend", bdInsert);
    });
};

document.addEventListener("DOMContentLoaded", affichageBd());


const gallery = () => {
    albums.forEach((album, key) => {
        serie = series.get(album.idSerie);

        const gallery = document.getElementById('carousel');
        const monImg = (serie.nom + "-" + album.numero + "-" + album.titre).replace(/'|!|\?|\.|"|:|\$/g, "");
        const imgGallery = '<img class="miniImg" id= ' + key + ' src="./assets/albumsMini/' + monImg + ".jpg" + '"' + ">";

        gallery.insertAdjacentHTML("beforeend", imgGallery);
    });
};

document.addEventListener("DOMContentLoad", gallery());
