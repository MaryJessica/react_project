import React from "react"

import { useHistory } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'

import { auth } from "../firebase"

export default function Chats() {
  const history = useHistory()

  async function handleLogout() {
    await auth.signOut()
    history.push("/")
  }

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          Unichat
        </div>

        <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div>
      </div>

      <ChatEngine 
        height='calc(100vh - 66px)'
        projectID='78cd3aaf-3668-4756-872b-e557b9c5e007'
        userName='.'
        userSecret='.'
      />
    </div>
  )
}
