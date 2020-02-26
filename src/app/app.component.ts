import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home';
import { LoginComponent } from './login'
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
}
