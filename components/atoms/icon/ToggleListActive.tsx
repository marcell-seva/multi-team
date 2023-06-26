import React from 'react'
import { PropsIcon } from '../../../utils/types'

export const IconToggleListActive: React.FC<PropsIcon> = ({
  width,
  height,
}): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5.72363C3.55228 5.72363 4 5.27592 4 4.72363C4 4.17135 3.55228 3.72363 3 3.72363C2.44772 3.72363 2 4.17135 2 4.72363C2 5.27592 2.44772 5.72363 3 5.72363ZM5.29941 4.22886C5.02327 4.22886 4.79941 4.45272 4.79941 4.72886C4.79941 5.005 5.02327 5.22886 5.29941 5.22886H13.5C13.7761 5.22886 14 5.005 14 4.72886C14 4.45272 13.7761 4.22886 13.5 4.22886H5.29941ZM5.29941 7.41772C5.02327 7.41772 4.79941 7.64158 4.79941 7.91772C4.79941 8.19387 5.02327 8.41772 5.29941 8.41772H13.5C13.7761 8.41772 14 8.19387 14 7.91772C14 7.64158 13.7761 7.41772 13.5 7.41772H5.29941ZM4.79941 11.1066C4.79941 10.8304 5.02327 10.6066 5.29941 10.6066H13.5C13.7761 10.6066 14 10.8304 14 11.1066C14 11.3827 13.7761 11.6066 13.5 11.6066H5.29941C5.02327 11.6066 4.79941 11.3827 4.79941 11.1066ZM4 7.91255C4 8.46483 3.55228 8.91255 3 8.91255C2.44772 8.91255 2 8.46483 2 7.91255C2 7.36026 2.44772 6.91255 3 6.91255C3.55228 6.91255 4 7.36026 4 7.91255ZM3 12.1014C3.55228 12.1014 4 11.6537 4 11.1014C4 10.5491 3.55228 10.1014 3 10.1014C2.44772 10.1014 2 10.5491 2 11.1014C2 11.6537 2.44772 12.1014 3 12.1014Z"
        fill="white"
      />
    </svg>
  )
}
