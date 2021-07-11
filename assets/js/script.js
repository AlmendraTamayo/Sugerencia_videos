"use strict";

const publicFunction = function (url, id) {
  const setVideoData = (videoUrl, videoId) => {
    const element = document.getElementById(videoId);
    if (element) {
      element.setAttribute("src", videoUrl);
    } else {
      console.warn("error! revisar");
    }
 };
  return setVideoData(url, id);
};


class Multimedia {
    /* Clase privada # con gatito */
  #url;
   constructor(url) {
    this.#url = url;
  }

   getUrl() {
    return this.#url;
  }

  
  setUrl(value) {
    this.#url = value;
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
        /* Clase privada # con gatito */
  #id;
    constructor(url, id) {
    super(url);

    this.#id = id;
  }

  playMultimedia() {
    publicFunction(this.getUrl(), this.#id);
  }

  setInicio(tiempo) {
    this.setUrl(`${this.getUrl()}?start=${tiempo}`);
  }
}



const Musica = new Reproductor(
  "https://www.youtube.com/embed/3WOwa0lWEz4",
  "musica"
);

const Series = new Reproductor(
  "https://www.youtube.com/embed/IJ_AZCvCacw",
  "series"
);

const Peliculas = new Reproductor(
  "https://www.youtube.com/embed/L1aCp1Z1gAo",
  "peliculas"
);

Series.setInicio(13);
Peliculas.setInicio(23);
Musica.setInicio(42);

Series.playMultimedia();
Musica.playMultimedia();
Peliculas.playMultimedia();
