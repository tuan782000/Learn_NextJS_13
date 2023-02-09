import Link from "next/link"

export default function Home() {
    return (
        <>  
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit aspernatur recusandae unde nemo molestias in quam incidunt voluptates officia optio, fugit suscipit accusantium neque quas nisi doloremque? Aliquam, laboriosam architecto?</p>
            <Link href="/about">Vist about page</Link>
        </>
    )
}