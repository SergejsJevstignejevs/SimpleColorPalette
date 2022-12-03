import { useDispatch } from "react-redux";

import { changeSelectedColor } from "../../../store/actions";

import "./ColorCell.scss";

function ColorCell(props) {

    const dispatch = useDispatch();

    return (
        <div 
            className="ColorCell"
            style={{backgroundColor: props.color}}
            value={props.color}
            onClick={() => {
                    dispatch(changeSelectedColor(props.color));
                }
            }>
        </div>
    );
}

export default ColorCell;