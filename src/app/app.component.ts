import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'examen';
}
