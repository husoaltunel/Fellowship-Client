import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from '../shared/services/spinner.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  render : Observable<boolean>;
  constructor(public spinnerService : SpinnerService) { 
    spinnerService.visibility.pipe(response => this.render = response)
  }

  ngOnInit(): void {
  }

}
