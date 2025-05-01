import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <div classname="layout">
            <Navbar />
            <main classname="main-content">
                {children}
            </main>
        </div>
    );
}


export default Layout;