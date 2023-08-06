import { Component } from '@angular/core';
import { interval, map, startWith } from 'rxjs';
import { InformationService } from 'src/app/information.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private info: InformationService) { }
  name: string = this.info.title
  $time = interval(1000).pipe(
    startWith(null),
    map(() => new Date())
  )

}
