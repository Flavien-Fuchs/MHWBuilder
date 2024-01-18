import '../css/Items.css'


function ItemArmor([item]) {

    return (
        <div className="item">
            <p>{item.name}</p>
        </div>
    )
}

export default ItemArmor