import React, { useState } from "react";
import { useDispatch } from "react-redux";

const CharacterButtons = (props) => {
  const dispatch = useDispatch();

  const { character, quote } = props;
  const key = character + quote;

  const [isEditable, setEditable] = useState(false);
  const [editQuoteInput, setEditQuoteInput] = useState();

  const saveQuoteEdit = () => {
    dispatch({
      type: "EDITQUOTE",
      payload: {
        key: key,
        newQuote: editQuoteInput,
      },
    });
    setEditable(!isEditable);
  };

  const editQuoteInputChange = (e) => {
    setEditQuoteInput(e.target.value);
  };

  return (
    <div className="characterButtons">
      <button
        className="read button"
        type="button"
        onClick={() => dispatch({ type: "TOGGLEQUOTE", payload: key })}
      >
        Toggle read
      </button>
      <button
        className="delete button"
        type="button"
        onClick={() => dispatch({ type: "DELETEQUOTE", payload: key })}
      >
        Delete
      </button>

      {isEditable ? (
        <div className="editableContainer">
          <button onClick={saveQuoteEdit} className="button" type="button">
            Save
          </button>
          <input
            id="editQuoteInput"
            type="text"
            placeholder="Edit"
            onChange={editQuoteInputChange}
          ></input>
        </div>
      ) : (
        <button
          onClick={() => {
            setEditable(!isEditable);
          }}
          className="button"
          type="button"
        >
          Edit Quote
        </button>
      )}
    </div>
  );
};

export default CharacterButtons;
