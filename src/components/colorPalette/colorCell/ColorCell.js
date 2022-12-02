
import "./ColorCell.scss";

function ColorCell(props) {
    return (
        <div 
            className="ColorCell"
            style={{backgroundColor: props.color}}
            value={props.color}>
        </div>
    );
}

export default ColorCell;