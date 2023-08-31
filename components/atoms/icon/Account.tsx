import React from 'react'
import { PropsIcon } from '../../../utils/types'

export const IconAccount: React.FC<PropsIcon> = ({
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
        d="M20.2502 27.8334C16.7069 27.8334 13.3769 28.7113 11.3475 29.3864C10.5543 29.6502 9.96258 30.3741 9.81747 31.307L9.48532 33.4422C9.37921 34.1243 8.7402 34.5913 8.05804 34.4852C7.37589 34.3791 6.90892 33.7401 7.01503 33.0579L7.34717 30.9227C7.61921 29.1739 8.77646 27.6069 10.5585 27.0142C12.7158 26.2966 16.3318 25.3334 20.2502 25.3334C24.1685 25.3334 27.7846 26.2966 29.9419 27.0142C31.7239 27.6069 32.8811 29.1739 33.1532 30.9227L33.4853 33.0579C33.5914 33.7401 33.1245 34.3791 32.4423 34.4852C31.7602 34.5913 31.1211 34.1243 31.015 33.4422L30.6829 31.307C30.5378 30.3741 29.9461 29.6502 29.1528 29.3864C27.1234 28.7113 23.7934 27.8334 20.2502 27.8334Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.2502 8.50006C17.2586 8.50006 14.8335 10.9252 14.8335 13.9167C14.8335 16.9083 17.2586 19.3334 20.2502 19.3334C23.2417 19.3334 25.6668 16.9083 25.6668 13.9167C25.6668 10.9252 23.2417 8.50006 20.2502 8.50006ZM12.3335 13.9167C12.3335 9.54447 15.8779 6.00006 20.2502 6.00006C24.6224 6.00006 28.1668 9.54447 28.1668 13.9167C28.1668 18.289 24.6224 21.8334 20.2502 21.8334C15.8779 21.8334 12.3335 18.289 12.3335 13.9167Z"
        fill={color}
      />
    </svg>
  )
}