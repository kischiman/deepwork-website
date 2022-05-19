import { Tooltip as MUITooltip, TooltipProps } from '@material-ui/core'
import { FC, useState } from 'react'

export const Tooltip: FC<TooltipProps> = ({ children, ...rest }) => {
  const [open, setOpen] = useState(false)
  const handleToggle = () => setOpen((prev) => !prev)
  return (
    <MUITooltip open={open} disableHoverListener interactive onClick={handleToggle} {...rest}>
      {children}
    </MUITooltip>
  )
}
