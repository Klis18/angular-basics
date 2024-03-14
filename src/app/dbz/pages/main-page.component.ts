import { Component } from "@angular/core";
import { Characters } from "../interfaces/characters.interface";




@Component({
    selector:"app-dbz-main-page",
    templateUrl:"./main-page.component.html"
})
export class MainPageComponent{
    
    public characters: Characters[]=[
        {
            name: 'Krillin',
            power: 1000
        },
        {
            name:'Goku',
            power: 9500
        },
        {
            name: 'Vegeta',
            power: 7500
        }
    ]
}