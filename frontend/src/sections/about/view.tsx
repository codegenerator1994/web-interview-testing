"use client";

import { BreadCrumb } from "@/components/bread-crumb";
import { Box, Button, Divider, Link, Stack, Typography, alpha, } from "@mui/material";
import Image from "next/image";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AdjustIcon from '@mui/icons-material/Adjust';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';

const BreadCrumbData = [
    {
        title: 'receipes',
        path: '/',
    },
    {
        title: 'bread',
        path: '/',
    },
    {
        title: 'quick bread',
        path: '/',
    },
]

export default function RecipesView() {
    return (
        <Stack direction="row" gap={8} sx={{
            py: 6,
        }}>
            <Box>
                <BreadCrumb list={BreadCrumbData} sx={{
                    mb: 4,
                }} />

                <Typography variant="h1" component="h1" sx={{
                    fontSize: "56px!important",
                    fontWeight: '600',
                    mb: 8
                }}>Whole-Grain Banana Bread</Typography>

                <Box sx={{
                    mb: 2,
                    color: theme => theme.palette.grey[400],
                }}>
                    <Typography variant="body2" component='span' sx={{ lineHeight: '200%' }}>This one-bowl banana bread - our <Link href="/" target="_blank" sx={{
                        textDecoration: 'underline',
                    }}>2018 Recipes of the Year</Link> - uses the simplest ingredients, but is incredibly moist and flavorful.</Typography>
                    <Typography variant="body2" component='span' sx={{ lineHeight: '200%' }}>While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly?</Typography>
                    <Typography variant="body2" component='span' sx={{ lineHeight: '200%' }}>No one can tell, it's that good! and not only is this bread delicious - it's versatile.</Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'start',
                    gap: 2,
                }}>
                    <AccessTimeIcon sx={{
                        fontSize: "32px"
                    }} />
                    <Box sx={{
                        display: 'flex',
                        gap: 6,
                    }}>
                        <Box>
                            <Typography variant="body2" sx={{
                                fontSize: '12px',
                                fontWeight: '600',
                                color: theme => theme.palette.grey[50]
                            }}>PREP</Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: '700',
                                color: 'white'
                            }}>10 mins</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" sx={{
                                fontSize: '12px',
                                fontWeight: '600',
                                color: theme => theme.palette.grey[50]
                            }}>BAKE</Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: '700',
                                color: 'white'
                            }}>1 hr to 1 hr 15 mins</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" sx={{
                                fontSize: '12px',
                                fontWeight: '600',
                                color: theme => theme.palette.grey[50]
                            }}>TOTAL</Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: '700',
                                color: 'white'
                            }}>1hr 10 mins</Typography>
                        </Box>
                    </Box>
                </Box>

                <Divider sx={{
                    my: 2,
                    borderColor: theme => theme.palette.grey[600]
                }} />

                <Box sx={{
                    display: 'flex',
                    alignItems: 'start',
                    gap: 2,
                }}>
                    <AdjustIcon sx={{
                        fontSize: "32px"
                    }} />
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'start',
                        gap: 4,
                    }}>
                        <Box>
                            <Typography variant="body2" sx={{
                                fontSize: '12px',
                                fontWeight: '600',
                                color: theme => theme.palette.grey[50]
                            }}>VIELD</Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: '700',
                                color: 'white'
                            }}>1 loaf, 12 generous <br />servings</Typography>
                        </Box>
                        <Button variant="outlined" startIcon={<AddIcon />}>SAVE RECIPE</Button>
                        <Button variant="outlined" startIcon={<PrintIcon />}>PRINT</Button>
                    </Box>
                </Box>
            </Box>

            <Image src={'/assets/image/about.jpg'} alt='about' width={600} height={400} />
        </Stack >
    );
}
