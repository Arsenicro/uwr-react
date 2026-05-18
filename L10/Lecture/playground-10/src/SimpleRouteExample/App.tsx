import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '../theme'
import { MovieCatalogProvider } from './MovieCatalogContext'
import { AppLayout } from './components/AppLayout'
import { PageContent } from './components/PageContent'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MovieCatalogProvider>
        <AppLayout>
          <PageContent />
        </AppLayout>
      </MovieCatalogProvider>
    </ThemeProvider>
  )
}

export default App
