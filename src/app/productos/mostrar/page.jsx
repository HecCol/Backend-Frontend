import BorrarProducto from "@/components/borrarUsuarios";
import axios from "axios";
import Link from "next/link";

async function getproductos() {
    const url = "http://localhost:3000/mostrarProductos";
    const productos = await axios.get(url);
    console.log(productos.data);
    return productos.data.productos;
}

export default async function Productos() {
    const productos = await getproductos();
    return (
        <>
            <h1>Productos</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Editar/Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.stock}</td>
                                <td>
                                    <BorrarProducto id={producto.id} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
