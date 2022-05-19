import React, { FC, useState } from 'react'
import { CaseStudiesFilterBar } from './components/CaseStudiesFilterBar'
import { PageHeader } from '../../components/PageHeader'
import { CaseStudiesList } from './components/CaseStudiesList'
import { ICaseStudy as ICaseStudies } from './interfaces'
import { CaseStudyType } from '../../shared/enums/caseStudies'
import { CASE_STUDIES } from '../../data/case-studies'
import { Container } from '@material-ui/core'

export const CaseStudies: FC = () => {
  const [caseStudies, setCaseStudies] = useState<ICaseStudies[]>(CASE_STUDIES)

  const handleFilter = (type: CaseStudyType) => {
    if (type !== CaseStudyType.allWork) {
      setCaseStudies(
        CASE_STUDIES.filter((item) => (Array.isArray(item.type) ? item.type.includes(type) : item.type === type))
      )
      return
    }
    setCaseStudies(CASE_STUDIES)
  }

  return (
    <>
      <Container maxWidth="lg">
        <PageHeader
          title={
            <>
              Our Case Studies are
              <br /> Open Source.
            </>
          }
          subtitle={
            <>
              Explore, reuse and get inspired by design patterns of our <br /> user-validated prototypes.
            </>
          }
        />
        <CaseStudiesFilterBar onClick={handleFilter} />
        <CaseStudiesList data={caseStudies} />
      </Container>
    </>
  )
}
