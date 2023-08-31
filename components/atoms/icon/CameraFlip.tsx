import React from 'react'
import { PropsIcon } from '../../../utils/types'

export const IconCameraFlip: React.FC<PropsIcon> = ({
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
        d="M18.8028 8.25C18.0944 8.25 17.433 8.60401 17.0401 9.19338L17.0069 9.24306C16.1711 10.4969 14.7638 11.25 13.2569 11.25C12.1485 11.25 11.25 12.1485 11.25 13.2569V21C11.25 22.5188 12.4812 23.75 14 23.75H26C27.5188 23.75 28.75 22.5188 28.75 21V13.2569C28.75 12.1485 27.8515 11.25 26.7431 11.25C25.2362 11.25 23.8289 10.4969 22.9931 9.24306L22.9599 9.19338C22.567 8.60401 21.9056 8.25 21.1972 8.25H18.8028ZM13.2569 8.75C13.928 8.75 14.5546 8.41464 14.9268 7.85631L14.9599 7.80662C15.8165 6.52176 17.2586 5.75 18.8028 5.75H21.1972C22.7414 5.75 24.1835 6.52176 25.0401 7.80662L25.0732 7.85631C25.4454 8.41464 26.072 8.75 26.7431 8.75C29.2322 8.75 31.25 10.7678 31.25 13.2569V21C31.25 23.8995 28.8995 26.25 26 26.25H14C11.1005 26.25 8.75 23.8995 8.75 21V13.2569C8.75 10.7678 10.7678 8.75 13.2569 8.75Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 14.25C18.4812 14.25 17.25 15.4812 17.25 17C17.25 18.5188 18.4812 19.75 20 19.75C21.5188 19.75 22.75 18.5188 22.75 17C22.75 15.4812 21.5188 14.25 20 14.25ZM14.75 17C14.75 14.1005 17.1005 11.75 20 11.75C22.8995 11.75 25.25 14.1005 25.25 17C25.25 19.8995 22.8995 22.25 20 22.25C17.1005 22.25 14.75 19.8995 14.75 17Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2735 26.9828C14.8352 26.5816 15.6159 26.7117 16.0172 27.2735L18.5172 30.7735C18.9184 31.3352 18.7883 32.1159 18.2265 32.5172L14.7265 35.0172C14.1648 35.4184 13.3841 35.2883 12.9828 34.7265C12.5816 34.1648 12.7117 33.3841 13.2735 32.9828L15.7563 31.2094L13.9828 28.7265C13.5816 28.1648 13.7117 27.3841 14.2735 26.9828Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.18081 21.3035C8.56549 21.8767 8.41263 22.6533 7.83938 23.038C6.61794 23.8576 6.25 24.5982 6.25 25.1258C6.25 25.7376 6.60971 26.6111 8.1391 27.521C9.67903 28.4371 12.2362 29.2698 16.155 29.7597C16.8401 29.8453 17.326 30.47 17.2403 31.155C17.1547 31.8401 16.53 32.326 15.845 32.2403C11.7638 31.7302 8.82097 30.8356 6.8609 29.6695C4.89029 28.4972 3.75 26.9336 3.75 25.1258C3.75 23.3666 4.94712 21.9681 6.44633 20.962C7.01958 20.5774 7.79613 20.7302 8.18081 21.3035ZM31.8192 21.3035C32.2039 20.7302 32.9804 20.5774 33.5537 20.962C35.0529 21.9681 36.25 23.3666 36.25 25.1258C36.25 27.2897 34.4611 28.9072 32.373 29.9817C30.1904 31.1048 27.2153 31.8961 23.8794 32.2433C23.1927 32.3147 22.5782 31.816 22.5067 31.1294C22.4353 30.4427 22.934 29.8282 23.6206 29.7567C26.7543 29.4306 29.4042 28.6979 31.2292 27.7588C33.1487 26.771 33.75 25.7882 33.75 25.1258C33.75 24.5982 33.3821 23.8576 32.1606 23.038C31.5874 22.6533 31.4345 21.8767 31.8192 21.3035Z"
        fill={color}
      />
    </svg>
  )
}