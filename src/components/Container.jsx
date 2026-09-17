const Container = ({ className, children }) => {
    return (
        <div className={`container mx-auto px-6 sm:px-0 ${className}`}>{children}</div>
    )
}

export default Container