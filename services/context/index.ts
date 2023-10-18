import { AuthContext, AuthProvider, AuthContextType } from './authContext'
import { CarContext, CarProvider, CarContextType } from './carContext'
import {
  ConfigContext,
  ConfigProvider,
  ConfigContextType,
} from './configContext'
import {
  SearchWidgetContext,
  SearchWidgetContextType,
  SearchWidgetProvider,
} from './searchWidgetContext'
import {
  UtilsContext,
  UtilsContextProvider,
  UtilsContextType,
} from './utilsContext'
import {
  FunnelQueryContext,
  FunnelQueryContextProvider,
  FunnelQueryContextType,
} from './funnelQueryContext'
import {
  FunnelQueryUsedCarContext,
  FunnelQueryUsedCarContextProvider,
  FunnelQueryUsedCarContextType,
} from './funnelQueryUsedCarContext'

import {
  FinancialQueryContext,
  FinancialQueryContextProvider,
  FinancialQueryContextType,
} from './finnancialQueryContext'
import { GlobalContextProvider } from './globalContextProvider'

export {
  AuthContext,
  AuthProvider,
  CarContext,
  CarProvider,
  ConfigContext,
  ConfigProvider,
  SearchWidgetContext,
  SearchWidgetProvider,
  UtilsContext,
  UtilsContextProvider,
  FunnelQueryContext,
  FunnelQueryContextProvider,
  FunnelQueryUsedCarContext,
  FunnelQueryUsedCarContextProvider,
  FinancialQueryContext,
  FinancialQueryContextProvider,
  GlobalContextProvider,
}

export type {
  AuthContextType,
  CarContextType,
  ConfigContextType,
  SearchWidgetContextType,
  UtilsContextType,
  FunnelQueryContextType,
  FunnelQueryUsedCarContextType,
  FinancialQueryContextType,
}
