import React from 'react';
import './Thriller.scss';

const Thriller = (props) => {
  const [paragraph1, paragraph2, paragraph3] = props.paragraphs;

  return (
    <div className="thriller">
      <p className="paragraph paragraph_size_large paragraph_align_center thriller__paragraph">
        {paragraph1}
      </p>
      <p className="paragraph paragraph_line_high paragraph_align_center paragraph_color_grey paragraph_size_medSmall thriller__paragraph">
        {paragraph2}
      </p>
      {
        paragraph3 && 
        <p className="paragraph paragraph_line_high paragraph_align_center paragraph_shortened_large thriller__paragraph">
          {paragraph3}
        </p>
      }
    </div>
  );
}

export default Thriller;