import React from 'react';
import styles from './ColorPicker.module.css';

const ColorPicker = ({ options }) => {
    return (
        <div className={styles.ColorPicker}>
            <h2 className={styles.ColorPicker__title}>Color Picker</h2>
            <div>
                {options.map(({ label, color }) => (
                    <span
                        key={label}
                        className={styles.ColorPicker__option}
                        style={{ backgroundColor: color }}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ColorPicker;