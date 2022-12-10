import styles from "./ToggleSwitch.module.css";

const ToggleSwitch = ({
    isOn, 
    handleToggle,
    leftAriaLabel,
    leftEmoji,
    rightAriaLabel,
    rightEmoji
}) => {
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
                {isOn && (
                <span 
                    role="img"
                    aria-label={leftAriaLabel}
                    className={styles.left}
                    >
                    {leftEmoji}
                </span>
                )}
                <span className={styles.toggleSwitchButton} />
                {!isOn && (
                    <span
                        role="img"
                        aria-label={rightAriaLabel}
                        className={styles.right}
                    >
                    {rightEmoji}
                    </span>
                )}
            </label>
        </div>
    );
};

export default ToggleSwitch;