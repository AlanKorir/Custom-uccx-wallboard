import { ThemeProvider, createTheme } from '@mui/material/styles'
// Material-UI theme provider
import CssBaseline from '@mui/material/CssBaseline'
// CSS baseline for consistent styling
import { BrowserRouter as Router } from 'react-router-dom'
// React Router for client-side routing
import { Box, Typography } from '@mui/material'
// Material-UI components

// Create a dark theme for wallboard (easier on eyes)
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // Dark mode
    primary: {
      main: '#1976d2',
      // Primary blue color
    },
    secondary: {
      main: '#dc004e',
      // Secondary pink color
    },
    background: {
      default: '#0a1929',
      // Dark blue background
      paper: '#001e3c',
      // Slightly lighter for cards
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // Material Design font stack
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* Provide theme to all child components */}
      <CssBaseline />
      {/* Reset and normalize CSS */}
      <Router>
        {/* Enable client-side routing */}
        <Box
          sx={{
            minHeight: '100vh',
            // Full viewport height
            p: 3,
            // Padding
            background: 'linear-gradient(135deg, #0a1929 0%, #001e3c 100%)',
            // Gradient background
          }}
        >
          <Typography variant="h3" gutterBottom color="primary">
            {/* Main heading */}
            🎯 UCCX Wallboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {/* Subtitle */}
            Cisco UCCX 12.0 Real-time Dashboard
          </Typography>
          <Box sx={{ mt: 4 }}>
            {/* Placeholder for dashboard content */}
            <Typography variant="h6" color="warning.main">
              🚧 Dashboard under construction...
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Next: Create agent status and queue metrics components
            </Typography>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
// Export App as default component