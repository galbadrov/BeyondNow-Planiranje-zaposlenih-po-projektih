export function Header() {
    return (
        <div className="flex flex-row sticky top-0 p-5 text-2xl">
            <div className="text w-auto mr-4">User: </div>
            <div className="currentUser w-auto mr-5"> Current User</div>
            <hr className="w-2 h-10"></hr>
        </div>
    )
}