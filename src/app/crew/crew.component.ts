import { Component } from '@angular/core';
import { CrewDesignationsComponent } from '../crew-designations/crew-designations.component';

@Component({
  standalone:true,
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss',
  imports: [CrewDesignationsComponent]
})
export class CrewComponent {
  messageFromCrew : string = "Hello World";
  recievedMessage: string = "";

  messageFromChildren(message: string) {
    this.recievedMessage = message;
  }

}
