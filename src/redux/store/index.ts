import { legacy_createStore as createStore } from "redux";

import Reducer from "../Reducer";

const store = createStore(Reducer);

export { store };
