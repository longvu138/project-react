import DefaultLayout from "@/component/Layout/Default"
import { trans } from "@/locale"
import { usePageTitleStore } from "@/store/usePageTitle"
import { Button, message, Table } from "antd"
import React, { useEffect, useState } from "react"
import DataTable from "./component/DataTable"
import { useCreatePermission, usePermissionList, useUpdatePermission } from "@/hook/usePermission"
import PermissionModal from "./component/PermissionModal"

const ConfigPermission = (props: any) => {
    const changePageTitle = usePageTitleStore((state) => state.changeTitle)
    const [selectedData, setSelectedData] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    
    useEffect(() => {
        changePageTitle(trans("configPermission.title"))
    }, [changePageTitle])

    const { data: listPermisson, isLoading, refetch } = usePermissionList()
    const useCreatePermissionAction = useCreatePermission()
    const useUpdatePermissionAction = useUpdatePermission(selectedData!)

    const handleModal = () => {
        setIsModalOpen(!isModalOpen)
        selectedData && setSelectedData(null)
    }

    const handleSubmitForm = (values: any) => {
        if (!selectedData) {
            useCreatePermissionAction.mutateAsync(values).then((result: any) => {
                if (result?.status === 200) {
                    message.success(trans("message.success"))
                    handleModal()
                    refetch()
                }
            })
        } else {
            useUpdatePermissionAction.mutateAsync(values).then((result: any) => {
                if (result?.status === 200) {
                    message.success(trans("message.success"))
                    handleModal()
                    refetch()
                }
            })
        }
    }

    const handleEditPermission = (record: any) => {
        setSelectedData(record)
        handleModal()
    }

    return (
        <DefaultLayout
            {...props}
            loading={isLoading}
            title={trans("sidebar.dashboard")}>
            <div className="flex justify-between items-center">
                <span className="text-base text-black font-medium">Danh sách quyền</span>
                <Button
                    type="primary"
                    size="middle"
                    onClick={handleModal}>
                    Thêm Quyền
                </Button>
            </div>
            <div className="mt-4">
                <DataTable
                    listPermisson={listPermisson?.data}
                    isLoading={isLoading}
                    handleEditPermission={handleEditPermission}
                />
            </div>
            {isModalOpen && (
                <PermissionModal
                    selectedData={selectedData}
                    isModalOpen={isModalOpen}
                    handleModal={handleModal}
                    handleSubmitForm={handleSubmitForm}
                />
            )}
        </DefaultLayout>
    )
}

export default ConfigPermission
