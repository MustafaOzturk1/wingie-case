import styles from '../styles/Layout.module.scss'
const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <h2>Wingie Case Mustafa Öztürk</h2>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout
