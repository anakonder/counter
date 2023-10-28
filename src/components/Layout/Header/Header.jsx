import css from './Header.module.css'

export const Header = () => {
    return (
        <div className={css.header}>
            <button className={css.loginBtn} type='button'>Sign in</button>
        </div>
    )
}