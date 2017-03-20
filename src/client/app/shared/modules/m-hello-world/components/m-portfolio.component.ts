/** <pre>
 * m-portfolio.component.ts
 * ======================
 * (created by luiz on Mon, mar, 20, 2017)
 *
 * Responsible for presenting the portfolio (or products and services list) of SaaS sites, apps and landing pages, in case
 * such service offers more than one product / option.
 *
 *
 * This component is not often used in SaaS sites & apps, because such products tend to present one and only and one service.
 * Nonetheless, in case there are options, here is the component to present them.
 * Note that this component shall not be confused with 'm-princing', which also has options, but payment options... even if
 * some functionalities are dependent on the choosen plan.
 *
 * note: this component is to gather statistics of mouse-over duration (in case mouse-over shows the name/slogan), clicks and
 * other information to give the developer feedback about which options are most popular. It should also support scrambling
 * with the presentation order, so to unbias the statistics -- yet to be implemented.
 *
 * Receives the following properties:
 *  sectionTitle:         the title, if any, to be present in the beginning of the component. Something like "PORTFOLIO" or "APPS LIST"
 *  sectionImg:           the same as above, but specifying an image
 *  sectionImgAlt:        the specification of the image above -- the briefing you'd give to a designer when creating the image. Great SEO opportunity.
 *  items:                an array containing all entries to be shown, as described bellow.
 *
 * 'items' properties:
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
