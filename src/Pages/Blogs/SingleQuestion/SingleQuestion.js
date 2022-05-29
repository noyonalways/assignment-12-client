import React from 'react';

const SingleQuestion = ({item}) => {
    const {question, answer} = item;
    return (
        <div  data-aos="flip-up"
        data-aos-easing="linear"
        data-aos-duration="1000" tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                {question}
            </div>
            <div className="collapse-content">
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default SingleQuestion;