
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import DashboardComponent from '../components/DashboardComponent'

export default function Dashboard() {
  return (
    <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <Header />
            <div>
                <DashboardComponent/>
            </div>
            
        </div>
    </div>
</div>
  )
}
