import { useSelector } from "react-redux";

import ColorCell from "./colorCell/ColorCell";

import "./ColorPalette.scss";

function decNumberToHexString(number, digNum = 0) {

    return number.toString(16).padStart(digNum, "0").toUpperCase();

}

function fillArrayWithColor(array, redVelocity = 10, greenVelocity = 10, blueVelocity = 10) {

    let redNum = 255;
    let greenNum = 255;
    let blueNum = 255;
    let redChange = redNum / redVelocity;
    let greenChange = greenNum / greenVelocity;
    let blueChange = blueNum / blueVelocity;

    let maxCells = Math.max(redVelocity, greenVelocity, blueVelocity);

    for(let i = 0; i < maxCells; i++){

        let usableRedNum = parseInt(redNum);
        let usableGreenNum = parseInt(greenNum);
        let usableBlueNum = parseInt(blueNum);
        let red = decNumberToHexString(usableRedNum, 2);
        let green = decNumberToHexString(usableGreenNum, 2);
        let blue = decNumberToHexString(usableBlueNum, 2);

        array.push("#" + red + green + blue);

        redNum = Math.max(redNum - redChange, 0);
        greenNum = Math.max(greenNum - greenChange, 0);
        blueNum = Math.max(greenNum - blueChange, 0);

    }

    return array;

}

function colorRows(colorArr) {

    let colorCells = colorArr.map((elem, i) => {
        return(
            <ColorCell key={i} color={elem}/>
        );                            
    });

    let colorRows = [];

    for(
        let i = colorArr.length, start = 0, end = 10; 
        i > 0;
        i -= 10, start += 10, end += 10
    ) {

        colorRows.push(
            <div key={i} className="ColorRow">
                {
                    colorCells.slice(start, end)
                }
            </div>
        )

    }

    return colorRows;

}

function ColorPalette() {

    const { redVelocity, greenVelocity, blueVelocity} = useSelector(state => state.colorReducer);

    let colorArr = [];
    fillArrayWithColor(
        colorArr,
        redVelocity,
        greenVelocity,
        blueVelocity
    );

    return (
        <div className="ColorPalette">
            {
                colorRows(colorArr)
            }
        </div>
    );

}

export default ColorPalette;