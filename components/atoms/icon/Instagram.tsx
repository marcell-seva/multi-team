import React from 'react'
import { PropsIcon } from '../../../utils/types'

export const IconInstagram: React.FC<PropsIcon> = ({
  width,
  height,
  alt,
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
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3334 7.66675C10.2038 7.66675 7.66675 10.2038 7.66675 13.3334V26.6667C7.66675 29.7964 10.2038 32.3334 13.3334 32.3334H26.6667C29.7964 32.3334 32.3334 29.7964 32.3334 26.6667V13.3334C32.3334 10.2038 29.7964 7.66675 26.6667 7.66675H13.3334ZM5.66675 13.3334C5.66675 9.09923 9.09923 5.66675 13.3334 5.66675H26.6667C30.9009 5.66675 34.3334 9.09923 34.3334 13.3334V26.6667C34.3334 30.9009 30.9009 34.3334 26.6667 34.3334H13.3334C9.09923 34.3334 5.66675 30.9009 5.66675 26.6667V13.3334Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6933 15.6558C19.7917 15.5221 18.8709 15.6761 18.0619 16.0959C17.2529 16.5156 16.5968 17.1799 16.187 17.994C15.7772 18.8082 15.6346 19.7308 15.7794 20.6307C15.9242 21.5305 16.3491 22.3619 16.9936 23.0064C17.6381 23.6509 18.4694 24.0757 19.3693 24.2205C20.2692 24.3653 21.1918 24.2227 22.0059 23.8129C22.8201 23.4031 23.4843 22.7471 23.9041 21.938C24.3239 21.129 24.4779 20.2082 24.3442 19.3066C24.2078 18.3869 23.7792 17.5355 23.1218 16.8781C22.4644 16.2207 21.613 15.7921 20.6933 15.6558ZM17.1408 14.3206C18.3232 13.7071 19.669 13.482 20.9867 13.6774C22.3308 13.8767 23.5752 14.503 24.536 15.4639C25.4969 16.4247 26.1232 17.6691 26.3225 19.0132C26.5179 20.331 26.2929 21.6767 25.6793 22.8592C25.0658 24.0416 24.095 25.0005 22.9051 25.5994C21.7152 26.1983 20.3667 26.4068 19.0515 26.1951C17.7363 25.9835 16.5213 25.3625 15.5794 24.4206C14.6374 23.4786 14.0164 22.2636 13.8048 20.9484C13.5932 19.6332 13.8016 18.2847 14.4005 17.0948C14.9995 15.9049 15.9583 14.9342 17.1408 14.3206Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.3333 12.6667C26.3333 12.1145 26.781 11.6667 27.3333 11.6667H27.3462C27.8985 11.6667 28.3462 12.1145 28.3462 12.6667C28.3462 13.219 27.8985 13.6667 27.3462 13.6667H27.3333C26.781 13.6667 26.3333 13.219 26.3333 12.6667Z"
        fill={color}
      />
    </svg>
  )
}
