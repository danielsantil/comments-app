import { Injectable } from '@angular/core';

/**
 * Holds utility methods to be used during the application.
 */
@Injectable()
export class UtilitiesService {

  constructor() { }

  /**
   * Displays an error message to the user.
   * @param msg Error message.
   */
  showError(msg: string) {
    alert(msg);
  }

  /**
   * Checks if an object contains the specified string.
   * @param obj Object to be compared.
   * @param search String to look for in the object.
   * @param keys When passed, only these keys as considered while searching.
   * Otherwise, all attributes from the object are considered.
   */
  containsText(obj: Object, search: string, keys?: string[]): boolean {
    let text = '';
    if (!keys) {
      keys = Object.getOwnPropertyNames(obj);
    }

    text = keys.map(e => obj[e]).join();
    return text.includes(search.toLowerCase());
  }

}
