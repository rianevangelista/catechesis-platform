type Props = {
    name: string
}

export function ItemMenu({ name } : Props) {
    return (
        <button>
            <span className="text-red-700 font-bold hover:text-yellow-500 duration-300">{ name }</span>
        </button>
    )
}