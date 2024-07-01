import Link from "next/link"

const Page = () => {
return (
    <div>
        <h1>About Page</h1>
        <Link href="/about/company">Company Page</Link>
        <Link href="/">Return Home</Link>
    </div>
)
}

export default Page