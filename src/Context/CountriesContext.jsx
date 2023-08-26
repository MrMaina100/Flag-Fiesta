import { createContext, useState } from "react"


const CountriesContext = createContext()

export const CountriesProvider = ({children})=>{

   const [countries, setCountries] = useState([])

  const fetchCountryDetails = async ()=>{
   try {

      const res = await fetch('https://restcountries.com/v3.1/all')
      const data = await res.json()
      setCountries(data)
      
     
      
   } catch (error) {
      console.log('something went wrong');
   }
  }
   return <CountriesContext.Provider value={{
      countries,
      fetchCountryDetails,

   }}>
      {children}
   </CountriesContext.Provider>
}

export default CountriesContext
