function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Customer Tools').addItem('Fill Column Info Down', 'fillDown').addToUi() ;
}