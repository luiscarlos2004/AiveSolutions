import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/shared/navbar/navbar.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,AboutComponent],
  templateUrl: './home.component.html'
  // styleUrl: './home.component.css'
})
export class HomeComponent {

}
