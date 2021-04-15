import React from 'react';
import { categoryToIcon } from '../../utility/CategoryIcon';

const Item = (props) => {
    return (
        <div>
            <div class="modal-content left-align">
                <h5>Title<p style={{
                    fontSize: "20px",
                    marginTop: "0px"
                }}>{props.data.title}</p></h5>
                
                <h5>Description<p style={{
                    fontSize: "20px",
                    marginTop: "0px"
                }}>{props.data.description===""?"No description added":props.data.description}</p></h5>
                
                <h5>Category</h5>
                <p style={{
                    fontSize: "20px",
                    marginTop: "0px"
                }}>{categoryToIcon(props.data.category)}&nbsp;&nbsp;{props.data.category}</p>

                {props.data.date ? (<h5>Date<p style={{
                    fontSize: "20px",
                    marginTop: "0px"
                }}>{props.data.date}</p></h5>) : null}

                {props.data.time ? (<h5>Time<p style={{
                    fontSize: "20px",
                    marginTop: "0px"
                }}>{props.data.time===""?"No time provided":props.data.time}</p></h5>) : null}

                {props.data.status ? (<h5>Status<p style={{
                    fontSize: "20px",
                    marginTop: "0px"
                }}>Completed <i class="material-icons green-text">done_all</i></p></h5>) : null}
                
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