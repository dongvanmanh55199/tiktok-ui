import Header from '~/components/Layout/components/Header';

function HeaderLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="Content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderLayout;
