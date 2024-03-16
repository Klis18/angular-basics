import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  public onDeleteId:  EventEmitter<string> = new EventEmitter;
  // public onDeleteId:  EventEmitter<number> = new EventEmitter;

  // onDeleteCharacter(index:number): void{
  //   this.onDeleteId.emit(index);
  //   console.log({index});
  // }

  onDeleteCharacterById(id?:string):void{
    if(!id)return;
    console.log({id});
    this.onDeleteId.emit(id);
  }
}
