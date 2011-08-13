var thisWin 	= Ti.UI.currentWindow;
arSettings.tempQuery = thisWin.arData;
json 		= JSON.parse(arSettings.tempQuery);
consoleEcho(arSettings.tempQuery);
tableView.setData(proCessTable(json.data,json.extra.page));

thisWin.add(tableView);
