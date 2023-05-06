import styles from './UiButton.module.css'
const UiButton = ({ text, onClick, disabled }) => {
    return (
        <div>
            <button
                className={styles.btns}
                disabled={disabled}
                onClick={onClick}
            > { text }
            </button>

        </div>
    );
};

export default UiButton;