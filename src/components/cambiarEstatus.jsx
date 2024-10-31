"use client"
import Link from "next/link";
import axios from "axios";

export default function CambiarEstado({id}) {
    async function borrar() {
        //console.log("Estas en borrar: " + id);
        const url = "http://localhost:3000/cambiarEstatus/"+id;
        const respuesta = await axios.post(url);
        window.location.replace("/ventas/mostrar");
    }

    return (
        <Link href="" onClick={borrar}>Cambiar</Link>
    );
}