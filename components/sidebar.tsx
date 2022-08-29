import Link from "next/link"

export default function Sidebar() {
    return (
     <nav className="flex w-72 h-full bg-pink-500">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/client">
              <a>Client</a>
            </Link>
          </li>
          <li>
            <Link href="/server">
              <a>Server</a>
            </Link>
          </li>
          <li>
            <Link href="/protected">
              <a>Protected</a>
            </Link>
          </li>
          <li>
            <Link href="/api-example">
              <a>API</a>
            </Link>
          </li>
          <li>
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          </li>
          <li>
            <Link href="/me">
              <a>Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    )
}