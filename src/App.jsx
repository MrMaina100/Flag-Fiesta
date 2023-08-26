import Header from "./My-Componets/Header"
import { ThemeProvider } from "./components/theme-provider"
import { CountriesProvider } from "./Context/CountriesContext"
import CountriesDisplay from "./My-Componets/Display/CountriesDisplay"

const App = () => {
  return (
    <CountriesProvider>    
    <ThemeProvider>
    <div>

      <Header/>
      
      <CountriesDisplay/>
    </div>
    </ThemeProvider>
    </CountriesProvider>
  )
}
export default App