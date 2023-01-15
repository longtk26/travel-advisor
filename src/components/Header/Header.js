import clsx from "clsx";
import styles from "./Header.module.scss";

const classesHeader = clsx(styles.inner);

function Header() {
    return <h1 className={classesHeader}>Header</h1>;
}

export default Header;
