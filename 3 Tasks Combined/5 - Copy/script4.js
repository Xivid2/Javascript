var TaskFourJSON = {
	initialize: function( htmlElemID ) {
		//CONNECTION WITH LAST YEAR DATA
		var jsonDataArray = jsonData.dataset.data;

		//OB JWITH LAST YEAR DATA
		var lastYearData = TaskFourJSON.getDataForChart( jsonDataArray );
		//PREPARING DATA FOR CHART
		TaskFourJSON.prepareDataForChart( lastYearData );

		//CREATING THE CHART
		TaskFourJSON.createNewChart( htmlElemID, jsonObjChart );
	},
	prepareDataForChart: function( dataObj ) {
		var categoriesForChart = jsonObjChart.categories.category;
		var setForChart = jsonObjChart.data[0].set;

		for ( var key in dataObj ) {
			categoriesForChart.push( { "label": key } );

			setForChart.push( { "color": "ec6838",
								"value": dataObj[key],
								"toolText": key } );
		}
	},
	getDataForChart: function( jsonData ) {
		var obj = {};

		for ( var i = 0; i < jsonData.length; i ++ ) {
			if ( jsonData[i].hasOwnProperty( "Speakers_2010" ) && jsonData[i].hasOwnProperty( "Language" ) ) {
				obj[jsonData[i].Language] = jsonData[i].Speakers_2010;
			}
		}
		return obj;
	},
	createNewChart: function( htmlElemID, chartObj ) {
		var jsonChart = new BarChart( document.getElementById( htmlElemID ), chartObj );
		jsonChart.initialize ( '100%' , '100%' );
	}
};

var TaskFourXML = {
	initialize: function( element ) {
		//GET DATA FROM CHART
		var lastYearData = TaskFourXML.getDataForChart();

		//PREPARING DATA FOR CHART
		var preparedData = TaskFourXML.prepareDataForChart( element, lastYearData );	

		TaskFourXML.createNewChart( element, preparedData );
		
	},
	createNewChart: function( htmlElemID, xmlData ) {
		var xmlChart = new BarChartXML( document.getElementById( htmlElemID ), xmlData );
		xmlChart.initialize ( '100%' , '100%' );
	},
	getDataForChart: function() {
		var lastYearDataObj = {};

		//PARSE DATA XML
		var parserXmlJSONData = new DOMParser();
		var jsonData = parserXmlJSONData.parseFromString( xmlJSONData, "text/xml" );

		var lastYearData = jsonData.getElementsByTagName("data");

		for ( var i = 0; i < lastYearData.length; i ++ ) {
			lastYearDataObj[lastYearData[i].childNodes[0].childNodes[0].nodeValue] = lastYearData[i].childNodes[3].childNodes[0].nodeValue;
		}
		return lastYearDataObj;
	},
	prepareDataForChart: function( element, dataObj ) {
		//PARSE CHART XML
		var parserXMLChart = new DOMParser();
		var chartData = parserXMLChart.parseFromString( xmlDataChart, "text/xml" );

		for ( var key in dataObj ) {
			//CREATING NEW ELEMENT FOR CATEGORIES
			var dataCategories = chartData.getElementsByTagName("categories");
			var newCategory = chartData.createElement( "category" );
			newCategory.setAttribute( "label", key );
			dataCategories[0].appendChild( newCategory );	

			//CREATING NEW ELEMENT FOR VALUES
			var dataChartSet = chartData.getElementsByTagName("data");
			var newSet = chartData.createElement( "set" );
			newSet.setAttribute( "value", dataObj[key] );
			newSet.setAttribute( "color", "9768D6");
			newSet.setAttribute( "toolText", key );
			dataChartSet[0].appendChild( newSet );
		}
		var newChartData = chartData.getElementsByTagName("chart")
		return new XMLSerializer().serializeToString( newChartData[0] );
	}
};

var TaskFourLineChart = {
	speakersArray: ["Speakers_2008", "Speakers_2009", "Speakers_2010"],
	colorArray: ["#0000cc", "#00ff00", "#ff0000"],

	initialize: function( htmlElemID ) {
		//CONNECTION WITH LAST YEAR DATA
		var jsonDataArray = jsonData.dataset.data;

		//OB JWITH LAST YEAR DATA
		var lastYearData = TaskFourLineChart.getDataForChart( jsonDataArray );

		var preparedData = TaskFourLineChart.prepareDataForChart( lastYearData );

		TaskFourLineChart.createNewChart( htmlElemID, lineChart );
	},
	getDataForChart: function( jsonData ) {
		var obj = {};
		console.log("jsonData", jsonData);
		var speakersEightArray = [];
		var speakersNineArray = [];
		var speakersTenArray = [];
		var languageArray = [];

		for ( var i = 0; i < jsonData.length; i ++ ) {

			for (var key in jsonData[i]) {
				if (!obj.hasOwnProperty(key)){
					obj[key] = [jsonData[i][key]];
				} else {
					obj[key].push(jsonData[i][key]);
				}
			}
		}
		console.log("obj -----", obj);
		return obj;
	},
	prepareDataForChart: function( dataObj ) {
		var categoriesForChart = lineChart.categories.category;

		console.log("dataObj", dataObj);

		for ( var i = 0; i < dataObj.Language.length; i ++ ) {
			for ( var key in dataObj ) {
				if ( key === "Language" ) {
					categoriesForChart.push( 
					{ 
						"label": dataObj[key][i],
						"x": i + 1,
						"showVerticalLine": "1" 
					} );
				}
				//CREATING NEW DATA OBJECTS
				for ( var j = 0; j < TaskFourLineChart.speakersArray.length; j ++ ) {
					if ( key !== "Language" ) {
					lineChart.data[j] = ( 
						{ 
							"lineThickness": "3",
							"showShadow": "1",
							"lineColor": "#A8E1D5",
							"seriesName": TaskFourLineChart.speakersArray[j],
							"color": TaskFourLineChart.colorArray[j],
							"showValues": "0",
							"set" : [] } );
					}
				}
			}
		}

		for ( var i = 0; i < TaskFourLineChart.speakersArray.length; i ++ ) {
			for ( var j = 0; j < dataObj.Speakers_2008.length; j ++ ) {
				lineChart.data[i].set.push(
					{
						"x": j + 1,
						"y": dataObj[TaskFourLineChart.speakersArray[i]][j],
						"toolText": TaskFourLineChart.speakersArray[i]
					});
			}
		}
		console.log( lineChart.data );
		console.log( categoriesForChart );
	},
	createNewChart: function( htmlElemID, chartObj ) {
		var jsonChart = new TrendChart( document.getElementById ( htmlElemID ), chartObj );
		jsonChart.initialize ( '100%' , '100%' );
	}
}