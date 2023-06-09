import ReactDOM from 'react-dom'

const Backdrop = props => {

    return (
        <div onClick={props.onConfirm} className="fixed z-10 inset-0 bg-gray-800 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
            {props.children}
        </div>
    )
}

const Modal = props => {

    return (
        <Backdrop onConfirm={props.onConfirm}>
            <div className="bg-gray-200 rounded-lg flex flex-col">
                <div className="bg-indigo-500 rounded-tr-lg rounded-tl-lg text-white">
                    <p className="text-2xl font-bold text-center px-20 py-4">{props.title}</p>
                </div>
                <p className="px-4 py-2 text-lg text-left">{props.message}</p>
                <button onClick={props.onConfirm} className="bg-indigo-500 px-2 py-2 text-lg rounded w-20 my-4 self-end mr-10 text-white font-bold">Close</button>
            </div>
        </Backdrop>
    )
}

const ErrorModal = props => {

    return (
        <>
            {ReactDOM.createPortal(<Modal title={props.title} message={props.message} onConfirm={props.onConfirm} />,
                document.getElementById('error-modal'))}
        </>
    )

}


export default ErrorModal