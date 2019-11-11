var NodeFactory = {
	createDOMElement: function( typeElem, params ) {
		var elem = document.createElement( typeElem, params );

		NodeFactory.addClasses( elem, params.classNames );

		NodeFactory.addAttributes( elem, params.attributes );

		NodeFactory.addText( elem, params.text );

		NodeFactory.addEventListener( elem, params.eventListeners );
		return elem;
	},
	addClasses: function( ref, classNames ) {
		if ( typeof classNames !== "undefined" ) {
			for ( var i = 0; i < classNames.length; i++ ) {
				ref.className += ( classNames[i] + " " );
			}
		}
	},
	addAttributes: function( ref, attributes ) {
		if ( typeof attributes !== "undefined" ) {
			for ( var attribute in attributes ) {
				ref.setAttribute( attribute, attributes[attribute] );
			}
		}
	},
	addText: function( ref, text ) {
		if ( typeof text !== "undefined" ) {
			ref.appendChild( document.createTextNode( text ) );
		}
	},
	addEventListener: function( ref, eventListeners ) {
		if ( typeof eventListeners !== "undefined" ) {
			for ( var eventNow in eventListeners ) {
				ref.addEventListener( eventNow, eventListeners[eventNow] );
			}
		}
	},
	addNewImage: function( imageObj ) {
		return NodeFactory.createDOMElement( "img", imageObj );
	},
	addNewButton: function( buttonObj ) {
		return NodeFactory.createDOMElement( "button", buttonObj );
	},
	addNewDiv: function( divObj ) {
		return NodeFactory.createDOMElement( "div", divObj );
	},
	addNewInput: function( inputObj ) {
		return NodeFactory.createDOMElement( "input", inputObj );
	},
	addNewSelect: function( selectObj ) {
		return NodeFactory.createDOMElement( "select", selectObj );
	},
	addNewOption: function( optionObj ) {
		return NodeFactory.createDOMElement( "option", optionObj );
	},
	addNewTextarea: function( textareaObj ) {
		return NodeFactory.createDOMElement( "textarea", textareaObj );
	},
	deleteALLDOMElementsByParent: function ( parentElement ) {
		while ( parentElement.hasChildNodes() ) {
		    parentElement.removeChild(parentElement.childNodes[0]);
		}
	},
	createNewOptions: function( parentSelect, numberOfOptions, optionObj ) {
		var i = 0;
		while ( i < numberOfOptions ) {
			var newOption = NodeFactory.addNewOption( optionObj );
			i ++;
			parentSelect.appendChild( newOption );
		}
	},
	createNewSelect: function( selectObj ) {
		return NodeFactory.addNewSelect( selectObj );
	},
	createNewOption: function( number ) {
		var newOption = NodeFactory.addNewOption( {
			attributes: {
				id: "optionButton" + number,
				value: number
			},
			text: number
		});
		return newOption;
	},
	Table: {
		createWholeNewTable: function ( tableObj, cellObj ) {
			var tableContainerConfig = {
				classNames: ["bigTable"]
			};

			var createTableDataContent = null;

			var tableContainer = NodeFactory.addNewDiv( tableContainerConfig );
			if ( tableObj.hasOwnProperty("title") && tableObj.title != null ) {
				var tableTitle = NodeFactory.Table.createTableTitle( tableObj.title );
				tableContainer.appendChild( tableTitle );
			}
			
			if ( tableObj.hasOwnProperty("header") && tableObj.header != null ) {
				var tableHeader = NodeFactory.Table.createTableHeader( tableObj.header, cellObj );
				tableContainer.appendChild( tableHeader );
			}

			if (tableObj.data != null) {
				createTableDataContent = NodeFactory.Table.createTableContent( tableObj.data, cellObj );
			} else {
				var noDataDivSpecif = {
					classNames: ["noDataDiv"],
					text: "No data to display."
				};
				createTableDataContent = NodeFactory.addNewDiv( noDataDivSpecif );
			}
			tableContainer.appendChild( createTableDataContent );

			return tableContainer;
		},

		createTableTitle: function ( title ) {
			return NodeFactory.addNewDiv({
				classNames: ["tableTitle"],
				text: title
			});
		},
		createTableHeader: function ( tableHeaderArray, cellObj ) {
			var tableHeaderConfig = {
				classNames: ["tableHeader"],
				attributes: {
					id: "tableHeaderID"
				}
			}
			var tableHeader = NodeFactory.addNewDiv( tableHeaderConfig );
			var tableHeaderData = NodeFactory.Table.createTableDataContent( tableHeaderArray, cellObj );
			tableHeader.appendChild( tableHeaderData );

			return tableHeader;
		},
		createTableContent: function( TwoDimArray, cellObj ) {
			var tableContentConfig = {
				classNames: ["tableContent"],
				attributes: {
					id: "tableContentID"
				}
			};
			var tableContent = NodeFactory.addNewDiv( tableContentConfig );
			var tableDataContent = NodeFactory.Table.createTableDataContent( TwoDimArray, cellObj );

			tableContent.appendChild( tableDataContent );

			return tableContent;
		},
		createTableDataContent: function ( inputArray, cellObj ) {
			var tableCell,
				tableRow,
				tableRows = NodeFactory.addNewDiv( { classnames: ["tableRows"] } );

			for ( var i = 0; i < inputArray.length; i ++ ) {
				tableRow = NodeFactory.Table.createTableRow();
				tableRows.appendChild( tableRow );
				for ( var j = 0; j < inputArray[i].length; j ++ ) {
					tableCell = NodeFactory.Table.createTableCell(  inputArray[i][j], cellObj );
					tableRow.appendChild( tableCell );
				}
			}
			return tableRows;
		},
		createTableRow: function () {
			return NodeFactory.addNewDiv( {
				classNames: ["tableRows"],
			} );
		},
		createTableCell: function ( inputObj, cellObj ) {
			// console.log( cellObj );
			var tableCell = NodeFactory.addNewDiv( cellObj );
			NodeFactory.addText( tableCell, inputObj.text );
			if ( inputObj.hasOwnProperty( "image" ) ) {
				if ( inputObj.image.attributes.src !== undefined ) {
					var tableCellImg = NodeFactory.addNewImage( inputObj.image );
					tableCell.appendChild( tableCellImg );
				}
			}
			return tableCell;
		},
	},
	createTabs: function( numberTabs ) {
		var tabsDivConfig = {
			classNames: ["tabsContainer"],
			attributes: {
				id: "buttonContainer"
			}
		};

		var tabDiv = NodeFactory.addNewDiv( tabsDivConfig );

		for ( var i = 0; i < numberTabs; i ++ ) {
			var tabConfig = {
				classNames: ["button"],
				attributes: {
					id: "Task" + ( i + 2 )
				},
				text: "Task " + ( i + 2 )
			};
			var newTab = NodeFactory.addNewDiv( tabConfig );
			tabDiv.appendChild( newTab );
		}

		var contentConfig = {
			attributes: {
				id: "content"
			}
		};
		var newContent = NodeFactory.addNewDiv( contentConfig );

		return { tabDiv, newContent };
	}
}

