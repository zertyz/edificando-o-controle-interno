/** <pre>
 * s-about.component.ts
 * ====================
 * (created by luiz on Tue, mar, 21, 2017)
 *
 * Responsible for presenting the sites' & apps' about section, showing more details, like the team.
 *
 * This component implements the 'MarkupData' pattern to be able to present generic content recursively.
 *
 * Receives the following properties:
 *  sectionTitle:         the title, if any, to be present in the beginning of the component. Something like "PORTFOLIO" or "APPS LIST"
 *  sectionImg:           the same as above, but specifying an image
 *  sectionImgAlt:        the specification of the image above -- the briefing you'd give to a designer when creating the image. Great SEO opportunity.
 *  markupData:           an array containing all entries to be shown, as described bellow.
 *
 * Each element of 'markupData' is an object containing one of the following keys:
 *  p      : accepts, as value, a string, another object or an array of strings / objects
 *  list   : idem
 *  link   : only accepts one string or one 'img' object. Also, there must be another key named 'url', which only accepts a string
 *  img    : only accepts a string and requires another key named 'alt', which also only accepts a string.
 *
 * Usage example:
 *
 *  <s-about
 *           sectionTitle  = "Meet the Team"
 *           sectionImg    = "sectionImg#not used"
 *           sectionImgAlt = "sectionImgAlt#not used"
 *           [markupData]  = "[{p: ['Our team is made of, bla bla, the following people:', {list: ['mf 1', {link: 'mf 2', url: 'mf2resume.pdf'}]}]}, {p: '... and that is all we have.'}]"
 *           [styles]      = "{0: 'class for everyone', list: ['evenListClass', 'oddListClass']}">
 *  </s-about>
 *
 * @see RelatedClass(es)
 * @author luiz
 */

// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, LogService, ILang } from '../../../../modules/core/index';
import { Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 's-about',
  templateUrl: 's-about.component.html',
  styleUrls: ['s-about.component.css']
})
export class SAboutComponent {

  @Input() sectionTitle:   string = '§§ ABOUT §§';
  @Input() sectionImg:     string = 'sectionImg#not used';
  @Input() sectionImgAlt:  string = 'sectionImgAlt#not used';
  @Input() markupData:     any[]  = [];
  @Input() styles:         any[]  = [];

}
