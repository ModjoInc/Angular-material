import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isChecked = true;
  colors = [
    { id: 1, name: 'black'},
    { id: 2, name: 'red'},
    { id: 3, name: 'white'}
  ];
  color = 2;
  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 11, 1);
  public myDate = new Date();
  levels = [
    {id: 1, name: 'Beginner'},
    {id: 2, name: 'Intermediate'},
    {id: 3, name: 'Advanced'}
  ]

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    const currentTime = new Date();

    return day !== 0 && day !== 6;
  }

  selectLevels(level) {
    this.levels
    .filter(c => c !== level)
    .forEach(c => c['selected'] = false);

    level.selected = !level.selected;
  }

  onChange($event) {
    console.log($event);
  }
}
