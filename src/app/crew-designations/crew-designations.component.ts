import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-crew-designations',
  templateUrl: './crew-designations.component.html',
  styleUrl: './crew-designations.component.scss'
})
export class CrewDesignationsComponent {
  @Input() message: string = "";
  @Output() messageEmitter = new EventEmitter<string>();

  sendMessage() {
    this.messageEmitter.emit("Message Recieved from Children");
  }
}
