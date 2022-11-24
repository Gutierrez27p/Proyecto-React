import React from "react";

const ItemListContainer = ({msj}) =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div class="alert alert-dark" role="alert">
                        {msj}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;