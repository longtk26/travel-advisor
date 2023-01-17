import { useState } from "react";
import clsx from "clsx";
import styles from "./Type.module.scss";
import { ArrowDownIcon } from "../../Icons";

function Type({ value, type, active, options }) {
    const [show, setShow] = useState(false);
    const [option, setOption] = useState(value);
    const [activeId, setActiveId] = useState(0);

    const RenderOptions = ({ options }) => {
        const handleItem = (id, item) => {
            setActiveId(id);
            setShow(false);
            setOption(item);
        };

        return (
            <ul
                className={clsx(styles.list)}
                onMouseLeave={() => setShow(false)}
            >
                {options.map((option, index) => (
                    <li
                        key={index}
                        className={clsx(styles.item, {
                            [styles.active]: activeId === index ? true : false,
                        })}
                        onClick={(e) => handleItem(index, e.target.innerText)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className={clsx(styles.container)}>
            {active && <span className={clsx(styles.type)}>{type}</span>}
            <div className={clsx(styles.input)} onClick={() => setShow(true)}>
                <span className={clsx(styles.label)}>{option}</span>
                <ArrowDownIcon />
            </div>
            {options && show && <RenderOptions options={options} />}
        </div>
    );
}

export default Type;
