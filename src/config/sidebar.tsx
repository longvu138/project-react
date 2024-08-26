import React, { ReactElement } from "react"
import { trans } from "@/locale"

export interface IMenuItem {
  key: string
  label: string
  icon: ReactElement
  url: string
  show: boolean
  children?: Array<IMenuItem>
}

export const menuItems: IMenuItem[] = [
  {
    key: "dashboard",
    label: trans("sidebar.dashboard"),
    icon: <i className="fa-solid fa-gauge-low" />,
    url: "/",
    show: true,
  },
  {
    key: "1",
    label: trans("sidebar.config_permission"),
    icon: <i className="fa-solid fa-gauge-low" />,
    url: "/config_permission",
    show: true,
  }, {
    key: "2",
    label: trans("sidebar.2"),
    icon: <i className="fa-solid fa-gauge-low" />,
    url: "/",
    show: true,
  },
]
