import '../index.css'
import styles from './UiButton.module.css'
import cn from 'classnames'

const UiButton = ({ text, onClick, disabled, theme='dark', classes }) => {
    return (
            <button
                className={cn(styles.button, styles[theme], classes)}
                disabled={disabled}
                onClick={onClick}
            > { text }
            </button>
    );
};

export default UiButton;