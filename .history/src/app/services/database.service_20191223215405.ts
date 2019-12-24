import { Injectable } from '@angular/core';
import animaisZoo from './../../assets/database/animais.json';
import { Animal } from '../interface/animal.js';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private AnimalListRaw: Animal[] = animaisZoo;
  private filteredAnimalList: Animal[];
  constructor() {
    this.filteredAnimalList = this.AnimalListRaw.filter((item, index, array) => {
      item.id = index.toString();
      item.url_foto = '';
      return item.nome_popular != '';
    });
  }

  getAnimals() {
    return this.filteredAnimalList;
  }
}
