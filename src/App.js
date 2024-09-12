import './App.css';
import { Route, Router, Switch } from "react-router-dom/cjs/react-router-dom";
import Home from './screens/Home/Home';
import Detalle from './screens/Detalle/Detalle';
import Seccion from './screens/Seccion/Seccion';
import Favoritos from './screens/Favoritos/Favoritos';
import ResultadosBusqueda from './screens/ResultadosBusqueda/ResultadosBusqueda';
import NotFound from './screens/NotFound/NotFound';

function App() {
  return (
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/peliculas/seccion/:seccion" component={Seccion} />
        <Route path="/peliculas/id/:id" component={Detalle} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/resultadosBusqueda/:busqueda" component={ResultadosBusqueda} />
        <Route path="" component={NotFound} />
      </Switch>);

}

export default App;
