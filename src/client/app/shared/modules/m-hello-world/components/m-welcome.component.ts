/** <pre>
 * m-welcome.component.ts
 * ======================
 * (created by luiz on Sex, mar, 17, 2017)
 *
 * Responsible for presenting the welcome message and visual idendities of SaaS sites, apps and landing pages.
 *
 * Usually the first component to be called on the content area of the site / app / landing page, bellow the
 * project's name (which is usually on a top toolbar).
 *
 * note: on desktop and mobile apps, this component might be used to compose the splash screen -- just add the project name to it.
 *
 * Receives the following properties:
 *  img:                  the URL for the logo of the site / app / landing page
 *  imgAlt:               a text specifying the image and a great opportunity for SEO
 *  subTitle:             an explanation for the title
 *  slogan:               the message you want to be stored on the head of visitors / users -- your value proposition
 *  callToActionText:     the invitation for the user / visitor to follow the path on your usage / sales pipeline
 *  callToActionRoute:    the page that will handle the user's intent, when he/she follows your suggestion
 *  callToActionSubTitle: a late incentive for taking the action.
 *
 * Usage example:
 *
 *  <m-welcome img                  = "assets/img/logo.png"
 *             imgAlt               = "InstantVAS logotype, showing that our innovative SMS as a Service Games & Applications can be deployed instantly, on the Cloud or on-premises, with our rocket science technology"
 *             subTitle             = "WHITE LABEL SMS GAMES & APPLICATIONS"
 *             slogan               = "Instantly deploy fully customizable and rock solid USSD / SMS Games & Applications choosen from our vast portfolio of ready-to-launch solutions, with an ever increasing network of conectivity partners worldwide."
 *             callToActionText     = "Sign Up Now"
 *             callToActionRoute    = "/SignUpOrLogin"
 *             callToActionSubTitle = "30-day Free Trial. No credit card required.">
 *  </m-welcome>
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
  selector: 'm-welcome',
  templateUrl: 'm-welcome.component.html',
  styleUrls: ['m-welcome.component.css']
})
export class MWelcomeComponent {

  @Input() img:                  string = "assets/svg/smile.svg";
  @Input() imgAlt:               string = "The default logo, available for every angular-seed-advanced-mutuatech instance application";
  @Input() subTitle:             string = "Angular2 Framework & Components for State-of-the-Art frontend development";
  @Input() slogan:               string = "Easily build state-of-art web/desktop/mobile sites and apps sharing the same business logic code and customizing the frontend as you wish";
  @Input() callToActionText:     string = "Learn More...";
  @Input() callToActionRoute:    string = "/about";
  @Input() callToActionSubTitle: string = "or explore as you wish";

}
