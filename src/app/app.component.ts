import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GalleryComponent} from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cars-gallery';
}
