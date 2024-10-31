"use client"
import axios from "axios";
async function nuevoProducto(e) {
    e.preventDefault();
    //console.log("Estas en nuevo usuario");
    const url = "http://localhost:3000/nuevoProducto";
    const datos = {
        nombre:document.getElementById("nombre").value,
        descripcion:document.getElementById("descripcion").value,
        precio:document.getElementById("precio").value,
        stock:document.getElementById("stock").value
    }
    await console.log(datos);
    const respuesta = await axios.post(url,datos);
    location.replace("http://localhost:3001/productos/mostrar");
    //console.log(respuesta.data);
}
export default function Nuevo() {
    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={nuevoProducto} action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo producto</h1>
                    </div>
                    <div className="card-body">
                        <input id="nombre" placeholder="Nombre" autoFocus className="form-control mb-3" type="text" />
                        <input id="descripcion" placeholder="Descripcion" className="form-control mb-3" type="text" />
                        <input id="precio" placeholder="Precio" className="form-control mb-3" type="text" />
                        <input id="stock" placeholder="Stock" className="form-control mb-3" type="text" />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary col-12 mt-2 mb-2" type="submit">Guardar producto</button>
                    </div>
                </div>
            </form>
        </div>
    );
}