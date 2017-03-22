/** <pre>
 * m-markup.component.ts
 * =====================
 * (created by luiz on Wed, mar, 22, 2017)
 *
 * This component models markup elements (inspired on HTML) in order to be able to present generic content recursively,
 * on sites and desktop & mobile apps.
 *
 * It receives just one property: 'markupData', which is defined as:
 *  MARKUP_DATA := an array of 'MARKUP_ITEM's
 *  MARKUP_ITEM := P_MARKUP | LIST_MARKUP | LINK_MARKUP | IMG_MARKUP
 *  P_MARKUP    := {p:    string|object|MARKUP_DATA}
 *  LIST_MARKUP := {list: string|object|MARKUP_DATA}
 *  LINK_MARKUP := {link: string|IMG_MARKUP, url: string}
 *  IMG_MARKUP  := {img:  string,            alt: string}
 *
 * In other words, each element of 'markupData' array is an object containing one of the following keys:
 *  p      : accepts as value: a string, another object or an array of strings / objects
 *  list   : idem
 *  link   : only accepts one string or one 'img' object. Also, there must be another key named 'url', which only accepts a string
 *  img    : only accepts a string and requires another key named 'alt', which also only accepts a string.
 *
 * Usage example:
 *
 *  <m-markup
 *           [markupData]  = "[{p: ['Our team is made of, bla bla, the following people:', {list: ['mf 1', {link: 'mf 2', url: 'mf2resume.pdf'}]}]}, {p: '... and that is all we have.'}]">
 *  </m-about>
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
  selector: 'm-markup',
  templateUrl: 'm-markup.component.html',
  styleUrls: ['m-markup.component.css']
})
export class MMarkupComponent {

  @Input() markupData: any[];

  /** enforces the grammar for 'markupData' */
  ngOnInit() {

    // check that it is an array
    if ( !(this.markupData instanceof Array) ) {
      this.throwError(`'markupData' should be an array`);
    }

    // check that all elements are objects
    for (let markupDataIndex in this.markupData) {
      let markupItem: any = this.markupData[markupDataIndex];
      if (typeof(markupItem) != 'object') {
        this.throwError(`'markupData[${markupDataIndex}]' should be an object of one of the types: P_MARKUP, LIST_MARKUP, LINK_MARKUP, IMG_MARKUP`);
      }
    }

    // implement other checks and transformations... like transforming {p: 'text'} to {p: ['text']} so we may have a cleaner template
  }

  throwError(msg: string) {
    let expandedMsg = `<m-markup>: ${msg} -- markupData ${JSON.stringify(this.markupData)}`;
    console.log(expandedMsg);
    throw new Error(expandedMsg);
  }

  isString(param: any): boolean {
    return typeof(param) == 'string';
  }

  isObject(param: any): boolean {
    return typeof(param) == 'object';
  }

}
