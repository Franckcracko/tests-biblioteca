export function Login() {
    return (
        <main>
            <h1>Login</h1>
            <form className='mt-4 grid justify-center' action="">
                <div className='grid grid-cols-2'>
                    <label htmlFor="email" >Email:</label>
                    <input className='border' type="text" name="email" />
                </div>
                <div className='grid grid-cols-2'>
                    <label htmlFor="email">Password:</label>
                    <input className=' border' type="password" name="token" />
                </div>
            </form>
        </main>
    )
}