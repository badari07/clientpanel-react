import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
import notifyReducer from "./reducers/notifyReducer";
import settingsReducer from "./reducers/settingReducers";

const firebaseConfig = {
  apiKey: "AIzaSyAUbcmhHbPioSSC_Uwg0Ylj9J_p_yiw6rc",
  authDomain: "clientpanel-react-f3f0e.firebaseapp.com",
  databaseURL: "https://clientpanel-react-f3f0e.firebaseio.com",
  projectId: "clientpanel-react-f3f0e",
  storageBucket: "clientpanel-react-f3f0e.appspot.com",
  messagingSenderId: "72537615270",
  appId: "1:72537615270:web:83ec7e9a595bd2fee53d67",
  measurementId: "G-JC8C857EVY",
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};
// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
// firebase.firestore();
firebase.firestore();

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer,
});

if (localStorage.getItem("settings") == null) {
  // Default settings
  const defaultSettings = {
    allowRegistration: false,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
  };
  localStorage.setItem("settings", JSON.stringify(defaultSettings));
}
// Create initial state

const initialState = {
  settings: JSON.parse(localStorage.getItem("settings")),
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export { store, rrfProps };
