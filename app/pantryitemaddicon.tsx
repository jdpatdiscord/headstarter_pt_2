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

export default function PantryItemAddIcon(props)
{
    return (
    <Paper square={true} elevation={5} sx={{minHeight: 136, maxHeight: 136}} className="flex justify-between">
        <Box className="flex w-full">
            <Paper elevation={5} className="grid place-items-center m-2 w-full max-h-28">
                <Button onClick={ props.onClick } variant="contained" className="w-full">
                    <Typography className="mb-2" fontSize={64} textAlign="center">╋</Typography>
                </Button>
            </Paper>
        </Box>
    </Paper>
    );
}