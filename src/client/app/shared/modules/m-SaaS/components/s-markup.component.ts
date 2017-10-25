/** <pre>
 * s-markup.component.ts
 * =====================
 * (created by luiz on Wed, mar, 22, 2017)
 *
 * This component models markup elements (inspired on HTML) in order to be able to present generic content recursively,
 * on sites and desktop & mobile apps.
 *
 * It receives the following properties:
 *   markupData: defined bellow
 *   styles:     defined bellow
 *
 * 'markupData' is defined as:
 *   MARKUP_DATA := an array of 'MARKUP_ITEM's
 *   MARKUP_ITEM := P_MARKUP | LIST_MARKUP | LINK_MARKUP | IMG_MARKUP
 *   P_MARKUP    := {p:    string|object|MARKUP_DATA}
 *   LIST_MARKUP := {list: string|object|MARKUP_DATA}
 *   LINK_MARKUP := {link: string|IMG_MARKUP, url: string}
 *   IMG_MARKUP  := {img:  string,            alt: string}
 *
 * In other words, each element of 'markupData' array is an object containing one of the following keys:
 *  p      : accepts as value: a string, another object or an array of strings / objects
 *  list   : idem
 *  link   : only accepts one string or one 'img' object. Also, there must be another key named 'url', which only accepts a string
 *  img    : only accepts a string and requires another key named 'alt', which also only accepts a string.
 *
 * 'styles' is defined as:
 *   STYLES     := an array of 'STYLE_ITEM's
 *   STYLE_ITEM := {[0..n: string of styles,] [p|list|link|img: an array of strings of styles]}
 *
 * The 'styles' structure can be both an Array and a Hash Object containing named arrays. The logic for applying styles goes as follows:
 * - If elements 0 to n are defined in 'styles' (that is, 'styles' has an array), then 'markupData[n]' class is defined as 'styles[n % styles.length]'
 * - If 'styles' has also hashed members for 'p', 'list', 'link' and/or 'img', those members are arrays and the same logic as above is applyed, with the following adaptation:
 *   for instance, 'markupData[n].p[i]' class is defined as 'styles.p[i % styles.length]'
 * Every 'styles' element is applyed to it's
 *
 * Usage example:
 *
 *  <s-markup
 *           [markupData]  = "[{p: ['Our team is made of, bla bla, the following people:', {list: ['mf 1', {link: 'mf 2', url: 'mf2resume.pdf'}]}]}, {p: '... and that is all we have.'}]"
 *           [styles]      = "{0: 'class for everyone', list: ['evenListClass', 'oddListClass']}">
 *  </s-markup>
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
  selector: 's-markup',
  templateUrl: 's-markup.component.html',
  styleUrls: ['s-markup.component.css']
})
export class SMarkupComponent {

  @Input() markupData: any[] = [];
  @Input() styles:     any[] = [];

  /** enforces the grammar for 'markupData' and 'styles' */
  ngOnInit() {

    /*************
    ** 'styles' **
    *************/

    // check that it is an array and/or a hashed object
    if ( !(this.styles instanceof Object) ) {
      this.throwError(`'styles' needs to be an array and/or a hashed object containing string arrays for 'p', 'list', 'link' and/or 'img'`);
    }

    // check that all numeric elements are strings, all string elements are arrays and create the 'length' property
    let arrayLength: number = 0;
    for (let stylesIndex in this.styles) {
      let style: any = this.styles[stylesIndex];
      if (!isNaN(parseInt(stylesIndex))) {

        console.log(`## styles: found one more item #${stylesIndex} and length is now ${arrayLength}`)
        arrayLength++;
        // type number indices correctly, in case it is not
        // if n is string, styles[tonumber(n)]=styles[n] and styles[n]=null
        // ** NOTE THE ABOVE IS NOT NEEDED AT ALL

        if (typeof(style) != 'string') {
          this.throwError(`'styles[${stylesIndex}]' should be a string`);
        }
      } else if ((typeof(stylesIndex) == 'string') && !(style instanceof Array)) {
        this.throwError(`'markupData.${stylesIndex}' should be an array of strings`);
      }
    }

    // if 'styles' is a mix of hashed object and array, we'll set the 'length' property
    if ( !(this.styles instanceof Array) ) {
      this.styles['length'] = arrayLength;
    }


    /*****************
    ** 'markupData' **
    *****************/

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
