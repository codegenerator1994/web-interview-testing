import { Box, Breadcrumbs, BoxProps, Link } from "@mui/material";
import React from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type pathItem = {
    title: string,
    path?: string,
}

interface BreadCrumbProps extends BoxProps {
    list?: pathItem[]
}

export default function BreadCrumb({ list = [], sx, ...other }: BreadCrumbProps) {
    return <Box sx={{
        ...sx,
    }} {...other}>
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
        >
            {
                list.map((item, index) => {
                    return <Link href={item.path} key={`item-${index}`} sx={{
                        textTransform: 'uppercase',
                        fontSize: "12px",
                        fontWeight: '700!important',
                    }}>{item.title}</Link>
                })
            }
        </Breadcrumbs>
    </Box>
}