import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import LocalMoviesRoundedIcon from '@mui/icons-material/LocalMoviesRounded'
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded'
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import { useMovieCatalogContext } from '../MovieCatalogContext'

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const { role, openMovies, openAddMovie, openAdminCategories, toggleRole } = useMovieCatalogContext()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Movie Catalog Admin (Simple Routing)
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button onClick={openMovies} startIcon={<HomeRoundedIcon />}>
              Movies
            </Button>
            {role === 'admin' ? (
              <>
                <Button onClick={openAddMovie} startIcon={<LocalMoviesRoundedIcon />}>
                  Add Movie
                </Button>
                <Button

                  onClick={openAdminCategories}
                  startIcon={<ManageAccountsRoundedIcon />}
                >
                  Admin
                </Button>
              </>
            ) : null}
            <Button variant="outlined" onClick={toggleRole}>
              Change role to {role === 'admin' ? 'Guest' : 'Admin'}
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
        {children}
      </Container>

      <Box
        component="footer"
        sx={{
          borderTop: '1px solid',
          borderColor: 'divider',
          px: 3,
          py: 2,
          bgcolor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            KMa 2026 &copy; All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}
