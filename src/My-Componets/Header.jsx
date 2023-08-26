import { ModeToggle } from "../components/mode-toggle"

const Header = () => {
  return (
    <div className="bg-black p-2">
      <div className="flex justify-between">
         <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-white">FLAG-FIESTA</h4>

         <div className="flex space-x-6">
            {/* search components */}

            {/* dark mode  */}
            <ModeToggle/>
         </div>

      </div>
      
    </div>
  )
}
export default Header