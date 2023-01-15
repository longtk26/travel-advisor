// import { Autocomplete } from "@react-google-maps/api";
import clsx from "clsx";

import styles from "./Header.module.scss";
import { SearchIcon } from "../../Icons";

function Header() {
    return (
        <div className={clsx(styles.header)}>
            <h1 className={clsx(styles.logo)}>travel advisor</h1>
            <div className={clsx(styles.container)}>
                <label htmlFor="search" className={clsx(styles.title)}>
                    Explore new places
                </label>
                {/* <Autocomplete> */}
                <div className={clsx(styles.search)}>
                    <SearchIcon className={clsx(styles.icon)} />
                    <input
                        id="search"
                        type="text"
                        className={clsx(styles.input)}
                        placeholder="Search..."
                    />
                </div>
                {/* </Autocomplete> */}
            </div>
        </div>
    );
}

export default Header;
