import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FilmService} from '../../services/film.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;

  toggle = true;

  inputValue = '';

  filmNotFound = false;

  films$ = this.filmService.films$;

  constructor(private fb: FormBuilder, private filmService: FilmService) {
    this.form = this.fb.group({
      toggle: [this.toggle],
      searchInput: ''
    });

    this.form.get('toggle')?.valueChanges.subscribe((res) => {
      this.toggle = res;
    });
    this.form.get('searchInput')?.valueChanges.subscribe((res) => {
      this.filmService.search(res);
      this.inputValue = res;
      if (this.films$.value.length === 0) {
        this.filmNotFound = true;
      } else {
        this.filmNotFound = false;
      }
    });
  };

  ngOnInit(): void {
    this.films$ = this.filmService.films$;
  }

  clear(): void {
    this.form.setValue({
      toggle: this.toggle,
      searchInput: ''
    });
    this.inputValue = '';
  }
}
