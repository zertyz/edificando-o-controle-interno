// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, LogService, ILang } from '../../../../modules/core/index';
import { Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'm-hello-world',
  templateUrl: 'm-hello-world.component.html',
  styleUrls: ['m-hello-world.component.css']
})
/** This class demonstrate the basics of creating a reusable component, who receives all it's from the caller.
 *  There are two ways of passing data to this component, when used on templates elsewhere:
 *  1) Via properties, like in: <m-hello-world hello="olá" world="mundo!"></m-hello-world>
 *  2) Via an object:           <m-hello-world [data]="{hello: 'helly', world: 'wolrdo'}"></m-hello-world> */
export class MHelloWorldComponent {

  @Input() hello: string;
  @Input() world: string;
  @Input() data: HelloData;

  // called by Angular after all @Input() properties get their values
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
