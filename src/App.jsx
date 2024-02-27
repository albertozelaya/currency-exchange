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
            <img className="mx-auto min-h-full w-6/12 lg:h-26 lg:w-4/12 xl:w-5/12 2xl:w-2/6" src={logo} alt="logo" />
            </form>
      </div>
      
      <form className="p-2 flex uppercase rounded-lg shadow-md items-center font-bold divide-x-4">

        <div className='flex-auto w-3/6 lg:w-2/6 text-4xl md:5xl lg:text-6xl 2xl:text-8xl '>
        <h1 className=" ms-4 tracking-wide py-2 ps-8">Tasa de Cambio</h1>
        </div>

        <div className='flex-auto w-24 text-center lg:text-2xl xl:text-4xl 2xl:text-7xl'>
        <h3 className="tracking-wide my-2 ">Compra:</h3>
        <p className=''>L. {`${exchangeRate?.usdBuy}`}</p>
        </div>

        <div className='flex-auto w-24 text-center lg:text-2xl xl:text-4xl 2xl:text-7xl'>
          <h3 className="tracking-wide my-2 ">Venta:</h3>
          <p className=''>L. {`${exchangeRate?.usdSale}`}</p>
        </div>

      </form>

      <div className='grid grid-cols-3 items-center px-2 -my-1'>

        <div className='p-3'>
          <a href="https://apps.apple.com/us/app/banhcafe-online/id6449547967">
            <img className='w-full md:w-8/12 lg:w-8/12 2xl:w-7/12 lg:max-h-28 mx-auto' src={appStore} alt="appStore" />
          </a>
        </div>

        <div className='p-2'>
          <a href="https://appgallery.huawei.com/app/C108478085">
            <img className='w-full md:w-8/12 lg:w-8/12 2xl:w-7/12 lg:max-h-28 mx-auto' src={appGalery} alt="appGalery" />
          </a>
        </div>

        <div className='p-2'>
          <a href="https://play.google.com/store/apps/details?id=com.jmacbhc.BANHCAFEMobileApp">
            <img className='w-full md:w-8/12 lg:w-8/12 2xl:w-7/12 lg:max-h-28 mx-auto' src={googlePlay} alt="googlePlay" />
          </a>
        </div>

      </div>


            
    </>
  )
}
