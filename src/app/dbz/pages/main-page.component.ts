import { Component } from "@angular/core";
import { Characters } from "../interfaces/characters.interface";
import { DbzService } from "../services/dbz.service";




@Component({
    selector:"app-dbz-main-page",
    templateUrl:"./main-page.component.html"
})
export class MainPageComponent{
    
    constructor(private dbzservice: DbzService){}

    get characters(): Characters[] {
        return [...this.dbzservice.characters];
    } 

    onDeleteCharacter(id:string): void{
        this.dbzservice.deleteCharacterById(id);
    }

    onNewCharacter(character: Characters):void{
        this.dbzservice.addCharacter(character);
    }
    // public characters: Characters[]=[
    //     {
    //         name: 'Krillin',
    //         power: 1000
    //     },
    //     {
    //         name:'Goku',
    //         power: 9500
    //     },
    //     {
    //         name: 'Vegeta',
    //         power: 7500
    //     }
    // ]

    // onNewCharacter(character: Characters): void{
    //     this.characters.push(character);
    // }

    // onDeleteCharacter(index: number){
    //     this.characters.splice(index, 1);
    // } 
}