import "../styles/globals.css";

//Internal Import 
import {TrackingProvider} from "../Context/TrackingContext"
import { Navbar,Footer } from "../Components/index";


export default function App({ Component, pageProps }) {
  return (
    <div>
      <TrackingProvider>
      <Navbar />
        <Component {...pageProps} />
      </TrackingProvider>
      <Footer/>
    </div>
  )
}
