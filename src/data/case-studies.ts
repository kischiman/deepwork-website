import { ICaseStudy } from '../pages/CaseStudies/interfaces'
import { CaseStudyType } from '../shared/enums/caseStudies'
import { uuidv4 } from '../shared/utils/general'
import { convertSpacesToDash } from '../shared/utils/text'

export const CASE_STUDIES: ICaseStudy[] = [
  {
    id: uuidv4(),
    type: [CaseStudyType.productDesign, CaseStudyType.oneWeekSprints],
    title: 'Ethereum Foundation',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Ethereum+Foundation/Ethereum_Foundation_Main.png',
    slug: `${convertSpacesToDash('Ethereum Foundation')}`,
    description: 'Ethereum is a product built and designed by thousands of developers, entrepreneurs and contributors.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/c4e2Or1gX1zgVpV5BVIWjz/Ethereum-as-a-Product---Design?node-id=2%3A171&scaling=min-zoom&page-id=2%3A171',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Ethereum is a very large community which is mostly self-organised. In order to understand the perception of individuals on what Ethereum is and create marketing material from this assessment, we led two workshops with individuals from the community and together a several slides which succinctly describe Ethereum as a product."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Ethereum+Foundation/EF_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_km3r2MY=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Ethereum+Foundation/EF_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/c4e2Or1gX1zgVpV5BVIWjz/Ethereum-as-a-Product---Design?node-id=2%3A1518',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://www.notion.so/deepworkstudio/Ethereum-as-a-Product-Results-ce8ea47545cb46a5abd46747f727e2bd',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'ConsenSys Alloy',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/ConsenSys/ConsenSys_Main.png',
    slug: `${convertSpacesToDash('ConsenSys Alloy')}`,
    description: '“Deep Work allows CodeFi Networks to rapidly release new products disrupting and improving the DeFi ecosystem.”',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/Jia5TBzi24TwIFpeeeipe4An/Alloy-v2?node-id=104%3A671&scaling=min-zoom',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"With a large amount of DeFi protocols, the interface for Alloy should give users interesting in staking a detailed overview of existing protocols, their returns and a risk assessment. The platform should also help users make a choice and execute in the same interface."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/ConsenSys/alloy_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kx_hj3c=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/ConsenSys/alloy_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/Jia5TBzi24TwIFpeeeipe4An/Alloy-v2?node-id=104%3A671',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://www.notion.so/deepworkstudio/Final-Report-a05c9557683e49fe97d3d9a143061659',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Ethereum 2.0 Launchpad',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Ethereum+2.0/eth2_main.png',
    slug: `${convertSpacesToDash( 'Ethereum 2.0 Launchpad' )}`,
    description: 'As the Ethereum blockchain matures, it needs well-designed interfaces for users, validators and node operators to interact with. We designed the Eth2 Deposit Launchpad to reach high conversion rates and guarantee safety during financial transactions. ',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/PH4qu67FE9dCUxvQGlvVFu/Ethereum-Deposit-Launchpad---Case-Study?node-id=1%3A2284&scaling=scale-down-width',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"The Eth2 launchpad is an interface for staking exactly 32 ETH on the Ethereum blockchain to support its transition into the new proof-of-stake based blockchain. Together with 9 participants from the Ethereum ecosystem we worked on how to motivate individuals to stake, how to avoid users making mistakes when depositing and how to avoid phishing attacks."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Ethereum+2.0/eth2_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_lac-jQI=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Ethereum+2.0/eth2_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/PH4qu67FE9dCUxvQGlvVFu/Ethereum-Deposit-Launchpad---Case-Study?node-id=1%3A2284',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: [CaseStudyType.productDesign, CaseStudyType.oneWeekSprints],
    title: 'dHedge',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/dHedge/dHedge_Main.png',
    slug: `${convertSpacesToDash('dHedge')}`,
    description: 'Experienced investors can create public or private investment pools for synthetix assets.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/7gQLNmG5HETnFTl2YDY7Rm/dHedge-Case-Study?scaling=scale-down-width&node-id=1%3A1772',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Together with the dHedge team, we evaluated the user experience of their existing application and re-designed the interface to make users more confident with their investment decisions by creating making it "more human". We added social handles and the ability to comment on investors, which established a lot more trust."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/dHedge/dhedge_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kobFOmA=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/dHedge/dhedge_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/7gQLNmG5HETnFTl2YDY7Rm/dHedge-Case-Study?node-id=1%3A1772',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View upfront feedback',
              url: 'https://docs.google.com/document/d/1EWSonC8JMgf7wwkTqusLeBgd5RW0IyJ4HNSyQJxPafk/edit?usp=sharing',
            },
            {
              label: 'View final report',
              url: 'https://docs.google.com/document/d/1GswkGR1WtRcZ_4kFQ2uJkrx4t--FRJUSKk2WhKp1thE/edit?usp=sharing',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: [CaseStudyType.branding, CaseStudyType.oneWeekSprints],
    title: 'Covalent',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Covalent/Covalent_Main.png',
    slug: `${convertSpacesToDash('Covalent')}`,
    description:
      'Designing the website of a platform that provides a unified API bringing visibility to billions of blockchain data points.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/72xealogS8cZwzoTXjtsoH/Covalent_Final?node-id=0%3A2&scaling=min-zoom&page-id=0%3A1',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Covalent is an API with no tangible product interface. It was important to communicate how it distinguishes itself from the competitors and shows the value in a simple, easily understandable way."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Covalent/covalent_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_lYPep5Y=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Covalent/covalent_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/72xealogS8cZwzoTXjtsoH/Covalent_Final?node-id=0%3A1',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View user testing results',
              url: 'https://docs.google.com/presentation/d/160mKJ3Kc_t3oEebeMeaPyrGrQ6OIPBTyKwN10uE_9LY/edit#slide=id.g9425903d14_0_0',
            },
            {
              label: 'View final report',
              url: 'https://docs.google.com/presentation/d/1lQkAa5Gr5lo1grbDVMXJ9PMaD5YCENSAZ8fg213amuA/edit',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Metafactory',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Metafactory/Metafactory_Main.png',
    slug: `${convertSpacesToDash('Metafactory')}`,
    description:
      'Designing the mobile site for a crowdfunding platform for the creation of community-owned brands with an initial focus on fashion/apparel.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/lz9mhgBQX007B5ZryksInZ/MetaFactory-%E2%80%93-Curation-Game?node-id=100%3A253&scaling=scale-down&page-id=100%3A0',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Together with MetaFactory we designed a mobile application to create fashion items and decide on the production through a community governance system."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Metafactory/MetaFactory_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_lMN3Yog=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Metafactory/metafactory_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/lz9mhgBQX007B5ZryksInZ/MetaFactory-%E2%80%93-Curation-Game?node-id=100%3A253&fuid=571265180767637784',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://docs.google.com/presentation/d/1_OugWwjlWmIKxJv3VF7M37wzdwUcYSgsDG6nZcbTS2s/edit',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Beefy Finance',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Beefy/Beefy_Finance_Main.png',
    slug: `${convertSpacesToDash('Beefy Finance')}`,
    description:
      'Designing the website of a DeFi Yield Optimizer platform that allows its users to earn compound interest on their holdings.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/rM0nDDYA042Z4WpOdV0vf4/Deep-Work-x-Beefy?node-id=82%3A1059&scaling=min-zoom&page-id=49%3A2',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Beefy is an aggregator for yield farming protocols on the Binance Smart Chain. Together with the team we designed what the overview of many "vaults" would look and how to make retail investors/traders aware of the risks of investing in high-APY projects. We explored which information is needed and evaluated user\'s behaviours in the application."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Beefy/Beef_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_lP2dcWM=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Beefy/beefy_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/rM0nDDYA042Z4WpOdV0vf4/Deep-Work-x-Beefy?node-id=82%3A1059',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View user upfront feedback',
              url: 'https://docs.google.com/presentation/d/1oJFlKvaKTy-HBG-4lvJL8ljR0TU8fCx7bZxKg7C9VKI/edit',
            },
            {
              label: 'View user testing results',
              url: 'https://docs.google.com/presentation/d/1yEQi62s1V_GORUAs3_IFqpbPoCPELxXo2xtXF_jAofw/edit',
            },
            {
              label: 'View final report',
              url: 'https://docs.google.com/presentation/d/1nnvLs5UXT_znmjU8K8PmkXpbZlh4RLlFjIYgu4xk8y0/edit',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.branding,
    title: 'Acala',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Acala/Acala_Main.png',
    slug: `${convertSpacesToDash('Acala')}`,
    description:
      'Re-branding the landing page of the all-in-one DeFi hub of Polkadot.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/lc6qSyYC84DiHJbGS2R8uq/Acala_Landing_Page?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Content will be added at a later date. Please, feel free to look at other Case Studies."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/default-miro-figma/miro_placeholder.png',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kjmHhlw=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/default-miro-figma/figma_placeholder.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/lc6qSyYC84DiHJbGS2R8uq/Acala_Landing_Page?node-id=0%3A1',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'SourceCred',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/SourceCred/SourceCred_Main.png',
    slug: `${convertSpacesToDash('SourceCred')}`,
    description:
      'Designing the website for a tool for communities to measure and reward value creation.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/AoOFFgnSjwdtnvlMT9Az27/DeepWork-SourceCred-Creditor?node-id=6164%3A114&scaling=scale-down&page-id=6164%3A0',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"SourceCred is a tool that tracks value creation in an online community by mapping their users, messages and upvotes on a graph. While they had a plugin for Discord, Discourse and GitHub to track digital contributions, we explored how it would be possible to track community contributions outside of chat-based tools, like planning events or writing articles."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/SourceCred/sourcecred_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_lXYXlws=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/SourceCred/sourcecred_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/AoOFFgnSjwdtnvlMT9Az27/DeepWork---SourceCred-%2F-Creditor?node-id=6164%3A114',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://docs.google.com/presentation/d/1tzYYMrcO2w5gRFrcZIvOL9clUIg89b_F0gPhINF2T48/edit?usp=sharing',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Liquity',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Liquity/Liquity_Main.png',
    slug: `${convertSpacesToDash('Liquity')}`,
    description:
      'Designing the landing page, borrower user journey and staking interface.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/6e99esMBu4CZW2HdiASKUE/Deep-Work---Liquity-Prototype?node-id=134%3A13&viewport=2726%2C365%2C0.21214023232460022&scaling=scale-down-width',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Liquity/Liquit_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_laguWr8=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Liquity/Liquity+-+Figma.PNG',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/6e99esMBu4CZW2HdiASKUE/Deep-Work---Liquity-Prototype?node-id=134%3A19',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View user testing results 1',
              url: 'https://docs.google.com/presentation/d/1e5DTtrP8su5_GpcF0HN_U_9uqplZEj4D9Y72kiU_xKk/edit?usp=sharing',
            },
            {
              label: 'View user testing results 2',
              url: 'https://docs.google.com/presentation/d/18nYkLVKk9Y0bQE-KE0tB2SrFCky4yTXdL7VJUCGQy8Q/edit#slide=id.g9425903d14_0_0',
            },
            {
              label: 'View final report',
              url: 'https://docs.google.com/presentation/d/147WDi_YZgAMbPGTJXnfwh6LnHTUQu9yne72yBgsXH9c/edit#slide=id.g7956f32b54_0_0',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'Interview script',
              url: 'https://docs.google.com/document/d/1IPzgQkVETYTcSwCEyScjc-z1zeI2JkfMoudTzyopI2A/edit#heading=h.yen7r8z57jfb',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Niftex',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Niftex/Niftex_Main.png',
    slug: `${convertSpacesToDash('Niftex')}`,
    description:
      'Fractional NFT upload, display and marketplace.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/92PkAkp2mfef24CRh1k33f/NIFTEX---Deep-Work-Prototype?node-id=278%3A425&scaling=min-zoom&page-id=278%3A425&starting-point-node-id=278%3A426',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Niftex is one of the most prominent NFT fractionalising platforms. We explored how NFT owners would fractionalise their NFTs and individuals invest in shares/fractions of a single NFT."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Niftex/niftex_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_lczhWtk=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Niftex/niftex_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/92PkAkp2mfef24CRh1k33f/NIFTEX-Deep-Work-Prototype?node-id=278%3A425',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://docs.google.com/presentation/d/1CLMFe_KxJwF0xjaQjedEF3H84u5Ss7Z9X8Ijaz5TNO4/',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'Interview script',
              url: 'https://docs.google.com/document/d/1f8Nn04WIom6608sCL4rPWnbaDaUBcHG_TTD4eKf9dXM/edit?usp=sharing',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: [CaseStudyType.productDesign, CaseStudyType.oneWeekSprints],
    title: 'Emrit',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Emrit/Emrit_Main.png',
    slug: `${convertSpacesToDash('Emrit')}`,
    description:
      'Mobile dashboard app for managing the Emrit Coolspot (built on top of the Helium network) and purchasing IoT devices.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/bsQpq1W6BhpsanZWcZhoUb/Emrit-x-Deep-Work%3A-Hypersprint?node-id=13%3A12&viewport=3408%2C-23%2C0.30120590329170227&scaling=scale-down',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Emrit uses the Helium blockchain to help people buy their first miners and get introduced to even more possibilities for smart devices. Together we designed a mobile application to track the mining rewards and have a store where users can buy new connected smart devices for their mined rewards."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Emrit/emrit_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_ldPtzjo=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Emrit/emrit_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/bsQpq1W6BhpsanZWcZhoUb/Emrit-x-Deep-Work%3A-Hypersprint?node-id=13%3A12',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://docs.google.com/presentation/d/1cv255uz7ATPvcNM6gB8y7_gxkxyrTliAt65c3Kz87Pg/edit?usp=sharing',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'Interview script',
              url: 'https://docs.google.com/document/d/1GjXAN0NwuU-jTgrar9ko2xOdty6FnJjSr9h7RQLTys0/edit#heading=h.ek8z86komhqv',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Maple Finance',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Maple+Finance/Maple_Finance_Main.png',
    slug: `${convertSpacesToDash('Maple Finance')}`,
    description:
      'Institutional loans using a decentralised marketplace and convictional voting.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/zec6WlNGdDEIxEj2LVzw7z/Maple-%E2%80%93-Ant-Design-System-Prototypes?node-id=905%3A6653&scaling=scale-down&page-id=905%3A0&starting-point-node-id=905%3A6653&show-proto-sidebar=1',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Maple+Finance/maple_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kiwhxMo=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Maple+Finance/maple_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/zec6WlNGdDEIxEj2LVzw7z/Maple-%E2%80%93-Ant-Design-System-Prototypes?node-id=585%3A24933',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://docs.google.com/presentation/d/1c3e14iyfuX8QlkLiYjlSKimcmqJtgLl1DNZqx5Lmwks/edit#slide=id.ga5712b0910_0_0',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'Interview script 1',
              url: 'https://docs.google.com/document/d/1ilzlRo4PM9U2dfESFzOSl4Y_jxe8uECofR0J7RbYOEI/edit#heading=h.ek8z86komhqv',
            },
            {
              label: 'Interview script 2',
              url: 'https://docs.google.com/document/d/1IcJ13TBSFTq1Z8DRDkMVzDefGKo6pMsZDKITUJ02ItM/edit#heading=h.ek8z86komhqv',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: [CaseStudyType.productDesign, CaseStudyType.oneWeekSprints],
    title: 'Pancake Swap',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Pancake+Swap/Pancake_Swap_Main.png',
    slug: `${convertSpacesToDash('Pancake Swap')}`,
    description:
      'UX improvements and gamification of DeFi on the Binance Smart Chain.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/b7CdqW1AGWIWy5ozexy7vI/Untitled?node-id=0%3A85&scaling=min-zoom&page-id=0%3A1',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Pancake Swap doesn\'t have a visual overview of how their swapping, yield farming, pooling and lottery are interconnected. We explored a new ways of visualising the protocols capabilities and improved the UX."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Pancake+Swap/PancakeSwap_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_khre2iM=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Pancake+Swap/pancakeswap_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/b7CdqW1AGWIWy5ozexy7vI/Untitled?node-id=0%3A85',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View upfront feedback',
              url: 'https://docs.google.com/presentation/d/1XxOAhDqjgIKkl8CSQPFX0jDiSNLAJlHcfz_xKCUwMjo/edit?usp=sharing',
            },
            {
              label: 'View user testing results',
              url: 'https://docs.google.com/presentation/d/1_R78h4XrLDaVvIi83RtMDWzr-iz-Dye78J3J4oczmak/edit?usp=sharing',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'Prototype video walk-through',
              url: 'https://www.dropbox.com/s/68hpnqd69ih0jp5/PancakeSwap-Prototype-Walkthrough.mov',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Arbitrum',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Arbitrum/Arbitrum_Main.png',
    slug: `${convertSpacesToDash('Arbitrum')}`,
    description:
      'Designing a website experience to build community and onboard users.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: '',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Arbitrum is a popular rollup solution for the Ethereum blockchain. Together with their team, we designed the website to present the applications of Arbitrum and educate users about how it works."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/default-miro-figma/miro_placeholder.png',
          links: [],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/default-miro-figma/figma_placeholder.png',
          links: [],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'View live product',
              url: 'https://arbitrum.io/',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Skillz',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Skillz+/Skillz_Main.png',
    slug: `${convertSpacesToDash('Skillz')}`,
    description:
      'Blockchain-as-a-Service by staking money to run nodes.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/J0OnJqy5qC12DMPdnaDccg/Skills.io-x-Deep-Work-Hypersprint?node-id=67%3A492&viewport=60%2C335%2C0.08103237301111221&scaling=min-zoom',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Skillz offers running blockchain nodes as a service. Together with the Skillz team, we designed an interface to calculate returns of running a node, the checkout process and a dashboard to track performance. We also explored possibilities for conditional logic with staking."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Skillz+/skillz_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kk93cdU=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Skillz+/skillz_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/J0OnJqy5qC12DMPdnaDccg/Skills.io-x-Deep-Work%3A-Hypersprint',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View user testing results',
              url: 'https://docs.google.com/presentation/d/1bH2Z7WdzfOP8fU-2S-T9ZfbJ2qYPz-AMUTeh0OH4ziY/edit#slide=id.g9425903d14_0_0',
            },
            {
              label: 'View final report',
              url: 'https://docs.google.com/presentation/d/1glBGSTr-j8LvDhrtlBa_Q88exNMEGrXDU60FBJHuztU/edit#slide=id.g9425903d14_0_0',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: [CaseStudyType.productDesign, CaseStudyType.oneWeekSprints],
    title: 'PlotX',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/PlotX/PlotX_Main.png',
    slug: `${convertSpacesToDash('PlotX')}`,
    description:
      'Designing New Feature’s and Improving the User Experience.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/SGrRaZ4Iqq1idABs33gyyA/PlotX-x-Deep-Work%3A-Hypersprint?node-id=3%3A55&scaling=min-zoom',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/PlotX/plotx_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kljsAzQ=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/PlotX/plotx_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/SGrRaZ4Iqq1idABs33gyyA/PlotX-x-Deep-Work%3A-Hypersprint?node-id=697%3A681',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://docs.google.com/presentation/d/1RTtirXfsmLPcJJ7B3zNpkHbdPTQ_7reRkFAN7LozsuY/edit#slide=id.g90905aaac9_0_155',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Hummingbot Website',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/HummingBot/Hummingbot_Main.png',
    slug: `${convertSpacesToDash('Hummingbot Website')}`,
    description:
      'Our goal was to update the user journey for Hummingbot to gain more traction and focus on the project’s community efforts.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/gVXsX0HfQm3u5OgyilpnJL/Hummingbot?node-id=1%3A141&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A141',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Hummingbot redesigned their website to provide users with more information on Liquidity Mining and offer short videos to educate them about DeFi and creating AMMs."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/HummingBot/hummingbot_website_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kmgh8YU=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/HummingBot/hummingbot_website_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/gVXsX0HfQm3u5OgyilpnJL/Hummingbot?node-id=22%3A0',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View user testing results',
              url: 'https://docs.google.com/presentation/d/1Jd9C4u6FWfUgkalBakRkrut6kTSWyZgBai-vqpHR6a8/edit#slide=id.g9425903d14_0_0',
            },
            {
              label: 'View final report',
              url: 'https://www.notion.so/deepworkstudio/Final-Report-f6c6ede2bb9b460ca8827d5a06dad149',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'View live product',
              url: 'https://hummingbot.io/',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Fluence',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Fluence/Fluence_Main.png',
    slug: `${convertSpacesToDash('Fluence')}`,
    description:
      'The team behind Fluence is building a decentralised cloud service, enabling developers not only cheaper cloud storage, but building entire applications which can be run on the fluence network. We designed and tested the prototype from scratch.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/1lehTHJazyePbqlCCCbSaa/Fluence-Copy?node-id=228%3A246&scaling=min-zoom',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"The team behind fluence built a protocol that allows developers to compose applications from different cloud services. These services are similar to what can be run on an AWS cloud, but can be hosted on individuals\' nodes, generating profit when used. Together we designed an interface which elegantly guides developers through the composition of the services, writing code for the application and paying for usage upon deployment."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://miro.com/app/board/o9J_kpfAUII=/',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_km3r2MY=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Fluence/fluence_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/1lehTHJazyePbqlCCCbSaa/Fluence-(Copy)?node-id=228%3A246',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: [CaseStudyType.productDesign, CaseStudyType.oneWeekSprints],
    title: 'Deriva Dex',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Deriva+Dex/Deriva_Dex_Main.png',
    slug: `${convertSpacesToDash('Deriva Dex')}`,
    description:
      'DerivaDex is building the future of trading – a community-governed derivatives exchange that unites performance and autonomy.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/Fiw82ej7xnJzSoIfUW0ICe/DerivaDex-Proto?node-id=20%3A570&scaling=scale-down&page-id=20%3A570',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"DerivaDex was one of the first decentralised exchanges targeting customers from asian countries, where mobile devices dominate. The biggest challenges were around bringing the complexity of a DEX into a small screen without compromising functionality."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Deriva+Dex/derivadex_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_ktW8U4o=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Deriva+Dex/derivadex_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/Fiw82ej7xnJzSoIfUW0ICe/DerivaDex-Proto?node-id=471%3A1030',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://www.notion.so/deepworkstudio/Final-Report-66a5920b527d45638a9bdc8f6a700fda',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: [CaseStudyType.productDesign, CaseStudyType.oneWeekSprints],
    title: 'Nexus Mutual',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Nexus+Mutual/Nexus_Mutual_Main.png',
    slug: `${convertSpacesToDash('Nexus Mutual')}`,
    description:
      'Designing a user-friendly interface for staking against smart contracts. Before Deep Work existed, Deep Work co-founder Charlie was part of the core team taking the Nexus Mutual from concept to launch.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/H4jcRiurdG2ULHQ760hVi8/Nexus-Mutual-Staking-Interface-Prototype?node-id=0%3A654&scaling=min-zoom&page-id=0%3A1',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Based on what we designed (and iterated on after a few interviews), we successfully focused on pre-empting any possible mistake and made sure the explanation and guidance always avoids ambiguities. We incorporated as much space for additional information as possible, so that even if this website reaches users who have no context (or knowledge about validators) they still have the chance to educate themselves before staking large sums of money in the network."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Nexus+Mutual/nexusmututal_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kv-Vr7k=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Nexus+Mutual/figma_placeholder+(1).png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/H4jcRiurdG2ULHQ760hVi8/Nexus-Mutual-Staking-Interface-Prototype?node-id=0%3A1',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'View live product',
              url: 'https://app.nexusmutual.io/staking',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Hummingbot Miner',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Hummingbot+Miner/Hummingbot_Miner_Main.png',
    slug: `${convertSpacesToDash('Hummingbot Miner')}`,
    description:
      'Designing the first ever liquidity mining platform with Hummingbot.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/9mbwqict7FtRZrrRJVBbNb/Hummingbot-Miner-Prototype?node-id=0%3A1&scaling=min-zoom',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"After learning that current users prefer support for more exchanges rather than a GUI, the Hummingbot decided to introduce their users to a new concept they called "Liquidity Mining". Together we designed the onboarding and an interface to track profits."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Hummingbot+Miner/miner_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kwTFAT8=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Hummingbot+Miner/miner_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/9mbwqict7FtRZrrRJVBbNb/Hummingbot-Miner-Prototype?node-id=0%3A1',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://www.notion.so/deepworkstudio/Liquidity-Miner-Sprint-Final-Report-5e3e25f1dac747f9b41495e71a147ba0',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'View live product',
              url: 'https://miner.hummingbot.io/',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Kelly Klee App',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Kelly+Klee/Kelly_Klee_Main.png',
    slug: `${convertSpacesToDash('Kelly Klee App')}`,
    description:
      'Creating and validating a mobile app for an insurance company targeted at high-net worth individuals.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/eG5HphbXRBxuebd7bUmtEy/Kelly-Klee-App-(andrej-%40-ed19b3c)?node-id=9%3A6&scaling=min-zoom&page-id=9%3A6',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Kelly Klee is an insurance company for high net worth individuals. In order to speed up their internal processes and give their customers the ability to insure valuable objects quickly, we designed an app. I provides users access to variety of different insurance policies (also external) and an easy way to reach out to an assistant."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Kelly+Klee/kellyklee_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kvvvLWM=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Kelly+Klee/figma_placeholder.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/eG5HphbXRBxuebd7bUmtEy/Kelly-Klee-App-(andrej-%40-ed19b3c)?node-id=9%3A6',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://www.notion.so/deepworkstudio/Final-Report-App-ca98001d8ffe461cb71340869c2f6496',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Ramp',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Ramp/Ramp_Instant_Main.png',
    slug: `${convertSpacesToDash('Ramp')}`,
    description:
      '“Deepwork’s sprint offers shortest design cycle available on the market. Charlie and his team are masters of communication, so working with them is not only very effective, but also a real pleasure.” – Szymon Sypniewicz, Founder of Ramp',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/C8TYstt1matZkqswU8gpfTVi/Ramp-Instant-Master-68c47c9?node-id=0:2308&scaling=scale-down-width',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Ramp created an easy way to buy crypto assets fast while performing KYC/AML verification through your existing bank. Together we designed the interface and process to give users confidence and create trust when entering personal details and sending fiat money."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Ramp/ramp_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kx_HWPQ=/',
            },
            {
              label: 'View additional white board',
              url: 'https://miro.com/app/board/o9J_kwqGoTo=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Ramp/ramp_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/C8TYstt1matZkqswU8gpfTVi/Ramp-Instant-Master-68c47c9?node-id=0:2305',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View user testing results',
              url: 'https://www.notion.so/deepworkstudio/Final-Report-8588cc507a7549d9a7af4dfeea72ed36',
            },
            {
              label: 'View final report',
              url: 'https://www.notion.so/deepworkstudio/Final-Report-Experience-Sprint-69486aadcf3c43b2b552fc13be9a081b',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'ConsenSys EthCalculator',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/ConsenSys+and+Ethereum/ConsenSys_ETH_Main.png',
    slug: `${convertSpacesToDash('ConsenSys EthCalculator')}`,
    description:
      'Calculating investment returns for eth2.0 with ConsenSys and the Ethereum Foundation.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/yxBJhgXYUEYW4W2D0bVwvt/Eth-2.0-Calculator--by-Deep-Work%2C-ConsenSys-and-The-Ethereum-Foundation?node-id=66%3A0&scaling=min-zoom&page-id=0%3A8568',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Before the launch of the Eth2 staking interface, it was important to provide validators with a tool to calculate their expenses and projected returns on running a validator node. This is a simple calculator to give users a visual perspective."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/ConsenSys+and+Ethereum/ethcalculator_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kw3UMFY=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/ConsenSys+and+Ethereum/ethcalculator_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/yxBJhgXYUEYW4W2D0bVwvt/Eth-2.0-Calculator-by-Deep-Work-ConsenSys-and-The-Ethereum-Foundation?node-id=0:8568',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'ConsenSys & Skale',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/ConsenSys_Skale/ConsenSys_Skale_Main.png',
    slug: `${convertSpacesToDash('ConsenSys & Skale')}`,
    description:
      'Designing the Activate platform with ConsenSys, CodeFi and Skale.',
    bottomLinks: [
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/default-miro-figma/miro_placeholder.png',
          links: [],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/default-miro-figma/figma_placeholder.png',
          links: [],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'View live product',
              url: 'https://activate.codefi.network/',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: [CaseStudyType.productDesign, CaseStudyType.oneWeekSprints],
    title: 'Pillar Wallet',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Pillar+Wallet/Pillar_Wallet_Main.png',
    slug: `${convertSpacesToDash('Pillar Wallet')}`,
    description:
      'Multi-Identity contact management and privacy wallet.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/VeLeLMPIIQyxVhkHyx33qwUR/Pillar-Wallet-(andrej-@-c123f91)?node-id=0:252&scaling=scale-down&page-id=0:1',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Together with Pillar we explored what a digital wallet could look like, that can store not only financial assets, but also personal contacts and data for multiple (sub-)identities."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Pillar+Wallet/pillar_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kxPPMz4=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Pillar+Wallet/pillar_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/VeLeLMPIIQyxVhkHyx33qwUR/Pillar-Wallet-(andrej-%40-c123f91)?node-id=0%3A252',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://www.notion.so/deepworkstudio/Final-Report-bcfb3bc1c061444f9db1bf7c9c59fd3f',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: [CaseStudyType.productDesign, CaseStudyType.oneWeekSprints],
    title: 'Hummingbot v2',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/HummingBot+V2/Hummingbot_V2_Main.png',
    slug: `${convertSpacesToDash('Hummingbot v2')}`,
    description:
      'An interface for Decentralized Market Making with Hummingbot.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/PckIQnmkyG4OvS66dA98bkCn/Humminbot-v2-Andrej-copy?node-id=8:0&viewport=3129,2493,0.4533715844154358&scaling=scale-down-width',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Together with Hummingbot we explored what a graphical user interface could look like for their CLI based automated market maker software."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/HummingBot+V2/Hummingbot_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kxnaUUk=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/HummingBot+V2/hummingboot_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/PckIQnmkyG4OvS66dA98bkCn/Humminbot-v2-(Andrej)-copy',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://www.notion.so/deepworkstudio/Sprint-1-Final-Report-435490a4a8c84bc2a713e95a50858229',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: [CaseStudyType.productDesign, CaseStudyType.oneWeekSprints],
    title: 'Molecule',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Molecule/Molecule_Main.png',
    slug: `${convertSpacesToDash('Molecule')}`,
    description:
      'The pharmaceutical industry is geared towards maintaining outdated medicine, pushes doctors towards quick solutions and blocks new innovative research. We helped the team behind Molecule to solve this massive problem using software.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/b1oG47Otus2klTh2PbWlZK/Molecule-v3-(Copy)?node-id=131%3A540&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=131%3A540',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"The team behind Molecule is building a platform for pharmaceutical researchers to access funding from retail investors. We explored how a patent can be tokenised and sold on a bonding curve, how to present information about the research and how to make funding of long-term projects more accessible."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Molecule/Molecule_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_kxtaCpk=/',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Molecule/Molecule-Figma1.PNG',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/b1oG47Otus2klTh2PbWlZK/Molecule-v3-Copy',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://www.notion.so/deepworkstudio/Final-Report-6c34621602e5450683948210821c9748',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'View case study',
              url: 'https://medium.com/deep-work-studio/what-the-future-of-pharmaceutical-research-could-look-like-d03fef0d26d1',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: [CaseStudyType.productDesign, CaseStudyType.oneWeekSprints],
    title: 'EthaLend',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/EthaLend+/EthaLend_Main.png',
    slug: `${convertSpacesToDash('EthaLend')}`,
    description:
      'ETHA Lend is a composable protocol that abstracts the complexity in DeFi to provide algorithmically optimal yield',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/nhgBUsrttRtMmmni12uNUV/Deep-Work---ETHA-Lend?node-id=11%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=11%3A2',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"EthaLend is a protocol agnostic yield optimiser. Together with their team, we designed the interface for depositing different assets and showing users where these assets generate the highest yield."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/EthaLend+/ETHALend_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_lEyYPos=',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/EthaLend+/ethalend_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/nhgBUsrttRtMmmni12uNUV/Deep-Work-ETHA-Lend',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://app.pitch.com/app/presentation/95df399d-4d6b-48cb-b890-e30e2e6f1fd3/b99ea217-cdfd-4d66-8028-d4ac39eb59cc',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'AllianceBlock',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/AllianceBlock/AllianceBlock_Main.png',
    slug: `${convertSpacesToDash('AllianceBlock')}`,
    description:
      'Deep Work and Allianceblock worked together to design a decentralised capital market. Designing all sides of the marketplace and the DAO governance.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/pKjQmfTOYBVKcVJT2f8MhN/AllianceBlock---Deep-Work?node-id=955%3A9339&scaling=min-zoom&page-id=955%3A9338&starting-point-node-id=955%3A9339',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"AllianceBlock is a multi-sided lending and borrowing platform for project teams. We designed three different user journeys: for borrowers, who seek funding for their project; for lenders, who are looking to invest their money into projects with long-term potential and for governance-token holders, who collectively curate the projects and provide quality assessment."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/AllianceBlock/AllianceBlock_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_lXZJ78I=',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/AllianceBlock/allianceblock_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/pKjQmfTOYBVKcVJT2f8MhN/AllianceBlock-Deep-Work',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://app.pitch.com/app/presentation/95df399d-4d6b-48cb-b890-e30e2e6f1fd3/25bcbbab-fb55-4599-b815-06d2977e647a',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'View live product',
              url: 'https://allianceblock.io/',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: [CaseStudyType.productDesign, CaseStudyType.oneWeekSprints],
    title: 'Huma',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Huma/Huma_Main.png',
    slug: `${convertSpacesToDash('Huma')}`,
    description:
      '',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/KlEa6IeAtSGycbaAybi8Wb/Huma-(Draft-1)?node-id=21%3A4424&scaling=min-zoom&page-id=18%3A1679',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Huma is an extremely complex organisations that uses automation to connect health practitioners and patients. This interface is an experiment to improve their internal processes of creating a JSON file from a series of data inputs."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Huma/huma_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_l_cL0WE=',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Huma/huma_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/KlEa6IeAtSGycbaAybi8Wb/Huma-(Draft-1)?node-id=21%3A4424',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://app.pitch.com/app/presentation/95df399d-4d6b-48cb-b890-e30e2e6f1fd3/cf0ebc02-3c36-4110-8d30-bdd024bf2401',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: [CaseStudyType.productDesign, CaseStudyType.oneWeekSprints],
    title: 'Colony',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Colony/Colony_Main.png',
    slug: `${convertSpacesToDash('Colony')}`,
    description:
      'Colony makes it easy for people all over the world to build organizations together, online. Deep Work ran a Hypersprint with the Colony team to build out features so we can use Colony to run projects.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/qH1uJnZgunXfsS31g353vY/DeepWork-%E2%80%93-Colony.io?page-id=5269%3A11259&node-id=5269%3A20871&viewport=-2517%2C418%2C0.14963431656360626&scaling=min-zoom',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Colony is one of the leading tools for running distributed organisations. Together with the team we designed a part of the interface to enable organisations to create ephemeral projects, which can be created, worked on and deprecated upon completion."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Colony/colony_miro.jpeg',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_l9Q70iU=',
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Colony/colony_figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/KD0izMNN460ZFXRs3o5B34/Deep-Work-Colony-Project-Dashboard?node-id=0%3A1',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report',
              url: 'https://app.pitch.com/app/player/95df399d-4d6b-48cb-b890-e30e2e6f1fd3/e3438c6a-8fb8-41e8-9801-66b50c459029/1acc735d-4b57-42f4-9643-c475868d791a',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: '',
              url: '',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.branding,
    title: 'Wyre',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Wyre/Wyre_Main.png',
    slug: `${convertSpacesToDash('Wyre')}`,
    description:
      '',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/file/yuOcWrbxoyE2l49GRl0DW3/Wyre-Branding-Deep-Work?node-id=0%3A1',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Back at the end of 2018 the team at Wyre had pivoted to their new strategy to empower fintech and DeFi builders to execute their vision through secure FIAT onboarding and access. Charlie worked closely with the team in San Francisco to revamp the brand and communication strategy to their new mission. Since the start of 2019, Wyre has gone from processing $27m to over $200m per quarter - a 632% growth."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/default-miro-figma/miro_placeholder.png',
          links: [],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/default-miro-figma/figma_placeholder.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/yuOcWrbxoyE2l49GRl0DW3/Wyre-Branding-Deep-Work?node-id=0%3A1',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'View live product',
              url: 'https://www.sendwyre.com/',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Minterest',
      mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Minterest_Main.png',
      slug: `${convertSpacesToDash('Minterest')}`,
    description:
      'Minterest created a lending protocol for high net worth individuals that gathers fees from their transactions and redistributes the profits to the users.',
    bottomLinks: [
      {
        title: 'Try the prototype',
            url: 'https://www.figma.com/file/Tg48irZcoyuZLD4vkeCX3E/Balint-x-DW-%E2%80%93-Minterest-Product?node-id=423%3A302',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Minterest created a lending protocol for high net worth individuals that gathers fees from their transactions and redistributes the profits to the users."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
              image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Minterest-Miro.png',
          links: [
            {
              label: 'View collaborative white board',
                  url: 'https://miro.com/app/board/o9J_lsuUSUo=/'
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
            image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Minterest-Figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/Tg48irZcoyuZLD4vkeCX3E/Balint-x-DW-%E2%80%93-Minterest-Product?node-id=423%3A302',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report', // look for titles based on the link you pull and look at above case studies for reference
              url: 'https://app.pitch.com/app/presentation/95df399d-4d6b-48cb-b890-e30e2e6f1fd3/13ed4840-94ed-4f68-9bcd-1f09ef7831a0',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'Minterest UI', // label should correspond with the additional file you are showing. Look for label in spread sheet and label accordingly
              url: 'https://drive.google.com/file/d/18k4WsSh2gZgj28B6Dj35nt5pCZf0SOwV/view?usp=sharing',
            },
          ],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Deep Skills Protocol',
      mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Deep_Skills_Main.png',
      slug: `${convertSpacesToDash('Deep Skills Protocol')}`,
    description: 'Deep Skills is a software that lets organizations use the same recruitment and coordination infrastructure that Deep Work uses to onboard and vet experts.',
    bottomLinks: [
      {
        title: 'Try the prototype',
            url: 'https://www.figma.com/file/BxJXCmpy83E4fIQRRuEXSc/Deep-Work-Protocol?node-id=6%3A3117',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description: '"Deep Skills is a software that lets organizations use the same recruitment and coordination infrastructure that Deep Work uses to onboard and vet experts."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Deepwork-Miro.png',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_l2ohLhc=/'
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Deepwork-Figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/BxJXCmpy83E4fIQRRuEXSc/Deep-Work-Protocol?node-id=6%3A3117',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report', // look for titles based on the link you pull and look at above case studies for reference
              url: 'https://app.pitch.com/app/presentation/95df399d-4d6b-48cb-b890-e30e2e6f1fd3/9dae1a33-7913-4a2d-96b3-53ddb2745e25',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.branding,
    title: 'Papelcoin',
      mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Papelcoin_Main.png',
      slug: `${convertSpacesToDash('Papelcoin')}`,
    description: 'Papel is a global banking infrastructure that aims to transition to web3. This project was a website including their visual identity and how they present themselves to customers.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/file/mPMaXFDlOAjLCfLqAHBgJf/DeepWork-x-Papel?node-id=6725%3A31372',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description: '"Papel is a global banking infrastructure that aims to transition to web3. This project was a website including their visual identity and how they present themselves to customers."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Papel-Miro.png',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_lzAbTVk=/'
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Papel-Figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/mPMaXFDlOAjLCfLqAHBgJf/DeepWork-x-Papel?node-id=6725%3A31372',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report', // look for titles based on the link you pull and look at above case studies for reference
              url: 'https://drive.google.com/uc?id=1vMUWRu8_0vDgZvwTOh7nOZC8Db2HHwb-&export=download',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.branding,
    title: 'Textile',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/textile/Textile-Main.png',
    slug: `${convertSpacesToDash('Textile')}`,
    description:
      'Tableland is a tool that lets game developers access web3 content like NFTs through SQL databases.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/NhcJ3PpD1ZHodkiy27EpX1/Tableland-HyperSprint?page-id=6699%3A398&node-id=6699%3A951&viewport=241%2C48%2C1.11&scaling=scale-down&starting-point-node-id=6699%3A951',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Tableland is a tool that lets game developers access web3 content like NFTs through SQL databases"',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/textile/miro.png',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/uXjVOepUyz4=/'
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/textile/figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/proto/NhcJ3PpD1ZHodkiy27EpX1/Tableland-HyperSprint?page-id=6699%3A398&node-id=6699%3A951&viewport=241%2C48%2C1.11&scaling=scale-down&starting-point-node-id=6699%3A951',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View User Feedback', // look for titles based on the link you pull and look at above case studies for reference
              url: 'https://app.pitch.com/app/public/player/6fb80038-42e2-47f6-a0c6-c1597d46f819/08483228-d2a0-42ad-9aed-8540efb80c6d',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Increment',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/increment/Increment-Main.png',
    slug: `${convertSpacesToDash('Increment')}`,
    description:
      'Increment is a decentralized forex exchange for perpetual trading with up to 80% leverage',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/nXz8A7vDMPoPPXTC3l30ar/Increment-x-Deep-Work?node-id=217%3A207&scaling=min-zoom&page-id=217%3A207&starting-point-node-id=239%3A1129',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"Increment is a decentralized forex exchange for perpetual trading with up to 80% leverage"',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/increment/miro.png',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_ljtyzzY=/'
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/increment/figma.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/nXz8A7vDMPoPPXTC3l30ar/Increment-x-Deep-Work?node-id=217%3A207',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View User Feedback', // look for titles based on the link you pull and look at above case studies for reference
              url: 'https://app.pitch.com/app/presentation/95df399d-4d6b-48cb-b890-e30e2e6f1fd3/f3081f59-dba4-4faf-a77b-cc85539290da/0535de65-7a6b-46b0-91d1-191d6d85ebe6',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Stakehouse',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Stakehouse/Stakehouse.png',
    slug: `${convertSpacesToDash('Stakehouse')}`,
    description:
      'StaleHouse offers a new way to make the ETH2 stake liquid and earn additional rewards from using "branded" ETH2 staking derivatives.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/file/DGUeKHnReJsFID8EtgsTFn/DeepWork-x-StakeHouse?node-id=6593%3A12247',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"StaleHouse offers a new way to make the ETH2 stake liquid and earn additional rewards from using "branded" ETH2 staking derivatives."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Stakehouse/Miro-Main.png',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_lsuUSUo=/'
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Stakehouse/Figma-Main.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/DGUeKHnReJsFID8EtgsTFn/DeepWork-x-StakeHouse?node-id=6593%3A12247',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View final report', // look for titles based on the link you pull and look at above case studies for reference
              url: 'https://app.pitch.com/app/presentation/95df399d-4d6b-48cb-b890-e30e2e6f1fd3/4b7f26a7-6491-400e-b5b4-3597956d12e8',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [],
        },
      ],
    },
  },
  {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'SISU',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/SISU/SISU.png',
    slug: `${convertSpacesToDash('SISU')}`,
    description:
      'SISU is a portfolio dashboard that unifies cross-chain assets from many different wallets and exchanges.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: 'https://www.figma.com/proto/LIJBQHa9TUfpRj1xGbXa0x/SISU---Deep-Work?node-id=76%3A5097&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=66%3A977',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"SISU is a portfolio dashboard that unifies cross-chain assets from many different wallets and exchanges."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/SISU/Miro-Main.png',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/o9J_lsTajOE=/'
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/SISU/Figma-Main.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/LIJBQHa9TUfpRj1xGbXa0x/SISU---Deep-Work?node-id=76%3A5097',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View user feedback',
              url: 'https://app.pitch.com/app/presentation/95df399d-4d6b-48cb-b890-e30e2e6f1fd3/6bd7acaa-1a50-4509-a410-d67b8df76f2f',
            },
            {
              label: 'View final report', // look for titles based on the link you pull and look at above case studies for reference
              url: 'https://app.pitch.com/app/presentation/95df399d-4d6b-48cb-b890-e30e2e6f1fd3/e2ca93cd-2f16-428e-804d-c4960924b520',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'View additional Miro', // label should correspond with the additional file you are showing. Look for label in spread sheet and label accordingly
              url: 'https://miro.com/app/board/o9J_loXASJo=/',
            },
          ],
        },
      ],
    },
  },
    {
    id: uuidv4(),
    type: CaseStudyType.productDesign,
    title: 'Gitpoap',
    mainImage: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Gitpoap/Gitpoap.png',
    slug: `${convertSpacesToDash('Gitpoap')}`,
    description:
      'GitPOAP is a platform that issues POAP badges for completed work on GitHub projects.',
    bottomLinks: [
      {
        title: 'Try the prototype',
        url: '',
        type: 'contained',
      },
      {
        title: 'Working files',
        url: '',
        type: 'outlined',
      },
    ],
    details: {
      description:
        '"GitPOAP is a platform that issues POAP badges for completed work on GitHub projects."',
      talkingPoints: [
        {
          label: 'Collaboration',
          description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Gitpoap/Miro-Main.png',
          links: [
            {
              label: 'View collaborative white board',
              url: 'https://miro.com/app/board/uXjVOYnpM10=/'
            },
          ],
        },
        {
          label: 'Design',
          description: 'Based on the results of the workshop, our team prototypes the most important features.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/Gitpoap/Figma-Main.png',
          links: [
            {
              label: 'View design prototype',
              url: 'https://www.figma.com/file/VwHlf0Mrz8vcHxYIXBSyVw/Deep-Work---GitPOAP?node-id=295%3A3666',
            },
          ],
        },
        {
          label: 'User Testing',
          description: 'In-depth user interviews validate the designs and create clear next steps for development.',
          image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
          links: [
            {
              label: 'View user feedback', // look for titles based on the link you pull and look at above case studies for reference
              url: 'https://app.pitch.com/app/presentation/95df399d-4d6b-48cb-b890-e30e2e6f1fd3/0835dc10-e89e-4c30-b8c8-dff93a4749c0',
            },
          ],
        },
        {
          label: 'Additional Files',
          description: '',
          image: '',
          links: [
            {
              label: 'View loom summary', // label should correspond with the additional file you are showing. Look for label in spread sheet and label accordingly
              url: 'https://www.loom.com/share/15eb65288ec04099a7e4aa7e84d13cf8',
            },
          ],
        },
      ],
    },
  },
  //  {
  //   id: uuidv4(),
  //   type: CaseStudyType.branding,
  //   title: 'Product/Company Name',
  //   mainImage: 'main img URL',
  //   slug: `${convertSpacesToDash('Product/Company Name')}`,
  //   description:
  //     '',
  //   bottomLinks: [
  //     {
  //       title: 'Try the prototype',
  //       url: 'Prototype/Figma URL',
  //       type: 'contained',
  //     },
  //     {
  //       title: 'Working files',
  //       url: 'Working Files URL or Clear this text',
  //       type: 'outlined',
  //     },
  //   ],
  //   details: {
  //     description:
  //       '"Add description inside these double quotes"',
  //     talkingPoints: [
  //       {
  //         label: 'Collaboration',
  //         description: 'To align all members of the team, we start each project with 3 collaborative workshops.',
  //         image: 'Miro Img URL, if no URL then Clear the text here',
  //         links: [
  //           {
  //             label: 'View collaborative white board',
  //             url: 'Miro URL, if no Miro remove this whole object inside curly braces and delete the curly braces'
  //           },
  //         ],
  //       },
  //       {
  //         label: 'Design',
  //         description: 'Based on the results of the workshop, our team prototypes the most important features.',
  //         image: 'Figma Img URL, if no URL then clear the text here',
  //         links: [
  //           {
  //             label: 'View design prototype',
  //             url: 'Figma URL here, if no Figma then delete this entire object and the curly braces',
  //           },
  //         ],
  //       },
  //       {
  //         label: 'User Testing',
  //         description: 'In-depth user interviews validate the designs and create clear next steps for development.',
  //         image: 'https://deepworkphotos.s3.us-east-2.amazonaws.com/usertesting.png',
  //         links: [
  //           {
  //             label: 'View final report', // look for titles based on the link you pull and look at above case studies for reference
  //             url: 'Insert URL here and if there is no user testing remove this entire object inside of links along with curly braces',
  //           },
  //         ],
  //       },
  //       {
  //         label: 'Additional Files',
  //         description: '',
  //         image: '',
  //         links: [
  //           {
  //             label: 'View live product', // label should correspond with the additional file you are showing. Look for label in spread sheet and label accordingly
  //             url: 'Insert the files URL here, if there are no addional files then delete entire object inside of Links along with curly braces',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
]