import { getSpreadsheet } from "./utils";

/**
 * Function to run daily to check if emails need to be sent, and send them.
 *
 * Don't change the name of this function from "daily", as the name of the function is used for
 * determining trigger equality. if this function name is changed, then a new trigger may be
 * created, which may cause multiple emails to be sent (bad).
 */
export function daily() {
  // read the spreadsheet
  const ss = getSpreadsheet();

  // for each column, check if any emails need sending, and send them
}
