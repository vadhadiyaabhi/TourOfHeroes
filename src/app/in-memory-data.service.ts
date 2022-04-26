import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from 'src/Hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', desc: 'Description of Hero11', top: true },
      { id: 12, name: 'Narco', desc: 'Description of Hero12', top: false },
      { id: 13, name: 'Bombasto', desc: 'Description of Hero13', top: true },
      { id: 14, name: 'Celeritas', desc: 'Description of Hero14', top: false },
      { id: 15, name: 'Magneta', desc: 'Description of Hero15', top: true },
      { id: 16, name: 'RubberMan', desc: 'Description of Hero16', top: false },
      { id: 17, name: 'Dynama', desc: 'Description of Hero17', top: true },
      { id: 18, name: 'Dr IQ', desc: 'Description of Hero18', top: false },
      { id: 19, name: 'Magma', desc: 'Description of Hero19', top: false },
      { id: 20, name: 'Tornado', desc: 'Description of Hero20', top: false }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}