import { Component } from '@angular/core';
import { InformationService } from 'src/app/information.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  constructor(private info:InformationService){}
  name: string = this.info.title;

} 
