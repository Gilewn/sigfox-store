import React, { forwardRef } from 'react';
import { useLogin} from 'react-admin';
import MenuItem from '@material-ui/core/MenuItem';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

const MyLoginButton = forwardRef((props, ref) => {
    const login = useLogin();
    const handleClick = () => login();
    return (
        <MenuItem
            onClick={handleClick}
            ref={ref}
        >
            <ExitIcon /> Login
        </MenuItem>
    );
});

export default MyLoginButton;