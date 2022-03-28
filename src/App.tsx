import * as React from 'react'
import { Layout, Card } from "antd";
import { TabContent } from "./components/TabContent";
const { Header, Content } = Layout;

export default function App(props: any) {
    return (
    <Layout style={{height:"100%"}}>
      <Header>bla</Header>
      <Content>
        <TabContent/>
      </Content>
    </Layout>
  );
}
