import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";

export function Container(){
  return (
    <div className="flex flex-col min-h-screen w-full mx-auto p-4 max-w-7xl">
      <Navbar></Navbar>
      <main className="flex flex-1 flex-col">
        
      </main>
      <Footer></Footer>
    </div>
  )
}