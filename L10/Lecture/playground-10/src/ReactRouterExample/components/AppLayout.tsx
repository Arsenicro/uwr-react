import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import LocalMoviesRoundedIcon from '@mui/icons-material/LocalMoviesRounded'
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded'
import { Alert, AppBar, Box, Button, Container, Stack, Toolbar, Typography } from '@mui/material'
import { NavLink, Outlet, useLocation } from 'react-router'
import { useMovieCatalogContext } from '../MovieCatalogContext'


export function AppLayout() {
  const { role, toggleRole } = useMovieCatalogContext()
  const location = useLocation();

  console.log('Current location:', location);

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

            <NavLink to="/">
              {({ isActive }) => (
                <Button variant={isActive ? 'contained' : 'text'} startIcon={<HomeRoundedIcon />}>
                  Movies
                </Button>
              )}
            </NavLink>
            {role === 'admin' ? (
              <>
                <Button startIcon={<LocalMoviesRoundedIcon />} component={NavLink} to="/add-movie" sx={{ '&.active': { color: 'secondary.main' } }}>
                  Add Movie
                </Button>
                <Button
                  component={NavLink}
                  to="/admin/categories"
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
        {location.state?.error && (<Alert severity="error" sx={{ mb: 2 }}>{location.state.error}</Alert>)}
        <Outlet />
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
