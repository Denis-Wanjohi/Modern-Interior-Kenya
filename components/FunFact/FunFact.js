import React from 'react'


const FunFact = (props) => {

    const funfact = [
        // {
        //     title: '25',
        //     subTitle: 'Years Of Experience',
        // },
        {
            title: '20+',
            subTitle: 'Expert Specialist',
        },
        {
            title: '50+',
            subTitle: 'Successful Project',
        },
        {
            title: '40+',
            subTitle: 'Happy Customers',
        },


    ]


    return (

        <section className={`wpo-fun-fact-section pb-120 ${props.fnClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids F">
                            {funfact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3>{funfact.title}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;