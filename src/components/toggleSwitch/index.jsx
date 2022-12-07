import styles from "./ToggleSwitch.module.css";

const ToggleSwitch = ({isOn, handleToggle}) => {
    return (
        <div>
            <input 
                className={styles.toggleSwitchCheckbox}
                checked={isOn}
                onChange={handleToggle}
                id={`toggle-switch`}
                type="checkbox"
            />
            <label className={styles.toggleSwitchLabel} htmlFor="toggle-switch">
                <span className={styles.toggleSwitchButton}></span>
            </label>
        </div>
    );
};

export default ToggleSwitch;