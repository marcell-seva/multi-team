import { InferGetServerSidePropsType } from 'next'
import { createContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { api } from 'services/api'
import { useIsMobileSSr } from 'utils/hooks/useIsMobileSsr'
import { HomepageMobile } from 'components/organisms'
import { getIsSsrMobile } from 'utils/getIsSsrMobile'
import { getCity } from 'utils/hooks/useGetCity'
import { useCar } from 'services/context/carContext'
import { useUtils } from 'services/context/utilsContext'
import { MobileWebTopMenuType, NavbarItemResponse } from 'utils/types/utils'

interface HomePageDataLocalContextType {
  dataBanner: any
  dataDesktopMenu: NavbarItemResponse[]
  dataMobileMenu: MobileWebTopMenuType[]
  dataCities: any
  dataTestimony: any
  dataRecToyota: any
  dataRecMVP: any
  dataUsage: any
  dataMainArticle: any
  dataTypeCar: any
  dataCarofTheMonth: any
}
/**
 * used to pass props without drilling through components
 */
export const HomePageDataLocalContext =
  createContext<HomePageDataLocalContextType>({
    dataBanner: null,
    dataDesktopMenu: [],
    dataMobileMenu: [],
    dataCities: null,
    dataTestimony: null,
    dataRecToyota: null,
    dataRecMVP: null,
    dataUsage: null,
    dataMainArticle: null,
    dataTypeCar: null,
    dataCarofTheMonth: null,
  })

export default function WithTracker({
  dataReccomendation,
  dataBanner,
  dataDesktopMenu,
  dataMobileMenu,
  dataCities,
  dataTestimony,
  dataRecToyota,
  dataRecMVP,
  dataUsage,
  dataMainArticle,
  dataTypeCar,
  dataCarofTheMonth,
  ssr,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { saveTypeCar, saveCarOfTheMonth, saveRecommendationToyota } = useCar()
  const { saveArticles, saveDesktopWebTopMenu, saveMobileWebTopMenus } =
    useUtils()

  useEffect(() => {
    saveDesktopWebTopMenu(dataDesktopMenu)
    saveMobileWebTopMenus(dataMobileMenu)
    saveArticles(dataMainArticle)
    saveCarOfTheMonth(dataCarofTheMonth)
    saveTypeCar(dataTypeCar)
    saveRecommendationToyota(dataRecToyota)
  }, [])

  return (
    <HomePageDataLocalContext.Provider
      value={{
        dataBanner,
        dataDesktopMenu,
        dataMobileMenu,
        dataCities,
        dataTestimony,
        dataRecToyota,
        dataRecMVP,
        dataUsage,
        dataMainArticle,
        dataTypeCar,
        dataCarofTheMonth,
      }}
    >
      <HomepageMobile dataReccomendation={dataReccomendation} ssr={ssr} />
    </HomePageDataLocalContext.Provider>
  )
}

export async function getServerSideProps(context: any) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=59, stale-while-revalidate=3000',
  )
  const params = `?city=jakarta&cityId=118`
  try {
    const [
      recommendationRes,
      bannerRes,
      menuMobileRes,
      citiesRes,
      testimonyRes,
      recTotoyaRes,
      MVPRes,
      usageRes,
      mainArticleRes,
      typeCarRes,
      carofTheMonthRes,
      menuDesktopRes,
    ]: any = await Promise.all([
      api.getRecommendation(params),
      api.getBanner(),
      api.getMobileHeaderMenu(),
      api.getCities(),
      api.getTestimony(),
      api.getRecommendation('?brand=Toyota&city=jakarta&cityId=118'),
      api.getRecommendation('?bodyType=MPV&city=jakarta&cityId=118'),
      api.getUsage(),
      api.getMainArticle('65'),
      api.getTypeCar('?city=jakarta'),
      api.getCarofTheMonth('?city=' + getCity().cityCode),
      api.getMenu(),
    ])
    const [
      dataReccomendation,
      dataBanner,
      dataMobileMenu,
      dataCities,
      dataTestimony,
      dataRecToyota,
      dataRecMVP,
      dataUsage,
      dataMainArticle,
      dataTypeCar,
      dataCarofTheMonth,
      dataDesktopMenu,
    ] = await Promise.all([
      recommendationRes.carRecommendations,
      bannerRes.data,
      menuMobileRes.data,
      citiesRes,
      testimonyRes.data,
      recTotoyaRes.carRecommendations,
      MVPRes.carRecommendations,
      usageRes.data.attributes,
      mainArticleRes,
      typeCarRes,
      carofTheMonthRes.data,
      menuDesktopRes.data,
    ])
    return {
      props: {
        dataReccomendation,
        dataBanner,
        dataMobileMenu,
        dataCities,
        dataTestimony,
        dataRecToyota,
        dataRecMVP,
        dataUsage,
        dataMainArticle,
        dataTypeCar,
        dataCarofTheMonth,
        isSsrMobile: getIsSsrMobile(context),
        dataDesktopMenu,
        ssr: 'success',
      },
    }
  } catch (error) {
    return {
      props: {
        dataBanner: null,
        dataDesktopMenu: [],
        dataMobileMenu: [],
        dataCities: null,
        dataTestimony: null,
        dataRecToyota: null,
        dataRecMVP: null,
        dataUsage: null,
        dataMainArticle: null,
        dataTypeCar: null,
        dataCarofTheMonth: null,
        ssr: 'failed',
      },
    }
  }
}
