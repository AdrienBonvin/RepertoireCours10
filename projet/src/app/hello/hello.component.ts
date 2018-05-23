import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  etudiant = { 'nom': 'Bonvin', 'age': 26, 'saved': false };
  etudiants = [{ 'nom': 'Bonvin' }, { 'nom': 'Pilip' }, { 'nom': 'José' }, { 'nom': 'Finnbar' }];
  constructor() { }

  ngOnInit() {
  }
  getEtudiant() {
    this.etudiant.nom = 'default';
  }
  saveEtudiant() {
    this.etudiant.saved = true;
    console.log(this.etudiant.saved);
  }
}
