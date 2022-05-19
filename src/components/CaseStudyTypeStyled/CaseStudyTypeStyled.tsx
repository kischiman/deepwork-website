import { FC } from 'react'
import { CaseStudyType } from '../../shared/enums/caseStudies'
import { Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import { separateCamelCase } from '../../shared/utils/text'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    isUppercase: {
      textTransform: 'uppercase',
    },
  })
)

interface Props {
  type: CaseStudyType | CaseStudyType[]
  isUppercase?: boolean
}
export const CaseStudyTypeStyled: FC<Props> = ({ type, isUppercase }) => {
  const classes = useStyles()
  return (
    <Typography variant="caption" className={isUppercase ? classes.isUppercase : ''}>
      {Array.isArray(type)
        ? type.map((item, index) => (
            <Box component="span" mr={1} key={index}>
              {`${separateCamelCase(item)} `}
            </Box>
          ))
        : separateCamelCase(type)}
    </Typography>
  )
}
