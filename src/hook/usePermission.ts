import PermissionApi from "@/api/PermissionApi"
import { trans } from "@/locale"
import { message } from "antd"
import { useMutation, useQuery } from "react-query"

export const usePermissionList = () => {
    const { status, data, error, isFetching, isLoading, refetch } = useQuery({
        queryKey: ["permissionList"],
        queryFn: async () => await PermissionApi.getPermissions(),
    })
    return {
        status,
        data,
        error,
        isFetching,
        isLoading,
        refetch,
    }
}

export const useCreatePermission = () => {
    return useMutation("createPermisson", (data: any) => PermissionApi.createPermission(data), {
        onError: (errors: any) => {
            message.error(errors?.response?.data?.error || trans("message.fail"))
        },
    })
}

export const useUpdatePermission = (id: any) => {
    return useMutation("updatePermisson", (data: any) => PermissionApi.updatePermission(id.id, data), {
        onError: (errors: any) => {
            message.error(errors?.response?.data?.error || trans("message.fail"))
        },
    })
}
