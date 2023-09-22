import { Component } from "@angular/core";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: [`
    h1{
        color:blue;
    }
  `]
})
export class PersonasComponent{
  personas = 'Lista de personas';
}
