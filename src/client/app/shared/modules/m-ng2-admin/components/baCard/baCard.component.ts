import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ba-card',
  templateUrl: 'baCard.component.html',
})
export class BaCard {
  @Input() title:String;
  @Input() baCardClass:String;
  @Input() cardType:String;
}
