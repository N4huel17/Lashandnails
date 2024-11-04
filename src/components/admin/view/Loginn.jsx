
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Loginn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, llamar a una API de autenticación
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-form">
            <div className="row justify-content-center">
                <div className="col-md-12"> {/* Modifica el tamaño del formulario aquí */}
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Login</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                
                                    <button type="submit" style={{ height: '35px', width: '250px', marginTop: '10px' }} className="btn btn-primary ">Login</button>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loginn;