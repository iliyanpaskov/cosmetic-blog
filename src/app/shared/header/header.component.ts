import { Component } from '@angular/core';
import { InformationService } from 'src/app/information.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private info: InformationService) { }

  name: string = this.info.title;
}
