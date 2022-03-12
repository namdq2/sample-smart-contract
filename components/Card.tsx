export function Card({children}: { children: JSX.Element | JSX.Element[] }) {
    return (
        <div
            style={{
                margin: '1rem',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '20rem',
                overflow: 'auto',
                border: '1px solid #eaeaea',
                borderRadius: '10px',
            }}
        >
            {children}
        </div>
    )
}
