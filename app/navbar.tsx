'use client';

import * as React from 'react';

import { useState } from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Avatar
} from '@mui/material';

import { deepOrange, deepPurple, grey } from '@mui/material/colors';

export const navbarSelectionState_Tracker = 0;
export const navbarSelectionState_Settings = 1;

export default function Navbar(props) {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="h-24 flex place-content-around">
        <Toolbar variant="dense" className="p-2 h-full flex justify-between">
          <Box className="flex h-full">
            <Box className="grid place-content-center pr-4 pl-4">
              <Typography className="text-center text-3xl font-bold">
                &#x1F372; My Pantry
              </Typography>
            </Box>
            <Button onClick={() => { props.onSelection(navbarSelectionState_Tracker) }} variant="contained" className="ml-2 pl-8 pr-8 mr-1 h-full">
              <Typography className="text-2xl font-semibold">Tracker</Typography>
            </Button>
            <Button onClick={() => { props.onSelection(navbarSelectionState_Settings) }} variant="contained" className="mr-1 pl-8 pr-8 h-full">
              <Typography className="text-2xl font-semibold">Settings</Typography>
            </Button>
          </Box>
          <Box className="flex">
            <Box className="grid place-items-center pr-4">
              <Typography className="">User</Typography>
            </Box>
            <Avatar sx={{bgcolor: grey[500]}} src="/static/avatar_drawing.svg">

            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}