import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: '../styles/index.scss',
})
export class App {
  protected readonly title = signal('agrigistics_assignment');
}
