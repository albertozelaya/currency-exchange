import { useEffect } from 'react';
import logo from './assets/logo-text.png';
import { useCurrency } from './hooks/useCurrency';
import appStore from './assets/apple-store.svg';
import appGalery from './assets/app-gallery.png';
import googlePlay from './assets/google-play-badge.png';


export const App = () => {

  const {exchangeRate, startGetCurrencyExchange} = useCurrency()

  useEffect(() => {
    startGetCurrencyExchange()
  }, [])

  return (
    <>
      <div className="w-full justify-center mb-2">
            <form className='rounded-lg'>
            <img className="mx-auto min-h-full w-8/12 md:w-6/12 lg:h-26 lg:w-4/12 xl:w-5/12 2xl:w-2/6" src={logo} alt="logo" />
            </form>
      </div>
      
      <form className="p-2 grid grid-cols-1 lg:flex lg:flex-nowrap uppercase rounded-lg shadow-md items-center justify-center font-bold divide-y-4 lg:divide-x-4 lg:divide-y-0 text-center">
        <div className='flex-auto text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl '>
          <h1 className="md:ms-4 tracking-wide py-2 md:ps-8 text-center">Tasa de Cambio</h1>
        </div>

        <div className='flex-auto w-full md:w-auto text-center md:text-3xl lg:text-2xl text-2xl xl:text-4xl 2xl:text-7xl mb-2 md:mb-0'>
            <h3 className="tracking-wide my-2">Compra:</h3>
            <p className='2xl:text-8xl'>L. {`${exchangeRate?.usdBuy}`}</p>
        </div>

        <div className='flex-auto w-full md:w-auto text-center md:text-3xl lg:text-2xl text-2xl xl:text-4xl 2xl:text-7xl'>
            <h3 className="tracking-wide my-2">Venta:</h3>
            <p className='2xl:text-8xl'>L. {`${exchangeRate?.usdSale}`}</p>
        </div>
    </form>


      <div className='grid md:grid-cols-3 items-center px-2 my-10 '>

        <div className='p-3'>
          <a href="https://apps.apple.com/us/app/banhcafe-online/id6449547967">
            <img className=' w-72  lg:w-8/12 2xl:w-7/12 lg:max-h-28 mx-auto' src={appStore} alt="appStore" />
          </a>
        </div>

        <div className='p-2'>
          <a href="https://appgallery.huawei.com/app/C108478085">
            <img className=' w-72  lg:w-8/12 2xl:w-7/12 lg:max-h-28 mx-auto' src={appGalery} alt="appGalery" />
          </a>
        </div>

        <div className='p-2'>
          <a href="https://play.google.com/store/apps/details?id=com.jmacbhc.BANHCAFEMobileApp">
            <img className=' w-72  lg:w-8/12 2xl:w-7/12 lg:max-h-28 mx-auto' src={googlePlay} alt="googlePlay" />
          </a>
        </div>

      </div>


            
    </>
  )
}
