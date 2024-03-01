import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrewComponent } from './crew/crew.component';
import { CrewModule } from './crew/crew.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crew-management';
}
