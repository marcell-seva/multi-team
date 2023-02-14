import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import styles from '../../../../../styles/Header.module.css'
import {
  IconBurgerMenu,
  IconChevronDown,
  IconChevrongRight,
  IconChevronLeft,
  IconChevronUp,
  IconDots,
  IconSearch,
} from '../../../../atoms'
import sevaHeader from '../../../../../assets/images/logo/seva-header.svg'
import {
  AuthContext,
  AuthContextType,
} from '../../../../../services/context/authContext'

interface ListSideBarProps {
  item: any
  isNew?: boolean
}

export default function TopBarMobile({ data, onSearchClick }: any) {
  const { isLoggedIn, userData } = useContext(AuthContext) as AuthContextType
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isSubSideBarShow, setIsSubSideBarShow] = useState<boolean>(false)
  const [typeSubSideBar, setTypeSubSideBar] = useState<string>('')
  const [typeSideBar, setTypeSideBar] = useState<string>('')
  const [dataSideBar, setDataSideBar] = useState<any>([])
  const redirectRootUrl = 'https://seva.id'
  const redirectFundingUrl = 'https://www.seva.id/fasilitas-dana'
  const redirectPartnerUrl = 'https://www.seva.id/teman-seva/onboarding'
  const redirectCouponUrl = 'https://www.seva.id/info/promo/'

  const getUserInitial = (payload: string) => {
    const name = payload.split(' ')
    const firstName = name[0].slice(0, 1)
    const lastName = name[1].slice(0, 1)
    return firstName + lastName
  }

  const ListSubMenuBar = ({ item }: any) => {
    return (
      <div key={item.id}>
        <div
          onClick={() => {
            if (typeSubSideBar === item.menuName) setTypeSubSideBar('')
            else setTypeSubSideBar(item.menuName)
          }}
          className={styles.childContent}
        >
          <p className={styles.subChildTitleText}>{item.menuName}</p>
          {typeSubSideBar === item.menuName ? (
            <IconChevronUp width={13} height={13} />
          ) : (
            <IconChevronDown width={13} height={13} />
          )}
        </div>
        {typeSubSideBar === item.menuName && (
          <div className={styles.selectorDetail}>
            {item.subMenu.map((subMenu: any) => {
              return (
                <a
                  href={redirectRootUrl + subMenu.menuUrl}
                  key={subMenu.id}
                  className={styles.descText}
                >
                  {subMenu.menuName}
                </a>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  const ListSideBarMenu = ({ item, isNew }: ListSideBarProps) => {
    if (isNew) {
      return (
        <a className={styles.mainSelector} href={redirectFundingUrl}>
          <div className={styles.wrapperTag}>
            <p className={styles.titleTextNew}>{item.menuName}</p>
            <div className={styles.newTag}>BARU!</div>
          </div>
          <IconChevrongRight width={13} height={13} />
        </a>
      )
    }
    if (item.subMenu.length > 0) {
      return (
        <div
          className={styles.mainSelector}
          onClick={() => {
            setIsSubSideBarShow(true)
            setTypeSideBar(item.menuName)
            setDataSideBar(item)
          }}
        >
          <p className={styles.titleText}>{item.menuName}</p>
          <IconChevrongRight width={13} height={13} />
        </div>
      )
    } else {
      return (
        <a className={styles.mainSelector} href={redirectPartnerUrl}>
          <p className={styles.titleText}>{item.menuName}</p>
          <IconChevrongRight width={13} height={13} />
        </a>
      )
    }
  }

  const ListSubMenuBarSingle = ({ item }: any) => {
    return (
      <a
        href={`https://${item.menuUrl}`}
        key={item.id}
        className={styles.descText}
      >
        {item.menuName}
      </a>
    )
  }

  const handleClickShowSideBar = () => {
    setIsShow(!isShow)
    if (isShow) document.body.style.overflow = 'auto'
    else document.body.style.overflow = 'hidden'
  }
  return (
    <div className={styles.barMobile}>
      <div className={styles.bar}>
        <div
          onClick={() => handleClickShowSideBar()}
          className={styles.iconBurger}
        >
          <IconBurgerMenu width={26} height={26} />
        </div>
        <Image
          src={sevaHeader}
          width={120}
          height={75}
          alt="seva-logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.searchIcon} onClick={onSearchClick}>
        <IconSearch width={20} height={20} color="#002373" />
      </div>
      <div
        className={isShow ? styles.wrapperSideBar : styles.wrapperSideBarClose}
      >
        <div className={isShow ? styles.sideBar : styles.sideBarClose}>
          {isSubSideBarShow ? (
            <>
              <div
                onClick={() => setIsSubSideBarShow(false)}
                className={styles.childSelector}
              >
                <IconChevronLeft width={13} height={13} />
                <p className={styles.childTitleText}>{typeSideBar}</p>
              </div>

              {dataSideBar.menuCode === 'beli-mobil'
                ? dataSideBar.subMenu.slice(0, 1).map((list: any) => {
                    return <ListSubMenuBar item={list} key={list.id} />
                  })
                : dataSideBar.subMenu.map((list: any) => {
                    if (list.subMenu.length > 0) {
                      return <ListSubMenuBar item={list} key={list.id} />
                    } else {
                      return <ListSubMenuBarSingle item={list} key={list.id} />
                    }
                  })}
            </>
          ) : (
            <>
              <div className={styles.authSection}>
                {userData !== null ? (
                  <a
                    href="https://www.seva.id/akun/profil"
                    className={styles.userAuth}
                  >
                    <div className={styles.userInfo}>
                      <div className={styles.initialUsernameText}>
                        {getUserInitial('Marcell Antonius Dermawan')}
                      </div>
                      <div className={styles.wrapperUserName}>
                        <p className={styles.userWelcomeText}>Selamat Datang</p>
                        <p className={styles.userNameText}>
                          {userData!.fullName}
                        </p>
                      </div>
                    </div>
                    <div>
                      <IconDots width={20} height={20} />
                    </div>
                  </a>
                ) : (
                  <button className={styles.initialAuth}>
                    <Image
                      src="https://www.seva.id/static/media/Profile.1dd80031bfb540b10391f2274639eee3.svg"
                      width={15}
                      height={15}
                      alt="profile-icon"
                      className={styles.profileIcon}
                    />
                    <p className={styles.initialText}>Masuk / Daftar</p>
                  </button>
                )}
              </div>
              {data.map((item: any, key: number) => {
                if (key === 3) {
                  return (
                    <div key={key}>
                      <a
                        className={styles.mainSelector}
                        href={redirectCouponUrl}
                      >
                        <p className={styles.titleText}>Promo</p>
                        <IconChevrongRight width={13} height={13} />
                      </a>
                      <ListSideBarMenu item={item} isNew={item.toggleNew} />
                    </div>
                  )
                } else
                  return (
                    <ListSideBarMenu
                      key={key}
                      item={item}
                      isNew={item.toggleNew}
                    />
                  )
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
