import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem,
    Avatar,
    Paper
} from '@mui/material';

import { deleteField, doc, collection, query, getDoc, addDoc, onSnapshot, deleteDoc, Firestore, collectionGroup, DocumentReference } from 'firebase/firestore';
import { db } from './firebase';

export default function PantryItem(props)
{
    return (
    <Paper onContextMenu={ () => console.log(props.id) } square={true} elevation={5} sx={{minHeight: 136, maxHeight: 136}} className="flex justify-between">
        <Box className="flex">
            <Paper component="img" src={props.iconPath} elevation={5} className="m-2 max-h-28"/>
            <Box className="grid place-items-center mt-2 mb-2 ml-4">
                <Typography fontSize={48}>{props.countText}</Typography>
                <Typography fontSize={32} className="mb-2">remaining</Typography>
            </Box>
            <Box className="grid place-items-center mt-2 mb-2 ml-8">
                <Typography fontSize={52}>{props.singleOrPluralItemName}</Typography>
            </Box>
        </Box>
        { props.hasExpirationText && 
            <Box className="grid place-items-center">
                <Typography fontSize={28} className="mr-8">{props.expirationText}</Typography>
            </Box> 
        }
        <Button onClick={ () => { 
                deleteDoc(doc(db, "pantryitems/" + props.id))
            } }
            variant="contained" className="m-1 w-32 h-32  hover:bg-red-500">
            <Typography>Delete!</Typography>
        </Button>
    </Paper>);
}