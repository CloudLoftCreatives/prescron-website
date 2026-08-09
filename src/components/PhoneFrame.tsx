import React from 'react'

interface PhoneFrameProps {
  children: React.ReactNode
  className?: string
}

export default function PhoneFrame({ children, className = '' }: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[340px] rounded-[42px] overflow-hidden ${className}`}
         style={{
           boxShadow: '0 0 0 2px #1a2540, 0 0 0 5px #0f1829, 0 32px 80px rgba(11,18,32,0.40)'
         }}>

      {/* Content */}
      <div className="relative bg-white w-full h-full overflow-hidden">
        {children}
      </div>
    </div>
  )
}
