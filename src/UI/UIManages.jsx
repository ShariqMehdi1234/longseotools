import React from 'react';
import { Link } from "react-router-dom";

function UIManages(Tag,classNameDiv,classNameLink,toLink,NameLink) {

    console.log(Tag);
    if(Tag === 'Button') {
        return (
            <React.Fragment>
                <div className={classNameDiv}>
                    <Link to={toLink} className={classNameLink}>{NameLink}</Link>
                </div>
            </React.Fragment>
          )
    }
    else if (Tag === 'Link') {
        return (
            <React.Fragment>
                <Link to={toLink} className={classNameLink}>{NameLink}</Link>
            </React.Fragment>
          )
    }
}

export default UIManages;