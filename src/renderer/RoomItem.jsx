import React from "react";
import {Link} from "react-router";

const LINK_STYLE = {
    color: "inhert",
    textDecoration: "none"
};

export default function RoomItem(props){
    const {selected} = props;
    const {description, key} = props.room;
    return(
        <div className={selected ? "list-group-item selected" : "list-group-item"} style={LINK_STYLE}>
            <Link to={`/rooms/${key}`}>
                <div className="media-body">
                    <strong>{description}</strong>
                </div>
            </Link>
        </div>
    );
}