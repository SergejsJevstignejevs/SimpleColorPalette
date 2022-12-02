import { useDispatch, useSelector } from 'react-redux';

import { changeRedVelocity, changeGreenVelocity, changeBlueVelocity } from '../../store/actions';

import "./ColorOptionPanel.scss";

function ColorOptionPanel() {

    const dispatch = useDispatch();
    const { redVelocity, greenVelocity, blueVelocity} = useSelector(state => state.colorReducer);

    return (
        <div className="ColorOptionsPanel">
            <div className="ColorOption">
                <label htmlFor="RedVelocity">RedVelocity: </label>
                <input 
                    id="RedVelocity"
                    type="number" 
                    defaultValue={redVelocity}
                    min="1" 
                    max="3000" 
                    onChange={(e) => { 
                        e.target.value = Math.min(Math.max(e.target.value, 0), 3000);
                        dispatch(changeRedVelocity(e.target.value));
                    }
                    }
                />
            </div>
            <div className="ColorOption">
                <label htmlFor="GreenVelocity">GreenVelocity: </label>
                <input 
                    id="GreenVelocity"
                    type="number" 
                    min="1" 
                    max="3000"
                    defaultValue={greenVelocity}
                    onChange={(e) => { 
                        e.target.value = Math.min(Math.max(e.target.value, 0), 3000);
                        dispatch(changeGreenVelocity(e.target.value));
                    }
                    }
                />
            </div>
            <div className="ColorOption">
                <label htmlFor="BlueVelocity">BlueVelocity: </label>
                <input 
                    id="BlueVelocity"
                    type="number" 
                    min="1"
                    max="3000"
                    defaultValue={blueVelocity}
                    onChange={(e) => { 
                        e.target.value = Math.min(Math.max(e.target.value, 0), 3000);
                        dispatch(changeBlueVelocity(e.target.value));
                    }
                    }
                />
            </div>
            <div className="ColorOption">
                <p className="PsNotion">
                    P.S.: Color velocity - it is how fast color changes.
                    Smaller the number - the faster will be changes.
                </p>
            </div>
        </div>
    );
}

export default ColorOptionPanel;