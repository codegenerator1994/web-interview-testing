import React from 'react';
import { Link, SxProps } from '@mui/material';
import { Logo } from '.';
import { RouterLink } from '../router-link';

interface props {
  sx?: SxProps
}

export default function LogoLink({ sx, ...other }: props) {
  return <Link href="/" component={RouterLink} sx={{
    width: '48px',
    ...sx
  }}>
    <Logo />
  </Link>
}