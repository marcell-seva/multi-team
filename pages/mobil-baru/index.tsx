import { PLP } from 'components/organisms'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getMinMaxPrice, getNewFunnelRecommendations } from 'services/newFunnel'
import { CarRecommendationResponse, MinMaxPrice } from 'utils/types/context'
import {
  CityOtrOption,
  FooterSEOAttributes,
  MobileWebTopMenuType,
  NavbarItemResponse,
} from 'utils/types/utils'
import PLPDesktop from 'components/organisms/PLPDesktop'
import { getIsSsrMobile } from 'utils/getIsSsrMobile'
import { api } from 'services/api'
import Seo from 'components/atoms/seo'
import { defaultSeoImage } from 'utils/helpers/const'
import { useUtils } from 'services/context/utilsContext'
import { MobileWebFooterMenuType } from 'utils/types/props'
import styles from 'styles/pages/plp.module.scss'
import { CarProvider } from 'services/context'
import { generateBlurRecommendations } from 'utils/generateBlur'
import { monthId } from 'utils/handler/date'
import { getCarBrand } from 'utils/carModelUtils/carModelUtils'
import { useMediaQuery } from 'react-responsive'
import { useIsMobileSSr } from 'utils/hooks/useIsMobileSsr'

const NewCarResultPage = ({
  meta,
  dataMobileMenu,
  dataFooter,
  dataCities,
  dataDesktopMenu,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const todayDate = new Date()
  const carBrand = meta.carRecommendations.carRecommendations[0]?.brand
  const metaTitle = `Harga OTR ${carBrand} - Harga OTR dengan Promo Cicilan bulan ${monthId(
    todayDate.getMonth(),
  )} | SEVA`
  const metaDesc = `Beli mobil ${todayDate.getFullYear()} terbaru di SEVA. Beli mobil secara kredit dengan Instant Approval*.`
  const metaBrandDesc = `Beli mobil ${carBrand} ${todayDate.getFullYear()} terbaru secara kredit dengan Instant Approval*. Cari tau spesifikasi, harga, promo, dan kredit di SEVA`

  const [isMobile, setIsMobile] = useState(useIsMobileSSr())
  const isClientMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const {
    saveDesktopWebTopMenu,
    saveMobileWebTopMenus,
    saveMobileWebFooterMenus,
    saveCities,
  } = useUtils()

  useEffect(() => {
    saveDesktopWebTopMenu(dataDesktopMenu)
    saveMobileWebTopMenus(dataMobileMenu)
    saveMobileWebFooterMenus(dataFooter)
    saveCities(dataCities)
  }, [])

  useEffect(() => {
    setIsMobile(isClientMobile)
  }, [isClientMobile])

  return (
    <>
      {meta.footer.location_tag !== '' ? (
        <Seo
          title={metaTitle}
          description={metaBrandDesc}
          image={defaultSeoImage}
        />
      ) : (
        <Seo title={metaTitle} description={metaDesc} image={defaultSeoImage} />
      )}

      <CarProvider
        car={null}
        carOfTheMonth={[]}
        typeCar={null}
        carModel={null}
        carModelDetails={null}
        carVariantDetails={null}
        recommendation={meta.carRecommendations.carRecommendations}
        recommendationToyota={[]}
      >
        {isMobile ? (
          <PLP minmaxPrice={meta.MinMaxPrice} />
        ) : (
          <PLPDesktop
            carRecommendation={meta.carRecommendations}
            footer={meta.footer}
          />
        )}
      </CarProvider>
    </>
  )
}

export default NewCarResultPage

type PLPProps = {
  title: string
  description: string
  footer: FooterSEOAttributes
  MinMaxPrice: MinMaxPrice
  carRecommendations: CarRecommendationResponse
}

const getBrand = (brand: string | string[] | undefined) => {
  if (String(brand).toLowerCase() === 'toyota') {
    return 'Toyota'
  } else if (String(brand).toLowerCase() === 'daihatsu') {
    return 'Daihatsu'
  } else if (String(brand).toLowerCase() === 'bmw') {
    return 'Bmw'
  } else {
    return ''
  }
}

export const getServerSideProps: GetServerSideProps<{
  meta: PLPProps
  dataDesktopMenu: NavbarItemResponse[]
  dataMobileMenu: MobileWebTopMenuType[]
  dataFooter: MobileWebFooterMenuType[]
  dataCities: CityOtrOption[]
}> = async (ctx) => {
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )
  const metabrand = getBrand(ctx.query.brand)
  const metaTagBaseApi =
    'https://api.sslpots.com/api/meta-seos/?filters[location_page3][$eq]=CarSearchResult'
  const footerTagBaseApi =
    'https://api.sslpots.com/api/footer-seos/?filters[location_page2][$eq]=CarSearchResult'
  const meta = {
    title: 'SEVA',
    description: '',
    footer: {
      location_tag: '',
      location_page2: '',
      title_1: '',
      Title_2: '',
      Title_3: '',
      content_1: '',
      Content_2: '',
      Content_3: '',
      createdAt: '',
      updatedAt: '',
      publishedAt: '',
    },
    MinMaxPrice: { maxPriceValue: 0, minPriceValue: 0 },
    carRecommendations: {
      carRecommendations: [],
      lowestCarPrice: 0,
      highestCarPrice: 0,
    },
  }

  const {
    downPaymentAmount,
    brand,
    bodyType,
    priceRangeGroup,
    age,
    tenure,
    monthlyIncome,
    sortBy,
  } = ctx.query

  try {
    const [
      fetchMeta,
      fetchFooter,
      menuDesktopRes,
      menuMobileRes,
      footerRes,
      cityRes,
    ]: any = await Promise.all([
      axios.get(metaTagBaseApi + metabrand),
      axios.get(footerTagBaseApi + metabrand),
      api.getMenu(),
      api.getMobileHeaderMenu(),
      api.getMobileFooterMenu(),
      api.getCities(),
    ])

    const metaData = fetchMeta.data.data
    const footerData = fetchFooter.data.data

    if (!priceRangeGroup) {
      const minmax = await getMinMaxPrice()
      const minmaxPriceData = minmax
      meta.MinMaxPrice = {
        minPriceValue: minmaxPriceData.minPriceValue,
        maxPriceValue: minmaxPriceData.maxPriceValue,
      }
    }

    const queryParam: any = {
      ...(downPaymentAmount && { downPaymentType: 'amount' }),
      ...(downPaymentAmount && { downPaymentAmount }),
      ...(brand && {
        brand: String(brand)
          ?.split(',')
          .map((item) => getCarBrand(item)),
      }),
      ...(bodyType && { bodyType: String(bodyType)?.split(',') }),
      ...(priceRangeGroup
        ? { priceRangeGroup }
        : {
            priceRangeGroup: `${meta.MinMaxPrice.minPriceValue}-${meta.MinMaxPrice.maxPriceValue}`,
          }),
      ...(age && { age }),
      ...(tenure && { tenure }),
      ...(monthlyIncome && { monthlyIncome }),
      ...(sortBy && { sortBy }),
    }

    const [funnel] = await Promise.all([
      getNewFunnelRecommendations({ ...queryParam }),
    ])

    const generateRecommendation = await generateBlurRecommendations(
      funnel.carRecommendations,
    )
    const recommendation = {
      carRecommendations: generateRecommendation
        ? [...generateRecommendation]
        : funnel.carRecommendations,
      lowestCarPrice: funnel.lowestCarPrice,
      highestCarPrice: funnel.highestCarPrice,
    }

    if (metaData && metaData.length > 0) {
      meta.title = metaData[0].attributes.meta_title
      meta.description = metaData[0].attributes.meta_description
    }

    if (footerData && footerData.length > 0) {
      meta.footer = footerData[0].attributes
    }

    if (recommendation) {
      meta.carRecommendations = recommendation
    }

    if (brand) {
      if (typeof brand === 'string') {
        meta.footer.location_tag = brand
      }
    }

    return {
      props: {
        meta,
        dataDesktopMenu: menuDesktopRes.data,
        dataMobileMenu: menuMobileRes.data,
        dataFooter: footerRes.data,
        dataCities: cityRes,
        isSsrMobile: getIsSsrMobile(ctx),
      },
    }
  } catch (e) {
    return {
      props: {
        meta,
        dataDesktopMenu: [],
        dataMobileMenu: [],
        dataFooter: [],
        dataCities: [],
        isSsrMobile: true,
      },
    }
  }
}
