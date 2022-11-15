import MobileCard from "../MobileCard/MobileCard"

type Props = {
    items: any[]
}

const ItemsList:React.FC<Props> = ({items}:Props) => {

    return(
        <>
        {items && <ul>
            {items.length > 0 && items.map(elem => 
                <MobileCard elem={elem} key={elem.id}/>)}
        </ul>}
        </>
    )
}


export default ItemsList