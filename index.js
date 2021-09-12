

const affichageBd = () => {
    albums.forEach((album, key) => {
        serie = series.get(album.idSerie);
        auteur = auteurs.get(album.idAuteur);

    const affichageDesAlbums = document.getElementById("bd-container");
    const monImg = (serie.nom + "-" + album.numero + "-" + album.titre).replace(/'|!|\?|\.|"|:|\$/g, "");
    const bdInsert = "<div class=un-album>" + "<div class='info'>" + "<div class='serie'>" + "Série : " +  serie.nom + "</div>" + "<div class='album'>" + "Album n° : " + album.numero + "</div>" + "<div class='titre'>" + "Titre : "+ album.titre + "</div>" + "<div class='auteur'>" + "Auteur : " + auteur.nom + "</div>" + "<div class='prix'>" + "Prix : " + album.prix  + " €" + "</div>" + "</div>" + '<img class="miniImg" src="./assets/albumsMini/' + monImg + ".jpg" + '"' + ">" + '<input type="button" id="ajoutPanier" name=' + key + ' value="Ajoutez au panier">' + "</div>";
    //     affichageDesAlbums.innerHTML += "<div class=unAlbum>" + "<div class='serie'>" + "Série : ..."
    // InnerHtml a des performances beaucoup moins bonnes que inserAdjacentHTML ??     ///     edit: Oui !!    ///
    
    affichageDesAlbums.insertAdjacentHTML("beforeend", bdInsert);

    })
};

document.addEventListener("DOMContentLoaded", affichageBd());

