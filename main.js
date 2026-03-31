function onSelectionChange(e) {

  if (!e || !e.range) return;
  try {
    const sheet = e.source.getActiveSheet();
    const range = e.range;

    if (range.getNumRows() > 1 || range.getNumColumns() > 1) return;

    const col = range.getColumn();
    const row = range.getRow();

    if ((col === 2 || col === 3) && row > 1) {
      const cellValue = range.getValue();
      
      if (cellValue !== "") {
        const targetCell = sheet.getRange(row, 4);

        const today = new Date();
        const timezone = e.source.getSpreadsheetTimeZone();
        const todayStr = Utilities.formatDate(today, timezone, "yyyy/MM/dd");
        
        targetCell.setValue(todayStr);
      }
    }
  } catch (err) {
    console.log("Error: " + err);
  }
}
