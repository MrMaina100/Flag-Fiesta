import { useEffect, useContext, useState} from "react"
import CountriesContext from "../../Context/CountriesContext"


const CountriesDisplay = () => {

  const [search, setSearch] = useState('')
  const [selectRegion, setSelectRegion] = useState('')
   const {countries,fetchCountryDetails} = useContext(CountriesContext)
   useEffect(()=>{
      fetchCountryDetails()

   },[])
  return (
    <> 
     <div className="mt-2 flex justify-between items-center px-2 md:px-[100px]">
       <input type="text" onChange={(e)=>setSearch(e.target.value)} className="text-black border-2 border-black p-1" placeholder="search for a country"  />


         <select onChange={(e)=>setSelectRegion(e.target.value)} className="bg-black text-white p-2">
          

           <option value=''>All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>       
         
        </select>
    
     </div>

     


      <div className="  flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-8 md:space-x-10  md:flex-wrap"> 
       <br />
       
        {countries.filter((results)=>{
          return search.toLowerCase()=== '' ? results: results.name.common.toLowerCase().includes(search)

        })
        .filter((results)=>{
          return results.region.includes(selectRegion)
        })
        .map((results)=>{
          return(
             <div key={results.name.common} className="w-[310px] h-[315px] flex flex-col border rounded-lg shadow-2xl ">
              <img src={results.flags.svg} alt=""  className="w-[100%] aspect-video object-cover border-b-[0.5px] border-black"/>

              <div className="flex flex-col space-y-1 ml-2">
                <p>Country: {results.name.common}</p>
                <p>Capital: {results.capital}</p>
                <p>Population: {results.population.toLocaleString()}</p>
                <p>Region: {results.region}</p>

              </div>

              
             </div>
          )
        })}
      </div>

    
    </>
  )
}
export default CountriesDisplay