import { CONSTANTS } from "./constants";

export const log = (s: string) => Logger.log(s);
export const getSpreadsheet = () => SpreadsheetApp.openByUrl(CONSTANTS.SPREADSHEET_URL);
