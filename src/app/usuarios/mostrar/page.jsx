import BorrarUsuario from "@/components/borrarUsuarios";
import Link from "next/link";
import axios from "axios";

async function getUsuarios() {
    const url = "http://localhost:3000/usuarios/mostrar";
    const usuarios = await axios.get(url);
    //console.log(usuarios.data);
    return usuarios.data;
}

export default async function Universidades() {
    const usuarios = await getUsuarios();

    return (
        <>
            <h1>Usuarios</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Tipo de usuario</th>
                        <th>Editar/Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario, i) => (
                            <tr key={usuario.id}> {/* Usar id del usuario como clave */}
                                <td>{usuario.id}</td> {/* Mostrar el id real del usuario */}
                                <td>{usuario.nombre}</td>
                                <td>{usuario.usuario}</td>
                                <td>{usuario.tipoUsuario}</td>
                                <td>
                                    <BorrarUsuario id={usuario.id} />
                                    <Link href='/usuario/editar/${usuario.id}'>Editar</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
