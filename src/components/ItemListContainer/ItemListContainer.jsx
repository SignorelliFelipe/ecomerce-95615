


const ItemListContainer = ({ saludo= "Esto es un txt por defecto",saludando }) => {

  return (
    <div>
        <h2> {saludo} </h2>
        
        {
            saludando && <button onClick={saludando}>Clickeame</button>
        }

    </div>

  )
}

export default ItemListContainer