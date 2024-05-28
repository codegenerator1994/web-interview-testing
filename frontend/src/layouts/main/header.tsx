import React from 'react';
import { alpha } from '@mui/material/styles';
import { Container, Stack, AppBar, Toolbar, Button, IconButton, Box, Link, Typography } from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { LogoLink } from '@/components/logo';
import { useActiveLink } from '@/hooks/use-active-link';

const navbarData = [
  {
    title: "SHOP",
    path: '/shop',
  },
  {
    title: "RECIPES",
    path: '/recipes',
  },
  {
    title: "LEARN",
    path: '/learn',
  },
  {
    title: "ABOUT",
    path: '/about',
  },
  {
    title: "BLOG",
    path: '/blog',
  },
]

const subNavbarData = [
  {
    title: "CATEGORIES",
    path: '/categories',
  },
  {
    title: "COLLECTIONS",
    path: '/collections',
  },
  {
    title: "RESOURCES",
    path: '/resources',
  },
]

export default function Header() {

  return (
    <AppBar
      sx={{
        backgroundColor: 'transparent',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar
      >
        <Container maxWidth={'xl'} sx={{
          position: 'relative',
        }}>
          <LogoLink sx={{
            position: 'absolute',
            left: '40px',
            width: '72px',
          }} />
          <Box sx={{
            pl: 12,
          }}>
            <Stack direction="row" gap={5}>
              {
                navbarData.map((item, index) => {
                  const active = useActiveLink(item.path.toLowerCase());
                  console.log('active', item.title, active);

                  return <Button href={item.path} key={`navbar-item-${index}`} component={RouterLink} sx={{
                    borderRadius: 0,
                    borderBottom: theme => `2px solid ${active ? theme.palette.grey[100] : 'transparent'}`
                  }}>
                    <Typography variant='body2' sx={{
                      fontSize: '14px',
                      fontWeight: '500',
                    }}>{item.title}</Typography>
                  </Button>
                })
              }
            </Stack>
          </Box>
        </Container>
      </Toolbar>

      <Toolbar sx={{
        minHeight: '42px!important',
        height: '42px',
        background: theme => alpha(theme.palette.grey[300], 0.2)
      }} >
        <Container maxWidth={'xl'}>
          <Box sx={{
            pl: 14,
          }}>
            <Stack direction="row" gap={4}>
              {
                subNavbarData.map((item, index) => {
                  return <Link href={item.path} key={`sub-navbar-item-${index}`} component={RouterLink}>
                    <Typography variant='body2' sx={{
                      fontWeight: '500',
                      fontSize: '12px',
                    }}>{item.title}</Typography>
                  </Link>
                })
              }
            </Stack>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
