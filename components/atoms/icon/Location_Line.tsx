import React from 'react'
import { PropsIcon } from '../../../utils/types'

export const IconLocationLine: React.FC<PropsIcon> = ({
  width,
  height,
  color = '#05256E',
}): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5833 6.5C12.9099 6.5 7.5 11.9099 7.5 18.5833C7.5 19.7943 7.95403 21.194 8.78852 22.7153C9.61639 24.2245 10.7703 25.7661 12.0526 27.2373C14.6172 30.1797 17.594 32.7257 19.1976 34.0237C19.4282 34.2104 19.7384 34.2104 19.9691 34.0237C21.5726 32.7257 24.5494 30.1797 27.1141 27.2373C28.3964 25.7661 29.5503 24.2245 30.3781 22.7153C31.2126 21.194 31.6667 19.7943 31.6667 18.5833C31.6667 11.9099 26.2568 6.5 19.5833 6.5ZM5 18.5833C5 10.5292 11.5292 4 19.5833 4C27.6375 4 34.1667 10.5292 34.1667 18.5833C34.1667 20.3817 33.5073 22.2089 32.57 23.9176C31.6261 25.6383 30.3499 27.3297 28.9987 28.8799C26.2963 31.9804 23.1925 34.631 21.5419 35.9669C20.3941 36.896 18.7725 36.896 17.6247 35.9669C15.9742 34.631 12.8704 31.9804 10.168 28.8799C8.81677 27.3297 7.54053 25.6383 6.59663 23.9176C5.65936 22.2089 5 20.3817 5 18.5833Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5833 15.8333C18.0646 15.8333 16.8333 17.0646 16.8333 18.5833C16.8333 20.1021 18.0646 21.3333 19.5833 21.3333C21.1021 21.3333 22.3333 20.1021 22.3333 18.5833C22.3333 17.0646 21.1021 15.8333 19.5833 15.8333ZM14.3333 18.5833C14.3333 15.6838 16.6838 13.3333 19.5833 13.3333C22.4828 13.3333 24.8333 15.6838 24.8333 18.5833C24.8333 21.4828 22.4828 23.8333 19.5833 23.8333C16.6838 23.8333 14.3333 21.4828 14.3333 18.5833Z"
        fill={color}
      />
    </svg>
  )
}
