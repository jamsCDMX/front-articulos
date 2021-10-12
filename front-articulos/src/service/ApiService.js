import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/articulos';

class ApiService {

    listaArticulos() {
        return axios.get(API_BASE_URL + '/');
    }

    buscarArticuloPorId(idArticulo) {
        return axios.get(API_BASE_URL + '/articulo/' + idArticulo);
    }

    borrarArticulo(idArticulo) {
        return axios.delete(API_BASE_URL + '/articulo/' + idArticulo);
    }

    guardarArticulo(articulo) {
        return axios.post(API_BASE_URL+ '/articulo', articulo);
    }

    editarArticulo(articulo) {
        return axios.put(API_BASE_URL + '/articulo/' + articulo._id, articulo);
    }

}

export default new ApiService();