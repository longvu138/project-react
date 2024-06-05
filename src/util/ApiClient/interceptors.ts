import { notification } from "antd"
import { get } from "lodash"

const handleResponseSuccess = (response: any) => response

const handleResponseError = (error: any) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (get(error, "response.status") === 401) {
    notification.error({
      message: "Phiên làm việc hết hạn. Vui lòng làm mới trình duyệt",
      key: "token_expired",
    })
    setTimeout(() => {
      window.location.href = "/login"
    }, 1000)
  } else if (get(error, "response.status") >= 500) {
    notification.error({
      message: "Máy chủ gặp sự cố. Vui lòng thử lại sau",
      key: "server_error",
    })
  }

  return Promise.reject(error)
}

export { handleResponseError, handleResponseSuccess }
