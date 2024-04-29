import type { MenuItems } from "../types"

type MenuItemProps = {
    item: MenuItems,
    addItem: (item : MenuItems) => void
}


export default function MenuItem({item, addItem}:MenuItemProps) {


    return (

        <>
            <button onClick={() => addItem(item)} className="border-2 rounded-md border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
                <h3>{item.name}</h3>
                <p className="font-black">${item.price}</p>
            </button>
        </>
    )

}
