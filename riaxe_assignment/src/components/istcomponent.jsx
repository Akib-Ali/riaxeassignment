import { useState } from "react"
import carrot from "./images/carrot.jpg"
import cauliflower from "./images/cauliflower.jpg"
import cucumber from "./images/cucumber.jpg"
import potato from "./images/potato.jpg"
import tomato from "./images/tomato.jpg"

export const IstComponent=()=>{

    const[carrotquant, setcarrotquant] = useState(1)
    const [cauliflowerquant,setcauliflowerquant] = useState(1)
    const [cucumberquant,SetCucumberquant] = useState(1)
    const [potatoquant,Setpotatoquant] = useState(1)
    const [tomatoquant,Settomatoquant] = useState(1)


    let totalprice = carrotquant*20 + cauliflowerquant*20 +cucumberquant*20 + potatoquant*20 + tomatoquant*20


    






    return(
          
<div className="container">

        <table className="table">
            <thead>
                <tr>
                    <th>Item List</th>
                    <th>Product</th>
                    <th className="text-right">Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="product-image">
                            <img src={carrot}/>
                        </div>
                    </td>
                    <td>
                        <div class="product-info">
                            <div className="title">Carrot</div>
                            <div className="price">Price: 20.00</div>
                            <div className="description">Description: Lorem Ipsum is...</div>
                        </div>
                    </td>
                    <td>
                        <div class="quantity-group">
                            <button className="btn" onClick={(()=> setcarrotquant(carrotquant-1))}>-</button>
                            
                            {/* <input text={carrotquant} className="form-control"/> */}
                            <p>{carrotquant}</p>
                            <button className="btn" onClick={(()=> setcarrotquant(carrotquant+1))}>+</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="product-image">
                            <img src={cauliflower}/>
                        </div>
                    </td>
                    <td>
                        <div className="product-info">
                            <div className="title">Cauliflower</div>
                            <div className="price">Price: 20.00</div>
                            <div class="description">Description: Lorem Ipsum is...</div>
                        </div>
                    </td>
                    <td>
                        <div class="quantity-group">
                            <button class="btn" onClick={(()=> setcauliflowerquant(cauliflowerquant-1))}>-</button>
                            {/* <input type="text" class="form-control"/> */}
                            <p>{cauliflowerquant}</p>
                            <button className="btn"  onClick={(()=> setcauliflowerquant(cauliflowerquant+1))}>+</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="product-image">
                            <img src={cucumber}/>
                        </div>
                    </td>
                    <td>
                        <div className="product-info">
                            <div className="title">Cucumber</div>
                            <div className="price">Price: 20.00</div>
                            <div className="description">Description: Lorem Ipsum is...</div>
                        </div>
                    </td>
                    <td>
                        <div class="quantity-group">
                            <button className="btn" onClick={(()=> SetCucumberquant(cucumberquant-1))}>-</button>
                            {/* <input type="text" className="form-control"/> */}
                            <p>{cucumberquant}</p>
                            <button className="btn" onClick={(()=> SetCucumberquant(cucumberquant-1))}>+</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="product-image">
                            <img src={potato}/>
                        </div>
                    </td>
                    <td>
                        <div class="product-info">
                            <div className="title">potato</div>
                            <div className="price">Price: 20.00</div>
                            <div className="description">Description: Lorem Ipsum is...</div>
                        </div>
                    </td>
                    <td>
                        <div className="quantity-group">
                            <button className="btn"  onClick={(()=> Setpotatoquant(potatoquant-1))}>-</button>
                            {/* <input type="text" class="form-control"/> */}
                            <p>{potatoquant}</p>
                            <button className="btn"  onClick={(()=> Setpotatoquant(potatoquant+1))}>+</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="product-image">
                            <img src={tomato}/>
                        </div>
                    </td>
                    <td>
                        <div className="product-info">
                            <div className="title">Tomato</div>
                            <div className="price">Price: 20.00</div>
                            <div class="description">Description: Lorem Ipsum is...</div>
                        </div>
                    </td>
                    <td>
                        <div class="quantity-group">
                            <button className="btn" onClick={(()=> Settomatoquant(tomatoquant-1))}>-</button>
                            {/* <input type="text" class="form-control"/> */}
                            <p>{tomatoquant}</p>
                            <button className="btn" onClick={(()=> Settomatoquant(tomatoquant+1))}>+</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><button className="view-btn">View</button></td>
                    <td colspan="2">
                        <div className="total-price text-right">Total Price :{totalprice}</div>
                        
                    </td>
                </tr>
            </tbody>
        </table>
    
    
    
    </div>
    )
}