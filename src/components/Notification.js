import React from 'react'

export default function Notification ({showNotification}) {
  return (
    <div className={`notification-container ${showNotification ? `show` : "" }`}>
        <p>You have already enter this letter</p>      
    </div>
  )
}

