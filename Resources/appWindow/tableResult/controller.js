var thisWin 	= Ti.UI.currentWindow;
arSettings.tempQuery = thisWin.arData;
json 		= JSON.parse(arSettings.tempQuery);
consoleEcho(arSettings.tempQuery);
proCessTable(json.data,json.extra.page);

tableView.setData(arSettings.tempData);

thisWin.add(tableView);
