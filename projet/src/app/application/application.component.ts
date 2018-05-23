import { Component, OnInit } from '@angular/core';
import { Photo } from '../_models';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  edit = false; // C'est une variable d'instance, donc on a pas a mettre de let ou de type.
  /* photos = [{ 'photoNom': 'PhotoAdrien', 'classement': 1 },   equivalent en dessous pas en Json
   { 'photoNom': 'PhotoPierre', 'classement': 2 },
   { 'photoNom': 'PhotoThierIry', 'classement': 3 }];
  photo = { 'photoNom': 'Entrer Nom', 'classement': 0 };   equivalent en dessous pas en Json */
  photos = [new Photo('Trsdvuc', 12)];
  photo = new Photo('', 0);
  constructor() { }

  ngOnInit() {
  }

  addPhoto() {
    this.photos.push(this.photo);
    this.photo = new Photo();
  }
  editPhoto(id: number) {
    this.photo = this.getPhotoById(id); // ici on est SUR LE MEME OBJET! C'est pourquoi quand on modif ça modif en temps reel!
    this.edit = true; // Sert à savoir quel bouton on affiche (Add : False ou Edit : True)
  }

  getPhotoById(id: number): Photo {
    /*for (let i = 0; i < this.photos.length; i++) { // On fait avec boucle car ID PAS 
                                                  // FORCEMENT EGAL A i, a la ligne 3 on peut avoir le medecin avec id = 590!
      if (this.photos[i].id === id) {
        return this.photos[i];
      }
    }*/
    return this.photos.filter(a => a.id === id)[0];
  }

  clearChamps() {
    this.edit = false;
    this.photo = new Photo();
  }
}
