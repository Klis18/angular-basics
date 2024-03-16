import { Component, EventEmitter, Output } from '@angular/core';
import { Characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Characters> = new EventEmitter;

  public character: Characters = {
    name:'',
    power: 0
  }

  emitCharacter(): void{
    console.log(this.character);
    if(this.character.name.length === 0)return;

    this.onNewCharacter.emit(this.character);

    // this.character.name = '';
    // this.character.power = 0;

    this.character = {name:'', power: 0}; //Es mucho mejor que la anterior forma
  }
}
