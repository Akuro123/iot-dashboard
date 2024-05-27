import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import OpacityIcon from '@mui/icons-material/Opacity';

interface TileProps {
    deviceNumber: number;
    temperature?: number;
    pressure?: number;
    humidity?: number;
}

const Tile: React.FC<TileProps> = ({ deviceNumber, temperature, pressure, humidity }) => {
  return (
    <Box sx={{width: '200px', padding:'5px', display: 'flex', flexDirection: 'column', p: 1, backgroundColor: '#1a1a1a', alignItems: 'flex-start'}}>
        <Typography variant="h6" component="div">
            Device No. {deviceNumber}
        </Typography>
        <Typography component="div" sx={{
          backgroundColor: 'white',
          height: '5px',
          width: '100%',
          margin: '8px 0'
        }}>

        </Typography>
        <Typography variant="h6" component="div">
            <DeviceThermostatIcon /> <span className="value">{temperature ?? 'N/A'}</span> <span>&deg;C</span>
        </Typography>
        <Typography variant="h6" component="div">
            <CloudUploadIcon /> <span className="value">{pressure ?? 'N/A'}</span> hPa
        </Typography>
        <Typography variant="h6" component="div">
            <OpacityIcon /> <span className="value">{humidity ?? 'N/A'}</span>%
        </Typography>
    </Box>
  );
};

export default Tile;
