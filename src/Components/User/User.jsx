import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, ButtonGroup, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
const User = () => {
    const [value, setValue] = React.useState(10);


    const blue = {
        100: '#DAECFF',
        200: '#99CCF3',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
      };
      
      const grey = {
        100: '#E7EBF0',
        200: '#E0E3E7',
        300: '#CDD2D7',
        400: '#B2BAC2',
        500: '#A0AAB4',
        600: '#6F7E8C',
        700: '#3E5060',
        800: '#2D3843',
        900: '#1A2027',
      };
      
      const StyledButton = styled('button')(
        ({ theme }) => `
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        box-sizing: border-box;
        min-height: calc(1.5em + 22px);
        min-width: 320px;
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
        border-radius: 0.75em;
        margin-top: 0.5em;
        padding: 10px;
        text-align: left;
        line-height: 1.5;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      
        &:hover {
          background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
          border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
        }
      
        &.${selectUnstyledClasses.focusVisible} {
          outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
        }
      
        &.${selectUnstyledClasses.expanded} {
          &::after {
            content: '▴';
          }
        }
      
        &::after {
          content: '▾';
          float: right;
        }
        `,
      );
      
      const StyledListbox = styled('ul')(
        ({ theme }) => `
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        box-sizing: border-box;
        padding: 5px;
        margin: 10px 0;
        min-width: 320px;
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
        border-radius: 0.75em;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        overflow: auto;
        outline: 0px;
        `,
      );
      
      const StyledOption = styled(OptionUnstyled)(
        ({ theme }) => `
        list-style: none;
        padding: 8px;
        border-radius: 0.45em;
        cursor: default;
      
        &:last-of-type {
          border-bottom: none;
        }
      
        &.${optionUnstyledClasses.selected} {
          background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
          color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
        }
      
        &.${optionUnstyledClasses.highlighted} {
          background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
          color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        }
      
        &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
          background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
          color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
        }
      
        &.${optionUnstyledClasses.disabled} {
          color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
        }
      
        &:hover:not(.${optionUnstyledClasses.disabled}) {
          background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
          color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        }
        `,
      );
      
      const StyledPopper = styled(PopperUnstyled)`
        z-index: 1;
      `;
      
      const Paragraph = styled('p')(
        ({ theme }) => `
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        margin: 10px 0;
        color: ${theme.palette.mode === 'dark' ? grey[400] : grey[700]};
        `,
      );
      
      function CustomSelect(props) {
        const components = {
          Root: StyledButton,
          Listbox: StyledListbox,
          Popper: StyledPopper,
          ...props.components,
        };
      
        return <SelectUnstyled {...props} components={components} />;
      }
      
      CustomSelect.propTypes = {
        /**
         * The components used for each slot inside the Select.
         * Either a string to use a HTML element or a component.
         * @default {}
         */
        components: PropTypes.shape({
          Listbox: PropTypes.elementType,
          Popper: PropTypes.func,
          Root: PropTypes.elementType,
        }),
      };
    return (
        <React.Fragment >
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidateautoComplete="off">

                <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '50vh' }}>

                    <Grid item xs={3}>
                        <div>
                            <TextField id="outlined-disabled" label="Name" />
                            <TextField id="outlined-disabled" label="Email" />
                        </div>
                        <div>
                            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" defaultValue="123456" />
                            <CustomSelect value={value} onChange={setValue}>
                                <StyledOption value={'Admin'}>Admin</StyledOption>
                                <StyledOption value={'Staff'}>Staff</StyledOption>
                                <StyledOption value={'Cashier'}>Cashier</StyledOption>
                            </CustomSelect>

                            <Paragraph>Selected value: {value}</Paragraph>
                        </div>
                        <div style={{ textAlignVertical: "center", textAlign: "center", marginTop: '10px' }} >
                            <ButtonGroup px={50} >
                                <Button px={50} variant="contained" >Cancel</Button>
                                <Button px={50} variant="contained" color="success" >Create</Button>
                                {/* <Button px={50} variant="contained" >Sales List</Button> */}
                            </ButtonGroup>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default User