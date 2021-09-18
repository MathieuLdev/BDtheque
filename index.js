

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
    const imgClass = '<img class="miniImg" id=' + key + ' src="./assets/albumsMini/' + monImg + ".jpg" + '"' + ">";
    const btnKey = '<input type="button" id="ajoutPanier" name=' + key + ' value="">';

    const bdInsert = "<div class=un-album>" + "<div class='info'>" + infoSerie + infoAlbum + infoTitre + infoAuteur + infoPrix + "</div>" + imgClass + btnKey + "</div>";
    //     affichageDesAlbums.innerHTML += "<div class=unAlbum>" + "<div class='serie'>" + "Série : ..."
    // InnerHtml a des performances beaucoup moins bonnes que inserAdjacentHTML ??     ///     edit: Oui !!    ///
    
    affichageDesAlbums.insertAdjacentHTML("beforeend", bdInsert);
    });
};

affichageBd();





const arraySrc = [];
const getImgSrc = () => {
    albums.forEach((album) => {
        serie = series.get(album.idSerie);

        const monImg = (serie.nom + "-" + album.numero + "-" + album.titre).replace(/'|!|\?|\.|"|:|\$/g, "");
        const imgSrc = "./assets/albumsMini/" + monImg + ".jpg";
        arraySrc.push(imgSrc);
    })
}

getImgSrc();


for (let i = 0; i < 21; i++) {
    const gallery = () => {

        let random =  Math.floor(Math.random() * arraySrc.length);

        let gallery = document.getElementById('gridGallery');
        let img = document.createElement('img');
        let galleryDisplay = gallery.appendChild(img);
        galleryDisplay.src = arraySrc[random];

        let alphabet = (i+10).toString(35);
        img.setAttribute("id", "img" + i);
        img.style.gridArea = alphabet;
    }
    gallery();
}

// *********************** Obsolète, l'utilisation d'un array réutilisable est bcp plus pratique **************************** */

// for (let i = 0; i < 21; i++) {
    
//     const gallery = () => {
//         let random =  Math.floor(Math.random() * albums.size + 50);
//         let imgGallery = document.getElementById(random);
//         const gallery = document.getElementById('gridGallery');
        
//         let img = document.createElement("img");
        
//         if (imgGallery === null) {
//             img.src = "./assets/images/noComicsMini.jpeg";
//             // gallery();
//         } else {
//             img.src = imgGallery.src
//         }
//         gallery.appendChild(img);
//         let alphabet = (i+10).toString(35);
//         img.setAttribute("id", "img" + i);
//         img.style.gridArea = alphabet;
//     }
//     gallery();
// }

//*************************************************************************************************************************** */



const galleryDynamic = () => {
    let rand = Math.floor(Math.random() * 21);
    let imgDisplay = document.getElementById("img" + rand);

    imgDisplay.classList.add('removeAnim');
    imgDisplay.remove();

    let random =  Math.floor(Math.random() * arraySrc.length);
    
    let imgReplace = document.createElement('img');
    const gallery = document.getElementById('gridGallery');


    imgReplace.src = arraySrc[random];

    gallery.appendChild(imgReplace);
    let alphabet = (rand+10).toString(35);
    imgReplace.setAttribute("id", "img" + rand);
    imgReplace.style.gridArea = alphabet;
}

setInterval(galleryDynamic, 4000);