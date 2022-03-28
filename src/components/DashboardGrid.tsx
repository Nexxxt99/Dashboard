import { Table, Tag, Space } from 'antd';

export const DashboardGrid = (props:any) => {
    const {columns, rows} = props


    return <Table columns={columns} dataSource={rows} />
}

