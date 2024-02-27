import { useState, useEffect } from 'react';
import banhcafeAPI from './api/banhcafeAPI';
import logo from './assets/Logotipo.png';


export const App = () => {

  const [exchangeRate, setExchangeRate] = useState({ buy: '', sell: '' });

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        const { data } = await banhcafeAPI.get("/exchangerate");
        setExchangeRate({ buy: data.usdBuy, sell: data.usdSell });
      } catch (error) {
        console.error("Error al obtener la tasa de cambio:", error);
      }
    };

    getExchangeRate();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
          <form className="uppercase text-center rounded-md shadow-xl p-4 m-8 lg:p-8 pb-2">
            <img className="mx-auto w-1/2" src={logo} alt="logo" />
            <h1 className="text-2xl tracking-wide py-2">Tasa de Cambio</h1>
            <h2 className="text-2xl">Dólar de EE.UU hacia Lempira Hondureño</h2>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <h3 className="tracking-wide my-2 font-semibold">Compra:</h3>
            <p className='font-semibold'>{`${exchangeRate.buy}`}</p>
            <h3 className="tracking-wide my-2 font-semibold">Venta:</h3>
            <p className='font-semibold'>{`${exchangeRate.sell}`}</p>
            {/* <p className='font-semibold'>{usdSale}</p> */}
          </form>
        </div>
    </>
  )
}
