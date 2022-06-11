import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Project.css'
export default function Project() {
    return (
        <div className='project'>
            <div>
                <Stack spacing={2}>
                    <Pagination count={10} color="secondary" />
                </Stack>
            </div>
        </div>
    );
}