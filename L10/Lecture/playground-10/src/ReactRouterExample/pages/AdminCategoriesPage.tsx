import LabelRoundedIcon from '@mui/icons-material/LabelRounded'
import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import { useMovieCatalogContext } from '../MovieCatalogContext'

export function AdminCategoriesPage() {
  const { categories } = useMovieCatalogContext()

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
        Available Categories
      </Typography>
      <List>
        {categories.map((category) => (
          <ListItem key={category.id} divider>
            <ListItemIcon>
              <LabelRoundedIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={category.name} secondary={category.id} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}
