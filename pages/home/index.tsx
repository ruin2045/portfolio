import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  chakra,
} from '@chakra-ui/react'
import Contact from './contact'
import Skill from './skill'
import Tech from './tech'
export default function Home() {
  const StyledText = chakra(Text, {
    baseStyle: {
      fontSize: '5xl',
      color: 'gray.600',
      fontWeight: 600,
    },
  })

  return (
    <>
      <Tabs isFitted>
        <TabList>
          <Tab>
            <StyledText>経験</StyledText>
          </Tab>
          <Tab>
            <StyledText>使用技術</StyledText>
          </Tab>
          <Tab>
            <StyledText>ご連絡</StyledText>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Skill />
          </TabPanel>
          <TabPanel>
            <Tech />
          </TabPanel>
          <TabPanel>
            <Contact />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
