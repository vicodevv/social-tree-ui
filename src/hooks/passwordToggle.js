import {VisibilityOutlined, VisibilityOffOutlined} from '@mui/icons-material'
import {IconButton} from '@mui/material'
import React, {useState} from 'react'

const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false)
    const passwordIcon = (
        <IconButton onClick={() => setVisible((visibility) => !visibility)}>
            {visible ? <VisibilityOffOutlined/> : <VisibilityOutlined/>}
        </IconButton>

    )
    const inputType = visible ? 'text' : 'password'

    return [inputType, passwordIcon]

}

export default usePasswordToggle