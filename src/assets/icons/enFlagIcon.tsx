import * as React from "react"

const EnFlagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={15}
    viewBox="0 0 20 15"
    fill="none"
  >
    {/* UK Flag - simplified version */}
    <rect width="20" height="15" fill="#012169" />
    <path d="M0 0 L20 15 M20 0 L0 15" stroke="#FFFFFF" strokeWidth="2.5" />
    <path d="M0 0 L20 15 M20 0 L0 15" stroke="#C8102E" strokeWidth="1.5" />
    <rect x="0" y="6" width="20" height="3" fill="#FFFFFF" />
    <rect x="8" y="0" width="4" height="15" fill="#FFFFFF" />
    <rect x="0" y="6.5" width="20" height="2" fill="#C8102E" />
    <rect x="8.5" y="0" width="3" height="15" fill="#C8102E" />
  </svg>
)

export default EnFlagIcon

