import React from 'react'

const SectionTitle2 = (props) => {
    const title = ()=>{
        return 'one'
    }
    return(
        <div className="row">
            <div className="wpo-section-title-s2">
                <span>{props.subTitle}</span>
                <h2 className={`wpo-section-title-s2-${props.vText}`}>{props.MainTitle}</h2>
                <div className="invisible-text">
                    <h2>{props.vText}</h2>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle2;