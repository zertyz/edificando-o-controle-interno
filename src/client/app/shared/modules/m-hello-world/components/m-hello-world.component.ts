// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, LogService, ILang } from '../../../core/index';
import { Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'm-hello-world',
  templateUrl: 'm-hello-world.component.html',
  styleUrls: ['m-hello-world.component.css']
})
export class MHelloWorldComponent {

  @Input() hello: string;
  @Input() world: string;
  @Input() data: HelloData;

  ngOnInit() {
     if (this.data != null) {
      this.hello = this.data.hello;
      this.world = this.data.world;
     } else {
       this.data = {
          hello: 'hello',
          world: 'my object world',
       }
    }

    if ( (this.hello == null) || (this.world == null) ) {
      this.hello = 'hello';
      this.world = 'my string world';
    }
  }

}

interface HelloData {
  hello: string;
  world: string;
}
