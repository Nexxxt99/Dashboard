import {Col, DatePicker, Row, Tabs} from "antd";
import React from "react";
import {Dashboard} from "./Dashboard";

const { TabPane } = Tabs;

const { RangePicker } = DatePicker;

export const TabContent = (props: any) => {
  return (
      <Tabs renderTabBar={(props, DefaultTabBar) => <Row style={{background:"#FFFFFF"}}><Col span={16} offset={6}><DefaultTabBar {...props}/></Col></Row>} defaultActiveKey="1">
      <TabPane tab={"Analyze"} key={1}>
          <Dashboard/>
      </TabPane>
        <TabPane tab={"My campaigns"} key={2}>
            say
        </TabPane>
        <TabPane tab={"Configure"} key={3}>
            hello
        </TabPane>
    </Tabs>
  );
};

