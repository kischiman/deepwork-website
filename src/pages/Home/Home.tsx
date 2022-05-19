import React, { FC } from 'react'
import { PageHeader } from '../../components/PageHeader'
import { RoutePaths } from '../../routePaths'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { HomeFooter } from './HomeFooter'
import { Container } from '@material-ui/core'

export const Home: FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <PageHeader
          title={
            <>
              Create high-end design in <br /> as little as 7 days.
            </>
          }
          subtitle="4-hour working days - Work from anywhere"
          buttons={[
            {
              title: 'Explore case studies',
              link: RoutePaths.caseStudies,
              icon: <ChevronRightIcon />,
            },
            {
              title: 'About the team',
              link: RoutePaths.aboutUs,
              icon: <ChevronRightIcon />,
            },
          ]}
        />
      </Container>
      <HomeFooter />
    </>
  )
}
