import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem,
    Avatar,
    Paper,
    TextField,
    Select,
    Input,
} from '@mui/material';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { collection, query, getDoc, addDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';


export default function AddPantryItemView(props)
{
    var [date, setDate] = useState<number>( dayjs().add(3, 'day').unix() );
    var [measurement, setMeasurement] = useState<string>("kg");

    var nameRef = useRef<string>();
    var countRef = useRef<string>()
    
    var datePicker = <DatePicker defaultValue={ dayjs().add(3, 'day') } onAccept={ (value) => setDate(value.unix()) } className="m-2" label="Expiration date"/>;
    
    var nameField = <TextField inputRef={nameRef} className="w-full m-2" size="medium" id="outlined-basic" label="Item name" variant="outlined" />
    var countField = <TextField inputRef={countRef} className="w-full m-2" size="medium" id="outlined-basic" label="Count" variant="outlined" />
    
    return (
    <Box className="grid place-items-center absolute p-4 top-0 left-0 w-full h-full bg-black/20 z-50">
        <Paper elevation={5} className="flex flex-col justify-between max-w-5xl p-4 mr-4 ml-4 w-full h-full bg-white">
            <Box>
                <Typography className="m-2 text-4xl">Enter a new item</Typography>

                { nameField }
                { countField }
                <Box className="flex flex-row">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        { datePicker }
                    </LocalizationProvider>
                    <Select 
                        defaultValue={"kg"} 
                        onChange={ (o) => { setMeasurement(o.target.value); }} 
                        className="w-full m-2 mr-0"
                        input={<Input name="circle" id="circle" />}>
                        <MenuItem value="">Count of (ct)</MenuItem>
                        <MenuItem value="oz">Ounces (oz)</MenuItem>
                        <MenuItem value="kg">Kilos (kg)</MenuItem>
                        <MenuItem value="lb">Pounds (lb)</MenuItem>
                    </Select>
                </Box>
            </Box>
            <Button onClick={ () => { 
                props.setVisibility(false); 
                // props.addItem({ name: nameRef,count: 1, expirationDate: date, unitMeasurement: "kg" });
                addDoc(collection(db, "pantryitems"), {
                    name: nameRef.current.value, 
                    count: Number.parseInt(countRef.current.value), 
                    expirationDate: new Date(date * 1000),
                    unitMeasurement: measurement == "" ? "ct" : measurement
                });
            } } className="h-24 max-h-32 w-full  bg-sky-500 hover:bg-sky-400 text-4xl text-white">
                Confirm
            </Button>
        </Paper>
    </Box>)
}