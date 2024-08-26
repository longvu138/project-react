import { IPermisson } from "@/domain/Permisson"
import { Table, TableColumnsType } from "antd"
import React from "react"
interface IDataTable {
    isLoading: boolean
    listPermisson: IPermisson[]
    handleEditPermission: (record: any) => void
}
const DataTable = (props: any) => {
    const { listPermisson, handleEditPermission } = props

    const columns: TableColumnsType<IPermisson> = [
        {
            title: "STT",
            dataIndex: "id",
            key: "id",
            render: (_: any, __: IPermisson, index: number) => {
                return <span>#{index + 1}</span>
            },
        },
        {
            title: "Mã Quyền",
            dataIndex: "code",
            key: "code",
            render: (code: string) => {
                return <span>{code}</span>
            },
        },
        {
            title: "Tên Quyền",
            dataIndex: "name",
            key: "name",
            render: (name: string) => {
                return <span>{name}</span>
            },
        },
        {
            title: "Mô tả",
            dataIndex: "descriptions",
            key: "descriptions",
            render: (descriptions: string) => {
                return <span>{descriptions}</span>
            },
        },
        {
            title: "Hành động",
            dataIndex: "actions",
            key: "actions",
            render: (_: any, record: any) => {
                return (
                    <span
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => handleEditPermission(record)}>
                        <i className="fa-regular fa-pen-to-square"></i>
                        <span>Chỉnh sửa</span>
                    </span>
                )
            },
        },
    ]
    return (
        <Table
            dataSource={listPermisson}
            columns={columns}
            // bordered={false}
            rowKey={"id"}
        />
    )
}

export default DataTable
