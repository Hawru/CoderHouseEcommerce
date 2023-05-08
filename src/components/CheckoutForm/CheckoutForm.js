import { useState } from "react";

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return ( 
        <div>
            <form onSubmit={handleConfirm}>
                <label>
                    Nombre
                </label>
                <input
                    type="text" 
                    value={name}
                    onChange={({target}) => setName(target.value)}
                />
                <label>
                    Telefono
                </label>
                <input
                    type="text" 
                    value={phone}
                    onChange={({target}) => setPhone(target.value)}
                />
                <label>
                    Email
                </label>
                <input
                    type="email" 
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                />
                <button type="submit">Enviar</button>
                
            </form>
        </div>
    )
}

export default CheckoutForm;