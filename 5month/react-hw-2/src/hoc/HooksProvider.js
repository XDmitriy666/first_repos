const HooksProvider = ({ children }) => {
    HooksProvider.displayName = 'HooksHOOOOK'

    return ( 
        <div className="WRAPPER HOOKS">
            {children}
        </div>
    );
}
 
export default HooksProvider;