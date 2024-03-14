import { Component, Input } from '@angular/core';
import { Characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Characters[]=[
    {
      name:'Trunks',
      power: 10
    }
  ];
}
