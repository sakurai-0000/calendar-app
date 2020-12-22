import React from "react";
import ReactDOM from "react-dom";
import CalendarBord from "./components/CalendarBord/container";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";
import DaysUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import dayjs from "dayjs";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";
import ErrorSnackbar from "./components/ErrorSnackbar/contaienr";
import Headers from "./components/Headers/container";

dayjs.locale("ja");

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={DaysUtils}>
            <Headers />
            <CalendarBord />
            <AddScheduleDialog />
            <CurrentScheduleDialog />
            <ErrorSnackbar />
        </MuiPickersUtilsProvider>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
