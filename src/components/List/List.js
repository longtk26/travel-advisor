import clsx from "clsx";
import styles from "./List.module.scss";

const classesList = clsx(styles.inner);

function List() {
    return <h1 className={classesList}>List</h1>;
}

export default List;
