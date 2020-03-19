import React from "react"
import "./TabBar.scss"
import Diamonds from "icons/Diamonds"
import Folder from "icons/Folder"
import Inbox from "icons/Inbox"
import User from "icons/User"

const TabBar = () => (
  <footer>
    <div className="Footer-contianer">
      <Diamonds />
      <Folder />
      <Inbox />
      <User />
    </div>
  </footer>
)

export default TabBar
