import React from 'react'
import { PropsIcon } from '../../../utils/types'

export const IconTwitterOutlined: React.FC<PropsIcon> = ({
  width,
  height,
  color = '#33CCFF',
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
        d="M23.4862 7.44499C24.8208 6.9356 26.2797 6.84838 27.6655 7.19512C28.8316 7.48691 29.8987 8.07418 30.7663 8.89533C31.9473 8.48137 33.0661 7.90527 34.0903 7.18282L34.6667 7.99998L35.6383 8.2366C35.183 10.106 34.2585 11.8252 32.9557 13.2334C32.9844 13.4867 32.9992 13.7415 33 13.9967L33 14C33 22.0166 29.1465 27.8667 23.6365 30.7994C18.1509 33.7191 11.1242 33.6944 4.84771 30.2075C4.4429 29.9826 4.24546 29.5092 4.3705 29.0633C4.49555 28.6174 4.91038 28.3157 5.3731 28.3341C7.88542 28.434 10.3701 27.8797 12.5886 26.7392C10.3454 25.4641 8.77661 23.9153 7.7177 22.2434C6.4172 20.1899 5.92374 18.0112 5.83439 16.0454C5.74523 14.0839 6.05692 12.3139 6.38604 11.0413C6.55121 10.4026 6.72241 9.88296 6.85387 9.51936C6.91965 9.33739 6.97566 9.19404 7.01622 9.09391C7.03651 9.04383 7.05295 9.00452 7.06485 8.97655L7.0792 8.94316L7.08365 8.93296L7.08517 8.92952L7.08575 8.92821C7.08575 8.92821 7.08621 8.92717 8.00002 9.33331L8.81838 8.7586C10.0707 10.5418 11.7446 11.9877 13.691 12.9673C15.3466 13.8007 17.1558 14.2747 19 14.363V14.0464C18.9823 12.6205 19.4023 11.2233 20.2033 10.0433C21.0056 8.86137 22.1516 7.95438 23.4862 7.44499ZM8.36349 11.3861C8.34976 11.4371 8.33603 11.4891 8.32234 11.542C8.02646 12.6861 7.75481 14.2494 7.83232 15.9546C7.90963 17.6554 8.33285 19.4767 9.40734 21.1733C10.4778 22.8635 12.2327 24.4906 15.0728 25.7528C15.4046 25.9003 15.6304 26.216 15.6627 26.5777C15.695 26.9394 15.5287 27.2901 15.2283 27.494C13.434 28.712 11.4291 29.5572 9.33169 29.9958C14.0238 31.5252 18.8255 31.0944 22.6968 29.0339C27.5199 26.4668 30.9995 21.3175 31 14.0016C30.9989 13.6927 30.9691 13.3845 30.9111 13.0811C30.8485 12.7532 30.9535 12.4157 31.1912 12.1813C31.7668 11.6136 32.2631 10.9761 32.67 10.2863C32.0533 10.5642 31.4181 10.8019 30.7684 10.9975C30.3917 11.1109 29.9836 10.993 29.7255 10.6962C29.0569 9.92747 28.1683 9.38261 27.18 9.13531C26.1917 8.88801 25.1512 8.95022 24.1994 9.31351C23.2476 9.67681 22.4303 10.3237 21.858 11.1666C21.2858 12.0095 20.9863 13.0079 20.9999 14.0266L21.0001 14.04L21 15.3733C21 15.9155 20.5679 16.3589 20.0259 16.373C17.5179 16.438 15.0328 15.8818 12.7918 14.7538C11.1164 13.9106 9.61643 12.7673 8.36349 11.3861Z"
        fill={color}
      />
    </svg>
  )
}