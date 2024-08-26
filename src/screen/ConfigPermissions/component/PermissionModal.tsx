import { IPermisson } from "@/domain/Permisson"
import { Button, Form, Input, Modal, Switch } from "antd"
import { useEffect } from "react"
interface IPermissionModal {
    isModalOpen: boolean
    handleModal: () => void
    selectedData: IPermisson
}
const PermissionModal = (props: any) => {
    const { isModalOpen, handleModal, selectedData, handleSubmitForm } = props
    const [form] = Form.useForm()

    const initialValues = {
        code: "",
        name: "",
        descriptions: "",
        enabled: true,
    }

    useEffect(() => {
        if (selectedData) {
            console.log(selectedData);
            
            form.setFieldsValue({
                code: selectedData.code,
                name: selectedData.name,
                descriptions: selectedData.descriptions,
                enabled: selectedData.enabled,
            })
        }
    }, [])

    return (
        <Modal
            centered
            title={`${selectedData ? "Cập nhật quyền" : "Thêm mới quyền"}`}
            open={isModalOpen}
            footer={false}
            onCancel={handleModal}>
            <Form
                form={form}
                name="control-hooks"
                labelCol={{ span: 5 }}
                className="mt-4"
                initialValues={initialValues}
                onFinish={handleSubmitForm}>
                <Form.Item
                    name="code"
                    label="Mã quyền"
                    rules={[{ required: true, message: "Vui lòng nhập mã quyền" }]}>
                    <Input disabled={selectedData} />
                </Form.Item>
                <Form.Item
                    name="name"
                    className="mt-6"
                    label="Tên quyền"
                    rules={[{ required: true, message: "Vui lòng nhập tên quyền" }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    className="mt-6"
                    name="descriptions"
                    label="Mô tả">
                    <Input />
                </Form.Item>
                <Form.Item
                    name="enabled"
                    className="mt-6"
                    label="Bật/Tắt"
                    valuePropName="checked">
                    <Switch defaultChecked />
                </Form.Item>
                <div className="flex justify-end gap-3">
                    <Button
                        onClick={handleModal}
                        size="large"
                        className="btn-cancel">
                        Hủy
                    </Button>

                    <Form.Item
                        shouldUpdate
                        className="submit !mb-0">
                        <Button
                            htmlType="submit"
                            type="primary"
                            icon={<i className="fa-regular fa-check" />}
                            size="large"
                            // disabled={isDisabledButton}
                        >
                            Cập nhật
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    )
}

export default PermissionModal
