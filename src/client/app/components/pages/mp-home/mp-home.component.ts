// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Injector } from '@angular/core';
import { Config, RouterExtensions } from '../../../modules/core/index';

@Component({
  moduleId: module.id,
  selector: 'mp-home',
  templateUrl: 'mp-home.component.html',
  styleUrls: ['mp-home.component.css']
})
export class MPHomeComponent {

  constructor(private injector: Injector, public routerext: RouterExtensions) {}

}
