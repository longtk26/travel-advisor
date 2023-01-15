import clsx from "clsx";
import { Header, List, Map } from "./components";
import styles from "./App.module.scss";
import GlobalStyles from "./components/GlobalStyles";

function App() {
    return (
        <GlobalStyles>
            <Header />
            <div className={clsx(styles.container)}>
                <List />
                <Map />
            </div>
        </GlobalStyles>
    );
}

export default App;
