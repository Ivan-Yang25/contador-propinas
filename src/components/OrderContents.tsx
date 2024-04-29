import { MenuItems, OrderItem } from "../types"
import { formatCurrency } from "./helpers"

type OrderContentsProps = {
  order: OrderItem[],
  removeItem : (id: MenuItems['id']) => void
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {

  return (  
    <>
        <div>
            <h2 className='font-black text-4xl'>Consumo</h2>

            <div className="space-y-3 mt-5">
              <h3>
                {order.length === 0 ? 
                  <p className="text-center">La orden esta vacia</p> :
                  (
                    order.map(item => (
                      
                      <div className="flex justify-between item-center border-t border-gray-200 py-5 last-of-type:border-b" key={item.id}>

                        <div>
                          <h3 className="text-lg">
                            {item.name} - {formatCurrency(item.price)}
                          </h3>

                          <p className="font-black">
                            Cantidad: {item.quantity} - {formatCurrency(item.price*item.quantity)}
                          </p>
                        </div>
                        
                        <button onClick={() => removeItem(item.id)} className="bg-red-600 h-8 w-8 rounded-full text-white font-black">
                          X
                        </button>
                      </div>

                    ))
                  )}
              </h3>
            </div>
        </div>
    </>
  )
}
