'use client';

import { useState } from 'react';

import PantryItemProvider from './pantryitemprovider';

import './globals.css'

import { 
    Box, 
    Paper, 
    Typography
} from '@mui/material';

import { 
    ThemeProvider,
    createTheme
} from '@mui/material/styles';

import Navbar from './navbar';

import { 
    navbarSelectionState_Tracker,
    navbarSelectionState_Settings
} from './navbar';

import AddPantryItemView from './addpantryitemview';

const theme = createTheme({
    typography: {
        fontFamily: "Inter",
        fontWeightLight: 200,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        button: {
            textTransform: 'none'
        }
    }
});

export default function Page() 
{
    var [navbarSelectionState, setNavbarSelectionState] = useState(navbarSelectionState_Tracker);
    var [addItemViewState, setAddItemViewSelectionState] = useState(false);
    var [addItemFn, setAddItem] = useState(() => {});

    var pantryItemProvider = <PantryItemProvider setVisibility={setAddItemViewSelectionState}/>;
    var addPantryItemView = <AddPantryItemView setVisibility={setAddItemViewSelectionState}/>;

    return (
    <ThemeProvider theme={theme}>
        { addItemViewState && (addPantryItemView) }
        <Paper elevation={3} square={true} className=" w-full h-full">
            <Box display="flex">
                <Navbar onSelection={setNavbarSelectionState}/>
            </Box>
            {
                navbarSelectionState == navbarSelectionState_Tracker && 
                <>
                    <Box className="flex flex-col">
                        { pantryItemProvider }
                    </Box>
                </>
            }
            {
                navbarSelectionState == navbarSelectionState_Settings && 
                <>
                    <Typography>i will definitely implement this</Typography>
                </>
            }
        </Paper>
    </ThemeProvider>
    );
}