
const Gallery = (props) => {

    const product = props.prod;

    return product ? (
        <div className="card__photos gallery">
            <div className="gallery__display">
                <img src={product.img} width="570" height="525" alt="" className="gallery__display-img" />
            </div>
            <div className="gallery__thumbnails-container">
                <ul className="gallery__thumbnails">
                    {product.images.map(el => {
                        return <li key={el.id} className="gallery__thumbnails-item">
                            <img src={el.src} alt="prod" className="gallery__thumbnails-img" />
                        </li>
                    })}
                </ul>
            </div>
        </div>
    ) : null
}

export default Gallery;