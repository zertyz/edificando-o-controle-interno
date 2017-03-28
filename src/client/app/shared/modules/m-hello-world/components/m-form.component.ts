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
 *  formName:
 *  formId:
 *  backendURL:           where to submit (partial) results
 *  backendMethod:        either GET or POST -- the HTTP method to use to call the backend
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
 *  <m-form
 *          sectionTitle  = "Contact us"
 *          sectionImg    = ""
 *          sectionImgAlt = ""
 *          formName      = "formName"
 *          formId        = "formId"
 *          backendURL    = "/?.cgi"
 *          backendMethod = "GET"
 *          submitText    = "Send"
 *          [fields]      = "[{label: 'E-Mail', name: 'email', tip: 'Please give us your email so we can contact you', type: EFieldTypes.Text}, {...}]">
 *  </m-form>
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
  selector: 'm-form',
  templateUrl: 'm-form.component.html',
  styleUrls: ['m-form.component.css']
})
export class MFormComponent {

  @Input() sectionTitle:   string          = '§§ FORM §§';
  @Input() sectionImg:     string          = 'sectionImg#not used';
  @Input() sectionImgAlt:  string          = 'sectionImgAlt#not used';
  @Input() formName:       string          = 'formName';
  @Input() formId:         string          = 'formId';
  @Input() backendURL:     string          = '/?.cgi';
  @Input() backendMethod:  EBackendMethods = EBackendMethods.GET;
  @Input() submitText:     string          = 'Send';
  @Input() fields:         FormField[]     = [];

}

enum EBackendMethods { GET, POST };
enum EFieldTypes     { Text, RadioBox, CheckBox, ComboBox, ListBox, TextArea, Date, DateTime };

interface FormField {
  label: string;
  name:  string;
  tip:   string;
  type:  EFieldTypes;
}
