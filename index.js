function onOpen() {
  let cache = CacheService.getScriptCache();
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let row = cache.get("row");
  let column = cache.get("column");
  sheet.getRange(+row, +column).activate();
  SpreadsheetApp.flush();
}

function onEdit(e){
  let row = e.range.getRow();
  let column = e.range.getColumn();

  let cache = CacheService.getScriptCache();
  cache.putAll({
    "row": `${row}`,
    "column": `${column}`
  });
}
