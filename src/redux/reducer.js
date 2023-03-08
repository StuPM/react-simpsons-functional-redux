import { initialState } from "./initialState";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "SETSIMPSONSDATA": {
      const _state = { ...state };
      _state.simpsons = action.payload;
      return _state;
    }
    case "SORTDATA": {
      const _simpsons = [...state.simpsons];
      _simpsons.sort((a, b) => {
        const first = a.character;
        const second = b.character;

        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }
        return 0;
      });

      return { ...state, simpsons: _simpsons };
    }
    case "SEARCHDATA": {
      const _simpsons = [...state.simpsons];
      const searchTerm = action.payload;

      for (const element of _simpsons) {
        if (element.character.toLowerCase().includes(searchTerm)) {
          element.visible = true;
        } else {
          element.visible = false;
        }
      }

      return { ...state, simpsons: _simpsons };
    }

    case "TOGGLEQUOTE": {
      const _simpsons = [...state.simpsons];
      const _readQuotes = state.readQuotes;

      const indexToToggle = _simpsons.findIndex(
        (element) => element.character + element.quote === action.payload
      );

      const newReadValue =
        _simpsons[indexToToggle].quoteRead === "notRead" ? "read" : "notRead";

      _simpsons[indexToToggle].quoteRead = newReadValue;

      if (newReadValue === "read") {
        return { ...state, simpsons: _simpsons, readQuotes: _readQuotes + 1 };
      } else {
        return { ...state, simpsons: _simpsons, readQuotes: _readQuotes - 1 };
      }
    }

    case "DELETEQUOTE": {
      const _simpsons = [...state.simpsons];
      const _readQuotes = state.readQuotes;

      const indexToDelete = _simpsons.findIndex(
        (element) => element.character + element.quote === action.payload
      );

      _simpsons.splice(indexToDelete, 1);

      if (_simpsons[indexToDelete].quoteRead === "read") {
        return { ...state, simpsons: _simpsons, readQuotes: _readQuotes - 1 };
      }

      return { ...state, simpsons: _simpsons };
    }

    default:
      console.log("Reducer type not known, probably a typo!");
      return state;
  }
}
