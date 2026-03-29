"use client"

import {TextField, TextFieldProps} from "@mui/material";
import {useRouter} from "next/navigation";

export type SearchBarProps = TextFieldProps & {
    path?: string
}

const SearchBar = ({path, ...props}: SearchBarProps) => {
    const router = useRouter()

    const handleSearch = (query?: string) => {
        router.push(`${path??'/'}?q=${query}`)
    }

    return (
        <TextField
            onChange={e => handleSearch(e.target.value)}
            variant='standard'
            placeholder='Search...'
            {...props}/>
    )
}

export default SearchBar