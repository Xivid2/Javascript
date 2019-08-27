var TaskTwo = {
	dropdownList: null,
	formDiv: null,
	textBox: null,
	inputText: null,
	textareaContainer: null,
	pageContentDiv: null,
	textareaCounter: null,
	tableContentDiv: null,
	textareaIDs: null,
	textareaValues: null,
	AllAreaWordsCount: null,

	initialize: function( contentDiv ) {
		//BIG DIV
		TaskTwo.pageContentDiv = document.getElementById( contentDiv );

		//FORM DIVw
		var formDivConfig = {
			classNames: ["formDiv", "formDIV", "formdiV"],
			attributes: {
				id: "formDivID"
			}
		};
		TaskTwo.formDiv = NodeFactory.addNewDiv( formDivConfig );
		TaskTwo.pageContentDiv.appendChild( TaskTwo.formDiv );

		//DIV TEXTBOX
		var textBoxConfig = {
			classNames: ["divText"],
			attributes: {
				id: "divTextID"
			},
			text: "Please enter numbers like the example: 1 - 5."
		};
		TaskTwo.textBox = NodeFactory.addNewDiv( textBoxConfig );
		TaskTwo.formDiv.appendChild( TaskTwo.textBox );

		//INPUT TEXT
		var inputTextConfig = {
			attributes: {
				type: "text",
				id: "inputTextId",
				placeholder: "Some text"
			}
		};
		TaskTwo.inputText = NodeFactory.addNewInput( inputTextConfig );
		TaskTwo.formDiv.appendChild( TaskTwo.inputText );

		//SUBMIT BUTTON
		var submitButtonConfig = {
			classNames: ["submitButton", "submitBUTTON", "submitBuTToN"],
			attributes: {
				type: "submit",
				id: "submitForm"
			},
			eventListeners: {
				"click": TaskTwo.submitButton
			},
			text: "Submit"
		};
		var submitButton = NodeFactory.addNewButton( submitButtonConfig );
		TaskTwo.formDiv.appendChild( submitButton );

		//DROPDOWN MENU
		var dropdownListConfig = {
			classNames: ["formSelect"],
			attributes: {
				id: "formSelectId"
			},
			eventListeners: {
				"change": TaskTwo.dropdownSelect
			},
		};
		var optionsListConfig = {
			classNames: ["optionForm"],
		};
		var dropdownDivConfig = {
			classNames: ["dropdownDiv"],
		};

		//DROPDOWN DIV
		TaskTwo.dropdownDiv = NodeFactory.addNewDiv( dropdownDivConfig );
		TaskTwo.formDiv.appendChild( TaskTwo.dropdownDiv );
		
		TaskTwo.dropdownList = NodeFactory.createNewSelect( dropdownListConfig );
		TaskTwo.dropdownDiv.appendChild( TaskTwo.dropdownList );

		//TEXTAREA CONTAINER
		var textAreaContainerConfig = {
			classNames: ["textareaContainer"]
		};

		TaskTwo.textareaContainer = NodeFactory.addNewDiv( textAreaContainerConfig );
		TaskTwo.formDiv.appendChild( TaskTwo.textareaContainer );

		//Create Table content div
		var tableContentDivConfig = {
			classNames: ["tableContentDiv"]
		};
		TaskTwo.tableContentDiv = NodeFactory.addNewDiv( tableContentDivConfig );
		TaskTwo.formDiv.appendChild( TaskTwo.tableContentDiv );	
	},
	submitButton: function() {
		TaskTwo.deleteTextAreaElements = NodeFactory.deleteALLDOMElementsByParent( TaskTwo.textareaContainer );
		TaskTwo.inputNumbersCompare( TaskTwo.dropdownList );

		NodeFactory.deleteALLDOMElementsByParent( TaskTwo.tableContentDiv );
	},
	dropdownSelect: function() {
		NodeFactory.deleteALLDOMElementsByParent( TaskTwo.textareaContainer );
		NodeFactory.deleteALLDOMElementsByParent( TaskTwo.tableContentDiv );

		TaskTwo.createTextAreas( TaskTwo.textareaContainer );
		
		TaskTwo.createTableButton( TaskTwo.textareaContainer );
	},
	createTextAreas: function( parent ) {
		var optionSelectValue = TaskTwo.dropdownList.options[TaskTwo.dropdownList.selectedIndex].value;
		TaskTwo.textareaCounter = 0;
		TaskTwo.textareaIDs = [];

		for ( var i = 1; i <= optionSelectValue; i ++ ) {
			var textareaConfig = {
				classNames: ["textareaNow"],
				attributes: {
					id: "textArea" + i,
					placeholder: "Text Area " + i
				}
			};
			var newTextArea = NodeFactory.addNewTextarea( textareaConfig );

			parent.appendChild( newTextArea );

			TaskTwo.textareaCounter += 1;
			
			TaskTwo.textareaIDs.push( textareaConfig.attributes.id );
		}
	},
	createTableButton: function( parent ) {
		var tableButtonConfig = {
			classNames: ["tableButton"],
			attributes: {
				type: "submit",
				id: "tableButtonID"
			},
			eventListeners: {
				"click": TaskTwo.createTable
			},
			text: "Create Table"
		};
		var tableButton = NodeFactory.addNewButton( tableButtonConfig );	
		parent.appendChild( tableButton );
	},
	createArrayOfTextAreaObjects: function () {
		var AllAreaWordsCount = [];
		var textAreaValuesByTextAreaId = TaskTwo.textAreaValues( TaskTwo.textareaIDs );
		for ( var key in textAreaValuesByTextAreaId ) {
			var textAreaWordsCount = TaskTwo.wordCounter( textAreaValuesByTextAreaId[key] );
			AllAreaWordsCount.push( textAreaWordsCount );
		}
		return AllAreaWordsCount;
	},
	createThreeDimArray: function( allTextAreasWordsCountArr ) {
		var threeDimArray = [],
			objToTwoDimArray;

		for ( var i = 0; i < allTextAreasWordsCountArr.length; i ++ ) {
			objToTwoDimArray = TaskTwo.getCellsData( allTextAreasWordsCountArr[i] );
			threeDimArray.push( objToTwoDimArray );
		}
		return threeDimArray;
	},
	createTable: function() {
		var AlltextareaWordsCount = TaskTwo.createArrayOfTextAreaObjects();
		var threeDimArray = TaskTwo.createThreeDimArray( AlltextareaWordsCount );
		NodeFactory.deleteALLDOMElementsByParent( TaskTwo.tableContentDiv );
	
		for ( var i = 0; i < threeDimArray.length; i ++ ) {
			var tableObject = {
				header: (threeDimArray[i] != null) ? [[{ text: "word"}, { text: "count" } ]] : null,
				data: threeDimArray[i],
				title: "Text Area " + ( i + 1 )
			};
			var cellObject = {
				classNames: ["TaskTwo"]
			}

			var wholeNewTable = NodeFactory.Table.createWholeNewTable( tableObject, cellObject );
			TaskTwo.tableContentDiv.appendChild( wholeNewTable );
		}
	},
	getCellsData: function ( object ) {
		var arrayFromObject = null;

		if (object != null) {
			arrayFromObject = [];

			for ( var key in object ) {
				arrayFromObject.push( [ { text: key}, { text: object[key] } ] );
			}
		}	
		return arrayFromObject;
	},
	wordCounter: function( inputString ) {
		var result = {};
		var splitStrings = inputString.replace(/[\W+\s+]+/g, ' ').trim();
		var stringToLowerCase = splitStrings.toLowerCase();
		var arrayFromString = stringToLowerCase.split(" ");
		
		if (arrayFromString.length === 1 && arrayFromString[0] === "") {
			result = null;
		} else {
			for ( var i = 0; i < arrayFromString.length; i ++ ) {
				if ( !result.hasOwnProperty( arrayFromString[i] ) ) {
					result[arrayFromString[i]] = 1;
				} else {
					result[arrayFromString[i]] ++;
				}
			}
		}
		return result;
	},
	textAreaValues: function( textAreaIDArray ) {
		var textAreaValue = {};
		for ( var i = 0; i < textAreaIDArray.length; i ++ ) {
			var getAreaValue = document.getElementById( textAreaIDArray[i] ).value;

			textAreaValue[textAreaIDArray[i]] = getAreaValue;
		}
		return textAreaValue;
	},
	inputNumbersCompare: function( dropdownObj ) {
		var userInput = TaskTwo.inputText.value;
		var inputNumberArray = userInput.split( "-" );
		var firstNum = parseInt( inputNumberArray[0] );
		var secondNum = parseInt( inputNumberArray[1] );

		if ( !TaskTwo.regexCheck( userInput ) ) {
			alert("Wrong Values!");
		} else {
			var newOption;
			NodeFactory.deleteALLDOMElementsByParent( dropdownObj );

			if ( firstNum < secondNum ) {
				for ( var i = firstNum; i <= secondNum; i ++ ) {
					newOption = NodeFactory.createNewOption( i );
					TaskTwo.dropdownList.appendChild( newOption );
				}
			} else if ( firstNum > secondNum ) {
				for ( var i = firstNum; i >= secondNum; i -- ) {
					newOption = NodeFactory.createNewOption( i );
					TaskTwo.dropdownList.appendChild( newOption );
				}
			}
		}
	},
	regexCheck: function( userText ) {
		var regexCheck = /\b[\d]+-[\d]+\b/g;
		var inputNumberValue = userText;

		return ( inputNumberValue === "" ) ? true 
			: ( inputNumberValue.match( regexCheck ) ) ? true 
			: false;
	},
};

var TaskThree = {
	initialize: function( divId ) {
		var usersArray = [];
	
		for ( var i = 0; i < jsonDataTaskThree.dataset.length; i ++ ) {
			usersArray[i] = [];
		}
		usersArray[0].push( { text: "TBL.Security Users" } );
		usersArray[1].push( { text: "FUNC.fn_Analysis_GetBaseData_SurveyInstances" } );
		usersArray[2].push( { text: "VIEW.vw_MystClients" } );
		usersArray[3].push( { text: "USP.usp_BillingGetInvoiceNumber" } );

		for ( var i = 0; i < jsonDataTaskThree.dataset.length; i ++ ) {	
			//NUMBER OF PARAMETERS	
			usersArray[i].push( { text: jsonDataTaskThree.dataset[i].schema.parameters.length } );

			//NUMBER OF COLUMNS
			usersArray[i].push( { text: jsonDataTaskThree.dataset[i].schema.columns.length } );

			//NUMBER OF NVARCHAR PARAMETERS
			//SUM OF DATATYPELENGTH PARAMETERS
			var objParameters = TaskThree.NVarcharCountAndSumOfDatatypeLength( jsonDataTaskThree.dataset[i].schema.parameters );
			usersArray[i].push( { text: objParameters.counterNVarchar } );

			//NUMBER OF NVARCHAR COLUMNS
			//SUM OF DATATYPELENGTH COLUMNS
			var objColumns = TaskThree.NVarcharCountAndSumOfDatatypeLength( jsonDataTaskThree.dataset[i].schema.columns );
			usersArray[i].push( { text: objColumns.counterNVarchar } );

			//SUM OF DATATYPELENGTH OF ALL 
			usersArray[i].push( { text: objParameters.sumDatatypecharlength + objColumns.sumDatatypecharlength } );
		}
		var tableObject = {
			data: usersArray,
			header: [[{ text: "Datasetname Name" }, { text: "Number Parameters" }, { text: "Number Columns" }, { text: "Number NVarchar Parameters" }, { text: "Number NVarchar Columns" }, { text: "SUM datatypecharlength" }]]
		};
		var cellObject = {
			classNames: ["TaskThree"]
		}
		var wholeNewTable = NodeFactory.Table.createWholeNewTable( tableObject, cellObject );
		var parentDiv = document.getElementById( divId );

		parentDiv.appendChild( wholeNewTable );
	},
	NVarcharCountAndSumOfDatatypeLength: function( dataArray ) {
		var counterNVarchar = 0;
		var sumDatatypecharlength = 0;

		for ( var j = 0; j < dataArray.length; j++ ) {
			if ( dataArray[j].datatype === "nvarchar" ) {
				counterNVarchar += 1;
			}

			if ( dataArray[j].datatypecharlength !== "" && typeof( dataArray[j].datatypecharlength !== "undefined" ) && isNaN( dataArray[j].datatypecharlength ) == false && dataArray[j].datatypecharlength != null ) {
				sumDatatypecharlength += parseInt( dataArray[j].datatypecharlength );
			}
		}
		
		return {
			counterNVarchar: counterNVarchar,
			sumDatatypecharlength: sumDatatypecharlength
		};
	}
};

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
	initialize: function( htmlElemID ) {
		//CONNECTION WITH LAST YEAR DATA
		var jsonDataArray = jsonData.dataset.data;

		//OB JWITH LAST YEAR DATA
		var allYearData = TaskFourLineChart.getDataForChart( jsonDataArray );

		var preparedData = TaskFourLineChart.prepareDataForChart( allYearData );

		TaskFourLineChart.createNewChart( htmlElemID, lineChart );
	},
	getDataForChart: function( jsonData ) {
		var obj = {};

		for ( var i = 0; i < jsonData.length; i ++ ) {

			for (var key in jsonData[i]) {
				if (!obj.hasOwnProperty(key)){
					obj[key] = [jsonData[i][key]];
				} else {
					obj[key].push(jsonData[i][key]);
				}
			}
		}
		return obj;
	},
	countSpeakersInUserObject: function( userObj ) {
		var count = 0;

		for ( var key in userObj ) {
			if ( key !== "Language" ) {
				count ++;
			}
		}
		return count;
	},
	prepareDataForChart: function( dataObj ) {
		var categoriesForChart = lineChart.categories.category;
		var speakersArray = [];
		var countSpeakersInDataObject = TaskFourLineChart.countSpeakersInUserObject( dataObj );

		for ( var key in dataObj ) {
			if ( key === "Language" ) {
				for ( var i = 0; i < dataObj.Language.length; i ++ ) {
					categoriesForChart[i] = 
					{ 
						"label": dataObj[key][i],
						"x": i + 1,
						"showVerticalLine": "1" 
					};
				}
			} else {
				speakersArray.push( key );
			}
		}
		for ( var i = 0; i < countSpeakersInDataObject; i ++ ) {
			lineChart.data.push({ 
				"lineThickness": "3",
				"lineColor": TaskFourLineChart.createRandomColor(),
				"showShadow": "1",
				"seriesName": speakersArray[i],
				"color": TaskFourLineChart.createRandomColor(),
				"showValues": "0",
				"set" : [] 
			});	

			for ( var j = 0; j < dataObj[speakersArray[i]].length; j ++ ) {
				lineChart.data[i].set.push(
					{
						"x": j + 1,
						"y": dataObj[speakersArray[i]][j],
						"toolText": dataObj[speakersArray[i]][j]
					});
			}
		}
	},
	createNewChart: function( htmlElemID, chartObj ) {
		var jsonChart = new TrendChart( document.getElementById ( htmlElemID ), chartObj );
		jsonChart.initialize ( '100%' , '100%' );
	},
	createRandomColor: function() {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[ Math.floor( Math.random() * 16 ) ];
	  }
	  return color;
	}
};

var TaskFive = {
	pageContentDiv: null,

	clearContent: function( elementId ) {
		var myNode = document.getElementById( elementId );
		while ( myNode.firstChild ) {
   			myNode.removeChild( myNode.firstChild );
		}
	},
	prepareDataForTable: function( dataObj ) {
		var jsonData = TaskFiveData;
		var jsonDataArray = TaskFiveData.data;

		var internData = TaskFive.getDataForTable( jsonDataArray );

		var internNames = internData.name;
		var uniqueInternNames = internNames.filter( TaskFive.onlyUnique );

		var internDates = internData.date;
		var uniqueInternDates = internDates.filter( TaskFive.onlyUnique );
		uniqueInternDates = uniqueInternDates.sort();

		for ( var i = 0; i < uniqueInternDates.length; i ++ ) {
			uniqueInternDates[i] = { text: uniqueInternDates[i] }
		}
		uniqueInternDates.unshift("");
		
		var internDataForTable = [];
		var arrayForEachPerson = [];
		var personDate;

		for ( var i = 0; i < uniqueInternNames.length; i ++ ) {

			internDataForTable[i] = [];
			internDataForTable[i].push( { text: uniqueInternNames[i] } );

			var arrayCurrentPerson = [];
			for ( var j = 1; j < uniqueInternDates.length; j ++ ) {
				personDate = TaskFive.getDataForSpecificDate( uniqueInternDates[j].text, uniqueInternNames[i] );
				arrayCurrentPerson.push( personDate );
			}
			arrayForEachPerson.push( arrayCurrentPerson );

			for ( var j = 0; j < arrayForEachPerson[i].length; j ++ ) {
				internDataForTable[i].push( { text: arrayForEachPerson[i][j],
											  image: {
											  	classNames: ["cellImage"],
											  	attributes: {
											  		src: TaskFive.srcImgForCell( arrayForEachPerson[i][j] )
											  	}
											  } 
											} );
			}
		}
		
		return { data: internDataForTable,
				header: uniqueInternDates }
	},
	setButtonListeners: function( asdASD ) {
		console.log( asdASD );
	},
	setButtonActive: function() {
		var parent = document.getElementById( "buttonContainer" );
		var buttons = parent.querySelectorAll(".button");

		for ( var i = 0; i < buttons.length; i ++ ) {
			buttons[i].classList.remove( "active" );
		}
		this.classList.add( "active" );
	},
	setFunctionToButton: function() {
		parent = document.getElementById( "content" );
		var contentDivs = parent.querySelectorAll(".smallContent");

		for ( var i = 0; i < contentDivs.length; i ++ ) {
			contentDivs[i].classList.add( "hiddenContent" );
		}
		var currentSmallContentDiv = document.getElementById( "content" + this.id );
		currentSmallContentDiv.classList.remove( "hiddenContent" );
	},
	initialize: function( htmlElemID ) {
		var tabs = NodeFactory.createTabs( 4 );
		var parent = document.getElementById( htmlElemID );
		parent.appendChild( tabs.tabDiv );
		parent.appendChild( tabs.newContent );

		var taskTwoButton = document.getElementById( "Task2" );
		var taskThreeButton = document.getElementById( "Task3" );
		var taskFourButton = document.getElementById( "Task4" );
		var taskFiveButton = document.getElementById( "Task5" );

		taskTwoButton.addEventListener( "click", TaskFive.setButtonActive )
		taskTwoButton.addEventListener( "click", TaskFive.setFunctionToButton );

		taskThreeButton.addEventListener( "click", TaskFive.setButtonActive );
		taskThreeButton.addEventListener( "click", TaskFive.setFunctionToButton );

		taskFourButton.addEventListener( "click", TaskFive.setButtonActive );
		taskFourButton.addEventListener( "click", TaskFive.setFunctionToButton );

		taskFiveButton.addEventListener( "click", TaskFive.setButtonActive );
		taskFiveButton.addEventListener( "click", TaskFive.setFunctionToButton );

		TaskTwo.initialize( 'contentTask2' );
		TaskThree.initialize( 'contentTask3' );
		TaskFourLineChart.initialize( 'contentTask4' );
		TaskFive.initializeTaskFive( 'contentTask5' );
	},
	initializeTaskFive: function( htmlElemID ) {
		var preparedDataForTable = TaskFive.prepareDataForTable( TaskFiveData );

		var cellObjectConfig = {
			classNames: ["TaskFive"]
		}

		var tableObject = {
			data: preparedDataForTable.data,
			header: [preparedDataForTable.header]
		};

		//CREATING THE TABLE
		var wholeNewTable = NodeFactory.Table.createWholeNewTable( tableObject, cellObjectConfig );
		var parentDiv = document.getElementById( htmlElemID );
		parentDiv.appendChild( wholeNewTable );
	},		
	srcImgForCell: function( data ) {
		if ( data > 0 && data < 70 ) {
			var src = "sad.jpg";
			return src;
		} else if ( data >= 70 && data < 90 ) {
			var src = "uncertain.jpg";
			return src;
		} else if ( data >= 90 && data < 101 ) {
			var src = "happy.jpg";
			return src;
		}
	},
	getDataForSpecificDate: function( userDate, userName ) {
		var jsonDataArray = TaskFiveData.data;
		var endValue;

		for ( var i = 0; i < jsonDataArray.length; i ++ ) {
			if ( jsonDataArray[i].date === userDate ) {
				if ( jsonDataArray[i].name === userName ) {
					endValue = jsonDataArray[i].pct;
				}
			}
		}
		return endValue;
	},
	onlyUnique: function( value, index, self ) {
		return self.indexOf(value) === index;
	},
	getDataForTable: function( jsonData ) {
		var obj = {};
		for ( var i = 0; i < jsonData.length; i ++ ) {

			for ( var key in jsonData[i] ) {
				if ( !obj.hasOwnProperty( key ) ) {
					obj[key] = [jsonData[i][key]];
				} else {
					obj[key].push( jsonData[i][key]);
				}
			}
		}
		return obj;
	},

};

