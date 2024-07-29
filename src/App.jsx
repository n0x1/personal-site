import './App.css'
import Bento from './components/bento.jsx'



function App() {
  return (
    <>
    <div className='flex flex-col mx-40'> 
      <div className='flex flex-row mt-2'>
        <Bento width="w-1/2" textHeader="Welcome" headerColor="bg-blue-500" bodyColor="bg-slate-800" bodyText="Hi!!"/>
        <Bento width="w-1/4" textHeader="Games" headerColor="bg-red-500" bodyColor="bg-slate-400" bodyText="I like lots of fighting games, RPGs, and FPS"/>
      </div>
      <div className='flex flex-row justify-evenly mt-2'>
        <Bento width="w-1/8" textHeader="Linguistics" headerColor="bg-purple-500" bodyColor="bg-slate-800" bodyText="Conlangs & studying Japanese"/>
        <Bento width="w-1/2" textHeader="Music" headerColor="bg-green-500" bodyColor="bg-slate-400" bodyText="I play piano, guitar, and want to compose contemporary / produce indie rock"/>
      </div>
      <div className='flex flex-row justify-evenly mt-2'>
        <Bento width="w-1/3" textHeader="About Me" headerColor="bg-orange-500" bodyColor="bg-slate-800" bodyText="16 year old high school student"/>
        <Bento width="w-1/3" textHeader="Art/Writing" headerColor="bg-yellow-500" bodyColor="bg-slate-600" bodyText="Filler/Cam's personal site"/>
        <Bento width="w-1/3" textHeader="Art/Writing" headerColor="bg-yellow-500" bodyColor="bg-slate-400" bodyText="Filler/Cam's personal site"/>
      </div>
    </div> 

    </>
  )
}

export default App
