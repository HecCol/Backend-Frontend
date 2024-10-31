import CambiarEstado from "@/components/cambiarEstatus";
import axios from "axios";
import Link from "next/link";
async function getVenta() {
    const url = "http://localhost:3000/mostrarVentas";
    const ventas = await axios.get(url);
    console.log(ventas.data);
    return ventas.data.ventas;
}

//noticias();
export default async function Ventas() {
    const ventas = await getVenta();
    return (
        <>
            <h1>Ventas</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>fecha</th>
                        <th>hora</th>
                        <th>Id producto</th>
                        <td>Id venta</td>
                        <td>estatus</td>
                        <th>Editar/Cancelar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ventas.map((venta, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{venta.fecha}</td>
                                <td>{venta.hora}</td>
                                <td>{venta.idUsu}</td>
                                <td>{venta.idUsu}</td>
                                <td>{venta.estatus}</td>
                                <td>
                                    <CambiarEstado id={venta.id}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}