import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SelectBox = ({
  options = [{text: null, value: null}],
  placeholderText,
  boxSize = "md",
  disabled = false
}) => {
  const [selectedOptionText, setOptionText] = useState(placeholderText || options[0].text);
  const [selectedValue, setValue] = useState(!placeholderText ? options[0].value : '' );
  const [isOpen, setOpen] = useState(false);
  
  const clickHandler = () => {
    setOpen(!isOpen);
  };
  
  const selectOption = (e) => {
    setValue(e.target.dataset.value);
    setOptionText(e.target.innerText);
    setOpen(false);
  };
  
  if(options[0].text === null && options[0].value === null) return null;
  
  return (
    <div
      className={`select-box ${boxSize} ${isOpen ? "on" : ""}`}>
      {
        disabled
        ? <div
            className="btn-select-box disabled">
            <span className="select-value-text">{ selectedOptionText }</span>
            <FontAwesomeIcon icon={faChevronDown} className="ico-arrow-down" />
          </div>
        : <button
            className="btn-select-box"
            onClick={clickHandler}
            type="button">
            <span className="select-value-text">{ selectedOptionText }</span>
            <FontAwesomeIcon icon={faChevronDown} className="ico-arrow-down" />
          </button>
      }
      <div
        className="select-list-wrap">
        <ul className="select-list">
          {
            placeholderText &&
            <li className="select-item">
              <button
                className="btn-select-item"
                type="button"
                data-value=''
                onClick={selectOption}>
                {placeholderText}
              </button>
            </li>
          }
          {
            options.map(({value, text, disabled}, i) => {
              return <li
                key={i}
                className={`select-item ${selectedValue == value ? "selected" : ""}`}>
                  {
                    disabled
                    ? <div
                        className="btn-select-item disabled"
                      >
                        {text}
                      </div>
                    : <button
                        className="btn-select-item"
                        type="button"
                        data-value={value}
                        onClick={selectOption}>
                        {text}
                      </button>
                  }
              </li>
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default SelectBox;
