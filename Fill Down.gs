function fillDown() {
  var ui = SpreadsheetApp.getUi(); // Same variations.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var result = ui.prompt(
      'This function will fill an empty cell of',
      'the choosen column with the content of the cell above it !',
      'Please enter the column number you want to',
      'fill with A being 1 and B being 2 etc:',
      ui.ButtonSet.OK_CANCEL);
 var button = result.getSelectedButton();
  var text = result.getResponseText();
  var sheet = ss.getActiveSheet();
  var numRows = sheet.getLastRow();
  if (button == ui.Button.OK) {
    var colRange = sheet.getRange(3,text, numRows)
    var col = colRange.getValues();
    var newCol = [];
    var len = col.length;
    var hold;
    for(var row=0;row<len;row++){
        if(col[row]!=""){
         hold = col[row];
          newCol.push([hold])
        }else{
          newCol.push([hold])
        }
    }
    colRange.setValues(newCol);
    return newCol
  }
    // User clicked "OK".
    //ui.alert('Your name is ' + text + '.');
   else if (button == ui.Button.CANCEL) {
    // User clicked "Cancel".
    ui.alert('I didn\'t get your column Number.');
  } else if (button == ui.Button.CLOSE) {
    // User clicked X in the title bar.
    ui.alert('You closed the dialog.');
  }
}