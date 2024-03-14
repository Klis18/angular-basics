import { Component } from '@angular/core';
import { Characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  public character: Characters = {
    name:'',
    power: 0
  }

  emitCharacter(): void{
    console.log(this.emitCharacter);
  }
}
