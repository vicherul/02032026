import './App.css'
import Server from './component/Server'
function App() {
  return (
    <>
    <Server serverName='Web principal' status='online'></Server>
    <Server serverName='Base de Datos' status='online'></Server>
    <Server serverName='Api de Pagos' status='offline'></Server>
    </>
  )
}

export default App
