import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { InferGetServerSidePropsType } from 'next'
import {
  Footer,
  Header,
  HowToUse,
  LoanSection,
  ContactUs,
  CarList,
  Testimony,
  Recommendation,
  Article,
  OTRSecondary,
  Floating,
  OTRPrimary,
  Search,
  LocationList,
  LocationSelector,
  Refinancing,
  CarofTheMonth,
  Offering,
  Video,
} from '../components/molecules'
import { api } from '../services/api'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const Banner = dynamic(() => import('../components/molecules/banner'))

export default function Home({
  dataBanner,
  dataMenu,
  dataCities,
  dataTestimony,
  dataRecToyota,
  dataRecMVP,
  dataUsage,
  dataMainArticle,
  dataTypeCar,
  dataCarofTheMonth,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isModalOTROpen, setIsModalOTROpen] = useState<boolean>(false)
  const [isModalLocationOpen, setIsModalLocationOpen] = useState<boolean>(true)
  const [isModalVideoShow, setIsModalVideoShow] = useState<boolean>(false)
  const [isSearchBarMobileShow, setIsSearchBarMobileShow] =
    useState<boolean>(false)
  const [isLocationSelectorShow, setIsLocationSelectorShow] =
    useState<boolean>(false)

  return (
    <>
      <Head>
        <title>SEVA - Beli Mobile Terbaru Dengan Cicilan Kredit Terbaik</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <Header
          data={dataMenu}
          onOpenModalOTR={() => setIsModalOTROpen(true)}
          onSearchClick={() => setIsSearchBarMobileShow(true)}
        />
        <Floating onClickImage={() => setIsModalVideoShow(true)} />
        <LocationList onClick={() => setIsLocationSelectorShow(true)} />
        <div className={styles.wrapper}>
          <Banner data={dataBanner} />
          <LoanSection />
          <HowToUse data={dataUsage} />
          <CarList data={dataRecToyota} />
          <Recommendation data={dataRecMVP} categoryCar={dataTypeCar} />
          <Refinancing />
          <CarofTheMonth data={dataCarofTheMonth} />
          <Testimony data={dataTestimony} />
          <Article data={dataMainArticle} />
        </div>
        {/* <Offering /> */}
        {isModalOTROpen && (
          <OTRSecondary
            data={dataCities}
            onClick={() => setIsModalOTROpen(!isModalOTROpen)}
          />
        )}
        {isModalLocationOpen && (
          <OTRPrimary
            data={dataCities}
            onClick={() => setIsModalLocationOpen(!isModalLocationOpen)}
          />
        )}
        {isSearchBarMobileShow && (
          <Search onSearchMobileClose={() => setIsSearchBarMobileShow(false)} />
        )}
        {isLocationSelectorShow && (
          <LocationSelector
            data={dataCities}
            onCloseSelector={() => setIsLocationSelectorShow(false)}
          />
        )}
        {isModalVideoShow && (
          <Video onClick={() => setIsModalVideoShow(false)} />
        )}
        <ContactUs />
        <Footer />
      </main>
    </>
  )
}

export async function getServerSideProps({ req, res }: any) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

  try {
    const [
      bannerRes,
      menuRes,
      citiesRes,
      testimonyRes,
      recTotoyaRes,
      MVPRes,
      usageRes,
      mainArticleRes,
      typeCarRes,
      carofTheMonthRes,
    ]: any = await Promise.all([
      api.getBanner(),
      api.getMenu(),
      api.getCities(),
      api.getTestimony(),
      api.getRecommendation('?brand=Toyota&city=jakarta&cityId=118'),
      api.getRecommendation('?bodyType=MPV&city=jakarta&cityId=118'),
      api.getUsage(),
      api.getMainArticle('65'),
      api.getTypeCar('?city=jakarta'),
      api.getCarofTheMonth(),
    ])
    const [
      dataBanner,
      dataMenu,
      dataCities,
      dataTestimony,
      dataRecToyota,
      dataRecMVP,
      dataUsage,
      dataMainArticle,
      dataTypeCar,
      dataCarofTheMonth,
    ] = await Promise.all([
      bannerRes.data,
      menuRes.data,
      citiesRes,
      testimonyRes.data,
      recTotoyaRes.carRecommendations,
      MVPRes.carRecommendations,
      usageRes.data.attributes,
      mainArticleRes,
      typeCarRes,
      carofTheMonthRes.data,
    ])
    return {
      props: {
        dataBanner,
        dataMenu,
        dataCities,
        dataTestimony,
        dataRecToyota,
        dataRecMVP,
        dataUsage,
        dataMainArticle,
        dataTypeCar,
        dataCarofTheMonth,
      },
    }
  } catch (error) {
    throw error
  }
}
