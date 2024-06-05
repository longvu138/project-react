import { useEffect, useState } from "react"
import DefaultLayout from "@component/Layout/Default"
import { trans } from "@/locale"
import { usePageTitleStore } from "@store/usePageTitle"
import { useSearchParams } from "react-router-dom"
import { localStore } from "@/util/LocalStore"
import { defaultApiClient } from "@/util/ApiClient"

export const Dashboard = (props: any) => {
  const changePageTitle = usePageTitleStore((state) => state.changeTitle)
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState<any>([])
  const [dataUser, setDataUser] = useState(null)
  const currentUser = localStore.getJson("loggedUser") as any
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTab = searchParams.get("tab") || "tab1"
  useEffect(() => {
    changePageTitle(trans("Peach"))
  }, [changePageTitle])

  useEffect(() => {
    const callApi = () => {
      defaultApiClient.get('/profile').then((res) => {
        localStore.setJson('loggedUser', res.data)
      }).catch((err) => console.log(err));
    }
    callApi()
  }, [])

  return (
    <DefaultLayout
      {...props}
      loading={false}
      title={trans("sidebar.dashboard")}>
      {/* <div className="text-center grid items-center justify-center">
        {currentUser?.verified ? (
          <div className="bg-slate-50 w-[500px] rounded-xl p-6">
            <div className="grid items-center justify-center">
              <div className="flex items-center justify-start ml-10 font-roboto">
                <span className="font-medium text-base mr-1">Loại giấy tờ:</span>
                {infomationUser.card_type || "---"}
              </div>
              <div className="flex items-center justify-start ml-10 font-roboto">
                <span className="font-medium text-base mr-1"> Họ tên:</span> {infomationUser.name || "---"}
              </div>
              <div className="flex items-center justify-start ml-10 font-roboto">
                <span className="font-medium text-base mr-1"> Ngày sinh:</span> {infomationUser.birth_day || "---"}
              </div>
              <div className="flex items-center justify-start ml-10 font-roboto">
                <span className="font-medium text-base mr-1"> Quốc tịch:</span> {infomationUser.nationality || "---"}
              </div>
              <div className="flex items-center justify-start ml-10 font-roboto">
                <span className="font-medium text-base mr-1"> Địa chỉ:</span> {infomationUser.recent_location || "---"}
              </div>
              <div className="flex items-center justify-start ml-10 font-roboto">
                <span className="font-medium text-base mr-1"> Loại bằng lái: </span> {infomationUser.rank || "---"}
              </div>
              <div className="flex items-center justify-start ml-10 font-roboto">
                <span className="font-medium text-base mr-1"> Giá trị sử dụng: </span> {infomationUser.valid_date || "---"}
              </div>
              <Result
                status="success"
                title="Chúc mừng"
                icon={<SmileOutlined />}
                subTitle={<h2>Thông tin của bạn đã được xác thực</h2>}
              />
            </div>
          </div>
        ) : (
          <>
            <Tabs
              type="card"
              activeKey={activeTab}
              items={items}
              onChange={onChange}
              className="flex items-center justify-center"
            />
            <Button
              loading={loading}
              onClick={handleUploadImage}
              type="primary"
              size="large"
              className="mt-20">
              Tải ảnh lên
            </Button>
          </>
        )}
      </div> */}
    </DefaultLayout>
  )
}
