/** <pre>
 * m-form.component.ts
 * ===================
 * (created by luiz on Fri, mar, 24, 2017)
 *
 * Responsible for presenting forms to gather and validate custom data and post them to an also flexible backend.
 *
 * note: this component will support, in the future, realtime posting/editing, where the backend is called on (almost) every change
 * the user does, with great implications for usage behaviour research and statistics.
 *
 * Receives the following properties:
 *  sectionTitle:         the title, if any, to be present in the beginning of the component. Some very simple examples are "CONTACT US" or "SUBSCRIBE"
 *  sectionImg:           the same as above, but specifying an image
 *  sectionImgAlt:        the specification of the image above -- the briefing you'd give to a designer when creating the image. Great SEO opportunity.
 *  fields:               an array containing all fields to be shown, as described bellow.
 *
 * 'fields' properties:
 *  name:                 the name of the exposed product / service -- should work together with the selected 'img' to fixate the concept
 *  slogan:               the product/service slogan -- the message you want to be stored on the head of prospects
 *  img:                  the representative image URL
 *  imgAlt:               SEO alt for the product / service image
 *  route:                URL or name of the component to go when clicked
 *
 * Usage example:
 *
 *  <m-portfolio
 *               sectionTitle  = "SMS Applications & Platforms"
 *               sectionImg    = "sectionImg#not used"
 *               sectionImgAlt = "sectionImgAlt#not used"
 *               [items]       = "[{name: 'Quiz', slogan: 'The classic questions and answers game', route: 'apps/quiz', img: 'assets/img/smsApps/quiz.png', imgAlt: 'Image describing that the Instant VAS Quiz SMS Application, although being a comodity service, is based on a rock solid platform'}, {name: 'Chat', slogan: 'SMS/USSD one-to-one and one-to-many messaging system', route: 'apps/chat', img: 'assets/img/smsApps/chat.png', imgAlt: '...'}]">
 *  </m-portfolio>
 *
 * @see RelatedClass(es)
 * @author luiz
 */

// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, LogService, ILang } from '../../../core/index';
import { Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'm-portfolio',
  templateUrl: 'm-portfolio.component.html',
  styleUrls: ['m-portfolio.component.css']
})
export class MPortfolioComponent {

  @Input() sectionTitle:   string = '§§ PORTFOLIO §§';
  @Input() sectionImg:     string = 'sectionImg#not used';
  @Input() sectionImgAlt:  string = 'sectionImgAlt#not used';
  @Input() items:          PortfolioItem[];

}

interface PortfolioItem {
  name:   string;
  slogan: string;
  img:    string;
  imgAlt: string;
  route:  string;
}
