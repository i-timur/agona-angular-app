import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface Film {
  name: string;
  year: number;
}

const FILMS: Film[] = [
  {
    name: 'Довод',
    year: 2020
  },
  {
    name: 'Довлатов',
    year: 2018
  },
  {
    name: 'Гарри Потер',
    year: 2008
  },
  {
    name: 'Властелин Колец',
    year: 2001
  },
]

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  films$: BehaviorSubject<Film[]> = new BehaviorSubject<Film[]>([]);

  search(name: string): void {
    if (!name || name.length < 1) {
      this.films$.next([]);
      return;
    }

    const result = FILMS.filter((film) => film.name.includes(name));

    this.films$.next(result);
  }

  constructor() { }
}
