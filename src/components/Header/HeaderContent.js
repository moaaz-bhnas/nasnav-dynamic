import React from 'react';

const HeaderContent = (props) => {
  const {text, contentWidthClass} = props;

  return (
    <div className={`header__content ${contentWidthClass}`}>
      <p class="paragraph header__paragraph paragraph_size_xLarge paragraph_color_white paragraph_weight_light">
        {text.paragraphs[0]}
      </p>
      <p class="paragraph header__paragraph paragraph_line_high paragraph_color_white paragraph_weight_med">
        {text.paragraphs[1]}
      </p>
      <button class="button header__button button_color_blue button_back_white button_size_large button_shape_oval">
        {text.button}
      </button>
    </div>
  );
}

export default HeaderContent;