import {Button, Col, DatePicker, Row} from "antd";
import {
    CheckOutlined,
    DownloadOutlined,
    Loading3QuartersOutlined,
    PlusCircleFilled,
    PrinterOutlined
} from "@ant-design/icons";
import {DashboardGrid} from "./DashboardGrid";
import * as React from "react";
import {useState} from "react";
import {RowsTypeEnum} from "../interface/enums";
import faker from '@faker-js/faker'

const {RangePicker} = DatePicker;

const COLUMNS = [
    {
        title: 'Data',
        dataIndex: 'data',
    },
    {
        title: 'Company name',
        dataIndex: 'companyName',
    },
    {
        title: 'Summary2',
        dataIndex: 'Summary2',
    },
    {
        title: 'Summary3',
        dataIndex: 'Summary3',
    },
    {
        title: 'Summary4',
        dataIndex: 'Summary4',
    },
    {
        title: 'Summary5',
        dataIndex: 'Summary5',
    },
];


export const Dashboard = () => {

    const [rows, setRows] = useState([])
    const [key, setKey] = useState(0)
    const [rowType, setRowType] = useState(RowsTypeEnum.ALL)

    const onAddClick = () => {
        setRows([...rows, {key, data: faker.name.findName(), companyName:faker.company.companyName(), type:key%2==0?RowsTypeEnum.EVEN:RowsTypeEnum.ODD}])
        setKey(key+1)
    }

    const showRows = (type: RowsTypeEnum) => {
        setRowType(type);
    }

    const visibleRows = rowType === RowsTypeEnum.ALL?rows:rows.filter(e=>e.type===rowType)

    return (
        <Row style={{height:"100%"}}>
            <Col span={6}>
                <DashboardHelper onAddClick={onAddClick} onCustomButtonClick={showRows}/>
            </Col>
            <Col span={18}>
                <Row>
                    <Col span={12}>
                        <span style={{fontSize: "34px", fontFamily: "Quicksand"}}>Dashboard</span>
                    </Col>
                    <Col span={8} style={{verticalAlign: "middle"}}>
                        <RangePicker/>
                    </Col>
                    <Col span={2}>
                        <Button icon={<PrinterOutlined/>}/>
                    </Col>
                    <Col span={2}>
                        <Button icon={<DownloadOutlined/>}/>
                    </Col>
                </Row>
                <Row style={{height: "100%"}}>
                    <Col span={23}>
                        <DashboardGrid columns={COLUMNS} rows={visibleRows}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export const DashboardHelper = (props:any) => {
    const {onAddClick, onCustomButtonClick} = props;
    return (
        <div className={"dashboard-helper flex-col"}>
            <div style={{textAlign: "center"}}>
              <Button shape="round" icon={<PlusCircleFilled />} onClick={onAddClick}>
                Create new
              </Button>
            </div>
            <DashboardHelperButton icon={<Loading3QuartersOutlined />} text={"Even rows of data"} desc={"Display rows 2,4,6 etc"} onClick={()=>onCustomButtonClick(RowsTypeEnum.ODD)}/>
            <DashboardHelperButton icon={<CheckOutlined />} text={"Odd rows of data"} desc={"Display rows 1,3,5 etc"} onClick={()=>onCustomButtonClick(RowsTypeEnum.EVEN)}/>
            <DashboardHelperButton icon={<PrinterOutlined />} text={"Even rows of data"} desc={"Display all data"}  onClick={()=>onCustomButtonClick(RowsTypeEnum.ALL)}/>
        </div>)
}



export const DashboardHelperButton = (props: { icon: JSX.Element, text: string, desc: string, onClick?: ()=>void}) => {
  return (
      <div className={"flex-row button-wrapper"} onClick={props.onClick}>
        <div className={"helper-button-icon-container"}>
          {props.icon}
        </div>
        <div className={"flex-col helper-button-text-container"}>
          <h1>{props.text}</h1>
          <h3>{props.desc}</h3>
        </div>
      </div>)
}