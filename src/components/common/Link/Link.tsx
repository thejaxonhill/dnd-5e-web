'use client'

import NextLink from 'next/link'
import {Link as MuiLink, LinkProps as MuiLinkProps} from '@mui/material'

export type LinkProps = MuiLinkProps

const Link = ({children, ...props}: LinkProps) =>
    <MuiLink component={NextLink} {...props}>
        {children}
    </MuiLink>

export default Link