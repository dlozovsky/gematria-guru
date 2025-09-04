# Gematria Guru - Replit Configuration

## Project Overview
Gematria Guru is a React-based web application for learning and exploring Hebrew and English Gematria calculations. It provides interactive tools for calculating word values, learning modules, and mystical insights into number symbolism.

## Architecture
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Framework**: Radix UI components with Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: TanStack Query for server state
- **Deployment**: Static site with prerendering for SEO

## Technology Stack
- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.1
- Tailwind CSS 3.4.11
- Radix UI components
- TanStack React Query 5.56.2
- React Hook Form 7.53.0
- Zod 3.23.8 for validation
- Framer Motion for animations

## Replit Configuration

### Development Setup
- **Port**: 5000 (configured for Replit proxy compatibility)
- **Host**: 0.0.0.0 (allows external access through Replit's iframe)
- **Workflow**: "Start application" runs `npm run dev`
- **Output Type**: webview (displays website preview to users)

### Deployment Configuration
- **Target**: autoscale (stateless frontend application)
- **Build**: `npm run build` (creates optimized production bundle)
- **Run**: `npx serve -s dist -l` (serves static files from dist folder)

### Key Files
- `vite.config.ts`: Updated for Replit environment (port 5000, host 0.0.0.0)
- `package.json`: All dependencies properly installed
- `src/App.tsx`: Main application with routing setup
- `api/prerender.js`: SEO prerendering for bots (Vercel-compatible)

## Recent Changes (Import Setup)
- Installed all npm dependencies
- Configured Vite to use port 5000 with host 0.0.0.0 for Replit compatibility
- Set up frontend workflow with webview output
- Configured deployment settings for production
- Verified all LSP diagnostics are clear

## User Preferences
None specified yet.

## Project Status
✅ Successfully imported and configured for Replit environment
✅ Frontend running on port 5000
✅ Deployment configuration complete
✅ All dependencies installed and working