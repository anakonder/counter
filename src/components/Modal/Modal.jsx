import css from './Modal.module.css'

export const Modal = () => {
    return(
        <div className={css.modalWraper}>
            <div className={css.modalBody}>
                <form className={css.loginForm}>
                    <h2 className={css.loginTitle}>User autorisation</h2>
                    <label className={css.loginLabel}>
                        Email
                        <input className={css.loginInput} type="email" name='email' placeholder='test@mail.com'/>
                    </label>
                    <label className={css.loginLabel}>
                        Password
                        <input className={css.loginInput} type="password" name='password'/>
                    </label>
                    <button className={css.loginBtn}>Submit</button>
                </form>
            </div>
        </div>
    )
}