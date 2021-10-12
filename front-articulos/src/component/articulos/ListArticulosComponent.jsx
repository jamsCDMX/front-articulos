import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListArticulosComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            articulos: [],
            message: null
        }
        this.borrarArticulo = this.borrarArticulo.bind(this);
        this.editarArticulo = this.editarArticulo.bind(this);
        this.agregarArticulo = this.agregarArticulo.bind(this);
        this.listaArticulos = this.listaArticulos.bind(this);
    }

    componentDidMount() {
        this.listaArticulos();
    }

    listaArticulos() {
        ApiService.listaArticulos()
            .then((res) => {
                this.setState({ articulos: res.data.result })
            });
    }

    borrarArticulo(idArticulo) {
        ApiService.borrarArticulo(idArticulo)
            .then(res => {
                this.setState({ message: 'Articulo borrado exitosamente.' });
                this.setState({ articulos: this.state.articulos.filter(articulo => articulo._id !== idArticulo) });
            })

    }

    editarArticulo(id) {
        window.localStorage.setItem("idArticulo", id);
        this.props.history.push('/editar-articulo');
    }

    agregarArticulo() {
        window.localStorage.removeItem("idArticulo");
        this.props.history.push('/nuevo-articulo');
    }

    render() {
        return (
            <div style={{width:'50%',marginLeft:"300px"}}>
                <h2 className="text-center">Lista de Artículos</h2>
                <button className="btn btn-info" style={{ width: '150px', float:'right' }} onClick={() => this.agregarArticulo()}> 
                Nuevo artículo
                
                </button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">ID</th>
                            <th>Artículos</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.articulos.map(
                                articulo =>
                                    <tr key={articulo._id}>
                                        <td>{articulo.nombre}</td>

                                        <td style={{width:'30%'}}>
                                           
                                            <span onClick={() => this.borrarArticulo(articulo._id)} style={{ cursor: 'pointer' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#10719e" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                            </span>

                                            <span onClick={() => this.editarArticulo(articulo._id)} style={{ cursor: 'pointer', marginRight:'20px'}}>
                                                <svg
                                                    title="Editar"
                                                    xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#10719e" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
                                            </span>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListArticulosComponent;