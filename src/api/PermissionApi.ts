import { IPermisson } from "@/domain/Permisson"
import { defaultApiClient } from "@util/ApiClient"
import { AxiosResponse } from "axios"

export default class PermissionApi {
    static getPermissions(): Promise<AxiosResponse<IPermisson[], any>> {
        return defaultApiClient.get<IPermisson[]>("/roles")
    }

    static createPermission(body: any): Promise<any> {
        return defaultApiClient.post(`roles`, body)
    }

    static updatePermission(id: string, body: any): Promise<any> {
        return defaultApiClient.patch(`roles/${id}`, body)
    }
}
