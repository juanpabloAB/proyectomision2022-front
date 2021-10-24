import * as React from 'react';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Figure from 'react-bootstrap/Figure'
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function VerProducto({imagen}) {
  
    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          maxWidth: 220,

        },
      }));

  return (
    <ClickAwayListener>
    <HtmlTooltip     
    disableFocusListener
    disableTouchListener
    title={
        <React.Fragment>
            <Figure>
                <Figure.Image src={imagen}/>                    
            </Figure>
        </React.Fragment>
    }>
        <Button >
            <IconButton>
                <RemoveRedEyeIcon />
            </IconButton>
        </Button>
    </HtmlTooltip>
    </ClickAwayListener>
  );
}
