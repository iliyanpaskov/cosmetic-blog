import { Component } from '@angular/core';
import { InformationService } from 'src/app/information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private info: InformationService){}
  name: string = this.info.title;

}
