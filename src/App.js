import './App.css';
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Home from './screens/Home/Home';
import Detalle from './screens/Detalle/Detalle';
import Seccion from './screens/Seccion/Seccion';
import Favoritos from './screens/Favoritos/Favoritos';
import Resultados from './screens/Resultados/Resultados';
import NotFound from './screens/NotFound/NotFound';

function App() {
  return (
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/peliculas/verTodas/:seccion" component={Seccion} />
        <Route path="/peliculas/detalle/:id" component={Detalle} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/resultadosbusqueda/:busqueda" component={Resultados} />
        <Route path="" component={NotFound} />
      </Switch>
    )
}

export default App;
