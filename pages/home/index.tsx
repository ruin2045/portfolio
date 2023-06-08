import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Contact from './contact'
import Skill from './skill'
export default function Home() {
  return (
    <>
      <Tabs isFitted>
        <TabList>
          <Tab>スキル</Tab>
          <Tab>連絡</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Skill />
          </TabPanel>
          <TabPanel>
            <Contact />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
