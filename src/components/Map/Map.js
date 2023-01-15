import clsx from "clsx";
import styles from "./Map.module.scss";

const classesMap = clsx(styles.inner);

function Map() {
    return <h1 className={classesMap}>Map</h1>;
}

export default Map;
