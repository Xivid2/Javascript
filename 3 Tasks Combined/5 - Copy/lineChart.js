var lineChart = {
    "anchors": {
        "showAnchors": "1",
        "anchorRadius": "4",
        "anchorSides": "3",
        "anchorBorderThickness": "5"
    },
    "base": {
        "baseFontSize": "13",
        "baseFontColor": "7a7a7a",
        "baseFont": "Tahoma",
        "bgColor": "77ccd6",
        "bgAlpha": "100",
        "bgAngle": "90",
        "chartLeftMargin": "8",
        "chartRightMargin": "10",
        "chartTopMargin": "6",
        "chartBottomMargin": "4",
        "lineAlpha": "80"
    },
    "canvas": {
        "canvasBorderThickness": "1",
        "canvasBorderColor": "000000",
        "canvasBgColor": "FFFFFF",
        "outCnvBaseFont": "Tahoma",
        "outCnvBaseFontSize": "11"
    },
    "divlines": {
        "divlinecolor": "DFDFDF",
        "numdivlines": "3",
        "showAlternateHGridColor": "1",
        "AlternateHGridAlpha": "30",
        "AlternateHGridColor": "CCCCCC"
    },
    "headings": {
        "rotateCategoryNames": "1",
        "headingsHover": "1",
        "caption": "Speakers Statistics"
    },
    "numerical": {
        "decimalPrecision": "2",
        "decimals": "1",
        "numberPrefix": "",
        "numberSuffix": ""
    },
    "legend": {
        "showLegend": "1",
        "legendBgColor": "f0f3ed",
        "legendPadding": "0",
        "legendPosition": "BOTTOM",
        "legendBorderAlpha": "0"
    },
    "scales": {
        "xAxisMaxValue": "5",
        "xAxisMinValue": "1",
        "yAxisMinValue": "0",
        "yAxisMaxValue": "100"
    },
    "trendLines": {
        "line": [
            {
                "startValue": "40",
                "endValue": "85",
                "color": "FF8888",
                "thickness": "1",
                "displayvalue": "Average",
                "dashed": "1",
                "isTrendZone": "0",
                "alpha": ""
            },
            {
                "startValue": "0",
                "endValue": "40",
                "color": "FF0C51",
                "thickness": "",
                "displayvalue": "Low Performance",
                "dashed": "0",
                "isTrendZone": "1",
                "alpha": "15"
            },
            {
                "startValue": "85",
                "endValue": "100",
                "color": "00FF00",
                "thickness": "",
                "displayvalue": "High Performance",
                "dashed": "0",
                "isTrendZone": "1",
                "alpha": "15"
            }
        ]
    },
    "tooltip": {
        "toolTipBgColor": "ffffff",
        "toolTipBorderColor": "7e7e7e"
    },
    "categories": {
        "category": []
    },
    "data": [],
    "styles": {
        "definition": [
            {
                "name": "LineShadow",
                "color": "777777",
                "distance": "-4",
                "type": "shadow"
            },
            {
                "name": "myCaptionFont",
                "font": "Tahoma",
                "size": "13",
                "color": "333333",
                "bold": "1",
                "type": "font"
            }
        ],
        "application": [
            {
                "toObject": "DATAPLOT",
                "styles": "LineShadow"
            },
            {
                "toObject": "Caption",
                "styles": "myCaptionFont"
            }
        ]
    }
}