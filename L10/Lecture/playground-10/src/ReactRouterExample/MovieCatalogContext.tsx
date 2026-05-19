import { createContext, useContext, type ReactNode } from 'react'
import { useMovieCatalogState } from './useMovieCatalogState'

type MovieCatalogContextValue = ReturnType<typeof useMovieCatalogState>

const MovieCatalogContext = createContext<MovieCatalogContextValue | null>(null)

type MovieCatalogProviderProps = {
  children: ReactNode
}

export function MovieCatalogProvider({ children }: MovieCatalogProviderProps) {
  const value = useMovieCatalogState()

  return <MovieCatalogContext.Provider value={value}>{children}</MovieCatalogContext.Provider>
}

export function useMovieCatalogContext() {
  const context = useContext(MovieCatalogContext)

  if (!context) {
    throw new Error('useMovieCatalogContext must be used inside MovieCatalogProvider')
  }

  return context
}