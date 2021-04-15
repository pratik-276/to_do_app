import React from 'react';
import { categoryToIcon } from '../../utility/CategoryIcon';

const Item = (props) => {
    return (
        <div>
            <div class="modal-content left-align">
                <h4>Title<p style={{
                    fontSize: "22px",
                    marginTop: "0px"
                }}>{props.data.title}</p></h4>
                
                <h4>Description<p style={{
                    fontSize: "22px",
                    marginTop: "0px"
                }}>{props.data.description===""?"No description added":props.data.description}</p></h4>
                
                <h4>Category</h4>
                <p style={{
                    fontSize: "22px",
                    marginTop: "0px"
                }}>{categoryToIcon(props.data.category)}&nbsp;&nbsp;{props.data.category}</p>
            </div>
            <div class="modal-footer" style={{textAlign: "center"}}>
                <button className="btn-floating red">
                    <i class="material-icons modal-close">close</i>
                </button>
            </div>
        </div>
    );
}
 
export default Item;