import React from 'react'
import { PropsIcon } from '../../../utils/types'

export const IconFilter: React.FC<PropsIcon> = ({
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
        d="M14.5987 12.5H33.25C33.9404 12.5 34.5 11.9404 34.5 11.25C34.5 10.5596 33.9404 10 33.25 10H14.8293C14.9398 10.3128 15 10.6494 15 11C15 11.5464 14.8539 12.0587 14.5987 12.5ZM9.40135 12.5C9.14609 12.0587 9 11.5464 9 11C9 10.6494 9.06015 10.3128 9.17071 10H7.25C6.55964 10 6 10.5596 6 11.25C6 11.9404 6.55964 12.5 7.25 12.5H9.40135ZM22.5987 21.5H33.25C33.9404 21.5 34.5 20.9404 34.5 20.25C34.5 19.5596 33.9404 19 33.25 19H22.8293C22.9398 19.3128 23 19.6494 23 20C23 20.5464 22.8539 21.0587 22.5987 21.5ZM17.4013 21.5C17.1461 21.0587 17 20.5464 17 20C17 19.6494 17.0602 19.3128 17.1707 19H7.25C6.55964 19 6 19.5596 6 20.25C6 20.9404 6.55964 21.5 7.25 21.5H17.4013ZM31.5987 30.5C31.8539 30.0587 32 29.5464 32 29C32 28.6494 31.9398 28.3128 31.8293 28H33.25C33.9404 28 34.5 28.5596 34.5 29.25C34.5 29.9404 33.9404 30.5 33.25 30.5H31.5987ZM26.4013 30.5H7.25C6.55964 30.5 6 29.9404 6 29.25C6 28.5596 6.55964 28 7.25 28H26.1707C26.0602 28.3128 26 28.6494 26 29C26 29.5464 26.1461 30.0587 26.4013 30.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 9C11.8954 9 11 9.89543 11 11C11 12.1046 11.8954 13 13 13C14.1046 13 15 12.1046 15 11C15 9.89543 14.1046 9 13 9ZM9 11C9 8.79086 10.7909 7 13 7C15.2091 7 17 8.79086 17 11C17 13.2091 15.2091 15 13 15C10.7909 15 9 13.2091 9 11Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18ZM16 20C16 17.7909 17.7909 16 20 16C22.2091 16 24 17.7909 24 20C24 22.2091 22.2091 24 20 24C17.7909 24 16 22.2091 16 20Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 27C26.8954 27 26 27.8954 26 29C26 30.1046 26.8954 31 28 31C29.1046 31 30 30.1046 30 29C30 27.8954 29.1046 27 28 27ZM24 29C24 26.7909 25.7909 25 28 25C30.2091 25 32 26.7909 32 29C32 31.2091 30.2091 33 28 33C25.7909 33 24 31.2091 24 29Z"
        fill={color}
      />
    </svg>
  )
}
