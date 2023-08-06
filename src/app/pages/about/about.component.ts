import { Component } from '@angular/core';
import { InformationService } from 'src/app/information.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private info: InformationService) { }
  name: string = this.info.title;

}
