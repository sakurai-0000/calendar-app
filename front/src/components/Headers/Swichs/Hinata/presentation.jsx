import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SwitchLabels = ({ hinata, onSwitch }) => {
    const isChecked = hinata.checked;

    const handleChange = (event) => {
        onSwitch(event.target.checked);
    };

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Switch
                        checked={isChecked}
                        onChange={handleChange}
                        name="HinataMode"
                        color="primary"
                    />
                }
                label="Hinata"
            />
        </FormGroup>
    );
};

export default SwitchLabels;
