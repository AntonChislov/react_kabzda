import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {FC} from "react";

export type ItemsType = {
    items: Array<{title: string, value: number}>
}

export const BasicSelect: FC<ItemsType> = ({items}) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Task</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="List"
                    onChange={handleChange}
                >
                    {items.map(item => <MenuItem value={item.value}>{item.title}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}