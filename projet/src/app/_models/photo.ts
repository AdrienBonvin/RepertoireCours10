export class Photo {
    static count = 1;   // Static : toutes les variables ont accès a Count, le count de toutes les variables est = à 0.
    public id = 0;
    public photoNom: string;
    public classement: number;
    constructor(photoNom = '', classement = 0) { /* On rajoute un constructeur en ts, si on met un '?' 
                                                après le nom de l'argument il est optionnel*/
        this.id = Photo.count++;
        this.photoNom = photoNom;
        this.classement = classement;
    }
}
