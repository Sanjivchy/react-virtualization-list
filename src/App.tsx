import { Suspense  } from 'react'
import './App.css'
import VirtualizedLists from './virtualized'
import FullPageLoader from './components/Loader'

/**
 * App component that serves as the main entry point of the application.
 * It displays a heading and renders virtualized lists within a Suspense boundary.
 * While the virtualized lists are loading, a full-page loader is displayed.
 */

function App() {
  return (
    <div className='pt-20 '>
      <h1 className='text-center text-4xl font-bold pb-6'>
        Virtualized Lists
      </h1>
       <Suspense fallback={<div><FullPageLoader /></div>}>
        <VirtualizedLists />
      </Suspense>
    </div>
  )
}

export default App
