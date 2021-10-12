import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditArticuloComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            nombre: '',
            unidadMedida: '',
            clave: '',
            precio: ''
        }
        this.guardarArticulo = this.guardarArticulo.bind(this);
        this.cargaArticulo = this.cargaArticulo.bind(this);
    }

    componentDidMount() {
        this.cargaArticulo();
    }

    cargaArticulo() {
        ApiService.buscarArticuloPorId(window.localStorage.getItem("idArticulo"))
            .then((res) => {
                let articulo = res.data.result;
                this.setState({
                    _id: articulo._id,
                    nombre: articulo.nombre,
                    unidadMedida: articulo.unidadMedida,
                    clave: articulo.clave,
                    precio: articulo.precio
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    guardarArticulo = (e) => {
        e.preventDefault();
        let articulo = {
            _id: this.state._id,
            nombre: this.state.nombre,
            unidadMedida: this.state.unidadMedida,
            clave: this.state.clave,
            precio: this.state.precio
        };
        ApiService.editarArticulo(articulo)
            .then(res => {
                this.setState({ message: 'Artículo modificado con exito.' });
                this.props.history.push('/articulos');
            });
    }

    cancelar = (e) => {
        e.preventDefault();
        this.props.history.push('/articulos');

    }

    render() {
        return (
            <div style={{width:'50%',marginLeft:"300px"}}>
                <h2 className="text-center">Editar Artículo</h2>
                <form>

                    <div className="form-group">
                        <label>Nombre:</label>
                        <input type="text" placeholder="Nombre" name="nombre" className="form-control" value={this.state.nombre} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                    <label>Unidad de Medida:</label>
                        <select placeholder="Unidad de Medida" name="unidadMedida" className="form-control" value={this.state.unidadMedida} onChange={this.onChange}>
                            <option value="Pieza">Pieza</option>
                            <option value="Kilogramo">Kilogramo</option>
                            <option selected value="Pulgada">Pulgada</option>
                            <option value="Litro">Litro</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Clave:</label>
                        <input placeholder="Clave" name="clave" className="form-control" value={this.state.clave} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Precio:</label>
                        <input placeholder="Precio" name="precio" className="form-control" value={this.state.precio} onChange={this.onChange} />
                    </div>
                    <span style={{ float: 'right' }}>
                        <button style={{ marginRight: '20px', width: '100px' }} className="btn btn-info" onClick={this.cancelar}>Cancelar</button>
                        <button style={{ width: '100px' }} className="btn btn-success" onClick={this.guardarArticulo}>Modificar</button>

                    </span>
                </form>
            </div>
        );
    }
}

export default EditArticuloComponent