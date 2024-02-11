import './product.css'

const Product = ({id,title,category,price,img}) => {
  return (
   <>
   <div key={id} className='product --card'>
      <img src={img} alt="" />
      <div className='--bg-primary --center-all --p'>
        <h3 className='--text-light'>{title}</h3>
        <div className='--flex-between --width-100'>
          <p className='--text-light'>{price}</p>
          <button className='--btn --btn-danger'>Add To Cart</button>
        </div>
      </div>
    </div>
    
   </>
  )
}

export default Product