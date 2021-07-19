import { CONSTANTS } from "./constants";
import { daily } from "./daily";
import { getSpreadsheet, log } from "./utils";

/** Main entrypoint. checks that spreadsheet access is ok, and installs trigger */
export function main() {
  // check we can read the spreadsheet (will throw exception if fails)
  const _ss = getSpreadsheet();

  // create a daily trigger, if not exist
  const triggerFunc = daily;
  createDailyTriggerIfNotExist(triggerFunc.name);

  log("script install finished!");
}

/**
 * Creates a trigger that runs daily @ 10am, if one with the specified functionName (to run) doesn't
 * already exist.
 */
function createDailyTriggerIfNotExist(functionName: string) {
  let triggers = ScriptApp.getProjectTriggers();
  let found = triggers.some((t) => t.getHandlerFunction() == functionName);
  if (found) {
    log("daily trigger already existed, not installing");
    return;
  }

  log("daily trigger not found, creating...");
  ScriptApp.newTrigger(functionName).timeBased().everyDays(1).atHour(10).create();
}
