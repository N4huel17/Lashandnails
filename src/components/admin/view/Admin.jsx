
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Loginn from './Loginn';
import '../public/css/admin.css';

export default function Admin() {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header />
                    <Loginn className="login"/>
                </div>
            </div>
        </div>
    );
}